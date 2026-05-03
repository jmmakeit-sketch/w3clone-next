"""
fix_navigation.py
=================
Run from your project root:
    python fix_navigation.py

What this does:
1. Creates  lib/nav.ts          — single source of truth for HOME_MENU_LINKS
2. Updates  app/components/Sidebar.tsx     — imports from lib/nav.ts
3. Updates  app/components/Navigation.tsx  — adds SmartPrevNext component
4. Patches  every page that has a hardcoded prev-next block
            → replaces it with <SmartPrevNext />
"""

import re, os, sys

ROOT = os.getcwd()

def write(path, content):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  ✅ wrote  {path}")

def read(path):
    full = os.path.join(ROOT, path)
    with open(full, "r", encoding="utf-8") as f:
        return f.read()

def patch(path, old, new):
    full = os.path.join(ROOT, path)
    content = read(path)
    if old not in content:
        print(f"  ⚠️  skip   {path}  (pattern not found)")
        return
    write(path, content.replace(old, new, 1))

# ─────────────────────────────────────────────────────────────
# 1.  lib/nav.ts  — shared navigation data
# ─────────────────────────────────────────────────────────────
NAV_TS = """\
// lib/nav.ts
// Single source of truth for the home-flow navigation order.
// Used by Sidebar.tsx AND SmartPrevNext in Navigation.tsx.

export interface NavItem {
  label: string;
  href: string;
  color?: string;
}

export interface NavSection {
  section: string;
  color?: string;
}

export type MenuItem = NavItem | NavSection;

export const HOME_MENU: MenuItem[] = [
  { label: "CBC Kenya Schools Home", href: "/" },
  { label: "About CBC / CBE",        href: "/about" },
  { label: "KICD Framework",         href: "/kicd" },

  { section: "Early Years", color: "#FF9800" },
  { label: "Early Years Overview",   href: "/pathway/early-years",      color: "#FF9800" },
  { label: "PP1",                    href: "/pp1",                       color: "#FF9800" },
  { label: "PP2",                    href: "/pp2",                       color: "#FF9800" },

  { section: "Lower Primary", color: "#2196F3" },
  { label: "Lower Primary Overview", href: "/pathway/lower-primary",     color: "#2196F3" },
  { label: "Grade 1",                href: "/grade-1",                   color: "#2196F3" },
  { label: "Grade 2",                href: "/grade-2",                   color: "#2196F3" },
  { label: "Grade 3",                href: "/grade-3",                   color: "#2196F3" },

  { section: "Upper Primary", color: "#9C27B0" },
  { label: "Upper Primary Overview", href: "/pathway/upper-primary",     color: "#9C27B0" },
  { label: "Grade 4",                href: "/grade-4",                   color: "#9C27B0" },
  { label: "Grade 5",                href: "/grade-5",                   color: "#9C27B0" },
  { label: "Grade 6 (KPSEA)",        href: "/grade-6",                   color: "#9C27B0" },

  { section: "Junior Secondary", color: "#F44336" },
  { label: "Junior Secondary Overview", href: "/pathway/junior-secondary", color: "#F44336" },
  { label: "Grade 7",                href: "/grade-7",                   color: "#F44336" },
  { label: "Grade 8",                href: "/grade-8",                   color: "#F44336" },
  { label: "Grade 9 (KILEA)",        href: "/grade-9",                   color: "#F44336" },

  { section: "Senior Secondary", color: "#607D8B" },
  { label: "Senior Secondary Overview", href: "/pathway/senior-secondary", color: "#607D8B" },
  { label: "Grade 10",               href: "/grade-10",                  color: "#607D8B" },
  { label: "Grade 11",               href: "/grade-11",                  color: "#607D8B" },
  { label: "Grade 12 (KSCE)",        href: "/grade-12",                  color: "#607D8B" },

  { section: "Senior Pathways", color: "#607D8B" },
  { label: "STEM Pathway",           href: "/pathway/senior-stem",       color: "#04AA6D" },
  { label: "Arts & Sports Pathway",  href: "/pathway/senior-arts",       color: "#E91E63" },
  { label: "Social Sciences Pathway",href: "/pathway/senior-social",     color: "#795548" },

  { section: "Assessment" },
  { label: "Exercises",              href: "/exercises" },
  { label: "Quizzes",                href: "/quizzes" },
  { label: "Certificates",           href: "/certificates" },
  { label: "References",             href: "/references" },
];

// Only the items that have hrefs (used for prev/next lookup)
export const HOME_MENU_LINKS: NavItem[] = HOME_MENU.filter(
  (i): i is NavItem => "href" in i
);

/** Return { prev, next } for any given pathname */
export function getPrevNext(pathname: string): { prev: NavItem | null; next: NavItem | null } {
  const idx = HOME_MENU_LINKS.findIndex(i => i.href === pathname);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? HOME_MENU_LINKS[idx - 1] : null,
    next: idx < HOME_MENU_LINKS.length - 1 ? HOME_MENU_LINKS[idx + 1] : null,
  };
}
"""

# ─────────────────────────────────────────────────────────────
# 2.  Navigation.tsx  — add SmartPrevNext (append to existing file)
# ─────────────────────────────────────────────────────────────
SMART_PREV_NEXT_ADDITION = '''
// ─── SmartPrevNext ───────────────────────────────────────────
// Drop-in replacement for hardcoded prev/next blocks on every page.
// It reads the current URL and computes prev/next from HOME_MENU_LINKS
// — the same source of truth the sidebar uses.
"use client";
import { usePathname } from "next/navigation";
import { getPrevNext } from "../../lib/nav";

export function SmartPrevNext() {
  const pathname = usePathname();
  const { prev, next } = getPrevNext(pathname);
  return (
    <div className="prev-next">
      {prev ? (
        <Link href={prev.href} className="prev">{prev.label}</Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="next">{next.label}</Link>
      ) : (
        <span />
      )}
    </div>
  );
}
'''

