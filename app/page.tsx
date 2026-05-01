import Link from "next/link";

const PATHWAYS = [
  { name: "Early Years", grades: "Playgroup, PP1, PP2", color: "#FF9800", href: "/pathway/early-years", subjects: ["Language Activities", "Mathematical Activities", "Environmental Activities", "Psychomotor & Creative", "Religious Education"], exam: null },
  { name: "Lower Primary", grades: "Grade 1, 2, 3", color: "#2196F3", href: "/pathway/lower-primary", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition"], exam: null },
  { name: "Upper Primary", grades: "Grade 4, 5, 6", color: "#9C27B0", href: "/pathway/upper-primary", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Agriculture"], exam: "KPSEA — End of Grade 6" },
  { name: "Junior Secondary", grades: "Grade 7, 8, 9", color: "#F44336", href: "/pathway/junior-secondary", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies"], exam: "KILEA — End of Grade 9" },
  { name: "Senior Secondary STEM", grades: "Grade 10, 11, 12", color: "#04AA6D", href: "/pathway/senior-stem", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture"], exam: "KSCE — End of Grade 12" },
  { name: "Senior Secondary Arts", grades: "Grade 10, 11, 12", color: "#607D8B", href: "/pathway/senior-arts", subjects: ["Fine Art", "Music", "Theatre Arts", "Sports Science", "English", "Kiswahili"], exam: "KSCE — End of Grade 12" },
  { name: "Senior Secondary Social", grades: "Grade 10, 11, 12", color: "#795548", href: "/pathway/senior-social", subjects: ["History", "Geography", "Economics", "Business Studies", "English", "Kiswahili"], exam: "KSCE — End of Grade 12" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "48px 40px", borderRadius: "4px", marginBottom: "32px" }}>
        <h1 style={{ margin: "0 0 12px 0", fontSize: "36px", fontWeight: 700 }}>Welcome to CBC Kenya Schools</h1>
        <p style={{ margin: "0 0 24px 0", fontSize: "16px", opacity: 0.92, maxWidth: "600px", lineHeight: 1.7 }}>
          Your complete online resource for the Kenyan Competency Based Curriculum (CBC/CBE). 
          Free learning for every Kenyan child — from Playgroup to Grade 12.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(255,255,255,0.2)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: 600 }}>KICD Aligned</span>
          <span style={{ background: "rgba(255,255,255,0.2)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: 600 }}>PP1 to Grade 12</span>
          <span style={{ background: "rgba(255,255,255,0.2)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: 600 }}>Free for All Kenyans</span>
          <span style={{ background: "rgba(255,255,255,0.2)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: 600 }}>School Based Assessment</span>
        </div>
      </div>

      {/* What is CBC */}
      <div className="note-box" style={{ marginBottom: "28px" }}>
        <strong>What is CBC?</strong>
        <p style={{ margin: "8px 0 0 0" }}>
          The <strong>Competency Based Curriculum</strong> is Kenya's education framework designed by KICD to develop 
          skills, values and competencies from Early Years through Senior Secondary. It replaces the 8-4-4 system 
          and focuses on continuous assessment through School Based Assessments (SBA) alongside national exams at Grade 6, 9 and 12.
        </p>
      </div>

      {/* Learning Pathways Table */}
      <h2 style={{ borderBottom: "3px solid #04AA6D", paddingBottom: "8px", marginBottom: "16px" }}>Learning Pathways</h2>
      <table style={{ marginBottom: "32px" }}>
        <thead>
          <tr>
            <th>Pathway</th>
            <th>Grades</th>
            <th>Key Subjects</th>
            <th>Exam</th>
          </tr>
        </thead>
        <tbody>
          {PATHWAYS.map(p => (
            <tr key={p.name}>
              <td>
                <Link href={p.href} style={{ color: p.color, fontWeight: 700, textDecoration: "none" }}>
                  {p.name}
                </Link>
              </td>
              <td style={{ whiteSpace: "nowrap", color: "#555" }}>{p.grades}</td>
              <td style={{ fontSize: "13px", color: "#444" }}>{p.subjects.slice(0, 4).join(", ")}{p.subjects.length > 4 ? "..." : ""}</td>
              <td style={{ fontSize: "12px", color: p.exam ? "#856404" : "#999" }}>{p.exam || "Continuous SBA"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pathway Cards */}
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
                {p.subjects.slice(0, 4).map(s => <li key={s}>{s}</li>)}
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

      {/* CBC Structure */}
      <div className="example-box">
        <div className="example-box-header">Kenya CBC Structure — 2-6-3-3</div>
        <div className="example-box-body">
          <p>Kenya CBC follows a <strong>2-6-3-3</strong> structure replacing the old 8-4-4 system:</p>
          <ul style={{ marginTop: "8px", paddingLeft: "20px", lineHeight: 2 }}>
            <li><strong>2 years</strong> — Early Years (PP1, PP2)</li>
            <li><strong>6 years</strong> — Primary (Grade 1–6), ends with KPSEA</li>
            <li><strong>3 years</strong> — Junior Secondary (Grade 7–9), ends with KILEA</li>
            <li><strong>3 years</strong> — Senior Secondary (Grade 10–12), ends with KSCE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
