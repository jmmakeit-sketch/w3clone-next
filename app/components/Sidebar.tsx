"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const GRADE_SUBJECTS: Record<string, { color: string; label: string; pathway: string; subjects: string[] }> = {
  "pp1":      { color: "#FF9800", label: "PP1",      pathway: "Early Years",      subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Psychomotor and Creative Activities","Religious Education"] },
  "pp2":      { color: "#FF9800", label: "PP2",      pathway: "Early Years",      subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Psychomotor and Creative Activities","Religious Education"] },
  "grade-1":  { color: "#2196F3", label: "Grade 1",  pathway: "Lower Primary",    subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  "grade-2":  { color: "#2196F3", label: "Grade 2",  pathway: "Lower Primary",    subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  "grade-3":  { color: "#2196F3", label: "Grade 3",  pathway: "Lower Primary",    subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  "grade-4":  { color: "#9C27B0", label: "Grade 4",  pathway: "Upper Primary",    subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  "grade-5":  { color: "#9C27B0", label: "Grade 5",  pathway: "Upper Primary",    subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  "grade-6":  { color: "#9C27B0", label: "Grade 6",  pathway: "Upper Primary",    subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  "grade-7":  { color: "#F44336", label: "Grade 7",  pathway: "Junior Secondary", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  "grade-8":  { color: "#F44336", label: "Grade 8",  pathway: "Junior Secondary", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  "grade-9":  { color: "#F44336", label: "Grade 9",  pathway: "Junior Secondary", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  "grade-10": { color: "#607D8B", label: "Grade 10", pathway: "Senior Secondary", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
  "grade-11": { color: "#607D8B", label: "Grade 11", pathway: "Senior Secondary", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
  "grade-12": { color: "#607D8B", label: "Grade 12", pathway: "Senior Secondary", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
};

function slugify(t: string) {
  return t.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href;
}

// FULL home menu — includes grade overview pages (pp1, pp2, grade-1..12)
// These are the "home flow" pages — navigating naturally through all of them
const HOME_MENU = [
  { label: "CBC Kenya Schools Home", href: "/" },
  { label: "About CBC / CBE",        href: "/about" },
  { label: "KICD Framework",         href: "/kicd" },

  { section: "Early Years", color: "#FF9800" },
  { label: "Early Years Overview",   href: "/pathway/early-years", color: "#FF9800" },
  { label: "PP1",                    href: "/pp1",                 color: "#FF9800" },
  { label: "PP2",                    href: "/pp2",                 color: "#FF9800" },

  { section: "Lower Primary", color: "#2196F3" },
  { label: "Lower Primary Overview", href: "/pathway/lower-primary", color: "#2196F3" },
  { label: "Grade 1",                href: "/grade-1",               color: "#2196F3" },
  { label: "Grade 2",                href: "/grade-2",               color: "#2196F3" },
  { label: "Grade 3",                href: "/grade-3",               color: "#2196F3" },

  { section: "Upper Primary", color: "#9C27B0" },
  { label: "Upper Primary Overview", href: "/pathway/upper-primary", color: "#9C27B0" },
  { label: "Grade 4",                href: "/grade-4",               color: "#9C27B0" },
  { label: "Grade 5",                href: "/grade-5",               color: "#9C27B0" },
  { label: "Grade 6 (KPSEA)",        href: "/grade-6",               color: "#9C27B0" },

  { section: "Junior Secondary", color: "#F44336" },
  { label: "Junior Secondary Overview", href: "/pathway/junior-secondary", color: "#F44336" },
  { label: "Grade 7",                href: "/grade-7",               color: "#F44336" },
  { label: "Grade 8",                href: "/grade-8",               color: "#F44336" },
  { label: "Grade 9 (KILEA)",        href: "/grade-9",               color: "#F44336" },

  { section: "Senior Secondary", color: "#607D8B" },
  { label: "Senior Secondary Overview", href: "/pathway/senior-secondary", color: "#607D8B" },
  { label: "Grade 10",               href: "/grade-10",              color: "#607D8B" },
  { label: "Grade 11",               href: "/grade-11",              color: "#607D8B" },
  { label: "Grade 12 (KSCE)",        href: "/grade-12",              color: "#607D8B" },

  { section: "Assessment" },
  { label: "Exercises",              href: "/exercises" },
  { label: "Quizzes",                href: "/quizzes" },
  { label: "Certificates",           href: "/certificates" },
];

const HOME_MENU_LINKS = HOME_MENU.filter((i: any) => i.href) as { label: string; href: string; color?: string }[];

// A path is a "home flow" path if it has NO subject segment
// /pp1 → home flow (grade overview)
// /pp1/language-activities → grade flow (has subject)
// /pathway/... → home flow
// / /about /kicd /exercises etc → home flow
function isHomeFlowPath(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  // No segments = home
  if (parts.length === 0) return true;
  // One segment only = grade overview page or static page
  if (parts.length === 1) return true;
  // /pathway/... = home flow
  if (parts[0] === "pathway") return true;
  // Static pages
  const staticPages = ["about","kicd","exercises","quizzes","certificates","references","how-to","signin"];
  if (staticPages.includes(parts[0])) return true;
  // Two or more segments with a grade = subject/topic = grade flow
  return false;
}

export default function Sidebar({ grade, subject }: { grade: string | null; subject: string | null }) {
  const pathname = usePathname();
  const [topics, setTopics] = useState<{ id: string; name: string; order_index: number }[]>([]);

  useEffect(() => {
    // Only load topics when we are in grade flow with a subject
    if (!grade || !subject || isHomeFlowPath(pathname)) { setTopics([]); return; }
    async function load() {
      const subjectName = subject!.replaceAll("-", " ");
      const { data: subjectRow } = await supabase.from("subjects").select("id").ilike("name", subjectName).single();
      if (!subjectRow) return;
      const { data } = await supabase.from("topics").select("id, name, order_index").eq("subject_id", subjectRow.id).order("order_index", { ascending: true });
      setTopics(data ?? []);
    }
    load();
  }, [grade, subject, pathname]);

  // ── HOME FLOW SIDEBAR ────────────────────────────────────────
  // Shows for: /, /about, /kicd, /pathway/*, /pp1, /pp2, /grade-1..12 (overview only), /exercises etc
  if (isHomeFlowPath(pathname)) {
    const currentIndex = HOME_MENU_LINKS.findIndex(i => i.href === pathname);
    const prevItem = currentIndex > 0 ? HOME_MENU_LINKS[currentIndex - 1] : null;
    const nextItem = currentIndex >= 0 && currentIndex < HOME_MENU_LINKS.length - 1
      ? HOME_MENU_LINKS[currentIndex + 1]
      : null;

    return (
      <aside className="sidebar" style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Link href="/" className="sidebar-header">CBC Kenya Schools</Link>
          {HOME_MENU.map((item: any, i) =>
            item.section ? (
              <div key={i} className="sidebar-section"
                style={item.color ? { borderLeft: `3px solid ${item.color}`, paddingLeft: "13px" } : {}}>
                {item.section}
              </div>
            ) : (
              <Link key={item.href} href={item.href}
                className={isActive(item.href, pathname) ? "active" : ""}
                style={item.color && !isActive(item.href, pathname)
                  ? { borderLeft: `3px solid ${item.color}`, paddingLeft: "13px" }
                  : {}}>
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Prev / Next at bottom of sidebar — plain Previous / Next */}
        {(prevItem || nextItem) && (
          <div style={{ borderTop: "2px solid #04AA6D", padding: "10px 8px", display: "flex", flexDirection: "column", gap: "6px", flexShrink: 0 }}>
            {prevItem && (
              <Link href={prevItem.href} style={{ background: "#04AA6D", color: "#fff", padding: "9px 14px", borderRadius: "3px", textDecoration: "none", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                &#10094; Previous
              </Link>
            )}
            {nextItem && (
              <Link href={nextItem.href} style={{ background: "#04AA6D", color: "#fff", padding: "9px 14px", borderRadius: "3px", textDecoration: "none", fontSize: "13px", fontWeight: 700, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px" }}>
                Next &#10095;
              </Link>
            )}
          </div>
        )}
      </aside>
    );
  }

  // ── GRADE SUBJECT SIDEBAR ────────────────────────────────────
  // Shows for: /pp1/language-activities, /grade-1/english, /grade-1/english/topic etc
  if (grade && subject) {
    const g = GRADE_SUBJECTS[grade];
    const color = g?.color ?? "#04AA6D";
    const subjectLabel = subject.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
    const subjectHref = `/${grade}/${subject}`;

    const subjects = g?.subjects || [];
    const subjectSlugs = subjects.map(s => slugify(s));
    const subjectIndex = subjectSlugs.indexOf(subject);

    // Prev: previous subject OR grade overview page
    const prevHref = subjectIndex > 0
      ? `/${grade}/${subjectSlugs[subjectIndex - 1]}`
      : `/${grade}`;

    // Next: first topic OR next subject OR next grade overview
    const gradeKeys = Object.keys(GRADE_SUBJECTS);
    const gradeIndex = gradeKeys.indexOf(grade);
    const nextGrade = gradeIndex < gradeKeys.length - 1 ? gradeKeys[gradeIndex + 1] : null;

    const nextHref = topics[0]
      ? `/${grade}/${subject}/${slugify(topics[0].name)}`
      : subjectIndex < subjectSlugs.length - 1
        ? `/${grade}/${subjectSlugs[subjectIndex + 1]}`
        : nextGrade
          ? `/${nextGrade}`
          : "/exercises";

    return (
      <aside className="sidebar" style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Link href={`/${grade}`} className="sidebar-header" style={{ background: color }}>
            {g?.label || grade.toUpperCase()}
          </Link>
          <Link href={subjectHref} className={pathname === subjectHref ? "active" : ""}>
            {subjectLabel} — Introduction
          </Link>
          {topics.length > 0 && <div className="sidebar-section">Topics</div>}
          {topics.map(t => {
            const href = `/${grade}/${subject}/${slugify(t.name)}`;
            return (
              <Link key={t.id} href={href} className={pathname === href ? "active" : ""}>{t.name}</Link>
            );
          })}
          {topics.length > 0 && (
            <>
              <div className="sidebar-section">Assessment</div>
              <Link href={`/${grade}/${subject}/exercises`} className={pathname === `/${grade}/${subject}/exercises` ? "active" : ""}>Exercises</Link>
              <Link href={`/${grade}/${subject}/quiz`} className={pathname === `/${grade}/${subject}/quiz` ? "active" : ""}>Quiz</Link>
            </>
          )}

          {/* Also show all subjects of this grade for easy switching */}
          <div className="sidebar-section">All {g?.label} Subjects</div>
          {subjects.map(sub => {
            const href = `/${grade}/${slugify(sub)}`;
            return (
              <Link key={sub} href={href}
                className={subject === slugify(sub) ? "active" : ""}
                style={{ fontSize: "13px" }}>
                {sub}
              </Link>
            );
          })}
        </div>

        {/* Prev / Next */}
        <div style={{ borderTop: "2px solid " + color, padding: "10px 8px", display: "flex", flexDirection: "column", gap: "6px", flexShrink: 0 }}>
          <Link href={prevHref} style={{ background: color, color: "#fff", padding: "9px 14px", borderRadius: "3px", textDecoration: "none", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
            &#10094; Previous
          </Link>
          <Link href={nextHref} style={{ background: color, color: "#fff", padding: "9px 14px", borderRadius: "3px", textDecoration: "none", fontSize: "13px", fontWeight: 700, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px" }}>
            Next &#10095;
          </Link>
        </div>
      </aside>
    );
  }

  return <aside className="sidebar" />;
}
