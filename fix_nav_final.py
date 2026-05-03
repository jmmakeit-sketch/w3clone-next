"""
fix_nav_final.py
================
Rewrites the navigation logic to follow "sidebar-first" rule:
- On home-flow pages (/, /about, /kicd, /pathway/*, grade overviews):
    prev/next walks through HOME_MENU_LINKS order
- On grade-flow pages (/pp1/language-activities, /grade-1/english/topic etc):
    prev/next exhausts the sidebar list FIRST before jumping to next grade
- GradeNav bar only highlights when pathname starts with that grade href
  (no double-highlighting)

Run from project root:
    python fix_nav_final.py
"""

import os

ROOT = os.getcwd()

def write(path, content):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  ✅ wrote  {path}")

# ─────────────────────────────────────────────────────────────
# 1. lib/nav.ts  — single source of truth
# ─────────────────────────────────────────────────────────────
write("lib/nav.ts", '''\
// lib/nav.ts — single source of truth for all navigation logic

export interface NavItem {
  label: string;
  href: string;
  color?: string;
}

export interface NavSection {
  section: string;
  color?: string;
}

export type MenuItem = NavItem | NavSection;

// ── Grade subjects (same order as sidebar) ────────────────────
export const GRADE_SUBJECTS: Record<string, {
  color: string; label: string; pathway: string; subjects: string[]
}> = {
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

export const GRADE_KEYS = Object.keys(GRADE_SUBJECTS);

export function slugify(t: string) {
  return t.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

// ── Home-flow menu (pages with NO subject segment) ────────────
export const HOME_MENU: MenuItem[] = [
  { label: "CBC Kenya Schools Home", href: "/" },
  { label: "About CBC / CBE",        href: "/about" },
  { label: "KICD Framework",         href: "/kicd" },

  { section: "Early Years", color: "#FF9800" },
  { label: "Early Years Overview",      href: "/pathway/early-years",         color: "#FF9800" },
  { label: "PP1",                       href: "/pp1",                          color: "#FF9800" },
  { label: "PP2",                       href: "/pp2",                          color: "#FF9800" },

  { section: "Lower Primary", color: "#2196F3" },
  { label: "Lower Primary Overview",    href: "/pathway/lower-primary",        color: "#2196F3" },
  { label: "Grade 1",                   href: "/grade-1",                      color: "#2196F3" },
  { label: "Grade 2",                   href: "/grade-2",                      color: "#2196F3" },
  { label: "Grade 3",                   href: "/grade-3",                      color: "#2196F3" },

  { section: "Upper Primary", color: "#9C27B0" },
  { label: "Upper Primary Overview",    href: "/pathway/upper-primary",        color: "#9C27B0" },
  { label: "Grade 4",                   href: "/grade-4",                      color: "#9C27B0" },
  { label: "Grade 5",                   href: "/grade-5",                      color: "#9C27B0" },
  { label: "Grade 6 (KPSEA)",           href: "/grade-6",                      color: "#9C27B0" },

  { section: "Junior Secondary", color: "#F44336" },
  { label: "Junior Secondary Overview", href: "/pathway/junior-secondary",     color: "#F44336" },
  { label: "Grade 7",                   href: "/grade-7",                      color: "#F44336" },
  { label: "Grade 8",                   href: "/grade-8",                      color: "#F44336" },
  { label: "Grade 9 (KILEA)",           href: "/grade-9",                      color: "#F44336" },

  { section: "Senior Secondary", color: "#607D8B" },
  { label: "Senior Secondary Overview", href: "/pathway/senior-secondary",     color: "#607D8B" },
  { label: "Grade 10",                  href: "/grade-10",                     color: "#607D8B" },
  { label: "Grade 11",                  href: "/grade-11",                     color: "#607D8B" },
  { label: "Grade 12 (KSCE)",           href: "/grade-12",                     color: "#607D8B" },

  { section: "Senior Pathways", color: "#607D8B" },
  { label: "STEM Pathway",              href: "/pathway/senior-stem",          color: "#04AA6D" },
  { label: "Arts & Sports Pathway",     href: "/pathway/senior-arts",          color: "#E91E63" },
  { label: "Social Sciences Pathway",   href: "/pathway/senior-social",        color: "#795548" },

  { section: "Assessment" },
  { label: "Exercises",                 href: "/exercises" },
  { label: "Quizzes",                   href: "/quizzes" },
  { label: "Certificates",              href: "/certificates" },
  { label: "References",                href: "/references" },
];

export const HOME_MENU_LINKS: NavItem[] = HOME_MENU.filter(
  (i): i is NavItem => "href" in i
);

// ── isHomeFlowPath ────────────────────────────────────────────
export function isHomeFlowPath(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return true;   // /
  if (parts.length === 1) return true;   // /pp1  /about  /grade-1  etc
  if (parts[0] === "pathway") return true;
  const staticPages = ["about","kicd","exercises","quizzes","certificates","references","how-to","signin"];
  if (staticPages.includes(parts[0])) return true;
  return false;  // /pp1/language-activities or deeper = grade flow
}

// ── getPrevNext — HOME FLOW ───────────────────────────────────
// Used by SmartPrevNext on home-flow pages
export function getPrevNext(pathname: string): {
  prev: NavItem | null; next: NavItem | null
} {
  const idx = HOME_MENU_LINKS.findIndex(i => i.href === pathname);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? HOME_MENU_LINKS[idx - 1] : null,
    next: idx < HOME_MENU_LINKS.length - 1 ? HOME_MENU_LINKS[idx + 1] : null,
  };
}

// ── getSidebarPrevNext — GRADE FLOW ──────────────────────────
// "Sidebar-first": exhaust all subjects/topics of a grade before
// jumping to the next grade.
// topics: loaded from Supabase — pass [] if not yet loaded.
export function getSidebarPrevNext(
  pathname: string,
  grade: string,
  subject: string | null,
  topics: { name: string }[]
): { prev: NavItem | null; next: NavItem | null } {

  const g = GRADE_SUBJECTS[grade];
  if (!g) return { prev: null, next: null };

  const subjectSlugs = g.subjects.map(slugify);
  const gradeIndex   = GRADE_KEYS.indexOf(grade);
  const nextGrade    = gradeIndex < GRADE_KEYS.length - 1 ? GRADE_KEYS[gradeIndex + 1] : null;
  const prevGrade    = gradeIndex > 0 ? GRADE_KEYS[gradeIndex - 1] : null;

  // ── On the grade overview page (e.g. /pp1) ──────────────────
  if (!subject) {
    // prev: last subject+last topic of previous grade, or previous home-flow item
    let prev: NavItem | null = null;
    if (prevGrade) {
      const pg = GRADE_SUBJECTS[prevGrade];
      const lastSubSlug = slugify(pg.subjects[pg.subjects.length - 1]);
      prev = { label: pg.label + " — " + pg.subjects[pg.subjects.length - 1], href: `/${prevGrade}/${lastSubSlug}` };
    } else {
      // very first grade — prev is the last home-flow item before this grade
      const idx = HOME_MENU_LINKS.findIndex(i => i.href === `/${grade}`);
      prev = idx > 0 ? HOME_MENU_LINKS[idx - 1] : null;
    }
    // next: first subject of this grade
    const next: NavItem = {
      label: g.label + " — " + g.subjects[0],
      href:  `/${grade}/${subjectSlugs[0]}`
    };
    return { prev, next };
  }

  const subjectIndex = subjectSlugs.indexOf(subject);

  // ── On a subject intro page (e.g. /pp1/language-activities) ─
  if (pathname === `/${grade}/${subject}`) {
    // prev: previous subject's last topic, or grade overview
    let prev: NavItem | null;
    if (subjectIndex > 0) {
      prev = {
        label: g.label + " — " + g.subjects[subjectIndex - 1],
        href:  `/${grade}/${subjectSlugs[subjectIndex - 1]}`
      };
    } else {
      prev = { label: g.label + " Overview", href: `/${grade}` };
    }

    // next: first topic of this subject, or next subject, or next grade
    let next: NavItem;
    if (topics.length > 0) {
      next = {
        label: topics[0].name,
        href:  `/${grade}/${subject}/${slugify(topics[0].name)}`
      };
    } else if (subjectIndex < subjectSlugs.length - 1) {
      next = {
        label: g.label + " — " + g.subjects[subjectIndex + 1],
        href:  `/${grade}/${subjectSlugs[subjectIndex + 1]}`
      };
    } else if (nextGrade) {
      next = {
        label: GRADE_SUBJECTS[nextGrade].label + " Overview",
        href:  `/${nextGrade}`
      };
    } else {
      next = { label: "Exercises", href: "/exercises" };
    }
    return { prev, next };
  }

  // ── On a topic page (e.g. /pp1/language-activities/phonics) ─
  const topicSlugs = topics.map(t => slugify(t.name));
  const topicIndex = topicSlugs.indexOf(pathname.split("/")[3] ?? "");

  let prev: NavItem | null;
  if (topicIndex > 0) {
    // previous topic
    prev = {
      label: topics[topicIndex - 1].name,
      href:  `/${grade}/${subject}/${topicSlugs[topicIndex - 1]}`
    };
  } else {
    // back to subject intro
    prev = {
      label: g.label + " — " + g.subjects[subjectIndex],
      href:  `/${grade}/${subject}`
    };
  }

  let next: NavItem;
  if (topicIndex >= 0 && topicIndex < topicSlugs.length - 1) {
    // next topic
    next = {
      label: topics[topicIndex + 1].name,
      href:  `/${grade}/${subject}/${topicSlugs[topicIndex + 1]}`
    };
  } else if (subjectIndex < subjectSlugs.length - 1) {
    // next subject
    next = {
      label: g.label + " — " + g.subjects[subjectIndex + 1],
      href:  `/${grade}/${subjectSlugs[subjectIndex + 1]}`
    };
  } else if (nextGrade) {
    next = {
      label: GRADE_SUBJECTS[nextGrade].label + " Overview",
      href:  `/${nextGrade}`
    };
  } else {
    next = { label: "Exercises", href: "/exercises" };
  }

  return { prev, next };
}
''')

