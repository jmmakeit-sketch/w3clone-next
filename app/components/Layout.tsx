"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      
      {/* TOPBAR */}
      <div className="topbar">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ background: "#04AA6D", color: "#fff", padding: "5px 8px", fontWeight: "bold" }}>
            W3
          </div>
          <span>Schools</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <input
            placeholder="Search..."
            style={{
              padding: "6px",
              border: "1px solid #ccc",
              borderRadius: "3px"
            }}
          />
          <button style={{
            background: "#04AA6D",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: "4px"
          }}>
            Sign In
          </button>
        </div>
      </div>

      {/* BLACK BAR */}
      <div className="blackbar">
        <span className="active">HTML</span>
        <span>CSS</span>
        <span>JAVASCRIPT</span>
        <span>SQL</span>
        <span>PYTHON</span>
      </div>

      <div className="layout">
        
        {/* SIDEBAR */}
        <aside className="sidebar">
          <h3>HTML Tutorial</h3>

          <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          <Link href="/html-introduction" className={pathname === "/html-introduction" ? "active" : ""}>
            HTML Introduction
          </Link>
          <Link href="/html-editors" className={pathname === "/html-editors" ? "active" : ""}>
            HTML Editors
          </Link>
        </aside>

        {/* CONTENT */}
        <main className="content">
          {children}
        </main>

      </div>
    </div>
  );
}
