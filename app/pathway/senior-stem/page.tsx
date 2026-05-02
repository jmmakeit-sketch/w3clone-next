import Link from "next/link";

const SUBJECTS = [
  { name: "Mathematics", desc: "Advanced algebra, calculus, statistics, trigonometry and linear programming. Core for all STEM learners.", strands: ["Algebra","Calculus Intro","Statistics","Trigonometry"] },
  { name: "Physics", desc: "Mechanics, electricity, magnetism, waves, optics and modern physics. Includes practical laboratory work.", strands: ["Mechanics","Electricity","Waves & Optics","Modern Physics"] },
  { name: "Chemistry", desc: "Organic and inorganic chemistry, electrochemistry, rates of reaction and industrial chemistry.", strands: ["Organic Chemistry","Electrochemistry","Rates of Reaction","Industrial Chemistry"] },
  { name: "Biology", desc: "Cell biology, genetics, ecology, evolution, human physiology and biotechnology.", strands: ["Cell Biology","Genetics","Ecology","Human Physiology"] },
  { name: "Computer Science", desc: "Programming, algorithms, data structures, networks, cybersecurity and artificial intelligence.", strands: ["Programming","Algorithms","Networks","AI & Cybersecurity"] },
  { name: "Agriculture", desc: "Crop production, animal husbandry, soil science, agribusiness and food technology.", strands: ["Crop Production","Animal Husbandry","Soil Science","Agribusiness"] },
];

export default function SeniorStemPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <Link href="/pathway/senior-secondary">Senior Secondary</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <span>STEM Pathway</span>
      </div>

      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 10px", borderRadius: "10px", marginBottom: "10px" }}>STEM &bull; Grade 10–12 &bull; Ages 15–17</div>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>Senior Secondary — STEM Pathway</h1>
        <p style={{ margin: "0 0 20px 0", opacity: 0.92, fontSize: "15px", maxWidth: "600px", lineHeight: 1.8 }}>
          The STEM pathway prepares learners for careers in Science, Technology, Engineering and Mathematics. It leads to university programmes in Medicine, Engineering, Computer Science, Agriculture, Education and more.
        </p>
        <Link href="/grade-10" style={{ background: "#fff", color: "#04AA6D", padding: "10px 24px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
          Start Grade 10 STEM &rarr;
        </Link>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["Grade 10, 11, 12","6 core subjects","KSCE at Grade 12","University entry","TVET pathways","Research & Innovation"].map(h => (
            <span key={h} style={{ background: "#fff", border: "1px solid #c3e6cb", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", color: "#1a5c35" }}>&#10003; {h}</span>
          ))}
        </div>
      </div>

      <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderRadius: "4px", padding: "14px 20px", marginBottom: "28px" }}>
        <strong style={{ color: "#856404" }}>&#9733; National Exam: KSCE — Kenya Secondary Certificate of Education (End of Grade 12)</strong>
        <p style={{ margin: "6px 0 0 0", fontSize: "13px", color: "#856404" }}>STEM learners sit Mathematics, Sciences and their optional subjects. Results used for university and TVET placement.</p>
      </div>

      <h2>STEM Subjects</h2>
      <p>Click any subject to start learning. All content is KICD CBC aligned for Grade 10–12.</p>
      <div style={{ marginBottom: "28px" }}>
        {SUBJECTS.map((s, i) => (
          <Link key={s.name} href={`/grade-10/${s.name.toLowerCase().replaceAll(" ", "-")}`} style={{ textDecoration: "none", display: "block", marginBottom: "12px" }}>
            <div style={{ border: "1px solid #eee", borderLeft: "5px solid #04AA6D", borderRadius: "0 4px 4px 0", padding: "16px 20px", background: "#fafafa" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ background: "#04AA6D", color: "#fff", fontSize: "11px", padding: "2px 10px", borderRadius: "2px", fontWeight: 700 }}>Subject {i + 1}</span>
                  <strong style={{ fontSize: "15px", color: "#222" }}>{s.name}</strong>
                </div>
                <span style={{ color: "#04AA6D", fontWeight: 700, fontSize: "13px" }}>Start &rarr;</span>
              </div>
              <p style={{ margin: "0 0 10px 0", fontSize: "13px", color: "#555", lineHeight: 1.7 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {s.strands.map(st => <span key={st} style={{ background: "#fff", border: "1px solid #04AA6D", color: "#04AA6D", fontSize: "11px", padding: "2px 10px", borderRadius: "10px" }}>{st}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="note-box">
        <strong>Pathway Selection:</strong> Learners choose the STEM pathway based on their KILEA results, aptitude assessment and career interests at the end of Grade 9.
      </div>
      <div className="prev-next">
        <Link href="/pathway/senior-secondary" className="prev">Senior Secondary</Link>
        <Link href="/pathway/senior-arts" className="next">Arts &amp; Sports Pathway</Link>
      </div>
    </div>
  );
}