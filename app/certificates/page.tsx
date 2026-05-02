import Link from "next/link";

export default function CertificatesPage() {
  const certs = [
    { title: "Early Years Certificate", desc: "Complete all 5 learning areas for PP1 and PP2.", color: "#FF9800", subjects: 5, badge: "EYE" },
    { title: "Lower Primary Certificate", desc: "Complete all 7 subjects across Grade 1, 2 and 3.", color: "#2196F3", subjects: 7, badge: "LP" },
    { title: "Upper Primary Certificate", desc: "Complete all 8 subjects across Grade 4, 5 and 6.", color: "#9C27B0", subjects: 8, badge: "UP" },
    { title: "Junior Secondary Certificate", desc: "Complete all 9 subjects across Grade 7, 8 and 9.", color: "#F44336", subjects: 9, badge: "JSS" },
    { title: "Senior Secondary Certificate", desc: "Complete your chosen pathway subjects in Grade 10–12.", color: "#607D8B", subjects: 6, badge: "SSS" },
    { title: "CBC Champion Certificate", desc: "Complete quizzes and exercises across all pathways.", color: "#04AA6D", subjects: 0, badge: "CBC" },
  ];
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="breadcrumb-sep">&rsaquo;</span>
        <span>Certificates</span>
      </div>
      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>CBC Learning Certificates</h1>
        <p style={{ margin: 0, opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>
          Earn a certificate for every pathway you complete. Show your progress, motivate your learning and celebrate your achievements — free for every Kenyan learner.
        </p>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#1a5c35" }}>Certificates are awarded after completing all topics, exercises and quizzes for a pathway. Sign in to track your progress and download your certificates.</p>
      </div>
      <h2>Available Certificates</h2>
      <div className="subject-grid" style={{ marginBottom: "32px" }}>
        {certs.map(c => (
          <div key={c.title} className="subject-card">
            <div className="subject-card-header" style={{ background: c.color, textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: 900, letterSpacing: "2px", marginBottom: "4px" }}>{c.badge}</div>
              <div style={{ fontSize: "13px", fontWeight: 700 }}>{c.title}</div>
            </div>
            <div className="subject-card-body">
              <p style={{ margin: "0 0 10px 0", fontSize: "12px", color: "#555" }}>{c.desc}</p>
              {c.subjects > 0 && <div style={{ fontSize: "11px", color: "#888", marginBottom: "10px" }}>{c.subjects} subjects required</div>}
              <span style={{ background: "#eee", color: "#888", fontSize: "11px", padding: "4px 12px", borderRadius: "2px", fontWeight: 700 }}>Sign In to Earn &rarr;</span>
            </div>
          </div>
        ))}
      </div>
      <div className="example-box">
        <div className="example-box-header">How to Earn a Certificate</div>
        <div className="example-box-body">
          <ol style={{ margin: 0, paddingLeft: "20px", lineHeight: 2.2, fontSize: "14px" }}>
            <li>Sign in or create a free account</li>
            <li>Choose your grade and subject</li>
            <li>Complete all topics in the subject</li>
            <li>Pass the end-of-subject quiz (score 80% or above)</li>
            <li>Complete the exercises for that subject</li>
            <li>Download and share your certificate!</li>
          </ol>
        </div>
      </div>
      <div className="prev-next">
        <Link href="/quizzes" className="prev">Quizzes</Link>
        <Link href="/" className="next">Back to Home</Link>
      </div>
    </div>
  );
}
