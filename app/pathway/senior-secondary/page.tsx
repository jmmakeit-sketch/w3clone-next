import Link from "next/link";

export default function SeniorSecondaryPage() {
  const pathways = [
    { label: "STEM", color: "#04AA6D", desc: "Sciences, Technology, Engineering & Mathematics", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture"], href: "/grade-10" },
    { label: "Arts & Sports Science", color: "#E91E63", desc: "Creative, Performing and Sports Sciences", subjects: ["Fine Art", "Music", "Theatre Arts", "Sports Science", "English", "Kiswahili"], href: "/grade-10" },
    { label: "Social Sciences", color: "#795548", desc: "Humanities, Business and Social Studies", subjects: ["History", "Geography", "Economics", "Business Studies", "English", "Kiswahili"], href: "/grade-10" },
  ];
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <span>Senior Secondary Pathway</span>
      </div>
      <div style={{ background: "linear-gradient(135deg, #607D8B 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 10px", borderRadius: "10px", marginBottom: "10px" }}>SSS &bull; Ages 15–17</div>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>Senior Secondary Pathway</h1>
        <p style={{ margin: "0 0 16px 0", opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>Grade 10 to Grade 12 is where learners specialise. Based on KILEA results and personal aptitude, each learner chooses one of three pathways — STEM, Arts & Sports Science, or Social Sciences — leading to <strong>KSCE</strong> at Grade 12.</p>
        <div style={{ fontSize: "13px", opacity: 0.85 }}>Grades: <strong>Grade 10, 11, 12</strong></div>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["3 specialised pathways", "STEM pathway", "Arts & Sports pathway", "Social Sciences pathway", "KSCE at Grade 12", "University & TVET entry"].map(h => (
            <span key={h} style={{ background: "#fff", border: "1px solid #c3e6cb", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", color: "#1a5c35" }}>&#10003; {h}</span>
          ))}
        </div>
      </div>
      <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderRadius: "4px", padding: "14px 20px", marginBottom: "28px" }}>
        <strong style={{ color: "#856404" }}>&#9733; National Exam: KSCE — Kenya Secondary Certificate of Education</strong>
        <p style={{ margin: "6px 0 0 0", fontSize: "13px", color: "#856404" }}>Sat at the end of Grade 12. Replaces the old KCSE. Results used for university placement, TVET and other tertiary pathways.</p>
      </div>
      <h2>Choose Your Senior Secondary Pathway</h2>
      <div className="subject-grid" style={{ marginBottom: "28px" }}>
        {pathways.map(p => (
          <Link key={p.label} href={p.href} className="subject-card">
            <div className="subject-card-header" style={{ background: p.color }}>
              <div style={{ fontSize: "16px", fontWeight: 700 }}>{p.label}</div>
              <div style={{ fontSize: "11px", opacity: 0.85, marginTop: "2px" }}>{p.desc}</div>
            </div>
            <div className="subject-card-body">
              <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "12px", color: "#555" }}>
                {p.subjects.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </Link>
        ))}
      </div>
      <div className="prev-next">
        <Link href="/pathway/junior-secondary" className="prev">Junior Secondary</Link>
        <Link href="/exercises" className="next">Exercises</Link>
      </div>
    </div>
  );
}
