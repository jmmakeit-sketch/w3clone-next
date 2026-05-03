"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const GRADES = [
  { label: "PP1",      href: "/pp1",      color: "#FF9800", pathway: "Early Years",      subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Psychomotor and Creative Activities","Religious Education"] },
  { label: "PP2",      href: "/pp2",      color: "#FF9800", pathway: "Early Years",      subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Psychomotor and Creative Activities","Religious Education"] },
  { label: "Grade 1",  href: "/grade-1",  color: "#2196F3", pathway: "Lower Primary",    subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  { label: "Grade 2",  href: "/grade-2",  color: "#2196F3", pathway: "Lower Primary",    subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  { label: "Grade 3",  href: "/grade-3",  color: "#2196F3", pathway: "Lower Primary",    subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  { label: "Grade 4",  href: "/grade-4",  color: "#9C27B0", pathway: "Upper Primary",    subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  { label: "Grade 5",  href: "/grade-5",  color: "#9C27B0", pathway: "Upper Primary",    subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  { label: "Grade 6",  href: "/grade-6",  color: "#9C27B0", pathway: "Upper Primary",    subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  { label: "Grade 7",  href: "/grade-7",  color: "#F44336", pathway: "Junior Secondary", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  { label: "Grade 8",  href: "/grade-8",  color: "#F44336", pathway: "Junior Secondary", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  { label: "Grade 9",  href: "/grade-9",  color: "#F44336", pathway: "Junior Secondary", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  { label: "Grade 10", href: "/grade-10", color: "#607D8B", pathway: "Senior Secondary", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
  { label: "Grade 11", href: "/grade-11", color: "#607D8B", pathway: "Senior Secondary", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
  { label: "Grade 12", href: "/grade-12", color: "#607D8B", pathway: "Senior Secondary", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
];

function slugify(t: string) {
  return t.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

export default function GradeNav() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close on any click outside the nav bar + dropdown
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on route change
  useEffect(() => { setOpenIndex(null); }, [pathname]);

  function handleMouseEnter(i: number) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenIndex(null), 180);
  }

  function handleDropdownMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  function handleDropdownMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenIndex(null), 180);
  }

  const activeGradeIndex = GRADES.findIndex(g => pathname === g.href || pathname.startsWith(g.href + "/"));
  const openGrade = openIndex !== null ? GRADES[openIndex] : null;

  return (
    <div ref={navRef}>
      {/* Black grade bar */}
      <div style={{ background: "#000", position: "sticky", top: "84px", zIndex: 2000, display: "flex", alignItems: "center", height: "40px", borderBottom: "1px solid #333" }}>
        <button onClick={() => scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" })}
          style={{ background: "#222", color: "#fff", border: "none", padding: "0 10px", height: "40px", cursor: "pointer", fontSize: "16px", flexShrink: 0 }}>
          &#8249;
        </button>

        <Link href="/"
          onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenIndex(null); }}
          style={{ color: pathname === "/" ? "#04AA6D" : "#ccc", padding: "0 14px", fontSize: "13px", fontWeight: 700, height: "40px", display: "flex", alignItems: "center", textDecoration: "none", borderRight: "1px solid #333", flexShrink: 0, borderBottom: pathname === "/" ? "3px solid #04AA6D" : "3px solid transparent", background: "#000" }}>
          HOME
        </Link>

        <div ref={scrollRef} style={{ display: "flex", alignItems: "center", overflowX: "auto", scrollbarWidth: "none", flex: 1, height: "40px" }}>
          {GRADES.map((g, i) => {
            const isUrlActive = activeGradeIndex === i;
            const isOpen = openIndex === i;
            return (
              <button key={g.href}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{ flexShrink: 0, height: "40px", padding: "0 14px", fontSize: "13px", fontWeight: 700, whiteSpace: "nowrap", cursor: "pointer", border: "none", fontFamily: "Verdana, sans-serif", color: "#fff", background: isUrlActive ? "#04AA6D" : isOpen ? "#333" : "#000", borderBottom: isUrlActive ? "3px solid #038a58" : isOpen ? "3px solid #04AA6D" : "3px solid transparent", transition: "background 0.12s" }}>
                {g.label} <span style={{ fontSize: "9px", opacity: 0.7 }}>&#9660;</span>
              </button>
            );
          })}
        </div>

        <button onClick={() => scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" })}
          style={{ background: "#04AA6D", color: "#fff", border: "none", padding: "0 12px", height: "40px", cursor: "pointer", fontSize: "16px", flexShrink: 0 }}>
          &#8250;
        </button>
      </div>

      {/* Dropdown — floats BELOW the black bar, does NOT overlap left sidebar */}
      {openGrade && (
        <>
          {/* Invisible full-screen backdrop — click anywhere to close */}
          <div
            style={{ position: "fixed", inset: 0, zIndex: 1499 }}
            onClick={() => setOpenIndex(null)}
          />
          <div
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            style={{
              position: "fixed",
              left: "220px",       // sits AFTER the left sidebar
              top: "124px",        // just below the black bar
              minWidth: "260px",
              maxWidth: "320px",
              background: "#fff",
              borderTop: `3px solid ${openGrade.color}`,
              border: `1px solid #ddd`,
              borderTop: `3px solid ${openGrade.color}`,
              zIndex: 1500,
              maxHeight: "calc(100vh - 130px)",
              overflowY: "auto",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              borderRadius: "0 0 4px 4px",
            }}>
            {/* Grade header */}
            <Link href={openGrade.href} onClick={() => setOpenIndex(null)}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: openGrade.color, color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "15px" }}>
              <span>{openGrade.label} Overview</span>
              <span style={{ fontSize: "10px", background: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: "10px" }}>{openGrade.pathway}</span>
            </Link>
            <div style={{ padding: "6px 16px 4px", fontSize: "10px", color: "#999", textTransform: "uppercase", letterSpacing: "0.8px", borderBottom: "1px solid #eee" }}>
              Select a subject
            </div>
            {openGrade.subjects.map(sub => (
              <Link key={sub} href={`${openGrade.href}/${slugify(sub)}`}
                onClick={() => setOpenIndex(null)}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", fontSize: "14px", color: "#000", textDecoration: "none", borderBottom: "1px solid #f0f0f0", background: "#fff" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = openGrade.color; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.color = "#000"; }}>
                {sub} <span style={{ fontSize: "12px" }}>&#8250;</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

