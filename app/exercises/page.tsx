import Link from "next/link";
import { SmartPrevNext } from "../components/Navigation";

export default function ExercisesPage() {
  const subjects = [
    { name: "Mathematics", grades: ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"], color: "#2196F3" },
    { name: "English", grades: ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"], color: "#04AA6D" },
    { name: "Kiswahili", grades: ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"], color: "#FF9800" },
    { name: "Integrated Science", grades: ["Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9"], color: "#9C27B0" },
    { name: "Social Studies", grades: ["Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9"], color: "#F44336" },
    { name: "Agriculture", grades: ["Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9"], color: "#795548" },
  ];
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <span>Exercises</span>
      </div>
      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>CBC Exercises</h1>
        <p style={{ margin: 0, opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>
          Practice makes perfect. Work through hundreds of exercises across all CBC subjects and grades — aligned to the KICD curriculum framework.
        </p>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#1a5c35" }}>Each exercise is tied to a specific topic and competency. Complete exercises to build your SBA portfolio and prepare for national assessments.</p>
      </div>
      <h2>Exercises by Subject</h2>
      <div className="subject-grid" style={{ marginBottom: "32px" }}>
        {subjects.map(s => (
          <div key={s.name} className="subject-card">
            <div className="subject-card-header" style={{ background: s.color }}>
              <div style={{ fontSize: "15px", fontWeight: 700 }}>{s.name}</div>
              <div style={{ fontSize: "11px", opacity: 0.85, marginTop: "2px" }}>Exercises</div>
            </div>
            <div className="subject-card-body">
              <div style={{ fontSize: "12px", color: "#555", marginBottom: "8px" }}>Available for:</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {s.grades.map(g => (
                  <span key={g} style={{ background: s.color, color: "#fff", fontSize: "10px", padding: "2px 8px", borderRadius: "10px" }}>{g}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="note-box">
        <strong>Coming Soon:</strong> Interactive exercises with instant feedback are being added for every topic. Check back regularly as new exercises are added across all grades and subjects.
      </div>
      <SmartPrevNext />
    </div>
  );
}
