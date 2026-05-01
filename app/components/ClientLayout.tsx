"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GradeNav from "./GradeNav";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import TabBar from "./TabBar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const grade = parts[0];
  const subject = parts[1];

  return (
    <>
      <div className="topbar">
        <Link href="/" className="topbar-logo">
          <span className="topbar-logo-box">CBC</span>
          <span className="topbar-logo-text">Kenya Schools</span>
        </Link>
        <div className="topbar-right">
          <div className="topbar-search">
            <input placeholder="Search subjects, topics..." />
            <button className="topbar-search-btn">🔍</button>
          </div>
          <button className="topbar-btn">Sign In</button>
        </div>
      </div>

      <TabBar />
      <GradeNav />

      <div className="layout">
        <Sidebar grade={grade} subject={subject} />
        <main className="content">{children}</main>
        <RightSidebar grade={grade} subject={subject} />
      </div>

      <div className="footer">
        <p>CBC Kenya Schools &mdash; Free learning for every Kenyan child</p>
        <p style={{ marginTop: "6px", fontSize: "12px", color: "#aaa" }}>
          Aligned to the KICD CBC &bull; Grades PP1 &ndash; 12
        </p>
      </div>
    </>
  );
}
