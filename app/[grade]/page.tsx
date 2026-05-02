import Link from "next/link";
import { supabase } from "@/lib/supabase";
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
    about: "PP1 is the first year of Kenya's CBC Early Years pathway. Children aged 4 enter formal schooling for the first time and learn entirely through play, songs, stories, movement and hands-on exploration. The PP1 curriculum is governed by the KICD Early Years Curriculum Design (2017) and covers 5 learning areas delivered through guided play and structured daily routines.",
    highlights: ["Play-based learning throughout", "Mother tongue as language of instruction", "5 learning areas", "No written exams", "SBA through teacher observation", "Holistic child development"],
    subjects: [
      { name: "Language Activities", href: "/pp1/language-activities", desc: "Develops listening, speaking, reading readiness and pre-writing skills. Children learn to recognise letters, produce sounds and express themselves orally in their home language, Kiswahili and English.", strands: ["Listening & Speaking", "Reading Readiness", "Writing Readiness", "Creative Expression"] },
      { name: "Mathematical Activities", href: "/pp1/mathematical-activities", desc: "Builds number sense, counting, sorting and pattern recognition using physical objects. Children count from 1 to 20, sort by colour/shape/size and explore basic 2D shapes.", strands: ["Numbers 1–20", "Sorting & Matching", "Basic Shapes", "Patterns"] },
      { name: "Environmental Activities", href: "/pp1/environmental-activities", desc: "Explores the child's immediate world — family, home, body parts, common animals and plants. Children observe, ask questions and develop early science and social awareness.", strands: ["My Body", "My Family & Home", "Living Things", "Health & Safety"] },
      { name: "Psychomotor & Creative Activities", href: "/pp1/psychomotor-and-creative-activities", desc: "Develops gross and fine motor skills through movement, play, art, music and drama. Essential for brain development and physical coordination at age 4.", strands: ["Gross Motor Skills", "Fine Motor Skills", "Art & Craft", "Music & Movement"] },
      { name: "Religious Education", href: "/pp1/religious-education", desc: "Introduces core values — love, kindness, sharing, honesty and respect — through stories, songs and simple activities appropriate to the child's faith background (CRE, IRE or HRE).", strands: ["Values & Morals", "Stories & Songs", "Prayer & Worship", "Celebrations"] },
    ],
  },
  "pp2": {
    title: "PP2 — Pre-Primary 2", pathway: "Early Years", color: "#FF9800", age: "Age 5",
    prev: { href: "/pp1", label: "PP1" },
    next: { href: "/pp2/language-activities", label: "Language Activities" },
    about: "PP2 is the second and final year of the Early Years pathway. Building on PP1 foundations, children aged 5 move into deeper phonics, number operations, community exploration and more structured creative expression. PP2 prepares children for the transition into Grade 1 and the Lower Primary pathway. Assessment remains entirely through teacher observation and portfolios — no written exams.",
    highlights: ["Builds on PP1 foundations", "Phonics and reading readiness", "Counting to 100", "Community & environment focus", "Fine motor development", "Transition preparation for Grade 1"],
    subjects: [
      { name: "Language Activities", href: "/pp2/language-activities", desc: "Advances to phonics, sight words, simple sentence reading and early writing. Children develop the literacy skills needed to begin formal reading and writing in Grade 1.", strands: ["Phonics & Blending", "Sight Words", "Sentence Reading", "Early Writing"] },
      { name: "Mathematical Activities", href: "/pp2/mathematical-activities", desc: "Extends counting to 100, introduces simple addition and subtraction using objects, explores measurement (length, weight, capacity) and continues geometry and patterns.", strands: ["Numbers 1–100", "Addition & Subtraction", "Measurement", "Geometry"] },
      { name: "Environmental Activities", href: "/pp2/environmental-activities", desc: "Expands from the home to the school, community and wider environment. Children study weather, living vs non-living things, food and nutrition, and basic safety rules.", strands: ["My School & Community", "Weather & Seasons", "Living & Non-Living", "Food & Health"] },
      { name: "Psychomotor & Creative Activities", href: "/pp2/psychomotor-and-creative-activities", desc: "Transitions from free play to more structured creative tasks — guided art projects, simple instruments, drama scripts and coordinated physical activities preparing for Grade 1 sports.", strands: ["Structured Art Projects", "Drama & Role Play", "Musical Instruments", "Coordinated Movement"] },
      { name: "Religious Education", href: "/pp2/religious-education", desc: "Deepens understanding of values through moral stories, religious celebrations and simple prayer. Encourages respect for other faiths and introduces the concept of making good choices.", strands: ["Moral Decision-Making", "Religious Celebrations", "Prayer & Gratitude", "Respecting Others"] },
    ],
  },
};

