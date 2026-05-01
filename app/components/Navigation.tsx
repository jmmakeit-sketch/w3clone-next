import Link from "next/link";

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
