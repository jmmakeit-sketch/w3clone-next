"""
fix_spacing.py
==============
Adds proper margin to SmartPrevNext so it doesn't overlap content.
Run from project root:
    python fix_spacing.py
"""

import os

ROOT = os.getcwd()
NAV = os.path.join(ROOT, "app", "components", "Navigation.tsx")

with open(NAV, "r", encoding="utf-8") as f:
    content = f.read()

# Add marginBottom to the top SmartPrevNext div and marginTop to bottom one
# We'll wrap SmartPrevNext output in a div with margin
OLD = '''export function SmartPrevNext() {
  const pathname = usePathname();
  const { prev, next } = getPrevNext(pathname);
  return (
    <div className="prev-next">'''

NEW = '''export function SmartPrevNext({ position = "bottom" }: { position?: "top" | "bottom" }) {
  const pathname = usePathname();
  const { prev, next } = getPrevNext(pathname);
  const style = position === "top"
    ? { marginTop: 0, paddingTop: 0, borderTop: "none", marginBottom: "24px" }
    : { marginTop: "32px" };
  return (
    <div className="prev-next" style={style}>'''

if OLD in content:
    content = content.replace(OLD, NEW)
    with open(NAV, "w", encoding="utf-8") as f:
        f.write(content)
    print("  ✅ SmartPrevNext updated with position prop")
else:
    print("  ⚠️  Pattern not found — Navigation.tsx may already be updated")

# Now update all pages — add position="top" to the FIRST SmartPrevNext
# on pages that have it at the top (about, kicd, upper-primary, lower-primary)
import re

PAGES_WITH_TOP = [
    "app/about/page.tsx",
    "app/kicd/page.tsx",
    "app/pathway/upper-primary/page.tsx",
    "app/pathway/lower-primary/page.tsx",
]

for page in PAGES_WITH_TOP:
    full = os.path.join(ROOT, page)
    if not os.path.exists(full):
        continue
    with open(full, "r", encoding="utf-8") as f:
        text = f.read()
    # Replace only the FIRST occurrence with position="top"
    new_text = text.replace("<SmartPrevNext />", '<SmartPrevNext position="top" />', 1)
    if new_text != text:
        with open(full, "w", encoding="utf-8") as f:
            f.write(new_text)
        print(f"  ✅ {page} — first SmartPrevNext set to position=top")

print("\n✅  Done!\n")
