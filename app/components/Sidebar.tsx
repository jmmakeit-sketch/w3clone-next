"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { supabase } from "../../lib/supabase";

function slugify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-");
}

const GRADES_DATA = [
  { href: "/pp1", label: "PP1", pathway: "Early Years", color: "#FF9800", subjects: ["Language Activities", "Mathematical Activities", "Environmental Activities", "Psychomotor & Creative", "Religious Education"] },
  { href: "/pp2", label: "PP2", pathway: "Early Years", color: "#FF9800", subjects: ["Language Activities", "Mathematical Activities", "Environmental Activities", "Psychomotor & Creative", "Religious Education"] },
  { href: "/grade-1", label: "Grade 1", pathway: "Lower Primary", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  { href: "/grade-2", label: "Grade 2", pathway: "Lower Primary", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  { href: "/grade-3", label: "Grade 3", pathway: "Lower Primary", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  { href: "/grade-4", label: "Grade 4", pathway: "Upper Primary", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
  { href: "/grade-5", label: "Grade 5", pathway: "Upper Primary", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
  { href: "/grade-6", label: "Grade 6", pathway: "Upper Primary", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
  { href: "/grade-7", label: "Grade 7", pathway: "Junior Secondary", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
  { href: "/grade-8", label: "Grade 8", pathway: "Junior Secondary", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
  { href: "/grade-9", label: "Grade 9", pathway: "Junior Secondary", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
  { href: "/grade-10", label: "Grade 10", pathway: "Senior Secondary", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture", "English", "Kiswahili", "Fine Art", "Music"] },
  { href: "/grade-11", label: "Grade 11", pathway: "Senior Secondary", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture", "English", "Kiswahili", "Fine Art", "Music"] },
  { href: "/grade-12", label: "Grade 12", pathway: "Senior Secondary", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture", "English", "Kiswahili", "Fine Art", "Music"] },
];

function gradeSlugify(t: string) {
  return t.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

export default function Sidebar({ grade, subject }: { grade?: string; subject?: string }) {
  const pathname = usePathname();
  const [topics, setTopics] = useState<any[]>([]);
  const [subjectData, setSubjectData] = useState<any>(null);
  const [switchedGrade, setSwitchedGrade] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Listen for gradenav:open (show/hide sidebar)
  useEffect(() => {
    function onOpen(e: Event) {
      setDropdownOpen((e as CustomEvent).detail !== null);
    }
    window.addEventListener("gradenav:open", onOpen);
    return () => window.removeEventListener("gradenav:open", onOpen);
  }, []);

  // Listen for gradenav:switch (which grade was clicked)
  useEffect(() => {
    function onSwitch(e: Event) {
      const idx = (e as CustomEvent).detail;
      setSwitchedGrade(idx !== null ? idx : null);
    }
    window.addEventListener("gradenav:switch", onSwitch);
    return () => window.removeEventListener("gradenav:switch", onSwitch);
  }, []);

  // When URL changes, clear switchedGrade (URL is now the truth)
  useEffect(() => { setSwitchedGrade(null); }, [pathname]);

  useEffect(() => {
    if (grade && subject) fetchTopics();
    else { setTopics([]); setSubjectData(null); }
  }, [grade, subject]);

  async function fetchTopics() {
    const subjectDecoded = subject!.replaceAll("-", " ");
    const { data } = await supabase
      .from("subjects").select("id, name, pathways(name)")
      .ilike("name", subjectDecoded).single();
    if (data) {
      setSubjectData(data);
      const { data: topicsData } = await supabase
        .from("topics").select("id, name, order_index")
        .eq("subject_id", data.id)
        .order("order_index", { ascending: true });
      setTopics(topicsData || []);
    }
  }

  // If a grade was clicked in nav, show that grade's subjects instead
  if (dropdownOpen && switchedGrade !== null) {
    const g = GRADES_DATA[switchedGrade];
    return (
      <aside className="sidebar">
        <Link href={g.href} className="sidebar-header" style={{ background: g.color }}>
          {g.label}
        </Link>
        <div style={{ padding: "6px 16px 2px" }}>
          <span className="pathway-badge" style={{ background: g.color }}>{g.pathway}</span>
        </div>
        {g.subjects.map(sub => (
          <Link key={sub} href={`${g.href}/${gradeSlugify(sub)}`}
            className={pathname === `${g.href}/${gradeSlugify(sub)}` ? "active" : ""}>
            {sub}
          </Link>
        ))}
      </aside>
    );
  }

  // Hide sidebar when dropdown open but no grade switched yet
  if (dropdownOpen) {
    return <aside className="sidebar" style={{ visibility: "hidden", pointerEvents: "none" }} />;
  }

  if (!grade) {
    return (
      <aside className="sidebar">
        <Link href="/" className="sidebar-header">CBC Kenya Schools</Link>
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>About CBC</Link>
        <Link href="/kicd" className={pathname === "/kicd" ? "active" : ""}>KICD Framework</Link>
        <div className="sidebar-section">Pathways</div>
        <Link href="/pathway/early-years" className={pathname.startsWith("/pathway/early-years") ? "active" : ""}>Early Years (PP1-PP2)</Link>
        <Link href="/pathway/lower-primary" className={pathname.startsWith("/pathway/lower-primary") ? "active" : ""}>Lower Primary (Gr 1-3)</Link>
        <Link href="/pathway/upper-primary" className={pathname.startsWith("/pathway/upper-primary") ? "active" : ""}>Upper Primary (Gr 4-6)</Link>
        <Link href="/pathway/junior-secondary" className={pathname.startsWith("/pathway/junior-secondary") ? "active" : ""}>Junior Secondary (Gr 7-9)</Link>
        <Link href="/pathway/senior-secondary" className={pathname.startsWith("/pathway/senior-secondary") ? "active" : ""}>Senior Secondary (Gr 10-12)</Link>
        <div className="sidebar-section">Resources</div>
        <Link href="/exercises" className={pathname === "/exercises" ? "active" : ""}>Exercises</Link>
        <Link href="/quizzes" className={pathname === "/quizzes" ? "active" : ""}>Quizzes</Link>
        <Link href="/certificates" className={pathname === "/certificates" ? "active" : ""}>Certificates</Link>
      </aside>
    );
  }

  if (!subject) {
    const displayGrade = grade.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
    return (
      <aside className="sidebar">
        <Link href={`/${grade}`} className="sidebar-header">{displayGrade}</Link>
        <Link href={`/${grade}`} className={pathname === `/${grade}` ? "active" : ""}>Overview</Link>
      </aside>
    );
  }

  const pathwayColors: Record<string, string> = {
    "Early Years": "#FF9800", "Lower Primary": "#2196F3", "Upper Primary": "#9C27B0",
    "Junior Secondary": "#F44336", "Senior Secondary": "#607D8B",
  };
  const pathway = subjectData?.pathways?.name || "";
  const pathwayColor = pathwayColors[pathway] || "#04AA6D";
  const displaySubject = subjectData?.name || subject.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <aside className="sidebar">
      <Link href={`/${grade}/${subject}`} className="sidebar-header" style={{ background: pathwayColor }}>
        {displaySubject} Tutorial
      </Link>
      {pathway && (
        <div style={{ padding: "8px 16px 2px" }}>
          <span className="pathway-badge" style={{ background: pathwayColor }}>{pathway}</span>
        </div>
      )}
      <Link href={`/${grade}/${subject}`} className={pathname === `/${grade}/${subject}` ? "active" : ""}>
        Introduction
      </Link>
      {topics.length > 0 && <div className="sidebar-section">Topics</div>}
      {topics.map((t: any) => {
        const href = `/${grade}/${subject}/${slugify(t.name)}`;
        return (
          <Link key={t.id} href={href} className={pathname === href ? "active" : ""}>{t.name}</Link>
        );
      })}
      {topics.length > 0 && (
        <>
          <div className="sidebar-section">Assessment</div>
          <Link href={`/${grade}/${subject}/exercises`}>Exercises</Link>
          <Link href={`/${grade}/${subject}/quiz`}>Quiz</Link>
        </>
      )}
    </aside>
  );
}
