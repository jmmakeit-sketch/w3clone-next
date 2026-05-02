import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>About CBC</span>
      </div>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>About CBC / CBE</h1>
        <p style={{ margin: 0, opacity: 0.92, fontSize: "15px", maxWidth: "600px", lineHeight: 1.8 }}>
          Kenya's Competency Based Curriculum (CBC), also called Competency Based Education (CBE), 
          is the national education framework developed by the Kenya Institute of Curriculum Development (KICD) 
          and approved by the Ministry of Education.
        </p>
      </div>

      {/* Light green bridge */}
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "16px 32px 20px 32px", marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#1a5c35", lineHeight: 1.7 }}>
          Introduced in 2017 and fully rolled out from Early Years through Junior Secondary, CBC replaces the 
          8-4-4 system that had been in place since 1985. It shifts focus from memorisation and exams 
          to <strong>skills, values and competencies</strong>.
        </p>
      </div>

      {/* What is CBC */}
      <h2>What is the Competency Based Curriculum?</h2>
      <p>
        The CBC is a learner-centred education system that emphasises what a learner can <strong>do</strong> with 
        knowledge, rather than just what they know. It is designed to nurture a child's full potential — 
        intellectually, socially, emotionally and physically — from as early as Playgroup.
      </p>
      <p>
        The curriculum is built around <strong>7 Core Competencies</strong> that every Kenyan learner is expected 
        to develop across all levels of education:
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", margin: "16px 0 28px 0" }}>
        {[
          { num: "1", title: "Communication & Collaboration", desc: "Expressing ideas clearly and working with others effectively." },
          { num: "2", title: "Critical Thinking & Problem Solving", desc: "Analysing situations and finding creative solutions." },
          { num: "3", title: "Imagination & Creativity", desc: "Generating new ideas and applying them innovatively." },
          { num: "4", title: "Citizenship", desc: "Participating responsibly in society, locally and globally." },
          { num: "5", title: "Digital Literacy", desc: "Using technology safely and effectively for learning and work." },
          { num: "6", title: "Learning to Learn", desc: "Taking ownership of one's own learning and growth." },
          { num: "7", title: "Self-Efficacy", desc: "Believing in oneself and taking initiative to achieve goals." },
        ].map(c => (
          <div key={c.num} style={{ border: "1px solid #ddd", borderTop: "3px solid #04AA6D", borderRadius: "3px", padding: "14px 12px" }}>
            <div style={{ background: "#04AA6D", color: "#fff", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, marginBottom: "8px" }}>{c.num}</div>
            <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "4px" }}>{c.title}</div>
            <div style={{ fontSize: "12px", color: "#666", lineHeight: 1.6 }}>{c.desc}</div>
          </div>
        ))}
      </div>

      {/* CBC vs 8-4-4 */}
      <h2>CBC vs the Old 8-4-4 System</h2>
      <table style={{ marginBottom: "28px" }}>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Old 8-4-4</th>
            <th>New CBC / CBE</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Structure", "8 yrs Primary, 4 yrs Secondary, 4 yrs University", "2-6-3-3: Early Years, Primary, Junior Secondary, Senior Secondary"],
            ["Focus", "Content knowledge and memorisation", "Competencies, skills and values"],
            ["Assessment", "End-of-year exams (KCPE, KCSE)", "Continuous SBA + national exams at Grade 6, 9, 12"],
            ["National Exams", "KCPE (Std 8), KCSE (Form 4)", "KPSEA (Gr 6), KILEA (Gr 9), KSCE (Gr 12)"],
            ["Transition", "Based on exam marks only", "Holistic — includes SBA, talents and aptitude"],
            ["Senior Secondary", "All students same subjects", "Pathways: STEM, Arts & Sports, Social Sciences"],
            ["Learning Style", "Teacher-centred", "Learner-centred, activity-based"],
            ["Values", "Not explicitly assessed", "Core values embedded in all subjects"],
          ].map(([aspect, old, cbc]) => (
            <tr key={aspect}>
              <td style={{ fontWeight: 700, color: "#333" }}>{aspect}</td>
              <td style={{ color: "#c0392b", fontSize: "13px" }}>{old}</td>
              <td style={{ color: "#1a7a4a", fontSize: "13px" }}>{cbc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 2-6-3-3 Structure */}
      <h2>The 2-6-3-3 Structure</h2>
      <p>Kenya CBC follows a <strong>2-6-3-3</strong> model. Here is what each level covers:</p>

      {[
        { level: "Early Years (2 years)", grades: "PP1, PP2", color: "#FF9800", exam: "No national exam — continuous observation", desc: "Foundational learning through play. Focus on language, numeracy, creativity, motor skills and social development. Subjects include Language Activities, Mathematical Activities, Environmental Activities, Psychomotor & Creative Activities and Religious Education.", age: "Ages 4–5" },
        { level: "Lower Primary (3 years)", grades: "Grade 1, 2, 3", color: "#2196F3", exam: "No national exam — continuous SBA", desc: "Building literacy and numeracy foundations. Introduces English, Kiswahili, Mathematics, Environmental Activities, Creative Arts, Hygiene & Nutrition and Religious Education. Learning is activity-based and uses mother tongue as language of instruction in early grades.", age: "Ages 6–8" },
        { level: "Upper Primary (3 years)", grades: "Grade 4, 5, 6", color: "#9C27B0", exam: "KPSEA — Kenya Primary School Education Assessment (End of Grade 6)", desc: "Deepens core subjects and introduces Agriculture, Integrated Science and Social Studies. Learners are assessed through School Based Assessments throughout and sit KPSEA at the end of Grade 6 to transition to Junior Secondary.", age: "Ages 9–11" },
        { level: "Junior Secondary (3 years)", grades: "Grade 7, 8, 9", color: "#F44336", exam: "KILEA — Kenya Junior Secondary Education Assessment (End of Grade 9)", desc: "A broad curriculum to expose learners to all subject areas before Senior Secondary specialisation. Includes English, Kiswahili, Maths, Integrated Science, Health Education, Pre-Technical Studies, Agriculture, Social Studies, Creative Arts & Sports and Religious Education.", age: "Ages 12–14" },
        { level: "Senior Secondary (3 years)", grades: "Grade 10, 11, 12", color: "#607D8B", exam: "KSCE — Kenya Secondary Certificate of Education (End of Grade 12)", desc: "Learners choose a pathway based on aptitude and interest: STEM (Sciences), Arts & Sports Science, or Social Sciences. Each pathway has core and optional subjects tailored to future career and university pathways.", age: "Ages 15–17" },
      ].map(l => (
        <div key={l.level} style={{ borderLeft: `5px solid ${l.color}`, background: "#fafafa", borderLeft: `5px solid ${l.color}`, padding: "16px 20px", marginBottom: "16px", borderRadius: "0 3px 3px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
            <div>
              <span style={{ background: l.color, color: "#fff", fontWeight: 700, fontSize: "13px", padding: "3px 10px", borderRadius: "2px", marginRight: "8px" }}>{l.grades}</span>
              <strong style={{ fontSize: "15px" }}>{l.level}</strong>
            </div>
            <span style={{ fontSize: "12px", color: "#777" }}>{l.age}</span>
          </div>
          <p style={{ margin: "0 0 8px 0", fontSize: "14px", color: "#333", lineHeight: 1.7 }}>{l.desc}</p>
          <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderRadius: "3px", padding: "5px 10px", fontSize: "12px", color: "#856404", display: "inline-block" }}>
            &#9733; {l.exam}
          </div>
        </div>
      ))}

      {/* Values */}
      <h2>CBC Core Values</h2>
      <p>All CBC subjects are designed to instil these <strong>8 National Core Values</strong> in every learner:</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "10px", margin: "16px 0 28px 0" }}>
        {[
          ["Love", "#e74c3c"], ["Responsibility", "#e67e22"], ["Respect", "#f39c12"],
          ["Unity", "#04AA6D"], ["Peace", "#2196F3"], ["Patriotism", "#9C27B0"],
          ["Social Justice", "#607D8B"], ["Integrity", "#795548"],
        ].map(([val, col]) => (
          <div key={val} style={{ background: col as string, color: "#fff", padding: "12px 16px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textAlign: "center" }}>{val as string}</div>
        ))}
      </div>

      {/* SBA */}
      <h2>School Based Assessment (SBA)</h2>
      <p>
        A key feature of CBC is the <strong>School Based Assessment (SBA)</strong>. Unlike the old system where 
        a single exam determined a child's future, SBA assesses learners continuously throughout the year.
      </p>
      <div className="example-box">
        <div className="example-box-header">How SBA Works</div>
        <div className="example-box-body">
          <table style={{ margin: 0 }}>
            <thead><tr><th>Component</th><th>Details</th></tr></thead>
            <tbody>
              {[
                ["Formative Assessment", "Ongoing — class activities, projects, oral work, portfolios"],
                ["Summative Assessment", "End of term or unit tests set by the teacher"],
                ["National Exams", "KPSEA (Grade 6), KILEA (Grade 9), KSCE (Grade 12)"],
                ["Weighting", "SBA counts alongside national exam results for progression"],
                ["Reporting", "Learner reports show competency levels, not just marks"],
              ].map(([comp, det]) => (
                <tr key={comp}><td style={{ fontWeight: 700 }}>{comp}</td><td>{det}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* KICD */}
      <div className="note-box" style={{ marginTop: "28px" }}>
        <strong>About KICD:</strong> The Kenya Institute of Curriculum Development (KICD) is the government body 
        mandated to develop and review the national curriculum. All content on this site is aligned to KICD 
        curriculum designs and syllabuses. Visit <a href="https://kicd.ac.ke" target="_blank" rel="noreferrer" style={{ color: "#04AA6D" }}>kicd.ac.ke</a> for official curriculum documents.
      </div>

      {/* Prev / Next */}
      <div className="prev-next">
        <Link href="/" className="prev">Home</Link>
        <Link href="/kicd" className="next">KICD Framework</Link>
      </div>
    </div>
  );
}

