import Link from "next/link";
import { SmartPrevNext } from "../../components/Navigation";

export default function UpperPrimaryPage() {
  const grades = [
    { label: "Grade 4", href: "/grade-4", age: "Age 9", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
    { label: "Grade 5", href: "/grade-5", age: "Age 10", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
    { label: "Grade 6", href: "/grade-6", age: "Age 11", subjects: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies", "Creative Arts & Sports", "Religious Education", "Agriculture"] },
  ];
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <span>Upper Primary Pathway</span>
      </div>

      <SmartPrevNext position="top" />

            <div style={{ background: "linear-gradient(135deg, #9C27B0 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 10px", borderRadius: "10px", marginBottom: "10px" }}>UP &bull; Ages 9–11</div>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>Upper Primary Pathway</h1>
        <p style={{ margin: "0 0 16px 0", opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>Grade 4 to Grade 6 deepens core subjects and introduces Agriculture, Integrated Science and Social Studies. This pathway ends with the <strong>KPSEA</strong> national assessment at Grade 6 which determines transition to Junior Secondary.</p>
        <div style={{ fontSize: "13px", opacity: 0.85 }}>Grades: <strong>Grade 4, 5, 6</strong></div>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["8 subjects", "Agriculture introduced", "Integrated Science", "Social Studies", "KPSEA at Grade 6", "SBA throughout"].map(h => (
            <span key={h} style={{ background: "#fff", border: "1px solid #c3e6cb", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", color: "#1a5c35" }}>&#10003; {h}</span>
          ))}
        </div>
      </div>
      <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderRadius: "4px", padding: "14px 20px", marginBottom: "24px" }}>
        <strong style={{ color: "#856404" }}>&#9733; National Exam: KPSEA — Kenya Primary School Education Assessment</strong>
        <p style={{ margin: "6px 0 0 0", fontSize: "13px", color: "#856404" }}>Sat at the end of Grade 6. Results combined with SBA scores to determine transition to Junior Secondary School (Grade 7).</p>
      </div>
      <h2>Grades in This Pathway</h2>
      <div className="subject-grid" style={{ marginBottom: "28px" }}>
        {grades.map(g => (
          <Link key={g.label} href={g.href} className="subject-card">
            <div className="subject-card-header" style={{ background: "#9C27B0" }}>
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
      <SmartPrevNext />
    </div>
  );
}
