"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

// ── DATA ────────────────────────────────────────────────────────
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

// Routes that always show the HOME sidebar
const HOME_PATHS = [
  "/", "/about", "/kicd", "/references", "/exercises",
  "/quizzes", "/certificates", "/how-to", "/signin",
];
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

// ── HOME SIDEBAR MENU ───────────────────────────────────────────
const HOME_MENU = [
  { label: "Home",                       href: "/" },
  { label: "About CBC",                  href: "/about" },
  { label: "KICD Framework",             href: "/kicd" },
  { section: "Pathways" },
  { label: "Early Years (PP1-PP2)",      href: "/pathway/early-years" },
  { label: "Lower Primary (Gr 1-3)",     href: "/pathway/lower-primary" },
  { label: "Upper Primary (Gr 4-6)",     href: "/pathway/upper-primary" },
  { label: "Junior Secondary (Gr 7-9)",  href: "/pathway/junior-secondary" },
  { label: "Senior Secondary (Gr 10-12)",href: "/pathway/senior-secondary" },
  { section: "Resources" },
  { label: "Exercises",                  href: "/exercises" },
  { label: "Quizzes",                    href: "/quizzes" },
  { label: "Certificates",              href: "/certificates" },
  { label: "References",                href: "/references" },
  { label: "How To",                    href: "/how-to" },
];

function isActive(itemHref: string, pathname: string) {
  if (itemHref === "/") return pathname === "/";
  return pathname === itemHref || pathname.startsWith(itemHref + "/");
}

// ── COMPONENT ───────────────────────────────────────────────────
export default function Sidebar({ grade, subject }: { grade: string | null; subject: string | null }) {
  const pathname = usePathname();
  const [topics, setTopics] = useState<{ id: string; name: string; order_index: number }[]>([]);

  // Fetch topics from Supabase when on a subject page
  useEffect(() => {
    if (!grade || !subject || isHomePath(pathname)) {
      setTopics([]);
      return;
    }
    async function load() {
      const subjectName = subject!.replaceAll("-", " ");
      const { data: subjectRow } = await supabase
        .from("subjects").select("id")
        .ilike("name", subjectName).single();
      if (!subjectRow) return;
      const { data } = await supabase
        .from("topics").select("id, name, order_index")
        .eq("subject_id", subjectRow.id)
        .order("order_index", { ascending: true });
      setTopics(data ?? []);
    }
    load();
  }, [grade, subject, pathname]);

  // ── MODE A: HOME SIDEBAR ─────────────────────────────────────
  if (isHomePath(pathname)) {
    return (
      <aside className="sidebar">
        <Link href="/" className="sidebar-header">CBC Kenya Schools</Link>
        {HOME_MENU.map((item: any, i) =>
          item.section ? (
            <div key={i} className="sidebar-section">{item.section}</div>
          ) : (
            <Link key={item.href} href={item.href}
              className={isActive(item.href, pathname) ? "active" : ""}>
              {item.label}
            </Link>
          )
        )}
      </aside>
    );
  }

  // ── MODE B: GRADE HOME (no subject) ─────────────────────────
  if (grade && !subject) {
    const g = GRADE_SUBJECTS[grade];
    if (!g) return <aside className="sidebar" />;
    return (
      <aside className="sidebar">
        <Link href={`/${grade}`} className="sidebar-header" style={{ background: g.color }}>
          {g.label}
        </Link>
        <Link href={`/${grade}`} className={pathname === `/${grade}` ? "active" : ""}>
          {g.label} Overview
        </Link>
        <div className="sidebar-section">Subjects</div>
        {g.subjects.map(sub => {
          const href = `/${grade}/${slugify(sub)}`;
          return (
            <Link key={sub} href={href} className={pathname.startsWith(href) ? "active" : ""}>
              {sub}
            </Link>
          );
        })}
      </aside>
    );
  }

  // ── MODE C/D: SUBJECT PAGE (with or without topic) ──────────
  if (grade && subject) {
    const g = GRADE_SUBJECTS[grade];
    const color = g?.color ?? "#04AA6D";
    const gradeLabel = g?.label ?? grade;
    const subjectLabel = subject.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
    const subjectHref = `/${grade}/${subject}`;

    return (
      <aside className="sidebar">
        <Link href={subjectHref} className="sidebar-header" style={{ background: color }}>
          {subjectLabel}
        </Link>
        <Link href={subjectHref} className={pathname === subjectHref ? "active" : ""}>
          Introduction
        </Link>
        {topics.length > 0 && <div className="sidebar-section">Topics</div>}
        {topics.map(t => {
          const href = `/${grade}/${subject}/${slugify(t.name)}`;
          return (
            <Link key={t.id} href={href} className={pathname === href ? "active" : ""}>
              {t.name}
            </Link>
          );
        })}
        {topics.length > 0 && (
          <>
            <div className="sidebar-section">Assessment</div>
            <Link href={`/${grade}/${subject}/exercises`}
              className={pathname === `/${grade}/${subject}/exercises` ? "active" : ""}>
              Exercises
            </Link>
            <Link href={`/${grade}/${subject}/quiz`}
              className={pathname === `/${grade}/${subject}/quiz` ? "active" : ""}>
              Quiz
            </Link>
          </>
        )}
      </aside>
    );
  }

  return <aside className="sidebar" />;
}