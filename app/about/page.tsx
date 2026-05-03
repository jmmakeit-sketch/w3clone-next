import Link from "next/link";
import { SmartPrevNext } from "../components/Navigation";

export default function AboutPage() {
  return (
    <div>

      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>About CBC</span>
      </div>

      <SmartPrevNext position="top" />

      <h1>About CBC / CBE</h1>
      <p>
        Kenya&apos;s <strong>Competency Based Curriculum (CBC)</strong>, also called
        Competency Based Education (CBE), is the national education framework
        developed by the Kenya Institute of Curriculum Development (<strong>KICD</strong>)
        and approved by the Ministry of Education. It was introduced in 2017 and
        fully replaces the 8-4-4 system that served Kenya since 1985.
      </p>
      <p>
        CBC shifts the focus from memorisation and end-of-year exams to
        developing <strong>skills, values and competencies</strong> that prepare
        every Kenyan child for life, work and active citizenship.
      </p>

      <div className="example-box">
        <div className="example-box-header">CBC at a Glance</div>
        <div className="example-box-body">
          <table style={{ margin: 0 }}>
            <tbody>
              {[
                ["Introduced", "2017 — rolled out from Early Years upward"],
                ["Structure", "2-6-3-3 replacing 8-4-4"],
                ["Levels", "Early Years, Primary, Junior Secondary, Senior Secondary"],
                ["National Exams", "KPSEA (Gr 6), KILEA (Gr 9), KSCE (Gr 12)"],
                ["Assessment", "Continuous SBA + national exams"],
                ["Core Competencies", "7 competencies every learner must develop"],
                ["Core Values", "8 national values embedded in all subjects"],
                ["Pathways (Sr Secondary)", "STEM, Arts & Sports Science, Social Sciences"],
              ].map(([k, v]) => (
                <tr key={k}>
                  <td style={{ fontWeight: 700, whiteSpace: "nowrap", paddingRight: "16px" }}>{k}</td>
                  <td style={{ color: "#444" }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2>The 7 Core Competencies</h2>
      <p>CBC is built around seven competencies that every Kenyan learner is expected to develop from Early Years through Senior Secondary:</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "12px", margin: "16px 0 24px 0" }}>
        {[
          { n: "1", t: "Communication & Collaboration",       d: "Express ideas clearly and work effectively with others." },
          { n: "2", t: "Critical Thinking & Problem Solving", d: "Analyse situations and develop creative solutions." },
          { n: "3", t: "Imagination & Creativity",            d: "Generate new ideas and apply them in innovative ways." },
          { n: "4", t: "Citizenship",                         d: "Participate responsibly in society, locally and globally." },
          { n: "5", t: "Digital Literacy",                    d: "Use technology safely and effectively for learning." },
          { n: "6", t: "Learning to Learn",                   d: "Take ownership of your own learning and growth." },
          { n: "7", t: "Self-Efficacy",                       d: "Believe in yourself and take initiative to achieve goals." },
        ].map(c => (
          <div key={c.n} style={{ border: "1px solid #ddd", borderTop: "3px solid #04AA6D", padding: "14px 12px", borderRadius: "0 0 3px 3px" }}>
            <div style={{ background: "#04AA6D", color: "#fff", width: "26px", height: "26px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, marginBottom: "8px" }}>{c.n}</div>
            <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "6px", color: "#222" }}>{c.t}</div>
            <div style={{ fontSize: "12px", color: "#666", lineHeight: 1.6 }}>{c.d}</div>
          </div>
        ))}
      </div>

      <h2>CBC vs the Old 8-4-4 System</h2>
      <p>Here is how the new CBC compares to the old 8-4-4 system Kenya used from 1985 to 2017:</p>
      <table>
        <thead>
          <tr><th>Aspect</th><th style={{ color: "#ffcccc" }}>Old 8-4-4</th><th style={{ color: "#ccffdd" }}>New CBC / CBE</th></tr>
        </thead>
        <tbody>
          {[
            ["Structure",        "8 Primary, 4 Secondary, 4 University",  "2-6-3-3: Early Years, Primary, Junior Sec, Senior Sec"],
            ["Focus",            "Content knowledge and memorisation",     "Competencies, skills and values"],
            ["Assessment",       "End-of-year exams (KCPE, KCSE)",        "Continuous SBA + national exams at Gr 6, 9, 12"],
            ["National Exams",   "KCPE (Std 8), KCSE (Form 4)",           "KPSEA (Gr 6), KILEA (Gr 9), KSCE (Gr 12)"],
            ["Transition",       "Based on exam marks only",               "Holistic — SBA + aptitude + talents"],
            ["Senior Secondary", "Same subjects for all students",         "3 pathways: STEM, Arts & Sports, Social Sciences"],
            ["Teaching Style",   "Teacher-centred, lecture-based",        "Learner-centred, activity-based"],
            ["Values",           "Not explicitly taught or assessed",      "8 core values embedded in every subject"],
          ].map(([a, o, c]) => (
            <tr key={a}>
              <td style={{ fontWeight: 700 }}>{a}</td>
              <td style={{ color: "#c0392b", fontSize: "13px" }}>{o}</td>
              <td style={{ color: "#1a7a4a", fontSize: "13px" }}>{c}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>The 2-6-3-3 Structure</h2>
      <p>Kenya CBC follows a <strong>2-6-3-3</strong> model:</p>
      {[
        { label: "PP1, PP2",         color: "#FF9800", level: "Early Years (2 years)",      age: "Ages 4-5",   exam: "No national exam — continuous observation & portfolio",            desc: "Learning through play. Covers Language Activities, Mathematical Activities, Environmental Activities, Psychomotor & Creative Activities and Religious Education." },
        { label: "Grade 1, 2, 3",    color: "#2196F3", level: "Lower Primary (3 years)",    age: "Ages 6-8",   exam: "No national exam — continuous SBA",                               desc: "Building literacy and numeracy. Subjects: English, Kiswahili, Mathematics, Environmental Activities, Creative Arts, Hygiene & Nutrition and Religious Education." },
        { label: "Grade 4, 5, 6",    color: "#9C27B0", level: "Upper Primary (3 years)",    age: "Ages 9-11",  exam: "KPSEA — Kenya Primary School Education Assessment (End of Grade 6)", desc: "Introduces Agriculture, Integrated Science and Social Studies. Ends with KPSEA at Grade 6." },
        { label: "Grade 7, 8, 9",    color: "#F44336", level: "Junior Secondary (3 years)", age: "Ages 12-14", exam: "KILEA — Kenya Junior Secondary Education Assessment (End of Grade 9)", desc: "Broad exposure before pathway selection. Adds Pre-Technical Studies, Health Education and Creative Arts & Sports." },
        { label: "Grade 10, 11, 12", color: "#607D8B", level: "Senior Secondary (3 years)", age: "Ages 15-17", exam: "KSCE — Kenya Secondary Certificate of Education (End of Grade 12)",   desc: "Learner chooses a pathway: STEM, Arts & Sports Science, or Social Sciences." },
      ].map(l => (
        <div key={l.label} style={{ borderLeft: `5px solid ${l.color}`, background: "#fafafa", padding: "16px 20px", marginBottom: "14px", borderRadius: "0 3px 3px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ background: l.color, color: "#fff", fontWeight: 700, fontSize: "12px", padding: "3px 10px", borderRadius: "2px" }}>{l.label}</span>
              <strong style={{ fontSize: "15px" }}>{l.level}</strong>
            </div>
            <span style={{ fontSize: "12px", color: "#777", alignSelf: "center" }}>{l.age}</span>
          </div>
          <p style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#444", lineHeight: 1.7 }}>{l.desc}</p>
          <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderRadius: "3px", padding: "5px 12px", fontSize: "12px", color: "#856404", display: "inline-block" }}>
            &#9733; {l.exam}
          </div>
        </div>
      ))}

      <h2>The 8 CBC Core Values</h2>
      <p>Every CBC subject is designed to develop these eight national core values in each learner:</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "10px", margin: "16px 0 24px 0" }}>
        {[["Love","#e74c3c"],["Responsibility","#e67e22"],["Respect","#f39c12"],["Unity","#04AA6D"],["Peace","#2196F3"],["Patriotism","#9C27B0"],["Social Justice","#607D8B"],["Integrity","#795548"]].map(([v, c]) => (
          <div key={v} style={{ background: c as string, color: "#fff", padding: "14px", borderRadius: "3px", fontWeight: 700, fontSize: "13px", textAlign: "center" }}>{v as string}</div>
        ))}
      </div>

      <h2>School Based Assessment (SBA)</h2>
      <p>A defining feature of CBC is <strong>School Based Assessment (SBA)</strong>. Rather than judging a child on a single annual exam, SBA assesses learning continuously throughout the year.</p>
      <div className="example-box">
        <div className="example-box-header">How SBA Works</div>
        <div className="example-box-body">
          <table style={{ margin: 0 }}>
            <thead><tr><th>Component</th><th>Details</th></tr></thead>
            <tbody>
              {[
                ["Formative Assessment", "Ongoing — classwork, projects, oral tasks, portfolios, observations"],
                ["Summative Assessment", "End of term / unit tests designed by the class teacher"],
                ["National Exams",       "KPSEA (Grade 6), KILEA (Grade 9), KSCE (Grade 12)"],
                ["SBA Weighting",        "SBA results count alongside national exam scores for progression"],
                ["Reporting",            "Learner reports show competency levels — not just raw marks"],
                ["SBA Tools",            "Observation schedules, rubrics, portfolios, checklists, projects"],
              ].map(([k, v]) => (
                <tr key={k}><td style={{ fontWeight: 700 }}>{k}</td><td>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ background: "#f9f9f9", border: "1px solid #ddd", padding: "18px 22px", margin: "28px 0 20px 0", borderRadius: "3px" }}>
        <h2 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>Test Yourself</h2>
        <p style={{ margin: "0 0 14px 0", fontSize: "14px", color: "#555" }}>Check your understanding of the CBC framework with our exercises and quiz.</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Link href="/exercises" style={{ background: "#04AA6D", color: "#fff", padding: "9px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>CBC Exercises &rarr;</Link>
          <Link href="/quizzes" style={{ background: "#2196F3", color: "#fff", padding: "9px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>Take a Quiz &rarr;</Link>
        </div>
      </div>

      <div className="note-box">
        <strong>About KICD:</strong> The Kenya Institute of Curriculum Development (KICD) is the government body
        mandated to develop and review Kenya&apos;s national curriculum. All content on CBC Kenya Schools is
        aligned to official KICD curriculum designs. Visit{" "}
        <a href="https://kicd.ac.ke" target="_blank" rel="noreferrer" style={{ color: "#04AA6D" }}>kicd.ac.ke</a>{" "}
        for official documents and syllabus downloads.
      </div>

      <SmartPrevNext />

    </div>
  );
}