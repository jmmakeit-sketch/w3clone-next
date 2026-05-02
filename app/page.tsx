import Link from "next/link";

const PATHWAYS = [
  { name: "Early Years",           grades: "Playgroup, PP1, PP2",  color: "#FF9800", href: "/pathway/early-years",   subjects: ["Language Activities","Mathematical Activities","Environmental Activities","Psychomotor & Creative","Religious Education"], exam: null },
  { name: "Lower Primary",         grades: "Grade 1, 2, 3",        color: "#2196F3", href: "/pathway/lower-primary",  subjects: ["English","Kiswahili","Mathematics","Environmental Activities","Creative Arts","Hygiene & Nutrition"], exam: null },
  { name: "Upper Primary",         grades: "Grade 4, 5, 6",        color: "#9C27B0", href: "/pathway/upper-primary",  subjects: ["English","Kiswahili","Mathematics","Integrated Science","Social Studies","Creative Arts & Sports","Agriculture"], exam: "KPSEA — End of Grade 6" },
  { name: "Junior Secondary",      grades: "Grade 7, 8, 9",        color: "#F44336", href: "/pathway/junior-secondary",subjects: ["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Agriculture","Social Studies"], exam: "KILEA — End of Grade 9" },
  { name: "Senior Secondary STEM", grades: "Grade 10, 11, 12",     color: "#04AA6D", href: "/pathway/senior-stem",    subjects: ["Mathematics","Physics","Chemistry","Biology","Computer Science","Agriculture"], exam: "KSCE — End of Grade 12" },
  { name: "Senior Secondary Arts", grades: "Grade 10, 11, 12",     color: "#607D8B", href: "/pathway/senior-arts",    subjects: ["Fine Art","Music","Theatre Arts","Sports Science","English","Kiswahili"], exam: "KSCE — End of Grade 12" },
  { name: "Senior Secondary Social",grades: "Grade 10, 11, 12",    color: "#795548", href: "/pathway/senior-social",  subjects: ["History","Geography","Economics","Business Studies","English","Kiswahili"], exam: "KSCE — End of Grade 12" },
];

const POPULAR = [
  { label: "PP1 Language Activities",    href: "/pp1/language-activities",           color: "#FF9800", snippet: "Listening & Speaking\nReading Readiness\nWriting Readiness\nCreative Expression" },
  { label: "PP1 Mathematical Activities",href: "/pp1/mathematical-activities",        color: "#FF9800", snippet: "Numbers 1–20\nSorting & Matching\nBasic Shapes\nPatterns" },
  { label: "Grade 4 Mathematics",        href: "/grade-4/mathematics",               color: "#9C27B0", snippet: "Whole Numbers\nAddition\nSubtraction\nMultiplication" },
  { label: "Grade 4 English",            href: "/grade-4/english",                   color: "#9C27B0", snippet: "Reading\nWriting\nGrammar\nOral Skills" },
  { label: "Grade 7 Mathematics",        href: "/grade-7/mathematics",               color: "#F44336", snippet: "Algebra\nGeometry\nStatistics\nRatios" },
  { label: "Grade 7 Integrated Science", href: "/grade-7/integrated-science",        color: "#F44336", snippet: "Biology\nChemistry\nPhysics\nEarth Science" },
  { label: "Grade 10 Mathematics",       href: "/grade-10/mathematics",              color: "#04AA6D", snippet: "Calculus Intro\nTrigonometry\nStatistics\nLinear Programming" },
  { label: "Grade 10 Biology",           href: "/grade-10/biology",                  color: "#04AA6D", snippet: "Cell Biology\nGenetics\nEcosystems\nEvolution" },
];

const REFERENCES = [
  { label: "KICD Website",              href: "https://kicd.ac.ke",                  external: true  },
  { label: "CBC Curriculum Designs",    href: "/references/curriculum-designs",      external: false },
  { label: "SBA Assessment Guides",     href: "/references/sba-guides",             external: false },
  { label: "KPSEA Past Papers",         href: "/references/kpsea",                  external: false },
  { label: "KILEA Past Papers",         href: "/references/kilea",                  external: false },
  { label: "KSCE Past Papers",          href: "/references/ksce",                   external: false },
  { label: "CBC Glossary",              href: "/references/glossary",               external: false },
  { label: "Parent & Teacher Guide",    href: "/references/parent-guide",           external: false },
];

