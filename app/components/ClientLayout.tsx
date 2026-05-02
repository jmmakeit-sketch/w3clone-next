"use client";
import Link from "next/link";
import TabBar from "./TabBar";
import GradeNav from "./GradeNav";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Derive grade and subject purely from URL — nothing else
  const segments = pathname.split("/").filter(Boolean);
  const grade   = segments[0] ?? null;   // e.g. "grade-4" | "pp1" | null
  const subject = segments[1] ?? null;   // e.g. "mathematics" | null

  return (
    <>
      {/* ── TOPBAR ── */}
      <div className="topbar">
        <Link href="/" className="topbar-logo">
          <span className="topbar-logo-box">CBC</span>
          <span className="topbar-logo-text">Kenya Schools</span>
        </Link>
        <div className="topbar-right">
          <div className="topbar-search">
            <input placeholder="Search subjects, topics..." />
            <button className="topbar-search-btn">&#128269;</button>
          </div>
          <button className="topbar-btn">Sign In</button>
        </div>
      </div>

      {/* ── TAB BAR ── */}
      <TabBar />

      {/* ── GRADE NAV (black bar) ── */}
      <GradeNav />

      {/* ── 3-COLUMN LAYOUT ── */}
      <div className="layout">
        <Sidebar grade={grade} subject={subject} />
        <main className="content">{children}</main>
        <RightSidebar grade={grade} subject={subject} />
      </div>

      {/* ── FOOTER ── */}
      <div className="footer">
        <p>CBC Kenya Schools &mdash; Free learning for every Kenyan child</p>
        <p style={{ marginTop: "6px", fontSize: "12px", color: "#aaa" }}>
          Aligned to the <a href="https://kicd.ac.ke" target="_blank" rel="noreferrer">KICD</a> CBC &bull; Grades PP1 &ndash; 12
        </p>
      </div>
    </>
  );
}