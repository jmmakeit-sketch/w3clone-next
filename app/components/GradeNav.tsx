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

function slugify(t: string) {
  return t.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

export const GradeNavContext = {
  openIndex: null as number | null,
};

export default function GradeNav({ onDropdownChange }: { onDropdownChange?: (open: boolean) => void }) {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeGrade = GRADES.findIndex(g => pathname.startsWith(g.href));

  function openDropdown(i: number) {
    setOpenIndex(i);
    onDropdownChange?.(true);
    window.dispatchEvent(new CustomEvent("gradenav:open", { detail: i }));
  }

  function close() {
    setOpenIndex(null);
    onDropdownChange?.(false);
    window.dispatchEvent(new CustomEvent("gradenav:open", { detail: null }));
  }

  useEffect(() => { close(); }, [pathname]);

  const openGrade = openIndex !== null ? GRADES[openIndex] : null;

  return (
    <>
      {/* Navbar */}
      <div style={{ background: "#000", position: "sticky", top: "84px", zIndex: 9999, display: "flex", alignItems: "center", height: "48px" }}>
        <button onClick={() => scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" })}
          style={{ background: "#222", color: "#fff", border: "none", padding: "0 12px", height: "48px", cursor: "pointer", fontSize: "18px", flexShrink: 0, borderRight: "1px solid #444" }}>
          &#8249;
        </button>
        <Link href="/" 
          style={{ color: pathname === "/" ? "#04AA6D" : "#ccc", padding: "0 16px", fontSize: "13px", fontWeight: 700, height: "48px", display: "flex", alignItems: "center", textDecoration: "none", borderRight: "1px solid #444", flexShrink: 0, background: "#000", borderBottom: pathname === "/" ? "3px solid #04AA6D" : "3px solid transparent" }}>
          HOME
        </Link>
        <div ref={scrollRef} style={{ display: "flex", alignItems: "center", overflowX: "auto", scrollbarWidth: "none", flex: 1, height: "48px" }}>
          {GRADES.map((g, i) => {
            const isActive = activeGrade === i;
            const isOpen = openIndex === i;
            const highlight = isActive || isOpen;
            return (
              <button key={g.href}
                onClick={() => openIndex === i ? close() : openDropdown(i)}
                onMouseEnter={() => { if (openIndex !== null && openIndex !== i) openDropdown(i); }}
                style={{
                  flexShrink: 0, height: "48px", padding: "0 15px",
                  fontSize: "13px", fontWeight: 700, whiteSpace: "nowrap",
                  cursor: "pointer", border: "none", fontFamily: "Verdana, sans-serif",
                  color: "#fff",
                  background: highlight ? "#04AA6D" : "#000",
                  borderBottom: highlight ? "3px solid #038a58" : "3px solid transparent",
                  transition: "background 0.15s",
                }}>
                {g.label} <span style={{ fontSize: "9px", opacity: 0.7 }}>&#9660;</span>
              </button>
            );
          })}
        </div>
        <button onClick={() => scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" })}
          style={{ background: "#04AA6D", color: "#fff", border: "none", padding: "0 14px", height: "48px", cursor: "pointer", fontSize: "18px", fontWeight: 700, flexShrink: 0, borderLeft: "1px solid #444" }}>
          &#8250;
        </button>
      </div>

      {/* Dropdown AS SIDEBAR ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â not floating, sits in normal flow via ClientLayout */}
      {openGrade && (
        <>
          {/* Click outside closes */}
          <div  style={{ position: "fixed", inset: 0, zIndex: 9990, background: "transparent" }} />
          <div style={{ position: "fixed", left: 0, top: "132px", width: "228px", background: "#fff", borderTop: `3px solid ${openGrade.color}`, borderRight: "1px solid #ddd", zIndex: 9998, height: "calc(100vh - 132px)", overflowY: "auto" }}>
            {/* Header */}
            <div style={{ padding: "11px 16px", background: openGrade.color, color: "#fff", fontWeight: 700, fontSize: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>{openGrade.label}</span>
              <span style={{ fontSize: "10px", background: "rgba(255,255,255,0.25)", padding: "2px 9px", borderRadius: "10px" }}>{openGrade.pathway}</span>
            </div>
            {/* Subject links ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â light grey bg, hover green */}
            {openGrade.subjects.map(sub => (
              <Link key={sub}
                href={`${openGrade.href}/${slugify(sub)}`}
                
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 16px", fontSize: "14px", color: "#000", textDecoration: "none", borderBottom: "1px solid #ddd", background: "#fff" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#04AA6D"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#f1f1f1"; (e.currentTarget as HTMLElement).style.color = "#000"; }}>
                {sub} <span style={{ color: "#999" }}>&#8250;</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}