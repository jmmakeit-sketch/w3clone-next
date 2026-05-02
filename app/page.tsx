import Link from "next/link";

// ── DATA ─────────────────────────────────────────────────────────
const EARLY_YEARS = [
  { grade: "PP1", href: "/pp1", subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Psychomotor and Creative Activities","Religious Education"] },
  { grade: "PP2", href: "/pp2", subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Psychomotor and Creative Activities","Religious Education"] },
];
const LOWER_PRIMARY = [
  { grade: "Grade 1", href: "/grade-1", subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  { grade: "Grade 2", href: "/grade-2", subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
  { grade: "Grade 3", href: "/grade-3", subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene and Nutrition","Religious Education"] },
];
const UPPER_PRIMARY = [
  { grade: "Grade 4", href: "/grade-4", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  { grade: "Grade 5", href: "/grade-5", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"] },
  { grade: "Grade 6", href: "/grade-6", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts and Sports","Religious Education","Agriculture"], exam: "KPSEA" },
];
const JUNIOR_SEC = [
  { grade: "Grade 7", href: "/grade-7", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  { grade: "Grade 8", href: "/grade-8", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"] },
  { grade: "Grade 9", href: "/grade-9", subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies","Creative Arts and Sports"], exam: "KILEA" },
];
const SENIOR_SEC = [
  { pathway: "STEM",           href: "/pathway/senior-stem",   color: "#04AA6D", subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture"] },
  { pathway: "Arts & Sports",  href: "/pathway/senior-arts",   color: "#E91E63", subjects: ["Fine Art","Music","Theatre Arts","Sports Science","English","Kiswahili"] },
  { pathway: "Social Sciences",href: "/pathway/senior-social", color: "#795548", subjects: ["History","Geography","Economics","Business Studies","English","Kiswahili"] },
];

function slugify(t: string) { return t.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and"); }

function GradeBlock({ grade, href, subjects, exam, color }: { grade: string; href: string; subjects: string[]; exam?: string; color: string }) {
  return (
    <div style={{ border: "1px solid #ddd", borderTop: `3px solid ${color}`, borderRadius: "0 0 3px 3px", marginBottom: "10px" }}>
      <div style={{ background: color, color: "#fff", padding: "8px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href={href} style={{ color: "#fff", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>{grade}</Link>
        {exam && <span style={{ background: "rgba(255,255,255,0.25)", fontSize: "11px", padding: "2px 8px", borderRadius: "10px", fontWeight: 700 }}>{exam}</span>}
      </div>
      <div style={{ padding: "8px 14px 10px 14px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {subjects.map(s => (
          <Link key={s} href={`${href}/${slugify(s)}`}
            style={{ fontSize: "12px", color: "#04AA6D", textDecoration: "none", background: "#f5f5f5", border: "1px solid #e0e0e0", borderRadius: "2px", padding: "3px 9px", whiteSpace: "nowrap" }}>
            {s}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "40px 36px", borderRadius: "4px", marginBottom: "28px" }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "34px", fontWeight: 700 }}>CBC Kenya Schools</h1>
        <p style={{ margin: "0 0 20px 0", fontSize: "15px", opacity: 0.93, maxWidth: "580px", lineHeight: 1.8 }}>
          Free online learning for every Kenyan child — from Playgroup to Grade 12.
          Fully aligned to the <strong>KICD Competency Based Curriculum (CBC/CBE)</strong>.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Link href="/pp1" style={{ background: "#fff", color: "#04AA6D", padding: "10px 26px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>Start Learning &rarr;</Link>
          <Link href="/about" style={{ background: "transparent", color: "#fff", padding: "10px 26px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none", border: "2px solid rgba(255,255,255,0.55)" }}>About CBC</Link>
        </div>
      </div>

      {/* ── QUICK PICK YOUR GRADE ─────────────────────────────── */}
      <div style={{ background: "#f8f8f8", border: "1px solid #ddd", borderLeft: "5px solid #04AA6D", padding: "18px 22px", marginBottom: "28px", borderRadius: "0 3px 3px 0" }}>
        <strong style={{ fontSize: "15px" }}>Pick Your Grade &mdash; Start Learning Instantly</strong>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "12px" }}>
          {[
            { l:"PP1",      h:"/pp1",      c:"#FF9800" },{ l:"PP2",      h:"/pp2",      c:"#FF9800" },
            { l:"Grade 1",  h:"/grade-1",  c:"#2196F3" },{ l:"Grade 2",  h:"/grade-2",  c:"#2196F3" },{ l:"Grade 3",  h:"/grade-3",  c:"#2196F3" },
            { l:"Grade 4",  h:"/grade-4",  c:"#9C27B0" },{ l:"Grade 5",  h:"/grade-5",  c:"#9C27B0" },{ l:"Grade 6",  h:"/grade-6",  c:"#9C27B0" },
            { l:"Grade 7",  h:"/grade-7",  c:"#F44336" },{ l:"Grade 8",  h:"/grade-8",  c:"#F44336" },{ l:"Grade 9",  h:"/grade-9",  c:"#F44336" },
            { l:"Grade 10", h:"/grade-10", c:"#607D8B" },{ l:"Grade 11", h:"/grade-11", c:"#607D8B" },{ l:"Grade 12", h:"/grade-12", c:"#607D8B" },
          ].map(g => <Link key={g.l} href={g.h} style={{ background: g.c, color: "#fff", padding: "7px 14px", borderRadius: "3px", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>{g.l}</Link>)}
        </div>
      </div>

      {/* ── WHAT IS CBC ──────────────────────────────────────── */}
      <div className="note-box" style={{ marginBottom: "28px" }}>
        <strong>What is CBC?</strong>
        <p style={{ margin: "8px 0 0 0", lineHeight: 1.7 }}>
          The <strong>Competency Based Curriculum</strong> is Kenya&apos;s education framework designed by KICD.
          It replaces the 8-4-4 system and follows a <strong>2-6-3-3</strong> structure —
          2 years Early Years, 6 years Primary, 3 years Junior Secondary, 3 years Senior Secondary.
          National exams: <strong>KPSEA</strong> (Grade 6), <strong>KILEA</strong> (Grade 9), <strong>KSCE</strong> (Grade 12).{" "}
          <Link href="/about" style={{ color: "#04AA6D", fontWeight: 700 }}>Learn more &rarr;</Link>
        </p>
      </div>

      {/* ── EARLY YEARS ──────────────────────────────────────── */}
      <h2 style={{ borderBottom: "3px solid #FF9800", paddingBottom: "6px", marginBottom: "6px", color: "#FF9800" }}>
        <Link href="/pathway/early-years" style={{ color: "#FF9800", textDecoration: "none" }}>Early Years</Link>
      </h2>
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>Playgroup, PP1, PP2 &mdash; Ages 4&ndash;5 &mdash; Learning through play &mdash; No national exam</p>
      {EARLY_YEARS.map(g => <GradeBlock key={g.grade} grade={g.grade} href={g.href} subjects={g.subjects} color="#FF9800" />)}

      {/* ── LOWER PRIMARY ────────────────────────────────────── */}
      <h2 style={{ borderBottom: "3px solid #2196F3", paddingBottom: "6px", marginBottom: "6px", marginTop: "24px", color: "#2196F3" }}>
        <Link href="/pathway/lower-primary" style={{ color: "#2196F3", textDecoration: "none" }}>Lower Primary</Link>
      </h2>
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>Grade 1, 2, 3 &mdash; Ages 6&ndash;8 &mdash; Literacy & numeracy foundations &mdash; Continuous SBA</p>
      {LOWER_PRIMARY.map(g => <GradeBlock key={g.grade} grade={g.grade} href={g.href} subjects={g.subjects} color="#2196F3" />)}

      {/* ── UPPER PRIMARY ────────────────────────────────────── */}
      <h2 style={{ borderBottom: "3px solid #9C27B0", paddingBottom: "6px", marginBottom: "6px", marginTop: "24px", color: "#9C27B0" }}>
        <Link href="/pathway/upper-primary" style={{ color: "#9C27B0", textDecoration: "none" }}>Upper Primary</Link>
      </h2>
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>Grade 4, 5, 6 &mdash; Ages 9&ndash;11 &mdash; <strong style={{ color: "#856404" }}>KPSEA at end of Grade 6</strong></p>
      {UPPER_PRIMARY.map(g => <GradeBlock key={g.grade} grade={g.grade} href={g.href} subjects={g.subjects} exam={(g as any).exam} color="#9C27B0" />)}

      {/* ── JUNIOR SECONDARY ─────────────────────────────────── */}
      <h2 style={{ borderBottom: "3px solid #F44336", paddingBottom: "6px", marginBottom: "6px", marginTop: "24px", color: "#F44336" }}>
        <Link href="/pathway/junior-secondary" style={{ color: "#F44336", textDecoration: "none" }}>Junior Secondary</Link>
      </h2>
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>Grade 7, 8, 9 &mdash; Ages 12&ndash;14 &mdash; <strong style={{ color: "#856404" }}>KILEA at end of Grade 9</strong></p>
      {JUNIOR_SEC.map(g => <GradeBlock key={g.grade} grade={g.grade} href={g.href} subjects={g.subjects} exam={(g as any).exam} color="#F44336" />)}

      {/* ── SENIOR SECONDARY ─────────────────────────────────── */}
      <h2 style={{ borderBottom: "3px solid #607D8B", paddingBottom: "6px", marginBottom: "6px", marginTop: "24px", color: "#607D8B" }}>
        <Link href="/pathway/senior-secondary" style={{ color: "#607D8B", textDecoration: "none" }}>Senior Secondary</Link>
      </h2>
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>Grade 10, 11, 12 &mdash; Ages 15&ndash;17 &mdash; Choose a pathway &mdash; <strong style={{ color: "#856404" }}>KSCE at end of Grade 12</strong></p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px", marginBottom: "10px" }}>
        {SENIOR_SEC.map(p => (
          <div key={p.pathway} style={{ border: "1px solid #ddd", borderTop: `3px solid ${p.color}`, borderRadius: "0 0 3px 3px" }}>
            <div style={{ background: p.color, color: "#fff", padding: "8px 14px" }}>
              <Link href={p.href} style={{ color: "#fff", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>{p.pathway} Pathway</Link>
            </div>
            <div style={{ padding: "8px 14px 10px 14px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {p.subjects.map(s => (
                <Link key={s} href={`/grade-10/${slugify(s)}`}
                  style={{ fontSize: "12px", color: p.color, textDecoration: "none", background: "#f5f5f5", border: `1px solid ${p.color}33`, borderRadius: "2px", padding: "3px 9px", whiteSpace: "nowrap" }}>
                  {s}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: "28px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {[{l:"Grade 10",h:"/grade-10"},{l:"Grade 11",h:"/grade-11"},{l:"Grade 12 (KSCE)",h:"/grade-12"}].map(g => (
          <Link key={g.l} href={g.h} style={{ background: "#607D8B", color: "#fff", padding: "7px 16px", borderRadius: "3px", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>{g.l}</Link>
        ))}
      </div>

      {/* ── ASSESSMENT ───────────────────────────────────────── */}
      <h2 style={{ borderBottom: "3px solid #04AA6D", paddingBottom: "6px", marginBottom: "14px", marginTop: "8px" }}>Assessment & Practice</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", marginBottom: "28px" }}>
        {[
          { title: "Exercises",    href: "/exercises",    color: "#04AA6D", desc: "Fill-in, true/false and match questions for every topic." },
          { title: "Quizzes",      href: "/quizzes",      color: "#2196F3", desc: "Multiple choice quizzes with instant results and feedback." },
          { title: "Certificates", href: "/certificates", color: "#1a237e", desc: "Complete a subject and earn your CBC learning certificate." },
        ].map(c => (
          <Link key={c.title} href={c.href} style={{ textDecoration: "none", border: "1px solid #ddd", borderTop: `3px solid ${c.color}`, padding: "14px 16px", borderRadius: "0 0 3px 3px", display: "block" }}>
            <div style={{ fontWeight: 700, fontSize: "15px", color: c.color, marginBottom: "6px" }}>{c.title}</div>
            <div style={{ fontSize: "12px", color: "#666", lineHeight: 1.6 }}>{c.desc}</div>
          </Link>
        ))}
      </div>

      {/* ── REFERENCES & HOW-TO ──────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "28px" }}>
        <div>
          <h2 style={{ borderBottom: "3px solid #04AA6D", paddingBottom: "6px", marginBottom: "10px" }}>References</h2>
          {[
            { l:"KICD Website",             h:"https://kicd.ac.ke",        ext: true },
            { l:"CBC Curriculum Designs",   h:"/references" },
            { l:"SBA Assessment Guides",    h:"/references" },
            { l:"KPSEA Information",        h:"/references" },
            { l:"KILEA Information",        h:"/references" },
            { l:"KSCE Information",         h:"/references" },
            { l:"CBC Glossary",             h:"/references" },
            { l:"Parent & Teacher Guide",   h:"/references" },
          ].map(r => (
            <div key={r.l} style={{ borderBottom: "1px solid #f0f0f0" }}>
              {(r as any).ext
                ? <a href={r.h} target="_blank" rel="noreferrer" style={{ display: "flex", justifyContent: "space-between", padding: "8px 2px", color: "#04AA6D", textDecoration: "none", fontSize: "14px" }}>{r.l} <span>&#8599;</span></a>
                : <Link href={r.h} style={{ display: "flex", justifyContent: "space-between", padding: "8px 2px", color: "#04AA6D", textDecoration: "none", fontSize: "14px" }}>{r.l} <span style={{ color: "#ccc" }}>&#8250;</span></Link>
              }
            </div>
          ))}
        </div>
        <div>
          <h2 style={{ borderBottom: "3px solid #04AA6D", paddingBottom: "6px", marginBottom: "10px" }}>How To</h2>
          {[
            { l:"How to Use This Site",        h:"/how-to" },
            { l:"How SBA Works",               h:"/how-to" },
            { l:"How to Prepare for KPSEA",    h:"/how-to" },
            { l:"How to Prepare for KILEA",    h:"/how-to" },
            { l:"How to Prepare for KSCE",     h:"/how-to" },
            { l:"How to Choose a Pathway",     h:"/how-to" },
            { l:"Parent Support Guide",        h:"/how-to" },
            { l:"Teacher Implementation",      h:"/how-to" },
          ].map(h => (
            <div key={h.l} style={{ borderBottom: "1px solid #f0f0f0" }}>
              <Link href={h.h} style={{ display: "flex", justifyContent: "space-between", padding: "8px 2px", color: "#04AA6D", textDecoration: "none", fontSize: "14px" }}>{h.l} <span style={{ color: "#ccc" }}>&#8250;</span></Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── CBC STRUCTURE BOX ────────────────────────────────── */}
      <div className="example-box">
        <div className="example-box-header">Kenya CBC Structure — 2-6-3-3</div>
        <div className="example-box-body">
          <table style={{ margin: 0 }}>
            <thead><tr><th>Level</th><th>Grades</th><th>Ages</th><th>Exam</th></tr></thead>
            <tbody>
              {[
                ["Early Years",       "PP1, PP2",         "4–5",   "None — SBA only",  "#FF9800"],
                ["Lower Primary",     "Grade 1, 2, 3",    "6–8",   "None — SBA only",  "#2196F3"],
                ["Upper Primary",     "Grade 4, 5, 6",    "9–11",  "KPSEA (Grade 6)",  "#9C27B0"],
                ["Junior Secondary",  "Grade 7, 8, 9",    "12–14", "KILEA (Grade 9)",  "#F44336"],
                ["Senior Secondary",  "Grade 10, 11, 12", "15–17", "KSCE (Grade 12)",  "#607D8B"],
              ].map(([level, grades, ages, exam, color]) => (
                <tr key={level as string}>
                  <td><span style={{ background: color as string, color: "#fff", fontSize: "11px", padding: "2px 8px", borderRadius: "2px", fontWeight: 700 }}>{level as string}</span></td>
                  <td style={{ fontSize: "13px" }}>{grades as string}</td>
                  <td style={{ fontSize: "13px", color: "#666" }}>{ages as string}</td>
                  <td style={{ fontSize: "12px", color: "#856404", fontWeight: 600 }}>{exam as string}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: "14px" }}>
            <Link href="/about" style={{ color: "#04AA6D", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>Learn more about Kenya CBC &rarr;</Link>
          </div>
        </div>
      </div>

    </div>
  );
}