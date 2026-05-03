"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import {
  HOME_MENU,
  GRADE_SUBJECTS,
  isHomeFlowPath, getPrevNext, getSidebarPrevNext,
  slugify,
} from "../../lib/nav";

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export default function Sidebar({ grade, subject }: { grade: string | null; subject: string | null }) {
  const pathname = usePathname();
  const [topics, setTopics] = useState<{ id: string; name: string; order_index: number }[]>([]);

  useEffect(() => {
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

  // ── HOME FLOW SIDEBAR ─────────────────────────────────────────
  if (isHomeFlowPath(pathname)) {
    const { prev, next } = getPrevNext(pathname);

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
        {(prev || next) && (
          <div style={{ borderTop: "2px solid #04AA6D", padding: "10px 8px", display: "flex", flexDirection: "column", gap: "6px", flexShrink: 0 }}>
            {prev && (
              <Link href={prev.href} style={{ background: "#04AA6D", color: "#fff", padding: "9px 14px", borderRadius: "3px", textDecoration: "none", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                &#10094; Previous
              </Link>
            )}
            {next && (
              <Link href={next.href} style={{ background: "#04AA6D", color: "#fff", padding: "9px 14px", borderRadius: "3px", textDecoration: "none", fontSize: "13px", fontWeight: 700, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px" }}>
                Next &#10095;
              </Link>
            )}
          </div>
        )}
      </aside>
    );
  }

  // ── GRADE FLOW SIDEBAR ────────────────────────────────────────
  // Each grade navbar is fully independent. Prev/Next stays within
  // this grade's full sequence before crossing to another grade.
  if (grade && GRADE_SUBJECTS[grade]) {
    const g = GRADE_SUBJECTS[grade];
    const color = g.color;
    const subjects = g.subjects;
    const subjectSlugs = subjects.map(slugify);
    const subjectHref = subject ? `/${grade}/${subject}` : `/${grade}`;

    // Grade-navbar-first prev/next (new independent logic)
    const { prev, next } = getSidebarPrevNext(pathname, grade, subject, topics);

    return (
      <aside className="sidebar" style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {/* Grade header */}
          <Link href={`/${grade}`} className="sidebar-header" style={{ background: color }}>
            {g.label}
          </Link>

          {/* Grade overview link */}
          <Link href={`/${grade}`} className={pathname === `/${grade}` ? "active" : ""}>
            {g.label} Overview
          </Link>

          {/* Current subject: intro + topics + assessment */}
          {subject && (
            <>
              <div className="sidebar-section">Current Subject</div>
              <Link href={subjectHref} className={pathname === subjectHref ? "active" : ""}>
                {subject.replaceAll("-", " ").replace(/\b\w/g, (l: string) => l.toUpperCase())} — Introduction
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
            </>
          )}

          {/* All subjects in this grade navbar */}
          <div className="sidebar-section">All {g.label} Subjects</div>
          {subjects.map((sub, i) => {
            const href = `/${grade}/${subjectSlugs[i]}`;
            return (
              <Link key={sub} href={href}
                className={subject === subjectSlugs[i] ? "active" : ""}
                style={{ fontSize: "13px" }}>
                {sub}
              </Link>
            );
          })}
        </div>

        {/* Prev / Next — strictly within this grade navbar */}
        <div style={{ borderTop: `2px solid ${color}`, padding: "10px 8px", display: "flex", flexDirection: "column", gap: "6px", flexShrink: 0 }}>
          {prev ? (
            <Link href={prev.href} style={{ background: color, color: "#fff", padding: "9px 14px", borderRadius: "3px", textDecoration: "none", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
              &#10094; Previous
            </Link>
          ) : <div />}
          {next ? (
            <Link href={next.href} style={{ background: color, color: "#fff", padding: "9px 14px", borderRadius: "3px", textDecoration: "none", fontSize: "13px", fontWeight: 700, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px" }}>
              Next &#10095;
            </Link>
          ) : <div />}
        </div>
      </aside>
    );
  }

  return <aside className="sidebar" />;
}
