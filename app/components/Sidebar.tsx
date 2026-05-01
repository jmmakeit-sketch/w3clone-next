"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { supabase } from "../../lib/supabase";

function slugify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-");
}

const PATHWAY_COLORS: Record<string, string> = {
  "Early Years": "#FF9800",
  "Lower Primary": "#2196F3",
  "Upper Primary": "#9C27B0",
  "Junior Secondary": "#F44336",
  "Senior Secondary": "#607D8B",
  "STEM": "#04AA6D",
};

export default function Sidebar({ grade, subject }: { grade?: string; subject?: string }) {
  const pathname = usePathname();
  const [topics, setTopics] = useState<any[]>([]);
  const [subjectData, setSubjectData] = useState<any>(null);

  useEffect(() => {
    if (grade && subject) { fetchTopics(); }
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

  const pathway = subjectData?.pathways?.name || "";
  const pathwayColor = PATHWAY_COLORS[pathway] || "#04AA6D";

  if (!grade) {
    return (
      <aside className="sidebar">
        <Link href="/" className="sidebar-header">CBC Kenya Schools</Link>
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>About CBC</Link>
        <Link href="/kicd" className={pathname === "/kicd" ? "active" : ""}>KICD Framework</Link>
        <div className="sidebar-section">Pathways</div>
        <Link href="/pathway/early-years">Early Years (PP1-PP2)</Link>
        <Link href="/pathway/lower-primary">Lower Primary (Gr 1-3)</Link>
        <Link href="/pathway/upper-primary">Upper Primary (Gr 4-6)</Link>
        <Link href="/pathway/junior-secondary">Junior Secondary (Gr 7-9)</Link>
        <Link href="/pathway/senior-secondary">Senior Secondary (Gr 10-12)</Link>
        <div className="sidebar-section">Resources</div>
        <Link href="/exercises">Exercises</Link>
        <Link href="/quizzes">Quizzes</Link>
        <Link href="/certificates">Certificates</Link>
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

  const displaySubject = subjectData?.name ||
    subject.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());

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