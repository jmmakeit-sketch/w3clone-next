import Link from "next/link";

const SUBJECTS = [
  { name: "History & Government", desc: "Kenyan and world history, government systems, democracy, human rights and international relations.", strands: ["Kenyan History","World History","Government","Human Rights"] },
  { name: "Geography", desc: "Physical and human geography, environmental science, cartography, climate and natural resources.", strands: ["Physical Geography","Human Geography","Cartography","Environment"] },
  { name: "Economics", desc: "Micro and macroeconomics, national development, international trade, banking and fiscal policy.", strands: ["Microeconomics","Macroeconomics","International Trade","Development Economics"] },
  { name: "Business Studies", desc: "Business management, entrepreneurship, accounting principles, marketing and business law.", strands: ["Business Management","Entrepreneurship","Accounting","Marketing"] },
  { name: "English", desc: "Advanced literature, creative writing, critical analysis, oral communication and media literacy.", strands: ["Literature","Creative Writing","Critical Analysis","Media Literacy"] },
  { name: "Kiswahili", desc: "Advanced Kiswahili language, literature, oral traditions and written communication.", strands: ["Fasihi","Uandishi","Lugha","Mawasiliano"] },
];

export default function SeniorSocialPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <Link href="/pathway/senior-secondary">Senior Secondary</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <span>Social Sciences Pathway</span>
      </div>

      <div style={{ background: "linear-gradient(135deg, #795548 0%, #3e2723 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 10px", borderRadius: "10px", marginBottom: "10px" }}>SOCIAL &bull; Grade 10–12 &bull; Ages 15–17</div>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>Senior Secondary — Social Sciences</h1>
        <p style={{ margin: "0 0 20px 0", opacity: 0.92, fontSize: "15px", maxWidth: "600px", lineHeight: 1.8 }}>
          The Social Sciences pathway develops analytical, economic and humanities skills. It leads to careers in law, economics, journalism, public administration, teaching, diplomacy, business and the social sector.
        </p>
        <Link href="/grade-10" style={{ background: "#fff", color: "#795548", padding: "10px 24px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
          Start Grade 10 Social &rarr;
        </Link>
      </div>
      <div style={{ background: "#efebe9", border: "1px solid #bcaaa4", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["Grade 10, 11, 12","Humanities focus","Business & Economics","Law & Governance","KSCE at Grade 12","Public service careers"].map(h => (
            <span key={h} style={{ background: "#fff", border: "1px solid #bcaaa4", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", color: "#4e342e" }}>&#10003; {h}</span>
          ))}
        </div>
      </div>

      <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderRadius: "4px", padding: "14px 20px", marginBottom: "28px" }}>
        <strong style={{ color: "#856404" }}>&#9733; National Exam: KSCE — Kenya Secondary Certificate of Education (End of Grade 12)</strong>
      </div>

      <h2>Social Sciences Subjects</h2>
      <div style={{ marginBottom: "28px" }}>
        {SUBJECTS.map((s, i) => (
          <Link key={s.name} href={`/grade-10/${s.name.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} style={{ textDecoration: "none", display: "block", marginBottom: "12px" }}>
            <div style={{ border: "1px solid #eee", borderLeft: "5px solid #795548", borderRadius: "0 4px 4px 0", padding: "16px 20px", background: "#fafafa" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ background: "#795548", color: "#fff", fontSize: "11px", padding: "2px 10px", borderRadius: "2px", fontWeight: 700 }}>Subject {i + 1}</span>
                  <strong style={{ fontSize: "15px", color: "#222" }}>{s.name}</strong>
                </div>
                <span style={{ color: "#795548", fontWeight: 700, fontSize: "13px" }}>Start &rarr;</span>
              </div>
              <p style={{ margin: "0 0 10px 0", fontSize: "13px", color: "#555", lineHeight: 1.7 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {s.strands.map(st => <span key={st} style={{ background: "#fff", border: "1px solid #795548", color: "#795548", fontSize: "11px", padding: "2px 10px", borderRadius: "10px" }}>{st}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="prev-next">
        <Link href="/pathway/senior-arts" className="prev">Arts &amp; Sports Pathway</Link>
        <Link href="/exercises" className="next">Exercises</Link>
      </div>
    </div>
  );
}