const HOW_TO = [
  { label: "How to Use This Site",      href: "/how-to/use-this-site"   },
  { label: "How SBA Works",             href: "/how-to/sba"             },
  { label: "How to Prepare for KPSEA",  href: "/how-to/kpsea-prep"      },
  { label: "How to Prepare for KILEA",  href: "/how-to/kilea-prep"      },
  { label: "How to Prepare for KSCE",   href: "/how-to/ksce-prep"       },
  { label: "How to Choose a Pathway",   href: "/how-to/choose-pathway"  },
];

export default function Home() {
  return (
    <div>

      {/* ── 1. HERO ───────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "48px 40px", borderRadius: "4px", marginBottom: "32px" }}>
        <h1 style={{ margin: "0 0 12px 0", fontSize: "36px", fontWeight: 700 }}>Welcome to CBC Kenya Schools</h1>
        <p style={{ margin: "0 0 24px 0", fontSize: "16px", opacity: 0.92, maxWidth: "600px", lineHeight: 1.7 }}>
          Your complete online resource for the Kenyan Competency Based Curriculum (CBC/CBE).
          Free learning for every Kenyan child — from Playgroup to Grade 12.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "28px" }}>
          {["KICD Aligned","PP1 to Grade 12","Free for All Kenyans","School Based Assessment"].map(b => (
            <span key={b} style={{ background: "rgba(255,255,255,0.2)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: 600 }}>{b}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/pp1" style={{ background: "#fff", color: "#04AA6D", padding: "11px 28px", borderRadius: "3px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
            Start Learning &rarr;
          </Link>
          <Link href="/pathway/early-years" style={{ background: "transparent", color: "#fff", padding: "11px 28px", borderRadius: "3px", fontWeight: 700, fontSize: "15px", textDecoration: "none", border: "2px solid rgba(255,255,255,0.6)" }}>
            Browse Pathways
          </Link>
        </div>
      </div>

      {/* ── 2. NOT SURE WHERE TO BEGIN ────────────────────────── */}
      <div style={{ background: "#f8f8f8", border: "1px solid #ddd", borderLeft: "5px solid #04AA6D", borderRadius: "0 4px 4px 0", padding: "24px 28px", marginBottom: "32px" }}>
        <h2 style={{ margin: "0 0 8px 0", fontSize: "20px", fontWeight: 700 }}>Not Sure Where to Begin?</h2>
        <p style={{ margin: "0 0 18px 0", fontSize: "14px", color: "#555", lineHeight: 1.7 }}>
          CBC Kenya Schools is organised by grade and subject — just like the KICD curriculum. Pick your child's grade to get started instantly.
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[
            { label: "PP1",      href: "/pp1",      color: "#FF9800" },
            { label: "PP2",      href: "/pp2",      color: "#FF9800" },
            { label: "Grade 1",  href: "/grade-1",  color: "#2196F3" },
            { label: "Grade 2",  href: "/grade-2",  color: "#2196F3" },
            { label: "Grade 3",  href: "/grade-3",  color: "#2196F3" },
            { label: "Grade 4",  href: "/grade-4",  color: "#9C27B0" },
            { label: "Grade 5",  href: "/grade-5",  color: "#9C27B0" },
            { label: "Grade 6",  href: "/grade-6",  color: "#9C27B0" },
            { label: "Grade 7",  href: "/grade-7",  color: "#F44336" },
            { label: "Grade 8",  href: "/grade-8",  color: "#F44336" },
            { label: "Grade 9",  href: "/grade-9",  color: "#F44336" },
            { label: "Grade 10", href: "/grade-10", color: "#607D8B" },
            { label: "Grade 11", href: "/grade-11", color: "#607D8B" },
            { label: "Grade 12", href: "/grade-12", color: "#607D8B" },
          ].map(g => (
            <Link key={g.label} href={g.href} style={{ background: g.color, color: "#fff", padding: "8px 16px", borderRadius: "3px", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>
              {g.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── 3. POPULAR TUTORIALS ─────────────────────────────── */}
      <h2 style={{ borderBottom: "3px solid #04AA6D", paddingBottom: "8px", marginBottom: "4px" }}>Popular Tutorials</h2>
      <p style={{ marginBottom: "16px", color: "#555", fontSize: "14px" }}>Most visited subjects and learning areas across all grades.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px", marginBottom: "32px" }}>
        {POPULAR.map(p => (
          <Link key={p.label} href={p.href} style={{ textDecoration: "none", color: "inherit", border: "1px solid #ddd", borderRadius: "3px", overflow: "hidden", display: "block" }}>
            <div style={{ background: p.color, color: "#fff", padding: "10px 14px", fontWeight: 700, fontSize: "14px" }}>{p.label}</div>
            <div style={{ background: "#282c34", color: "#abb2bf", padding: "12px 14px", fontFamily: "'Courier New', monospace", fontSize: "12px", lineHeight: 1.8, minHeight: "80px" }}>
              {p.snippet.split("\n").map((line, i) => (
                <div key={i} style={{ color: i === 0 ? "#98c379" : "#abb2bf" }}>{line}</div>
              ))}
            </div>
            <div style={{ padding: "8px 14px", fontSize: "13px", color: "#04AA6D", fontWeight: 700, background: "#f9f9f9", borderTop: "1px solid #eee" }}>
              Start Tutorial &rarr;
            </div>
          </Link>
        ))}
      </div>

      {/* ── 4. EXERCISES & QUIZZES STRIP ─────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
        <div style={{ background: "#e8f5e9", border: "1px solid #a5d6a7", borderRadius: "4px", padding: "22px 24px" }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>&#9999;&#65039;</div>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: 700, color: "#1b5e20" }}>Exercises</h3>
          <p style={{ margin: "0 0 14px 0", fontSize: "13px", color: "#2e7d32", lineHeight: 1.6 }}>
            Practice questions for every topic. Fill-in-the-blank, true/false and match exercises — aligned to SBA requirements.
          </p>
          <Link href="/exercises" style={{ background: "#04AA6D", color: "#fff", padding: "8px 20px", borderRadius: "3px", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>
            Go to Exercises &rarr;
          </Link>
        </div>
        <div style={{ background: "#e3f2fd", border: "1px solid #90caf9", borderRadius: "4px", padding: "22px 24px" }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>&#129300;</div>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: 700, color: "#0d47a1" }}>Quizzes</h3>
          <p style={{ margin: "0 0 14px 0", fontSize: "13px", color: "#1565c0", lineHeight: 1.6 }}>
            Test your knowledge after each topic. Multiple choice quizzes with instant feedback and scores to track your progress.
          </p>
          <Link href="/quizzes" style={{ background: "#2196F3", color: "#fff", padding: "8px 20px", borderRadius: "3px", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>
            Take a Quiz &rarr;
          </Link>
        </div>
      </div>

      {/* ── 5. WHAT IS CBC ────────────────────────────────────── */}
      <div className="note-box" style={{ marginBottom: "28px" }}>
        <strong>What is CBC?</strong>
        <p style={{ margin: "8px 0 0 0" }}>
          The <strong>Competency Based Curriculum</strong> is Kenya&apos;s education framework designed by KICD to develop
          skills, values and competencies from Early Years through Senior Secondary. It replaces the 8-4-4 system
          and focuses on continuous assessment through School Based Assessments (SBA) alongside national exams at Grade 6, 9 and 12.
        </p>
      </div>

      {/* ── 6. LEARNING PATHWAYS TABLE ───────────────────────── */}
      <h2 style={{ borderBottom: "3px solid #04AA6D", paddingBottom: "8px", marginBottom: "16px" }}>Learning Pathways</h2>
      <table style={{ marginBottom: "32px" }}>
        <thead>
          <tr><th>Pathway</th><th>Grades</th><th>Key Subjects</th><th>Assessment</th></tr>
        </thead>
        <tbody>
          {PATHWAYS.map(p => (
            <tr key={p.name}>
              <td><Link href={p.href} style={{ color: p.color, fontWeight: 700, textDecoration: "none" }}>{p.name}</Link></td>
              <td style={{ whiteSpace: "nowrap", color: "#555" }}>{p.grades}</td>
              <td style={{ fontSize: "13px", color: "#444" }}>{p.subjects.slice(0,4).join(", ")}{p.subjects.length > 4 ? "..." : ""}</td>
              <td style={{ fontSize: "12px", color: p.exam ? "#856404" : "#2d6a4f" }}>{p.exam || "Continuous SBA"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── 7. PATHWAY CARDS ──────────────────────────────────── */}
      <h2 style={{ borderBottom: "3px solid #04AA6D", paddingBottom: "8px", marginBottom: "16px" }}>Start Learning by Pathway</h2>
      <div className="subject-grid" style={{ marginBottom: "32px" }}>
        {PATHWAYS.map(p => (
          <Link key={p.name} href={p.href} className="subject-card">
            <div className="subject-card-header" style={{ background: p.color }}>
              <div style={{ fontSize: "15px" }}>{p.name}</div>
              <div style={{ fontSize: "12px", opacity: 0.85, marginTop: "2px" }}>{p.grades}</div>
            </div>
            <div className="subject-card-body">
              <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "12px", color: "#555" }}>
                {p.subjects.slice(0,4).map(s => <li key={s}>{s}</li>)}
                {p.subjects.length > 4 && <li style={{ color: "#999" }}>+{p.subjects.length - 4} more...</li>}
              </ul>
              {p.exam && (
                <div style={{ marginTop: "10px", background: "#fff8e1", border: "1px solid #FFB300", borderRadius: "3px", padding: "5px 8px", fontSize: "11px", color: "#856404" }}>
                  {p.exam}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* ── 8. GET CERTIFIED BANNER ───────────────────────────── */}
      <div style={{ background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)", color: "#fff", borderRadius: "4px", padding: "28px 32px", marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>&#127891;</div>
          <h2 style={{ margin: "0 0 8px 0", fontSize: "22px", fontWeight: 700 }}>Get CBC Certified</h2>
          <p style={{ margin: 0, opacity: 0.9, fontSize: "14px", maxWidth: "480px", lineHeight: 1.7 }}>
            Complete a subject, pass the quiz and earn your CBC Kenya Schools certificate.
            Track your learning progress across all grades and subjects.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
          <Link href="/certificates" style={{ background: "#04AA6D", color: "#fff", padding: "12px 28px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none", whiteSpace: "nowrap" }}>
            View Certificates &rarr;
          </Link>
          <Link href="/signin" style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", textDecoration: "none" }}>
            Sign in to track your progress
          </Link>
        </div>
      </div>

      {/* ── 9. REFERENCES + HOW-TO (2 col) ───────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "32px" }}>
        <div>
          <h2 style={{ borderBottom: "3px solid #04AA6D", paddingBottom: "8px", marginBottom: "12px" }}>References</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {REFERENCES.map(r => (
              <li key={r.label} style={{ borderBottom: "1px solid #f0f0f0" }}>
                {r.external ? (
                  <a href={r.href} target="_blank" rel="noreferrer" style={{ display: "flex", justifyContent: "space-between", padding: "9px 4px", color: "#04AA6D", textDecoration: "none", fontSize: "14px" }}>
                    {r.label} <span style={{ color: "#ccc" }}>&#8599;</span>
                  </a>
                ) : (
                  <Link href={r.href} style={{ display: "flex", justifyContent: "space-between", padding: "9px 4px", color: "#04AA6D", textDecoration: "none", fontSize: "14px" }}>
                    {r.label} <span style={{ color: "#ccc" }}>&#8250;</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 style={{ borderBottom: "3px solid #04AA6D", paddingBottom: "8px", marginBottom: "12px" }}>How To</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {HOW_TO.map(h => (
              <li key={h.label} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <Link href={h.href} style={{ display: "flex", justifyContent: "space-between", padding: "9px 4px", color: "#04AA6D", textDecoration: "none", fontSize: "14px" }}>
                  {h.label} <span style={{ color: "#ccc" }}>&#8250;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── 10. CBC STRUCTURE BOX ─────────────────────────────── */}
      <div className="example-box" style={{ marginBottom: "32px" }}>
        <div className="example-box-header">Kenya CBC Structure — 2-6-3-3</div>
        <div className="example-box-body">
          <p>Kenya CBC follows a <strong>2-6-3-3</strong> structure replacing the old 8-4-4 system:</p>
          <ul style={{ marginTop: "8px", paddingLeft: "20px", lineHeight: 2 }}>
            <li><strong>2 years</strong> — Early Years (PP1, PP2) — play-based, no national exam</li>
            <li><strong>6 years</strong> — Primary (Grade 1–6) — ends with <strong>KPSEA</strong></li>
            <li><strong>3 years</strong> — Junior Secondary (Grade 7–9) — ends with <strong>KILEA</strong></li>
            <li><strong>3 years</strong> — Senior Secondary (Grade 10–12) — ends with <strong>KSCE</strong></li>
          </ul>
          <div style={{ marginTop: "16px" }}>
            <Link href="/about" style={{ color: "#04AA6D", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>
              Learn more about Kenya CBC &rarr;
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}