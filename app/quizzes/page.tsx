import Link from "next/link";
import { SmartPrevNext } from "../components/Navigation";

export default function QuizzesPage() {
  const quizzes = [
    { title: "What is CBC?", desc: "Test your knowledge of the Competency Based Curriculum framework.", level: "General", color: "#04AA6D" },
    { title: "Early Years — Language Activities", desc: "Basic language and literacy quiz for PP1 and PP2 level.", level: "PP1 / PP2", color: "#FF9800" },
    { title: "Grade 3 Mathematics", desc: "Numbers, addition, subtraction and basic shapes.", level: "Grade 3", color: "#2196F3" },
    { title: "Grade 6 Integrated Science", desc: "Living things, matter, energy and environment.", level: "Grade 6", color: "#9C27B0" },
    { title: "Grade 9 Social Studies", desc: "Kenya geography, history, government and citizenship.", level: "Grade 9", color: "#F44336" },
    { title: "CBC Core Competencies", desc: "Can you name all 7 core competencies of the CBC?", level: "General", color: "#607D8B" },
  ];
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <span>Quizzes</span>
      </div>
      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>CBC Quizzes</h1>
        <p style={{ margin: 0, opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>
          Test your understanding of CBC subjects with our free quizzes. Each quiz is curriculum-aligned and gives you instant results and explanations.
        </p>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#1a5c35" }}>Quizzes help reinforce learning after each topic. Use them to prepare for School Based Assessments (SBA) and national exams.</p>
      </div>
      <h2>Available Quizzes</h2>
      <div className="subject-grid" style={{ marginBottom: "32px" }}>
        {quizzes.map(q => (
          <div key={q.title} className="subject-card" style={{ cursor: "pointer" }}>
            <div className="subject-card-header" style={{ background: q.color }}>
              <div style={{ fontSize: "13px", fontWeight: 700 }}>{q.title}</div>
              <div style={{ fontSize: "11px", opacity: 0.85, marginTop: "4px" }}>Level: {q.level}</div>
            </div>
            <div className="subject-card-body">
              <p style={{ margin: "0 0 10px 0", fontSize: "12px", color: "#555" }}>{q.desc}</p>
              <span style={{ background: q.color, color: "#fff", fontSize: "11px", padding: "4px 12px", borderRadius: "2px", fontWeight: 700 }}>Start Quiz &rarr;</span>
            </div>
          </div>
        ))}
      </div>
      <div className="note-box">
        <strong>More quizzes coming soon!</strong> We are building quizzes for every topic across all grades. New quizzes are added weekly.
      </div>
      <SmartPrevNext />
    </div>
  );
}
