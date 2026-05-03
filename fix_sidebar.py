"""
fix_sidebar.py
==============
Removes the duplicate HOME_MENU, HOME_MENU_LINKS and isHomeFlowPath
definitions from Sidebar.tsx (they now live in lib/nav.ts).

Run from project root:
    python fix_sidebar.py
"""

import re, os

ROOT = os.getcwd()
SIDEBAR = os.path.join(ROOT, "app", "components", "Sidebar.tsx")

with open(SIDEBAR, "r", encoding="utf-8") as f:
    content = f.read()

# ── Remove the NOTE comment block ──────────────────────────────
content = content.replace(
    "\n// NOTE: HOME_MENU, HOME_MENU_LINKS and isHomeFlowPath are now imported\n"
    "// from lib/nav.ts above. You can delete the duplicate definitions below.\n",
    "\n"
)

# ── Remove duplicate const HOME_MENU = [ ... ]; ────────────────
# Match from "const HOME_MENU = [" to the closing "];" of that array
content = re.sub(
    r'\nconst HOME_MENU = \[.*?\n\];',
    '',
    content,
    count=1,
    flags=re.DOTALL
)

# ── Remove duplicate const HOME_MENU_LINKS = ... ───────────────
content = re.sub(
    r'\nconst HOME_MENU_LINKS = HOME_MENU\.filter\(.*?\).*?;',
    '',
    content,
    count=1,
    flags=re.DOTALL
)

# ── Remove duplicate function isHomeFlowPath ───────────────────
content = re.sub(
    r'\nfunction isHomeFlowPath\(.*?\n\}',
    '',
    content,
    count=1,
    flags=re.DOTALL
)

# ── Fix the import line — rename _isHomeFlowPathLib → isHomeFlowPath ──
# The sidebar still calls isHomeFlowPath() internally, so make sure
# it uses the imported one (we aliased it as _isHomeFlowPathLib, fix that)
content = content.replace(
    "import { HOME_MENU, HOME_MENU_LINKS, isHomeFlowPath as _isHomeFlowPathLib } from \"../../lib/nav\";",
    "import { HOME_MENU, HOME_MENU_LINKS, getPrevNext } from \"../../lib/nav\";"
)

# ── Replace all remaining calls to isHomeFlowPath with the imported version ──
# Since we removed the local function, we need to re-add a thin local wrapper
# OR just inline-import it properly. Simplest: import it directly.
content = content.replace(
    "import { HOME_MENU, HOME_MENU_LINKS, getPrevNext } from \"../../lib/nav\";",
    "import { HOME_MENU, HOME_MENU_LINKS, getPrevNext, isHomeFlowPath } from \"../../lib/nav\";"
)

# ── Also export isHomeFlowPath from lib/nav.ts if not already there ──
NAV_TS = os.path.join(ROOT, "lib", "nav.ts")
with open(NAV_TS, "r", encoding="utf-8") as f:
    nav_content = f.read()

if "export function isHomeFlowPath" not in nav_content:
    nav_content += """
/** Returns true for home-flow paths (no subject segment) */
export function isHomeFlowPath(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return true;
  if (parts.length === 1) return true;
  if (parts[0] === "pathway") return true;
  const staticPages = ["about","kicd","exercises","quizzes","certificates","references","how-to","signin"];
  if (staticPages.includes(parts[0])) return true;
  return false;
}
"""
    with open(NAV_TS, "w", encoding="utf-8") as f:
        f.write(nav_content)
    print("  ✅ added isHomeFlowPath export to lib/nav.ts")

with open(SIDEBAR, "w", encoding="utf-8") as f:
    f.write(content)

print("  ✅ cleaned up app/components/Sidebar.tsx")
print("\n✅  Done! Your dev server should auto-reload.\n")
