"""
fix_navigation2.py
==================
Fixes Navigation.tsx — moves "use client" to the top and cleans up
the duplicate import of Link and usePathname.

Run from project root:
    python fix_navigation2.py
"""

import os

ROOT = os.getcwd()
NAV = os.path.join(ROOT, "app", "components", "Navigation.tsx")

CORRECT_NAV = '''"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPrevNext } from "../../lib/nav";

// ── Breadcrumb ────────────────────────────────────────────────
interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="breadcrumb">
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {i > 0 && <span className="breadcrumb-sep">›</span>}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

// ── PrevNext (manual — pass explicit prev/next links) ─────────
interface NavLink {
  label: string;
  href: string;
}

export function PrevNext({ prev, next }: { prev?: NavLink; next?: NavLink }) {
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

// ── SmartPrevNext (automatic — reads current URL) ─────────────
// Drop-in replacement for hardcoded prev/next blocks on every page.
// Uses the same HOME_MENU_LINKS source of truth as the sidebar.
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

with open(NAV, "w", encoding="utf-8") as f:
    f.write(CORRECT_NAV)

print("  ✅ Navigation.tsx rewritten cleanly")
print("\n✅  Done! Check your dev server.\n")
