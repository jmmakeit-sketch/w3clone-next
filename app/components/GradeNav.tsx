"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GRADES = [
  { label: "PP1", href: "/pp1", pathway: "Early Years", color: "#FF9800", subjects: ["Language Activities", "Mathematical Activities", "Environmental Activities", "Psychomotor & Creative", "Religious Education"] },
  { label: "PP2", href: "/pp2", pathway: "Early Years", color: "#FF9800", subjects: ["Language Activities", "Mathematical Activities", "Environmental Activities", "Psychomotor & Creative", "Religious Education"] },
  { label: "Grade 1", href: "/grade-1", pathway: "Lower Primary", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  { label: "Grade 2", href: "/grade-2", pathway: "Lower Primary", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  { label: "Grade 3", href: "/grade-3", pathway: "Lower Primary", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  { label: "Grade 4", href: "/grade-4", pathway: "Upper Primary", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
  { label: "Grade 5", href: "/grade-5", pathway: "Upper Primary", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
  { label: "Grade 6", href: "/grade-6", pathway: "Upper Primary", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
  { label: "Grade 7", href: "/grade-7", pathway: "Junior Secondary", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
  { label: "Grade 8", href: "/grade-8", pathway: "Junior Secondary", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
  { label: "Grade 9", href: "/grade-9", pathway: "Junior Secondary", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
  { label: "Grade 10", href: "/grade-10", pathway: "Senior Secondary", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture", "English", "Kiswahili", "Fine Art", "Music"] },
  { label: "Grade 11", href: "/grade-11", pathway: "Senior Secondary", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture", "English", "Kiswahili", "Fine Art", "Music"] },
  { label: "Grade 12", href: "/grade-12", pathway: "Senior Secondary", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture", "English", "Kiswahili", "Fine Art", "Music"] },
];

function slugify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

export default function GradeNav() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeGrade = GRADES.findIndex(g => pathname.startsWith(g.href));

  function handleMouseEnter(i: number) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenIndex(i);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpenIndex(null), 200);
  }

  function scrollRight() {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  }

  function scrollLeft() {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  }

  useEffect(() => {
    setOpenIndex(null);
  }, [pathname]);

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const openGrade = openIndex !== null ? GRADES[openIndex] : null;

  return (
    <>
      <div style={{ background: "#000", position: "sticky", top: "84px", zIndex: 99999, display: "flex", alignItems: "center", height: "48px" }}>
        <button onClick={scrollLeft} style={{ background: "#222", color: "#fff", border: "none", padding: "0 10px", height: "48px", cursor: "pointer", fontSize: "16px", flexShrink: 0, borderRight: "1px solid #333" }}>‹</button>
        <Link
          href="/"
          style={{ color: pathname === "/" ? "#04AA6D" : "#fff", padding: "0 14px", fontSize: "13px", fontWeight: 700, height: "48px", display: "flex", alignItems: "center", textDecoration: "none", borderRight: "1px solid #333", flexShrink: 0, borderBottom: pathname === "/" ? "3px solid #04AA6D" : "none" }}
        >
          HOME
        </Link>
        <div ref={scrollRef} style={{ display: "flex", alignItems: "center", overflowX: "auto", scrollbarWidth: "none", flex: 1, height: "48px" }}>
          {GRADES.map((g, i) => {
            const isActive = activeGrade === i;
            const isOpen = openIndex === i;
            return (
              <div
                key={g.href}
                style={{ flexShrink: 0, height: "48px", display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={g.href}
                  style={{
                    display: "flex", alignItems: "center", height: "48px", padding: "0 14px",
                    fontSize: "13px", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap",
                    color: isActive ? "#04AA6D" : "#fff",
                    background: isOpen && !isActive ? "#222" : "transparent",
                    borderBottom: isActive ? "3px solid #04AA6D" : "3px solid transparent",
                  }}
                >
                  {g.label}
                  <span style={{ fontSize: "9px", marginLeft: "4px", opacity: 0.7 }}>▾</span>
                </Link>
              </div>
            );
          })}
        </div>
        <button onClick={scrollRight} style={{ background: "#04AA6D", color: "#fff", border: "none", padding: "0 12px", height: "48px", cursor: "pointer", fontSize: "18px", fontWeight: 700, flexShrink: 0, borderLeft: "1px solid #333" }}>›</button>
      </div>

      {/* Dropdown — fixed at sidebar position, overlays everything */}
      {openGrade && (
        <div
          style={{ position: "fixed", left: 0, top: "132px", width: "228px", background: "#fff", borderTop: `3px solid ${openGrade.color}`, boxShadow: "4px 0 16px rgba(0,0,0,0.15)", zIndex: 999999, maxHeight: "calc(100vh - 132px)", overflowY: "auto" }}
          onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{ padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", background: openGrade.color, color: "#fff", fontWeight: 700, fontSize: "14px" }}>
            <span>{openGrade.label}</span>
            <span style={{ fontSize: "10px", background: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: "10px" }}>{openGrade.pathway}</span>
          </div>
          {openGrade.subjects.map(sub => (
            <Link
              key={sub}
              href={`${openGrade.href}/${slugify(sub)}`}
              onClick={() => setOpenIndex(null)}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 16px", fontSize: "14px", color: "#000", textDecoration: "none", borderBottom: "1px solid #f0f0f0" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#04AA6D";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
            >
              {sub} <span>›</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