# ─────────────────────────────────────────────────────────────
# 3.  Pages to patch
#     Each entry: (file_path, old_import_line, pages_prev_next_block)
#     We do two replacements per file:
#       a) add SmartPrevNext to the import from Navigation (if any)
#       b) replace every hardcoded prev-next div
# ─────────────────────────────────────────────────────────────

# Regex: match the whole <div className="prev-next">...</div> block (including top-of-page ones)
PREV_NEXT_PATTERN = re.compile(
    r'<div className="prev-next"[^>]*>.*?</div>',
    re.DOTALL
)

SMART_COMPONENT = '<SmartPrevNext />'

IMPORT_SMART = 'import { SmartPrevNext } from "../components/Navigation";\n'
IMPORT_SMART_DEEP = 'import { SmartPrevNext } from "../../components/Navigation";\n'

# Files that need patching and their import depth
PAGES = [
    # (path,  import_depth)  depth=1 → "../components",  depth=2 → "../../components"
    ("app/about/page.tsx",                        1),
    ("app/kicd/page.tsx",                         1),
    ("app/exercises/page.tsx",                    1),
    ("app/quizzes/page.tsx",                      1),
    ("app/certificates/page.tsx",                 1),
    ("app/references/page.tsx",                   1),
    ("app/how-to/page.tsx",                       1),
    ("app/pathway/early-years/page.tsx",          2),
    ("app/pathway/lower-primary/page.tsx",        2),
    ("app/pathway/upper-primary/page.tsx",        2),
    ("app/pathway/junior-secondary/page.tsx",     2),
    ("app/pathway/senior-secondary/page.tsx",     2),
    ("app/pathway/senior-stem/page.tsx",          2),
    ("app/pathway/senior-arts/page.tsx",          2),
    ("app/pathway/senior-social/page.tsx",        2),
    ("app/[grade]/page.tsx",                      1),
]

# ─────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────
print("\n🔧  fix_navigation.py — CBC Kenya Schools\n")

# Step 1 — write lib/nav.ts
write("lib/nav.ts", NAV_TS)

# Step 2 — update Sidebar.tsx to import from lib/nav
sidebar_path = "app/components/Sidebar.tsx"
sidebar = read(sidebar_path)

old_home_menu_block_start = "const GRADE_SUBJECTS"

# Replace the inline HOME_MENU / HOME_MENU_LINKS / isHomeFlowPath with imports
OLD_SIDEBAR_IMPORT = 'import { supabase } from "../../lib/supabase";'
NEW_SIDEBAR_IMPORT = ('import { supabase } from "../../lib/supabase";\n'
                      'import { HOME_MENU, HOME_MENU_LINKS, isHomeFlowPath as _isHomeFlowPathLib } from "../../lib/nav";\n')

if OLD_SIDEBAR_IMPORT in sidebar:
    sidebar = sidebar.replace(OLD_SIDEBAR_IMPORT, NEW_SIDEBAR_IMPORT, 1)

# Remove the inline HOME_MENU, HOME_MENU_LINKS, isHomeFlowPath definitions
# We'll mark them with a comment so the developer can clean up manually
# (safer than regex-removing large blocks)
SIDEBAR_NOTE = (
    "\n// NOTE: HOME_MENU, HOME_MENU_LINKS and isHomeFlowPath are now imported\n"
    "// from lib/nav.ts above. You can delete the duplicate definitions below.\n"
)
if "const HOME_MENU = [" in sidebar and SIDEBAR_NOTE not in sidebar:
    sidebar = sidebar.replace("const HOME_MENU = [", SIDEBAR_NOTE + "const HOME_MENU = [", 1)

full_sidebar = os.path.join(ROOT, sidebar_path)
with open(full_sidebar, "w", encoding="utf-8") as f:
    f.write(sidebar)
print(f"  ✅ updated {sidebar_path}")

# Step 3 — append SmartPrevNext to Navigation.tsx
nav_path = "app/components/Navigation.tsx"
nav = read(nav_path)
if "SmartPrevNext" not in nav:
    with open(os.path.join(ROOT, nav_path), "a", encoding="utf-8") as f:
        f.write(SMART_PREV_NEXT_ADDITION)
    print(f"  ✅ updated {nav_path}  (SmartPrevNext appended)")
else:
    print(f"  ℹ️  skip   {nav_path}  (SmartPrevNext already present)")

# Step 4 — patch every page
print("\n  Patching pages...\n")
for page_path, depth in PAGES:
    full = os.path.join(ROOT, page_path)
    if not os.path.exists(full):
        print(f"  ⚠️  missing {page_path}")
        continue

    content = read(page_path)
    imp = IMPORT_SMART if depth == 1 else IMPORT_SMART_DEEP

    # Add SmartPrevNext import after the first `import Link` line
    if "SmartPrevNext" not in content:
        content = content.replace('import Link from "next/link";\n',
                                  'import Link from "next/link";\n' + imp, 1)

    # Replace ALL hardcoded prev-next divs with <SmartPrevNext />
    new_content, count = PREV_NEXT_PATTERN.subn(SMART_COMPONENT, content)

    if count == 0:
        print(f"  ⚠️  no prev-next found in {page_path}")
        continue

    with open(full, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"  ✅ patched {page_path}  ({count} block(s) replaced)")

print("\n✅  Done!  Run `npm run dev` to verify.\n")
print("   Next step: open app/components/Sidebar.tsx and delete the")
print("   duplicate HOME_MENU / HOME_MENU_LINKS / isHomeFlowPath")
print("   definitions (they are now imported from lib/nav.ts).\n")
