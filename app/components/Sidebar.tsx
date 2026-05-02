"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const GRADE_SUBJECTS: Record<string, { color: string; label: string; subjects: string[] }> = {
  "pp1":      { color: "#FF9800", label: "PP1",      subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Psychomotor and Creative Activities","Religious Education"] },
  "pp2":      { color: "#FF9800", label: "PP2",      subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Psychomotor and Creative Activities","Religious Education"] },
  "grade-1":  { color: "#2196F3", label: "Grade 1",  subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  "grade-2":  { color: "#2196F3", label: "Grade 2",  subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  "grade-3":  { color: "#2196F3", label: "Grade 3",  subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  "grade-4":  { color: "#9C27B0", label: "Grade 4",  subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  "grade-5":  { color: "#9C27B0", label: "Grade 5",  subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  "grade-6":  { color: "#9C27B0", label: "Grade 6",  subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  "grade-7":  { color: "#F44336", label: "Grade 7",  subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  "grade-8":  { color: "#F44336", label: "Grade 8",  subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  "grade-9":  { color: "#F44336", label: "Grade 9",  subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  "grade-10": { color: "#607D8B", label: "Grade 10", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
  "grade-11": { color: "#607D8B", label: "Grade 11", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
  "grade-12": { color: "#607D8B", label: "Grade 12", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture","English","Kiswahili","Fine Art","Music"] },
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

// Full site menu — every page listed
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
  { label: "STEM Pathway",           href: "/pathway/senior-stem",   color: "#04AA6D" },
  { label: "Arts & Sports Pathway",  href: "/pathway/senior-arts",   color: "#E91E63" },
  { label: "Social Sciences Pathway",href: "/pathway/senior-social", color: "#795548" },
  { label: "Grade 10",               href: "/grade-10",              color: "#607D8B" },
  { label: "Grade 11",               href: "/grade-11",              color: "#607D8B" },
  { label: "Grade 12 (KSCE)",        href: "/grade-12",              color: "#607D8B" },

  { section: "Assessment" },
  { label: "Exercises",              href: "/exercises" },
  { label: "Quizzes",                href: "/quizzes" },
  { label: "Certificates",          href: "/certificates" },

  { section: "Resources" },
  { label: "References",             href: "/references" },
  { label: "How To Guides",          href: "/how-to" },
];

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
    return (
      <aside className="sidebar">
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
      </aside>
    );
  }

  // ── GRADE HOME ───────────────────────────────────────────────
  if (grade && !subject) {
    const g = GRADE_SUBJECTS[grade];
    if (!g) return <aside className="sidebar" />;
    return (
      <aside className="sidebar">
        <Link href={`/${grade}`} className="sidebar-header" style={{ background: g.color }}>{g.label}</Link>
        <Link href={`/${grade}`} className={pathname === `/${grade}` ? "active" : ""}>{g.label} Overview</Link>
        <div className="sidebar-section">Subjects</div>
        {g.subjects.map(sub => {
          const href = `/${grade}/${slugify(sub)}`;
          return <Link key={sub} href={href} className={pathname.startsWith(href) ? "active" : ""}>{sub}</Link>;
        })}
      </aside>
    );
  }

  // ── SUBJECT + TOPICS ─────────────────────────────────────────
  if (grade && subject) {
    const g = GRADE_SUBJECTS[grade];
    const color = g?.color ?? "#04AA6D";
    const subjectLabel = subject.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
    const subjectHref = `/${grade}/${subject}`;
    return (
      <aside className="sidebar">
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
      </aside>
    );
  }

  return <aside className="sidebar" />;
}