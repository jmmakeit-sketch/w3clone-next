"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
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

const HOME_PATHS = ["/","/about","/kicd","/references","/exercises","/quizzes","/certificates","/how-to","/signin"];
function isHomePath(p: string) {
  if (HOME_PATHS.includes(p)) return true;
  if (p.startsWith("/pathway/")) return true;
  if (p.startsWith("/references/")) return true;
  if (p.startsWith("/how-to/")) return true;
  return false;
}

function slugify(t: string) {
  return t.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

const HOME_MENU = [
  { label: "CBC Kenya Schools Home", href: "/" },
  { label: "About CBC / CBE",        href: "/about" },
  { label: "KICD Framework",         href: "/kicd" },
  { section: "Early Years", color: "#FF9800" },
  { label: "Early Years Overview",   href: "/pathway/early-years",  color: "#FF9800" },
  { label: "PP1",                    href: "/pp1",                  color: "#FF9800" },
  { label: "PP2",                    href: "/pp2",                  color: "#FF9800" },
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

// Only items that have href — used for prev/next
const HOME_MENU_LINKS = HOME_MENU.filter((i: any) => i.href) as { label: string; href: string; color?: string }[];

export default function Sidebar({ grade, subject }: { grade: string | null; subject: string | null }) {
  const pathname = usePathname();
  const [topics, setTopics] = useState<{ id: string; name: string; order_index: number }[]>([]);

  useEffect(() => {
    if (!grade || !subject || isHomePath(pathname)) { setTopics([]); return; }
    async function load() {
      const subjectName = subject!.replaceAll("-", " ");
      const { data: subjectRow } = await supabase.from("subjects").select("id").ilike("name", subjectName).single();
      if (!subjectRow) return;
      const { data } = await supabase.from("topics").select("id, name, order_index").eq("subject_id", subjectRow.id).order("order_index", { ascending: true });
      setTopics(data ?? []);
    }
    load();
  }, [grade, subject, pathname]);

  // ── HOME SIDEBAR ─────────────────────────────────────────────
  if (isHomePath(pathname)) {
    // Find current index in link list for prev/next
    const currentIndex = HOME_MENU_LINKS.findIndex(i => i.href === pathname || (pathname.startsWith(i.href + "/") && i.href !== "/"));
    const prevItem = currentIndex > 0 ? HOME_MENU_LINKS[currentIndex - 1] : null;
    const nextItem = currentIndex >= 0 && currentIndex < HOME_MENU_LINKS.length - 1 ? HOME_MENU_LINKS[currentIndex + 1] : null;

    return (
      <aside className="sidebar" style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Link href="/" className="sidebar-header">CBC Kenya Schools</Link>
          {HOME_MENU.map((item: any, i) =>
            item.section ? (
              <div key={i} className="sidebar-section" style={item.color ? { borderLeft: `3px solid ${item.color}`, paddingLeft: "13px" } : {}}>
                {item.section}
              </div>
            ) : (
              <Link key={item.href} href={item.href}
                className={isActive(item.href, pathname) ? "active" : ""}
                style={item.color && !isActive(item.href, pathname) ? { borderLeft: `3px solid ${item.color}`, paddingLeft: "13px" } : {}}>
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Prev / Next navigation at bottom of sidebar */}
        {(prevItem || nextItem) && (
          <div style={{ borderTop: "2px solid #04AA6D", padding: "10px 8px", display: "flex", flexDirection: "column", gap: "6px", flexShrink: 0 }}>
            {prevItem && (
              <Link href={prevItem.href} style={{ background: "#04AA6D", color: "#fff", padding: "8px 12px", borderRadius: "3px", textDecoration: "none", fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                <span>&#10094;</span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{prevItem.label}</span>
              </Link>
            )}
            {nextItem && (
              <Link href={nextItem.href} style={{ background: "#04AA6D", color: "#fff", padding: "8px 12px", borderRadius: "3px", textDecoration: "none", fontSize: "12px", fontWeight: 700, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "6px" }}>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{nextItem.label}</span>
                <span>&#10095;</span>
              </Link>
            )}
          </div>
        )}
      </aside>
    );
  }

  // ── GRADE HOME ───────────────────────────────────────────────
  if (grade && !subject) {
    const g = GRADE_SUBJECTS[grade];
    if (!g) return <aside className="sidebar" />;

    const gradeKeys = Object.keys(GRADE_SUBJECTS);
    const gradeIndex = gradeKeys.indexOf(grade);
    const prevGrade = gradeIndex > 0 ? gradeKeys[gradeIndex - 1] : null;
    const nextSubject = g.subjects[0] ? slugify(g.subjects[0]) : null;

    return (
      <aside className="sidebar" style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Link href={`/${grade}`} className="sidebar-header" style={{ background: g.color }}>{g.label}</Link>
          <Link href={`/${grade}`} className={pathname === `/${grade}` ? "active" : ""}>{g.label} Overview</Link>
          <div className="sidebar-section">Subjects</div>
          {g.subjects.map(sub => {
            const href = `/${grade}/${slugify(sub)}`;
            return <Link key={sub} href={href} className={pathname.startsWith(href) ? "active" : ""}>{sub}</Link>;
          })}
        </div>
        <div style={{ borderTop: "2px solid " + g.color, padding: "10px 8px", display: "flex", flexDirection: "column", gap: "6px", flexShrink: 0 }}>
          {prevGrade && (
            <Link href={`/${prevGrade}`} style={{ background: g.color, color: "#fff", padding: "8px 12px", borderRadius: "3px", textDecoration: "none", fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
              <span>&#10094;</span>
              <span>{GRADE_SUBJECTS[prevGrade].label}</span>
            </Link>
          )}
          {nextSubject && (
            <Link href={`/${grade}/${nextSubject}`} style={{ background: g.color, color: "#fff", padding: "8px 12px", borderRadius: "3px", textDecoration: "none", fontSize: "12px", fontWeight: 700, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "6px" }}>
              <span>{g.subjects[0]}</span>
              <span>&#10095;</span>
            </Link>
          )}
        </div>
      </aside>
    );
  }

  // ── SUBJECT + TOPICS ─────────────────────────────────────────
  if (grade && subject) {
    const g = GRADE_SUBJECTS[grade];
    const color = g?.color ?? "#04AA6D";
    const subjectLabel = subject.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
    const subjectHref = `/${grade}/${subject}`;

    // Prev/next within subjects of this grade
    const subjects = g?.subjects || [];
    const subjectSlugs = subjects.map(s => slugify(s));
    const subjectIndex = subjectSlugs.indexOf(subject);
    const prevSubjectSlug = subjectIndex > 0 ? subjectSlugs[subjectIndex - 1] : null;
    const prevSubjectLabel = subjectIndex > 0 ? subjects[subjectIndex - 1] : null;
    const nextTopicHref = topics[0] ? `/${grade}/${subject}/${slugify(topics[0].name)}` : null;
    const nextTopicLabel = topics[0]?.name || null;
    const nextSubjectSlug = !nextTopicHref && subjectIndex >= 0 && subjectIndex < subjectSlugs.length - 1 ? subjectSlugs[subjectIndex + 1] : null;
    const nextSubjectLabel = nextSubjectSlug ? subjects[subjectIndex + 1] : null;

    return (
      <aside className="sidebar" style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Link href={subjectHref} className="sidebar-header" style={{ background: color }}>{subjectLabel}</Link>
          <Link href={subjectHref} className={pathname === subjectHref ? "active" : ""}>Introduction</Link>
          {topics.length > 0 && <div className="sidebar-section">Topics</div>}
          {topics.map(t => {
            const href = `/${grade}/${subject}/${slugify(t.name)}`;
            return <Link key={t.id} href={href} className={pathname === href ? "active" : ""}>{t.name}</Link>;
          })}
          {topics.length > 0 && (
            <>
              <div className="sidebar-section">Assessment</div>
              <Link href={`/${grade}/${subject}/exercises`} className={pathname === `/${grade}/${subject}/exercises` ? "active" : ""}>Exercises</Link>
              <Link href={`/${grade}/${subject}/quiz`} className={pathname === `/${grade}/${subject}/quiz` ? "active" : ""}>Quiz</Link>
            </>
          )}
        </div>
        <div style={{ borderTop: "2px solid " + color, padding: "10px 8px", display: "flex", flexDirection: "column", gap: "6px", flexShrink: 0 }}>
          {prevSubjectSlug && (
            <Link href={`/${grade}/${prevSubjectSlug}`} style={{ background: color, color: "#fff", padding: "8px 12px", borderRadius: "3px", textDecoration: "none", fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
              <span>&#10094;</span>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{prevSubjectLabel}</span>
            </Link>
          )}
          {(nextTopicHref || nextSubjectSlug) && (
            <Link href={nextTopicHref || `/${grade}/${nextSubjectSlug}`} style={{ background: color, color: "#fff", padding: "8px 12px", borderRadius: "3px", textDecoration: "none", fontSize: "12px", fontWeight: 700, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "6px" }}>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{nextTopicLabel || nextSubjectLabel}</span>
              <span>&#10095;</span>
            </Link>
          )}
        </div>
      </aside>
    );
  }

  return <aside className="sidebar" />;
}
