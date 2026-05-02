import Link from "next/link";

const GUIDES = [
  { title: "How to Use This Site", href: "/how-to/use-this-site", desc: "A quick guide to navigating CBC Kenya Schools — finding your grade, subject, topic and exercises.", time: "2 min read" },
  { title: "How SBA Works", href: "/how-to/sba", desc: "Understanding School Based Assessment — what it is, how teachers record it and how it affects progression.", time: "5 min read" },
  { title: "How to Prepare for KPSEA", href: "/how-to/kpsea-prep", desc: "Grade 6 exam preparation guide — topics covered, revision tips and what to expect on exam day.", time: "7 min read" },
  { title: "How to Prepare for KILEA", href: "/how-to/kilea-prep", desc: "Grade 9 exam preparation guide — subject weightings, revision strategies and pathway selection tips.", time: "7 min read" },
  { title: "How to Prepare for KSCE", href: "/how-to/ksce-prep", desc: "Grade 12 exam preparation — subject combinations, university requirements and TVET options.", time: "8 min read" },
  { title: "How to Choose a Senior Secondary Pathway", href: "/how-to/choose-pathway", desc: "STEM, Arts & Sports Science or Social Sciences? A guide to choosing the right Senior Secondary pathway.", time: "5 min read" },
  { title: "How to Support Your Child at Home (CBC)", href: "/how-to/parent-support", desc: "Practical tips for parents on supporting CBC learning at home — activities, routines and SBA portfolios.", time: "6 min read" },
  { title: "How Teachers Implement CBC", href: "/how-to/teacher-guide", desc: "Learner-centred approaches, activity-based learning, lesson planning and SBA recording for CBC teachers.", time: "10 min read" },
];

export default function HowToPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>How To</span>
      </div>

      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>How To — CBC Guides</h1>
        <p style={{ margin: 0, opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>
          Step-by-step guides for learners, parents and teachers on navigating the Kenya CBC. From using this site to preparing for national exams.
        </p>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#1a5c35" }}>{GUIDES.length} guides available — for learners, parents and teachers.</p>
      </div>

      <div style={{ marginBottom: "28px" }}>
        {GUIDES.map((g, i) => (
          <Link key={g.title} href={g.href} style={{ textDecoration: "none", display: "block", marginBottom: "10px" }}>
            <div style={{ border: "1px solid #eee", borderLeft: "5px solid #04AA6D", borderRadius: "0 4px 4px 0", padding: "16px 20px", background: "#fafafa", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ background: "#04AA6D", color: "#fff", fontSize: "11px", padding: "2px 10px", borderRadius: "2px", fontWeight: 700, flexShrink: 0 }}>Guide {i + 1}</span>
                  <strong style={{ fontSize: "15px", color: "#222" }}>{g.title}</strong>
                </div>
                <p style={{ margin: 0, fontSize: "13px", color: "#555", lineHeight: 1.7 }}>{g.desc}</p>
              </div>
              <div style={{ flexShrink: 0, textAlign: "right" }}>
                <div style={{ fontSize: "11px", color: "#999", marginBottom: "4px" }}>{g.time}</div>
                <span style={{ color: "#04AA6D", fontWeight: 700, fontSize: "13px" }}>Read &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="prev-next">
        <Link href="/references" className="prev">References</Link>
        <Link href="/" className="next">Back to Home</Link>
      </div>
    </div>
  );
}