# ─────────────────────────────────────────────────────────────
# 2. Navigation.tsx — clean rewrite
# ─────────────────────────────────────────────────────────────
write("app/components/Navigation.tsx", '''\
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPrevNext } from "../../lib/nav";

// ── Breadcrumb ────────────────────────────────────────────────
interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="breadcrumb">
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {i > 0 && <span className="breadcrumb-sep">›</span>}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

// ── PrevNext (manual) ─────────────────────────────────────────
interface NavLink { label: string; href: string; }

export function PrevNext({ prev, next }: { prev?: NavLink; next?: NavLink }) {
  return (
    <div className="prev-next">
      {prev ? <Link href={prev.href} className="prev">{prev.label}</Link> : <span />}
      {next ? <Link href={next.href} className="next">{next.label}</Link> : <span />}
    </div>
  );
}

// ── SmartPrevNext — HOME FLOW ONLY ────────────────────────────
// Use this on home-flow pages: /, /about, /kicd, /pathway/*, grade overviews
// For grade-flow pages (subject/topic), the Sidebar handles prev/next.
export function SmartPrevNext({ position = "bottom" }: { position?: "top" | "bottom" }) {
  const pathname = usePathname();
  const { prev, next } = getPrevNext(pathname);
  const style = position === "top"
    ? { marginTop: 0, paddingTop: 0, borderTop: "none", marginBottom: "24px" }
    : { marginTop: "32px" };
  return (
    <div className="prev-next" style={style}>
      {prev ? <Link href={prev.href} className="prev">{prev.label}</Link> : <span />}
      {next ? <Link href={next.href} className="next">{next.label}</Link> : <span />}
    </div>
  );
}
''')

