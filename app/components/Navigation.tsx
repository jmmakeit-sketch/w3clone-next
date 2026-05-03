"use client";
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

// ── PrevNext (manual) ─────────────────────────────────────────
interface NavLink { label: string; href: string; }

export function PrevNext({ prev, next }: { prev?: NavLink; next?: NavLink }) {
  return (
    <div className="prev-next">
      {prev ? <Link href={prev.href} className="prev">{prev.label}</Link> : <span />}
      {next ? <Link href={next.href} className="next">{next.label}</Link> : <span />}
    </div>
  );
}

// ── SmartPrevNext — HOME FLOW ONLY ────────────────────────────
// Use this on home-flow pages: /, /about, /kicd, /pathway/*, grade overviews
// For grade-flow pages (subject/topic), the Sidebar handles prev/next.
export function SmartPrevNext({ position = "bottom" }: { position?: "top" | "bottom" }) {
  const pathname = usePathname();
  const { prev, next } = getPrevNext(pathname);
  const style = position === "top"
    ? { marginTop: 0, paddingTop: 0, borderTop: "none", marginBottom: "24px" }
    : { marginTop: "32px" };
  return (
    <div className="prev-next" style={style}>
      {prev ? <Link href={prev.href} className="prev">{prev.label}</Link> : <span />}
      {next ? <Link href={next.href} className="next">{next.label}</Link> : <span />}
    </div>
  );
}
