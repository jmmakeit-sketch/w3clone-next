"use client";

export default function RightSidebar({ grade, subject }: { grade?: string; subject?: string }) {
  return (
    <aside className="right-sidebar">
      <div className="rs-card">
        <div className="rs-logo-box">CBC</div>
        <div className="rs-card-title">Get Certified!</div>
        <div className="rs-card-icon">🎓</div>
        <div className="rs-card-sub">Complete a subject and earn your CBC learning certificate.</div>
        <button className="rs-btn">Learn More</button>
      </div>

      {subject && (
        <div style={{ marginBottom: "16px" }}>
          <div className="rs-section-title">Exercises</div>
          <ul className="rs-link-list">
            <li><a href="#">Practice Questions</a></li>
            <li><a href="#">Fill in the Blanks</a></li>
            <li><a href="#">True or False</a></li>
            <li><a href="#">Match the Column</a></li>
          </ul>
        </div>
      )}

      <div style={{ marginBottom: "16px" }}>
        <div className="rs-section-title">Quick Reference</div>
        <ul className="rs-link-list">
          <li><a href="https://kicd.ac.ke" target="_blank" rel="noreferrer">KICD Website</a></li>
          <li><a href="#">CBC Curriculum Designs</a></li>
          <li><a href="#">School Based Assessment</a></li>
          <li><a href="#">Assessment Guides</a></li>
        </ul>
      </div>

      <div className="rs-card">
        <div className="rs-card-title">📚 Kenya CBC</div>
        <div style={{ fontSize: "12px", textAlign: "left", marginTop: "8px", lineHeight: "1.8", color: "#555" }}>
          <div>🟠 PP1–PP2: Early Years</div>
          <div>🔵 Gr 1–3: Lower Primary</div>
          <div>🟣 Gr 4–6: Upper Primary</div>
          <div>🔴 Gr 7–9: Junior Secondary</div>
          <div>⚫ Gr 10–12: Senior Secondary</div>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <div className="rs-section-title">National Exams</div>
        <ul className="rs-link-list">
          <li><a href="#">KPSEA – Grade 6</a></li>
          <li><a href="#">KILEA – Grade 9</a></li>
          <li><a href="#">KSCE – Grade 12</a></li>
        </ul>
      </div>
    </aside>
  );
}