const GENERIC_SUBJECTS: Record<string, { name: string; color: string; subjects: string[] }> = {
  "grade-1": { name: "Grade 1", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  "grade-2": { name: "Grade 2", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  "grade-3": { name: "Grade 3", color: "#2196F3", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  "grade-4": { name: "Grade 4", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
  "grade-5": { name: "Grade 5", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
  "grade-6": { name: "Grade 6", color: "#9C27B0", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
  "grade-7": { name: "Grade 7", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
  "grade-8": { name: "Grade 8", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
  "grade-9": { name: "Grade 9", color: "#F44336", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
  "grade-10": { name: "Grade 10", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture", "English", "Kiswahili", "Fine Art", "Music"] },
  "grade-11": { name: "Grade 11", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture", "English", "Kiswahili", "Fine Art", "Music"] },
  "grade-12": { name: "Grade 12", color: "#607D8B", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture", "English", "Kiswahili", "Fine Art", "Music"] },
};

function slugify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

function PrevNext({ prev, next, bottom }: { prev: { href: string; label: string }, next: { href: string; label: string }, bottom?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: bottom ? "40px 0 16px 0" : "0 0 28px 0", gap: "10px" }}>
      <Link href={prev.href} style={{ background: "#04AA6D", color: "#fff", padding: "10px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
        &#10094; {prev.label}
      </Link>
      {bottom && (
        <Link href="/signin" style={{ border: "1px solid #ccc", color: "#555", padding: "10px 22px", borderRadius: "3px", fontSize: "13px", textDecoration: "none", background: "#fff" }}>
          Sign in to track progress
        </Link>
      )}
      <Link href={next.href} style={{ background: "#04AA6D", color: "#fff", padding: "10px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
        {next.label} &#10095;
      </Link>
    </div>
  );
}

export default async function GradePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;
  const meta = GRADE_META[grade];

  // Rich page for PP1 and PP2
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

        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${meta.color} 0%, #e65100 100%)`, color: "#fff", padding: "36px 32px 44px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
          <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 12px", borderRadius: "10px", marginBottom: "12px" }}>
            {meta.pathway.toUpperCase()} &bull; {meta.age} &bull; 5 LEARNING AREAS
          </div>
          <h1 style={{ margin: "0 0 12px 0", fontSize: "34px", fontWeight: 700 }}>{meta.title}</h1>
          <p style={{ margin: "0 0 20px 0", opacity: 0.95, fontSize: "15px", maxWidth: "620px", lineHeight: 1.9 }}>{meta.about}</p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {meta.highlights.map(h => (
              <span key={h} style={{ background: "rgba(255,255,255,0.2)", padding: "5px 14px", borderRadius: "20px", fontSize: "12px" }}>{h}</span>
            ))}
          </div>
        </div>
        <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderTop: "none", padding: "12px 32px 14px 32px", marginBottom: "28px" }}>
          <p style={{ margin: 0, fontSize: "13px", color: "#856404" }}>
            <strong>No national exam at this level.</strong> Assessment is through continuous School Based Assessment (SBA) — teacher observations, portfolios and activity records.
          </p>
        </div>

        {/* Learning Areas */}
        <h2>Learning Areas in {meta.title}</h2>
        <p>All {meta.title} learning is organised into <strong>5 learning areas</strong>. Click any learning area to start studying.</p>
        <div style={{ marginBottom: "28px" }}>
          {meta.subjects.map((s, i) => (
            <Link key={s.name} href={s.href} style={{ textDecoration: "none", display: "block", marginBottom: "12px" }}>
              <div className="grade-subject-card" style={{ border: "1px solid #eee", borderLeft: `5px solid ${meta.color}`, borderRadius: "0 4px 4px 0", padding: "16px 20px", background: "#fafafa", transition: "background 0.15s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <span style={{ background: meta.color, color: "#fff", fontSize: "11px", padding: "2px 8px", borderRadius: "2px", marginRight: "10px", fontWeight: 700 }}>Area {i + 1}</span>
                    <strong style={{ fontSize: "15px", color: "#222" }}>{s.name}</strong>
                  </div>
                  <span style={{ color: "#04AA6D", fontWeight: 700, fontSize: "13px" }}>Start &rarr;</span>
                </div>
                <p style={{ margin: "8px 0 10px 0", fontSize: "13px", color: "#555", lineHeight: 1.7 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {s.strands.map(st => (
                    <span key={st} style={{ background: "#fff", border: `1px solid ${meta.color}`, color: meta.color, fontSize: "11px", padding: "2px 10px", borderRadius: "10px" }}>{st}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* SBA note */}
        <div className="example-box">
          <div className="example-box-header">School Based Assessment (SBA) in {meta.title}</div>
          <div className="example-box-body">
            <p style={{ margin: "0 0 10px 0" }}>Teachers assess {meta.title} learners continuously using these tools:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: 2, fontSize: "14px" }}>
              <li><strong>Observation Records</strong> — Daily notes on each child's participation and skill development</li>
              <li><strong>Portfolio</strong> — Collection of drawings, crafts and activity sheets showing growth</li>
              <li><strong>Anecdotal Notes</strong> — Written records of significant learning moments</li>
              <li><strong>Parent Communication</strong> — Regular updates on progress at home and school</li>
            </ul>
          </div>
        </div>

        <PrevNext prev={meta.prev} next={meta.next} bottom />
      </div>
    );
  }

  // Generic page for Grade 1–12
  const generic = GENERIC_SUBJECTS[grade];
  const gradeName = generic?.name || grade.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  const color = generic?.color || "#04AA6D";
  const subjects = generic?.subjects || [];

  const gradeNum = parseInt(grade.replace("grade-", ""));
  const prevGrade = gradeNum > 1 ? `/grade-${gradeNum - 1}` : "/pathway/early-years";
  const prevLabel = gradeNum > 1 ? `Grade ${gradeNum - 1}` : "Early Years";
  const nextGrade = `/grade-${gradeNum}/` + slugify(subjects[0] || "");
  const nextLabel = subjects[0] || "Subjects";

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>{gradeName}</span>
      </div>

      <PrevNext prev={{ href: prevGrade, label: prevLabel }} next={{ href: nextGrade, label: nextLabel }} />

      <div style={{ background: `linear-gradient(135deg, ${color} 0%, #036b45 100%)`, color: "#fff", padding: "36px 32px 44px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "34px", fontWeight: 700 }}>{gradeName}</h1>
        <p style={{ margin: 0, opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>
          Select a subject below to start learning. All content is aligned to the KICD CBC framework and covers the full curriculum for {gradeName}.
        </p>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "12px 32px 14px 32px", marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#1a5c35" }}>{subjects.length} subjects &bull; KICD CBC aligned &bull; School Based Assessment throughout</p>
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

      <div className="note-box">
        <strong>Content being expanded:</strong> Detailed topic breakdowns, exercises and quizzes for each subject are being added. Check back regularly.
      </div>

      <PrevNext prev={{ href: prevGrade, label: prevLabel }} next={{ href: nextGrade, label: nextLabel }} bottom />
    </div>
  );
}
