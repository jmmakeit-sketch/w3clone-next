import Link from "next/link";
import { SmartPrevNext } from "../../components/Navigation";

const SUBJECTS = [
  { name: "Fine Art", desc: "Drawing, painting, sculpture, printmaking, design and art history. Develops visual creativity and aesthetic thinking.", strands: ["Drawing & Painting","Sculpture","Printmaking","Art History & Criticism"] },
  { name: "Music", desc: "Theory, composition, performance and music technology. Covers African, Western and contemporary music traditions.", strands: ["Music Theory","Composition","Performance","Music Technology"] },
  { name: "Theatre Arts", desc: "Acting, directing, stagecraft, scriptwriting and performance studies. Develops confidence, creativity and communication.", strands: ["Acting","Directing","Scriptwriting","Stagecraft"] },
  { name: "Sports Science", desc: "Exercise physiology, sports psychology, nutrition, coaching and sports management.", strands: ["Exercise Physiology","Sports Psychology","Coaching","Sports Nutrition"] },
  { name: "English", desc: "Advanced literature, creative writing, critical analysis, oral communication and media literacy.", strands: ["Literature","Creative Writing","Critical Analysis","Media Literacy"] },
  { name: "Kiswahili", desc: "Advanced Kiswahili language, literature, oral traditions and written communication.", strands: ["Fasihi","Uandishi wa Ubunifu","Lugha","Mawasiliano"] },
];

export default function SeniorArtsPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <Link href="/pathway/senior-secondary">Senior Secondary</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <span>Arts & Sports Pathway</span>
      </div>

      <div style={{ background: "linear-gradient(135deg, #E91E63 0%, #880E4F 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 10px", borderRadius: "10px", marginBottom: "10px" }}>ARTS &bull; Grade 10–12 &bull; Ages 15–17</div>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>Senior Secondary — Arts & Sports Science</h1>
        <p style={{ margin: "0 0 20px 0", opacity: 0.92, fontSize: "15px", maxWidth: "600px", lineHeight: 1.8 }}>
          The Arts & Sports Science pathway develops creative, performing and sports talents. It leads to careers in fine art, music, theatre, sports coaching, journalism, education and the creative industries.
        </p>
        <Link href="/grade-10" style={{ background: "#fff", color: "#E91E63", padding: "10px 24px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
          Start Grade 10 Arts &rarr;
        </Link>
      </div>
      <div style={{ background: "#fce4ec", border: "1px solid #f48fb1", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["Grade 10, 11, 12","Creative expression","Performance arts","Sports science","KSCE at Grade 12","Creative industry careers"].map(h => (
            <span key={h} style={{ background: "#fff", border: "1px solid #f48fb1", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", color: "#880E4F" }}>&#10003; {h}</span>
          ))}
        </div>
      </div>

      <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderRadius: "4px", padding: "14px 20px", marginBottom: "28px" }}>
        <strong style={{ color: "#856404" }}>&#9733; National Exam: KSCE — Kenya Secondary Certificate of Education (End of Grade 12)</strong>
      </div>

      <h2>Arts & Sports Science Subjects</h2>
      <div style={{ marginBottom: "28px" }}>
        {SUBJECTS.map((s, i) => (
          <Link key={s.name} href={`/grade-10/${s.name.toLowerCase().replaceAll(" ", "-")}`} style={{ textDecoration: "none", display: "block", marginBottom: "12px" }}>
            <div style={{ border: "1px solid #eee", borderLeft: "5px solid #E91E63", borderRadius: "0 4px 4px 0", padding: "16px 20px", background: "#fafafa" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ background: "#E91E63", color: "#fff", fontSize: "11px", padding: "2px 10px", borderRadius: "2px", fontWeight: 700 }}>Subject {i + 1}</span>
                  <strong style={{ fontSize: "15px", color: "#222" }}>{s.name}</strong>
                </div>
                <span style={{ color: "#E91E63", fontWeight: 700, fontSize: "13px" }}>Start &rarr;</span>
              </div>
              <p style={{ margin: "0 0 10px 0", fontSize: "13px", color: "#555", lineHeight: 1.7 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {s.strands.map(st => <span key={st} style={{ background: "#fff", border: "1px solid #E91E63", color: "#E91E63", fontSize: "11px", padding: "2px 10px", borderRadius: "10px" }}>{st}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <SmartPrevNext />
    </div>
  );
}