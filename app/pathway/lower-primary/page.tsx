import Link from "next/link";

export default function LowerPrimaryPage() {
  const grades = [
    { label: "Grade 1", href: "/grade-1", age: "Age 6", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
    { label: "Grade 2", href: "/grade-2", age: "Age 7", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
    { label: "Grade 3", href: "/grade-3", age: "Age 8", subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities", "Creative Arts", "Hygiene & Nutrition", "Religious Education"] },
  ];
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <span>Lower Primary Pathway</span>
      </div>
      <div style={{ background: "linear-gradient(135deg, #2196F3 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 10px", borderRadius: "10px", marginBottom: "10px" }}>LP &bull; Ages 6–8</div>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>Lower Primary Pathway</h1>
        <p style={{ margin: "0 0 16px 0", opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>Grade 1 to Grade 3 builds foundational literacy and numeracy. Learners transition from play-based Early Years learning into structured subjects while keeping activity-based, learner-centred approaches at the heart of every lesson.</p>
        <div style={{ fontSize: "13px", opacity: 0.85 }}>Grades: <strong>Grade 1, 2, 3</strong></div>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["7 learning areas", "English & Kiswahili literacy", "Foundational Mathematics", "Activity-based learning", "Continuous SBA", "No national exam"].map(h => (
            <span key={h} style={{ background: "#fff", border: "1px solid #c3e6cb", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", color: "#1a5c35" }}>&#10003; {h}</span>
          ))}
        </div>
      </div>
      <h2>Grades in This Pathway</h2>
      <div className="subject-grid" style={{ marginBottom: "28px" }}>
        {grades.map(g => (
          <Link key={g.label} href={g.href} className="subject-card">
            <div className="subject-card-header" style={{ background: "#2196F3" }}>
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
        <Link href="/pathway/early-years" className="prev">Early Years</Link>
        <Link href="/pathway/upper-primary" className="next">Upper Primary</Link>
      </div>
    </div>
  );
}
