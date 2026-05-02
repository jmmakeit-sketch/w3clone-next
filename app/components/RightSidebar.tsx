"use client";

export default function RightSidebar({ grade, subject }: { grade?: string; subject?: string }) {
  return (
    <aside className="right-sidebar">
      <div className="rs-card">
        <div className="rs-logo-box">CBC</div>
        <div className="rs-card-title">Get Certified!</div>
        <div className="rs-card-icon">&#127891;</div>
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
        <div className="rs-card-title">Kenya CBC Structure</div>
        <div style={{ fontSize: "12px", textAlign: "left", marginTop: "8px", lineHeight: "2", color: "#555" }}>
          <div><span style={{ color: "#FF9800", fontWeight: 700 }}>&#9632;</span> PP1-PP2: Early Years</div>
          <div><span style={{ color: "#2196F3", fontWeight: 700 }}>&#9632;</span> Gr 1-3: Lower Primary</div>
          <div><span style={{ color: "#9C27B0", fontWeight: 700 }}>&#9632;</span> Gr 4-6: Upper Primary</div>
          <div><span style={{ color: "#F44336", fontWeight: 700 }}>&#9632;</span> Gr 7-9: Junior Secondary</div>
          <div><span style={{ color: "#607D8B", fontWeight: 700 }}>&#9632;</span> Gr 10-12: Senior Secondary</div>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <div className="rs-section-title">National Exams</div>
        <ul className="rs-link-list">
          <li><a href="#">KPSEA - Grade 6</a></li>
          <li><a href="#">KILEA - Grade 9</a></li>
          <li><a href="#">KSCE - Grade 12</a></li>
        </ul>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <div className="rs-section-title">CBC Resources</div>
        <ul className="rs-link-list">
          <li><a href="#">SBA Guidelines</a></li>
          <li><a href="#">Competency Framework</a></li>
          <li><a href="#">Parent Handbook</a></li>
          <li><a href="#">Teacher Guides</a></li>
        </ul>
      </div>
    </aside>
  );
}
