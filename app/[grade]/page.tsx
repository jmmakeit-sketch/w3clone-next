import Link from "next/link";
import React from "react";
import { supabase } from "@/lib/supabase";
import GradeNavigator from "../grade-5/agriculture-nutrition/data/GradeNavigator";

export const dynamic = "force-dynamic";

const GRADE_META: Record<string, {
  title: string; pathway: string; color: string; age: string;
  prev: { href: string; label: string }; next: { href: string; label: string };
  about: string; highlights: string[];
  subjects: { name: string; href: string; desc: string; strands: string[] }[];
}> = {
  "pp1": {
    title: "PP1 — Pre-Primary 1", pathway: "Early Years", color: "#FF9800", age: "Age 4",
    prev: { href: "/pathway/early-years", label: "Early Years Pathway" },
    next: { href: "/pp1/language-activities", label: "Language Activities" },
    about: "PP1 is the first year of Kenya's CBC Early Years pathway. Children aged 4 enter formal schooling for the first time and learn entirely through play, songs, stories, movement and hands-on exploration.",
    highlights: ["Play-based learning throughout", "5 learning areas", "No written exams", "Holistic child development"],
    subjects: [
      { name: "Language Activities", href: "/pp1/language-activities", desc: "Develops listening, speaking, reading readiness and pre-writing skills.", strands: ["Listening & Speaking", "Reading Readiness", "Writing Readiness"] },
      { name: "Mathematical Activities", href: "/pp1/mathematical-activities", desc: "Builds number sense, counting, sorting and pattern recognition.", strands: ["Numbers 1–20", "Sorting & Matching", "Basic Shapes"] }
    ],
  },
  "pp2": {
    title: "PP2 — Pre-Primary 2", pathway: "Early Years", color: "#FF9800", age: "Age 5",
    prev: { href: "/pp1", label: "PP1" },
    next: { href: "/pp2/language-activities", label: "Language Activities" },
    about: "PP2 is the second and final year of the Early Years pathway. Building on PP1 foundations, children aged 5 move into deeper phonics and number operations.",
    highlights: ["Builds on PP1 foundations", "Phonics readiness", "Counting to 100", "Transition preparation for Grade 1"],
    subjects: [
      { name: "Language Activities", href: "/pp2/language-activities", desc: "Advances to phonics, sight words, simple sentence reading and early writing.", strands: ["Phonics & Blending", "Sight Words", "Sentence Reading"] },
      { name: "Mathematical Activities", href: "/pp2/mathematical-activities", desc: "Extends counting to 100, introduces simple addition and subtraction.", strands: ["Numbers 1–100", "Addition & Subtraction", "Measurement"] }
    ],
  },
};