# ─────────────────────────────────────────────────────────────
# 3. Sidebar.tsx — clean rewrite using getSidebarPrevNext
# ─────────────────────────────────────────────────────────────
write("app/components/Sidebar.tsx", '''\
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import {
  HOME_MENU, HOME_MENU_LINKS,
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

  // ── HOME FLOW SIDEBAR ────────────────────────────────────────
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

  // ── GRADE FLOW SIDEBAR ───────────────────────────────────────
  if (grade && GRADE_SUBJECTS[grade]) {
    const g = GRADE_SUBJECTS[grade];
    const color = g.color;
    const subjects = g.subjects;
    const subjectSlugs = subjects.map(slugify);
    const subjectHref = subject ? `/${grade}/${subject}` : `/${grade}`;

    // Sidebar-first prev/next
    const { prev, next } = getSidebarPrevNext(pathname, grade, subject, topics);

    return (
      <aside className="sidebar" style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Link href={`/${grade}`} className="sidebar-header" style={{ background: color }}>
            {g.label}
          </Link>

          {subject && (
            <>
              <Link href={subjectHref} className={pathname === subjectHref ? "active" : ""}>
                {subject.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase())} — Introduction
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

        {/* Sidebar-first Prev / Next */}
        <div style={{ borderTop: "2px solid " + color, padding: "10px 8px", display: "flex", flexDirection: "column", gap: "6px", flexShrink: 0 }}>
          {prev && (
            <Link href={prev.href} style={{ background: color, color: "#fff", padding: "9px 14px", borderRadius: "3px", textDecoration: "none", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
              &#10094; Previous
            </Link>
          )}
          {next && (
            <Link href={next.href} style={{ background: color, color: "#fff", padding: "9px 14px", borderRadius: "3px", textDecoration: "none", fontSize: "13px", fontWeight: 700, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px" }}>
              Next &#10095;
            </Link>
          )}
        </div>
      </aside>
    );
  }

  return <aside className="sidebar" />;
}
''')

print("\n✅  Done! Run `npm run dev` to verify.\n")
print("   Navigation now follows sidebar-first logic:")
print("   - Home flow: walks HOME_MENU_LINKS order")
print("   - Grade flow: exhausts all subjects/topics before jumping to next grade")
print("   - GradeNav: highlights only when pathname matches grade href\n")
