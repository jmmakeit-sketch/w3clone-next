import Link from "next/link";

export default function KicdPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>KICD Framework</span>
      </div>


      <div className="prev-next" style={{ marginTop: 0, paddingTop: 0, borderTop: "none", marginBottom: "24px" }}>
        <Link href="/about" className="prev">About CBC</Link>
        <Link href="/pathway/early-years" className="next">Early Years</Link>
      </div>

      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>KICD Framework</h1>
        <p style={{ margin: 0, opacity: 0.92, fontSize: "15px", maxWidth: "600px", lineHeight: 1.8 }}>
          The Kenya Institute of Curriculum Development (KICD) is the government body mandated to develop, 
          review and approve all curriculum materials used in Kenyan schools.
        </p>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "16px 32px 20px 32px", marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#1a5c35", lineHeight: 1.7 }}>
          KICD operates under the <strong>Basic Education Act No. 14 of 2013</strong> and is responsible for the design, 
          development and evaluation of curricula for Early Childhood, Primary, Secondary and Teacher Education in Kenya.
        </p>
      </div>

      <h2>What is KICD?</h2>
      <p>The Kenya Institute of Curriculum Development was established in 2013, replacing the Kenya Institute of Education (KIE). Its mandate is to design curricula that are responsive to the needs of Kenyan learners and aligned to national development goals under <strong>Vision 2030</strong> and the <strong>Big Four Agenda</strong>.</p>

      <div className="example-box">
        <div className="example-box-header">KICD Core Mandate</div>
        <div className="example-box-body">
          <table style={{ margin: 0 }}>
            <thead><tr><th>Function</th><th>Description</th></tr></thead>
            <tbody>
              {[
                ["Curriculum Design", "Develops syllabuses, curriculum designs and learning materials for all levels"],
                ["Research & Evaluation", "Continuously reviews curriculum relevance and learning outcomes"],
                ["Teacher Capacity", "Develops teacher guides and supports in-service training materials"],
                ["Quality Assurance", "Approves all textbooks and learning materials used in Kenyan schools"],
                ["CBC Implementation", "Leads the rollout of the Competency Based Curriculum from PP1 to Grade 12"],
                ["Digital Content", "Develops and curates digital learning resources aligned to the CBC"],
              ].map(([f, d]) => (
                <tr key={f}><td style={{ fontWeight: 700 }}>{f}</td><td>{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2>The CBC Curriculum Framework</h2>
      <p>The CBC framework is built on <strong>four pillars</strong> that guide all learning from PP1 through Grade 12:</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px", margin: "16px 0 28px 0" }}>
        {[
          { title: "Values", color: "#04AA6D", desc: "Love, Responsibility, Respect, Unity, Peace, Patriotism, Social Justice and Integrity are embedded in every subject." },
          { title: "Competencies", color: "#2196F3", desc: "7 core competencies including Communication, Critical Thinking, Digital Literacy and Self-Efficacy guide learning outcomes." },
          { title: "Community Service Learning", color: "#9C27B0", desc: "Learners engage with their communities through practical projects that apply classroom knowledge to real life." },
          { title: "Pertinent & Contemporary Issues (PCI)", color: "#F44336", desc: "Cross-cutting themes like environmental education, life skills, gender, financial literacy and HIV/AIDS are woven into all subjects." },
        ].map(p => (
          <div key={p.title} style={{ border: "1px solid #ddd", borderTop: `4px solid ${p.color}`, borderRadius: "3px", padding: "16px 14px" }}>
            <div style={{ fontWeight: 700, fontSize: "15px", color: p.color, marginBottom: "8px" }}>{p.title}</div>
            <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.7 }}>{p.desc}</div>
          </div>
        ))}
      </div>

      <h2>CBC Curriculum Levels</h2>
      {[
        { level: "Early Years Education", code: "EYE", grades: "PP1, PP2", color: "#FF9800", doc: "EYE Curriculum Design 2017", desc: "Play-based learning covering Language, Mathematical, Environmental, Psychomotor & Creative Activities and Religious Education. Uses mother tongue as the primary language of instruction." },
        { level: "Lower Primary", code: "LP", grades: "Grade 1, 2, 3", color: "#2196F3", doc: "Lower Primary Curriculum Design 2017", desc: "Transition from play-based to structured learning. English and Kiswahili introduced alongside Mathematics, Creative Arts, Hygiene & Nutrition and Environmental Activities." },
        { level: "Upper Primary", code: "UP", grades: "Grade 4, 5, 6", color: "#9C27B0", doc: "Upper Primary Curriculum Design 2019", desc: "Introduces Agriculture, Integrated Science, Social Studies and Creative Arts & Sports. Ends with KPSEA (Kenya Primary School Education Assessment) at Grade 6." },
        { level: "Junior Secondary", code: "JSS", grades: "Grade 7, 8, 9", color: "#F44336", doc: "Junior Secondary Curriculum Design 2020", desc: "Broad exposure to all subject areas before specialisation. Includes Pre-Technical Studies, Health Education and all core subjects. Ends with KILEA at Grade 9." },
        { level: "Senior Secondary", code: "SSS", grades: "Grade 10, 11, 12", color: "#607D8B", doc: "Senior Secondary Curriculum Design 2023", desc: "Learners choose a pathway: STEM, Arts & Sports Science, or Social Sciences. Each pathway has mandatory and optional subjects leading to KSCE at Grade 12." },
      ].map(l => (
        <div key={l.level} style={{ borderLeft: `5px solid ${l.color}`, background: "#fafafa", padding: "16px 20px", marginBottom: "14px", borderRadius: "0 3px 3px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
            <div>
              <span style={{ background: l.color, color: "#fff", fontWeight: 700, fontSize: "12px", padding: "2px 10px", borderRadius: "2px", marginRight: "8px" }}>{l.code}</span>
              <strong>{l.level}</strong> <span style={{ color: "#888", fontSize: "13px" }}>({l.grades})</span>
            </div>
            <span style={{ fontSize: "11px", color: "#04AA6D", fontStyle: "italic" }}>{l.doc}</span>
          </div>
          <p style={{ margin: 0, fontSize: "14px", color: "#444", lineHeight: 1.7 }}>{l.desc}</p>
        </div>
      ))}

      <h2>Pertinent & Contemporary Issues (PCI)</h2>
      <p>KICD requires all subjects to integrate the following cross-cutting issues into teaching and learning:</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px", margin: "16px 0 28px 0" }}>
        {["Environmental Education", "Education for Sustainable Development", "Financial Literacy", "Gender & Sexuality", "HIV & AIDS Education", "Life Skills Education", "Learner-Centred Approaches", "Safety & Disaster Risk Reduction", "Non-Formal Education", "Guidance & Counselling"].map(pci => (
          <div key={pci} style={{ background: "#f8f9fa", border: "1px solid #dee2e6", borderRadius: "3px", padding: "10px 12px", fontSize: "13px", color: "#333" }}>
            &#10003; {pci}
          </div>
        ))}
      </div>

      <div className="note-box">
        <strong>Official KICD Resources:</strong> All curriculum designs, syllabuses and teacher guides are available on the official KICD website.{" "}
        <a href="https://kicd.ac.ke" target="_blank" rel="noreferrer" style={{ color: "#04AA6D" }}>Visit kicd.ac.ke &rarr;</a>
      </div>

      <div className="prev-next">
        <Link href="/about" className="prev">About CBC</Link>
        <Link href="/pathway/early-years" className="next">Early Years Pathway</Link>
      </div>
    </div>
  );
}
