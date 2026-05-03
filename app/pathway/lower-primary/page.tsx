import Link from "next/link";
import { SmartPrevNext } from "../../components/Navigation";

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

      <SmartPrevNext position="top" />

            <div style={{ background: "linear-gradient(135deg, #2196F3 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 10px", borderRadius: "10px", marginBottom: "10px" }}>LP &bull; Ages 6-8</div>
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

      <h2>What is the Lower Primary Pathway?</h2>
      <p>Lower Primary covers <strong>Grade 1, Grade 2 and Grade 3</strong> — the first three years of formal primary school for children aged 6 to 8. It builds directly on the play-based foundations of the Early Years pathway and transitions learners into structured subject-based learning.</p>
      <p>At this level, the <strong>mother tongue or local language</strong> continues to be used as the language of instruction in early Grade 1, gradually transitioning to English and Kiswahili. All learning remains activity-based and learner-centred.</p>

      <div style={{ background: "#e3f2fd", border: "1px solid #90caf9", borderRadius: "4px", padding: "14px 20px", marginBottom: "24px" }}>
        <strong style={{ color: "#0d47a1" }}>&#9432; No National Exam at Lower Primary</strong>
        <p style={{ margin: "6px 0 0 0", fontSize: "13px", color: "#1565c0" }}>Assessment is entirely through continuous School Based Assessment (SBA). Learners are assessed by their class teacher through observation, portfolios, oral work and classroom activities throughout the year.</p>
      </div>

      <h2>The 7 Lower Primary Subjects</h2>
      <div style={{ marginBottom: "28px" }}>
        {[
          { name: "English", color: "#04AA6D", desc: "Develops reading, writing, listening and speaking in English. Phonics, comprehension, creative writing and grammar are core components.", strands: ["Listening & Speaking", "Reading", "Writing", "Grammar & Usage"] },
          { name: "Kiswahili", color: "#FF9800", desc: "Builds Kiswahili language competency alongside English. Oral communication, reading and writing in Kiswahili are developed systematically.", strands: ["Kusikiliza & Kuzungumza", "Kusoma", "Kuandika", "Sarufi"] },
          { name: "Mathematics", color: "#2196F3", desc: "Foundational numeracy — number operations, measurement, geometry and data handling. Uses concrete materials before abstract concepts.", strands: ["Numbers & Operations", "Measurement", "Geometry", "Data Handling"] },
          { name: "Environmental Activities", color: "#4CAF50", desc: "Explores the natural and built environment — plants, animals, weather, the human body, community and basic science concepts.", strands: ["Living Things", "Non-Living Things", "Our Environment", "Health & Safety"] },
          { name: "Creative Arts", color: "#E91E63", desc: "Develops creativity through visual art, music, drama and movement. Builds fine motor skills, self-expression and cultural appreciation.", strands: ["Visual Art", "Music", "Drama", "Movement"] },
          { name: "Hygiene & Nutrition", color: "#00BCD4", desc: "Teaches personal hygiene, healthy eating, disease prevention and basic first aid. Develops healthy habits for life.", strands: ["Personal Hygiene", "Nutrition & Food", "Disease Prevention", "Safety"] },
          { name: "Religious Education", color: "#9C27B0", desc: "Values-based education through CRE, IRE or HRE depending on the learner's background. Focuses on moral development and character.", strands: ["Values & Morals", "Religious Stories", "Prayer & Worship", "Community Life"] },
        ].map((s, i) => (
          <div key={s.name} style={{ border: "1px solid #eee", borderLeft: `5px solid ${s.color}`, borderRadius: "0 4px 4px 0", padding: "14px 18px", background: "#fafafa", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <span style={{ background: s.color, color: "#fff", fontSize: "11px", padding: "2px 10px", borderRadius: "2px", fontWeight: 700 }}>Subject {i + 1}</span>
                <strong style={{ fontSize: "15px" }}>{s.name}</strong>
              </div>
              <p style={{ margin: "0 0 8px 0", fontSize: "13px", color: "#555", lineHeight: 1.7 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {s.strands.map(st => <span key={st} style={{ background: "#fff", border: `1px solid ${s.color}`, color: s.color, fontSize: "11px", padding: "2px 8px", borderRadius: "10px" }}>{st}</span>)}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", flexShrink: 0 }}>
              {["Grade 1","Grade 2","Grade 3"].map(g => (
                <Link key={g} href={`/${g.toLowerCase().replace(" ","-")}/${s.name.toLowerCase().replace(/ & /g,"-and-").replace(/ /g,"-")}`}
                  style={{ background: s.color, color: "#fff", fontSize: "11px", padding: "3px 10px", borderRadius: "2px", textDecoration: "none", fontWeight: 700, whiteSpace: "nowrap" }}>
                  {g} &rarr;
                </Link>
              ))}
            </div>
          </div>
        ))}
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

      <div className="note-box">
        <strong>Mother Tongue Instruction:</strong> KICD requires that in Grade 1, the language of instruction is the mother tongue or local community language. English and Kiswahili are introduced as subjects from Grade 1 but become the primary languages of instruction progressively from Grade 2 onwards.
      </div>

      <SmartPrevNext />
    </div>
  );
}