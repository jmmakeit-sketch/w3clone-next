import Link from "next/link";

export default function EarlyYearsPage() {
  const grades = [
    { label: "PP1", href: "/pp1", age: "Age 4", subjects: ["Language Activities", "Mathematical Activities", "Environmental Activities", "Psychomotor & Creative", "Religious Education"] },
    { label: "PP2", href: "/pp2", age: "Age 5", subjects: ["Language Activities", "Mathematical Activities", "Environmental Activities", "Psychomotor & Creative", "Religious Education"] },
  ];
  return <PathwayPage
    name="Early Years" code="EYE" color="#FF9800" grades="PP1, PP2" ageRange="Ages 4–5"
    exam={null} examDesc={null}
    prev={{ href: "/kicd", label: "KICD Framework" }}
    next={{ href: "/pathway/lower-primary", label: "Lower Primary" }}
    overview="The Early Years pathway covers Pre-Primary 1 (PP1) and Pre-Primary 2 (PP2). It replaces the old Nursery and KG system and is built entirely around play-based, activity-centred learning. Children develop foundational skills in language, numeracy, creativity, motor skills and values through guided play and exploration."
    highlights={["Play-based and activity-centred learning", "Mother tongue as language of instruction", "No formal exams — continuous teacher observation", "Focus on holistic child development", "Covers 5 learning areas across PP1 and PP2", "SBA through portfolios and observation records"]}
    grades_data={grades}
  />;
}

function PathwayPage({ name, code, color, grades, ageRange, exam, examDesc, prev, next, overview, highlights, grades_data }: any) {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>{name} Pathway</span>
      </div>
      <div style={{ background: `linear-gradient(135deg, ${color} 0%, #036b45 100%)`, color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 10px", borderRadius: "10px", marginBottom: "10px" }}>{code} &bull; {ageRange}</div>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>{name} Pathway</h1>
        <p style={{ margin: "0 0 16px 0", opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>{overview}</p>
        <div style={{ fontSize: "13px", opacity: 0.85 }}>Grades: <strong>{grades}</strong></div>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
          {highlights.map((h: string) => (
            <span key={h} style={{ background: "#fff", border: "1px solid #c3e6cb", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", color: "#1a5c35" }}>&#10003; {h}</span>
          ))}
        </div>
      </div>

      {exam && (
        <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderRadius: "4px", padding: "14px 20px", marginBottom: "24px" }}>
          <strong style={{ color: "#856404" }}>&#9733; National Exam: {exam}</strong>
          {examDesc && <p style={{ margin: "6px 0 0 0", fontSize: "13px", color: "#856404" }}>{examDesc}</p>}
        </div>
      )}

      <h2>Grades in This Pathway</h2>
      <div className="subject-grid" style={{ marginBottom: "28px" }}>
        {grades_data.map((g: any) => (
          <Link key={g.label} href={g.href} className="subject-card">
            <div className="subject-card-header" style={{ background: color }}>
              <div style={{ fontSize: "18px", fontWeight: 700 }}>{g.label}</div>
              <div style={{ fontSize: "12px", opacity: 0.85 }}>{g.age}</div>
            </div>
            <div className="subject-card-body">
              <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "12px", color: "#555" }}>
                {g.subjects.map((s: string) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </Link>
        ))}
      </div>

      <div className="prev-next">
        <Link href={prev.href} className="prev">{prev.label}</Link>
        <Link href={next.href} className="next">{next.label}</Link>
      </div>
    </div>
  );
}