const GENERIC_SUBJECTS: Record<string, { name: string; color: string; subjects: string[] }> = {
  "grade-1": { name: "Grade 1", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  "grade-2": { name: "Grade 2", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  "grade-3": { name: "Grade 3", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  "grade-4": { name: "Grade 4", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture & Nutrition"] },
  "grade-5": { name: "Grade 5", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture & Nutrition"] },
  "grade-6": { name: "Grade 6", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture & Nutrition"] },
  "grade-7": { name: "Grade 7", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture & Nutrition", "Social Studies", "Creative Arts & Sports"] },
  "grade-8": { name: "Grade 8", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture & Nutrition", "Social Studies", "Creative Arts & Sports"] },
  "grade-9": { name: "Grade 9", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture & Nutrition", "Social Studies", "Creative Arts & Sports"] },
  "grade-10": { name: "Grade 10", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture & Nutrition", "English", "Kiswahili", "Fine Art", "Music"] },
  "grade-11": { name: "Grade 11", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture & Nutrition", "English", "Kiswahili", "Fine Art", "Music"] },
  "grade-12": { name: "Grade 12", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture & Nutrition", "English", "Kiswahili", "Fine Art", "Music"] },
};

function slugify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

function PrevNext({ prev, next, bottom }: { prev: { href: string; label: string }, next: { href: string; label: string }, bottom?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: bottom ? "40px 0 16px 0" : "0 0 28px 0", gap: "10px" }}>
      <Link href={prev.href} style={{ background: "#04AA6D", color: "#fff", padding: "10px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
        &#10094; Previous
      </Link>
      {bottom && (
        <Link href="/signin" style={{ border: "1px solid #ccc", color: "#555", padding: "10px 22px", borderRadius: "3px", fontSize: "13px", textDecoration: "none", background: "#fff" }}>
          Sign in to track progress
        </Link>
      )}
      <Link href={next.href} style={{ background: "#04AA6D", color: "#fff", padding: "10px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
        Next &#10095;
      </Link>
    </div>
  );
}

export default async function GradePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;
  const meta = GRADE_META[grade];

  if (meta) {
    return (
      <div>
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">&rsaquo;</span>
          <Link href="/pathway/early-years">Early Years</Link>
          <span className="breadcrumb-sep">&rsaquo;</span>
          <span>{meta.title}</span>
        </div>
        <PrevNext prev={meta.prev} next={meta.next} />
        <div style={{ background: `linear-gradient(135deg, ${meta.color} 0%, #e65100 100%)`, color: "#fff", padding: "36px 32px 44px 32px", borderRadius: "4px 4px 0 0" }}>
          <h1 style={{ margin: "0 0 12px 0", fontSize: "34px", fontWeight: 700 }}>{meta.title}</h1>
          <p style={{ margin: "0 0 20px 0", opacity: 0.95, fontSize: "15px", maxWidth: "620px", lineHeight: 1.9 }}>{meta.about}</p>
        </div>
        <h2>Learning Areas in {meta.title}</h2>
        <div>
          {meta.subjects.map((s, i) => (
            <Link key={s.name} href={s.href} style={{ textDecoration: "none", display: "block", marginBottom: "12px" }}>
              <div style={{ border: "1px solid #eee", borderLeft: `5px solid ${meta.color}`, padding: "16px 20px", background: "#fafafa" }}>
                <strong>{s.name}</strong>
              </div>
            </Link>
          ))}
        </div>
        <PrevNext prev={meta.prev} next={meta.next} bottom />
      </div>
    );
  }

  const generic = GENERIC_SUBJECTS[grade];
  const gradeName = generic?.name || grade.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  const color = generic?.color || "#04AA6D";
  const subjects = generic?.subjects || [];

  const gradeNum = parseInt(grade.replace("grade-", ""));
  const isUpperPrimary = gradeNum === 4 || gradeNum === 5 || gradeNum === 6;

  const prevGrade = gradeNum > 1 ? `/grade-${gradeNum - 1}` : "/pathway/early-years";
  const prevLabel = gradeNum > 1 ? `Grade ${gradeNum - 1}` : "Early Years";
  const nextGrade = `/grade-${gradeNum}/` + slugify(subjects[0] || "");
  const nextLabel = subjects[0] || "Subjects";

  return (
    <div className="space-y-6">
      {isUpperPrimary && (
        <div className="mb-4">
          <GradeNavigator currentGrade={gradeNum.toString()} />
        </div>
      )}

      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>{gradeName}</span>
      </div>

      <PrevNext prev={{ href: prevGrade, label: prevLabel }} next={{ href: nextGrade, label: nextLabel }} />

      <div style={{ background: `linear-gradient(135deg, ${color} 0%, #036b45 100%)`, color: "#fff", padding: "36px 32px 44px 32px", borderRadius: "4px 4px 0 0" }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "34px", fontWeight: 700 }}>{gradeName}</h1>
        <p style={{ margin: 0, opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>
          Select a subject below to start learning. All content is aligned to the KICD CBC framework.
        </p>
      </div>

      <h2>Subjects in {gradeName}</h2>
      <div className="subject-grid" style={{ marginBottom: "28px" }}>
        {subjects.map(s => (
          <Link key={s} href={`/${grade}/${slugify(s)}`} className="subject-card">
            <div className="subject-card-header" style={{ background: color }}>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>{s}</div>
            </div>
            <div className="subject-card-body" style={{ fontSize: "12px", color: "#555" }}>
              Click to start {s} for {gradeName} &rarr;
            </div>
          </Link>
        ))}
      </div>

      <PrevNext prev={{ href: prevGrade, label: prevLabel }} next={{ href: nextGrade, label: nextLabel }} bottom />
    </div>
  );
}