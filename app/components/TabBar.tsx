"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { label: "Tutorials", href: "/", key: "tutorials" },
  { label: "References", href: "/references", key: "references" },
  { label: "Exercises", href: "/exercises", key: "exercises" },
  { label: "Quizzes", href: "/quizzes", key: "quizzes" },
  { label: "Certificates", href: "/certificates", key: "certificates" },
];

export default function TabBar() {
  const pathname = usePathname();
  const activeKey =
    pathname.startsWith("/references") ? "references" :
    pathname.startsWith("/exercises") ? "exercises" :
    pathname.startsWith("/quizzes") ? "quizzes" :
    pathname.startsWith("/certificates") ? "certificates" : "tutorials";

  return (
    <div className="tabbar">
      {TABS.map((tab, i) => (
        <span key={tab.key} style={{ display: "flex", alignItems: "center" }}>
          {i > 0 && <div className="tabbar-divider" />}
          <Link href={tab.href} className={`tabbar-btn${activeKey === tab.key ? " active" : ""}`}>
            {tab.label}
          </Link>
        </span>
      ))}
    </div>
  );
}
