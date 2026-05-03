"""
fix_sidebar2.py
===============
Cleanly rewrites Sidebar.tsx — removes ALL leftover fragments from
the duplicate HOME_MENU / HOME_MENU_LINKS / isHomeFlowPath definitions.

Run from project root:
    python fix_sidebar2.py
"""

import os

ROOT = os.getcwd()
SIDEBAR = os.path.join(ROOT, "app", "components", "Sidebar.tsx")

with open(SIDEBAR, "r", encoding="utf-8") as f:
    lines = f.readlines()

# ── Find the line that starts the clean "export default function Sidebar"
# Everything from imports up to that function is what we want to keep/fix.
# Strategy: rebuild the file in two parts:
#   PART A: imports (first ~10 lines)
#   PART B: GRADE_SUBJECTS constant
#   PART C: slugify + isActive helpers
#   PART D: export default function Sidebar(...) to end of file

content = "".join(lines)

# ── Step 1: Fix the import block ──────────────────────────────
# Remove any broken leftover fragment lines like:
#   href: string; color?: string }[];
# These are remnants of the inline HOME_MENU_LINKS type annotation

cleaned_lines = []
skip = False
for line in lines:
    stripped = line.strip()

    # Skip leftover type fragment lines
    if stripped.startswith("href: string;") or stripped.startswith("label: string; href:"):
        continue

    # Skip NOTE comment lines
    if "// NOTE: HOME_MENU" in line or "// from lib/nav.ts above" in line:
        continue

    # Skip any remaining inline HOME_MENU = [ ... ] block
    if stripped.startswith("const HOME_MENU = ["):
        skip = True
        continue
    if skip:
        if stripped == "];":
            skip = False
        continue

    # Skip inline HOME_MENU_LINKS line
    if stripped.startswith("const HOME_MENU_LINKS = HOME_MENU.filter"):
        continue

    # Skip inline isHomeFlowPath function
    if stripped.startswith("function isHomeFlowPath("):
        skip = True
        continue
    if skip:
        if stripped == "}":
            skip = False
        continue

    cleaned_lines.append(line)

# ── Step 2: Fix the import from lib/nav ───────────────────────
result = "".join(cleaned_lines)

# Ensure the import is clean and correct
old_imports = [
    'import { HOME_MENU, HOME_MENU_LINKS, isHomeFlowPath as _isHomeFlowPathLib } from "../../lib/nav";',
    'import { HOME_MENU, HOME_MENU_LINKS, getPrevNext } from "../../lib/nav";',
    'import { HOME_MENU, HOME_MENU_LINKS, getPrevNext, isHomeFlowPath } from "../../lib/nav";',
]
correct_import = 'import { HOME_MENU, HOME_MENU_LINKS, isHomeFlowPath } from "../../lib/nav";'

for old in old_imports:
    if old in result:
        result = result.replace(old, correct_import)
        break
else:
    # If none found, add it after the supabase import
    result = result.replace(
        'import { supabase } from "../../lib/supabase";',
        'import { supabase } from "../../lib/supabase";\n' + correct_import
    )

# ── Step 3: Remove any double blank lines ──────────────────────
import re
result = re.sub(r'\n{3,}', '\n\n', result)

with open(SIDEBAR, "w", encoding="utf-8") as f:
    f.write(result)

print("  ✅ Sidebar.tsx cleaned successfully")
print("\n✅  Done! Check your dev server.\n")
