import Link from "next/link";

export default function JuniorSecondaryPage() {
  const grades = [
    { label: "Grade 7", href: "/grade-7", age: "Age 12", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
    { label: "Grade 8", href: "/grade-8", age: "Age 13", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
    { label: "Grade 9", href: "/grade-9", age: "Age 14", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Health Education", "Pre-Technical Studies", "Agriculture", "Social Studies", "Creative Arts & Sports"] },
  ];
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <span>Junior Secondary Pathway</span>
      </div>
      <div style={{ background: "linear-gradient(135deg, #F44336 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 10px", borderRadius: "10px", marginBottom: "10px" }}>JSS &bull; Ages 12–14</div>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>Junior Secondary Pathway</h1>
        <p style={{ margin: "0 0 16px 0", opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>Grade 7 to Grade 9 gives learners broad exposure to all subject areas before choosing a Senior Secondary pathway. Includes new subjects like Pre-Technical Studies and Health Education. Ends with <strong>KILEA</strong> at Grade 9.</p>
        <div style={{ fontSize: "13px", opacity: 0.85 }}>Grades: <strong>Grade 7, 8, 9</strong></div>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["9 subjects", "Pre-Technical Studies", "Health Education", "Broad exposure before specialisation", "KILEA at Grade 9", "Pathway selection at Grade 10"].map(h => (
            <span key={h} style={{ background: "#fff", border: "1px solid #c3e6cb", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", color: "#1a5c35" }}>&#10003; {h}</span>
          ))}
        </div>
      </div>
      <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderRadius: "4px", padding: "14px 20px", marginBottom: "24px" }}>
        <strong style={{ color: "#856404" }}>&#9733; National Exam: KILEA — Kenya Junior Secondary Education Assessment</strong>
        <p style={{ margin: "6px 0 0 0", fontSize: "13px", color: "#856404" }}>Sat at the end of Grade 9. Results guide pathway selection (STEM, Arts & Sports, or Social Sciences) for Senior Secondary.</p>
      </div>
      <h2>Grades in This Pathway</h2>
      <div className="subject-grid" style={{ marginBottom: "28px" }}>
        {grades.map(g => (
          <Link key={g.label} href={g.href} className="subject-card">
            <div className="subject-card-header" style={{ background: "#F44336" }}>
              <div style={{ fontSize: "18px", fontWeight: 700 }}>{g.label}</div>
              <div style={{ fontSize: "12px", opacity: 0.85 }}>{g.age}</div>
            </div>
            <div className="subject-card-body">
              <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "12px", color: "#555" }}>
                {g.subjects.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </Link>
        ))}
      </div>
      <div className="prev-next">
        <Link href="/pathway/upper-primary" className="prev">Upper Primary</Link>
        <Link href="/pathway/senior-secondary" className="next">Senior Secondary</Link>
      </div>
    </div>
  );
}
