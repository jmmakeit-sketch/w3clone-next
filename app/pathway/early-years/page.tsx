import Link from "next/link";

function PrevNext({ prev, next, bottom }: { prev: { href: string; label: string }, next: { href: string; label: string }, bottom?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: bottom ? "40px 0 16px 0" : "0 0 28px 0", gap: "10px" }}>
      <Link href={prev.href} style={{ background: "#04AA6D", color: "#fff", padding: "10px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
        &#10094; {prev.label}
      </Link>
      {bottom && (
        <Link href="/signin" style={{ border: "1px solid #ccc", color: "#555", padding: "10px 22px", borderRadius: "3px", fontSize: "13px", textDecoration: "none", background: "#fff" }}>
          Sign in to track progress
        </Link>
      )}
      <Link href={next.href} style={{ background: "#04AA6D", color: "#fff", padding: "10px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
        {next.label} &#10095;
      </Link>
    </div>
  );
}

export default function EarlyYearsPage() {
  const prev = { href: '/pathway/lower-primary', label: 'Lower Primary' }
  const bottom = PrevNext prev={prev} next={next} />

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #FF9800 0%, #e65100 100%)", color: "#fff", padding: "36px 32px 44px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 12px", borderRadius: "10px", marginBottom: "12px", letterSpacing: "1px" }}>EARLY YEARS EDUCATION &bull; EYE &bull; AGES 4–5</div>
        <h1 style={{ margin: "0 0 12px 0", fontSize: "34px", fontWeight: 700 }}>Early Years Pathway</h1>
        <p style={{ margin: "0 0 20px 0", opacity: 0.95, fontSize: "15px", maxWidth: "620px", lineHeight: 1.9 }}>
          The Early Years pathway covers <strong>Pre-Primary 1 (PP1)</strong> and <strong>Pre-Primary 2 (PP2)</strong> — the entry point of Kenya's CBC framework. 
          It replaces the old Nursery and Kindergarten system with a structured, play-based curriculum designed by KICD 
          to develop the whole child: cognitively, socially, emotionally and physically.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(255,255,255,0.2)", padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600 }}>PP1 &amp; PP2</span>
          <span style={{ background: "rgba(255,255,255,0.2)", padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600 }}>Ages 4–5</span>
          <span style={{ background: "rgba(255,255,255,0.2)", padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600 }}>5 Learning Areas</span>
          <span style={{ background: "rgba(255,255,255,0.2)", padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600 }}>No National Exam</span>
          <span style={{ background: "rgba(255,255,255,0.2)", padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600 }}>Play-Based Learning</span>
        </div>
      </div>

      {/* Green bridge */}
      <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderTop: "none", padding: "14px 32px 16px 32px", marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#856404", lineHeight: 1.7 }}>
          <strong>KICD Curriculum Design (2017):</strong> The Early Years curriculum was introduced in 2017 as part of the CBC rollout. 
          It is governed by the <em>Early Years Education Curriculum Design</em> published by KICD and approved by the Ministry of Education.
        </p>
      </div>

      {/* What is Early Years */}
      <h2>What is the Early Years Pathway?</h2>
      <p>
        The Early Years pathway is the <strong>foundation of Kenya's 2-6-3-3 education structure</strong>. It spans two years — PP1 for children aged 4 and PP2 for children aged 5 — and forms the first two years of the six-year primary education block.
      </p>
      <p>
        Unlike the old nursery system which was largely unregulated, the CBC Early Years curriculum is a <strong>structured national programme</strong> with defined learning outcomes, teacher guides, observation tools and SBA frameworks. Every child in Kenya — whether in a public or private school — follows the same KICD-approved curriculum.
      </p>

      {/* Key Principles */}
      <h2>Key Principles of Early Years Learning</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px", margin: "16px 0 28px 0" }}>
        {[
          { title: "Play-Based Learning", icon: "🎲", desc: "All learning in Early Years happens through guided play, exploration and hands-on activities. Children learn best when they are active and engaged.", color: "#FF9800" },
          { title: "Mother Tongue Instruction", icon: "🗣️", desc: "KICD requires that Early Years learning is conducted in the child's mother tongue or the language of the local community to build strong language foundations.", color: "#2196F3" },
          { title: "Holistic Development", icon: "🌱", desc: "The curriculum targets physical, cognitive, social, emotional and moral development simultaneously — not just academic skills.", color: "#04AA6D" },
          { title: "Child-Centred Approach", icon: "👧", desc: "The teacher is a guide and facilitator. Children explore, discover and construct knowledge at their own pace with support from the teacher.", color: "#9C27B0" },
          { title: "Continuous Assessment", icon: "📋", desc: "There are no written exams in Early Years. Teachers assess children through observation, portfolios and activity records throughout the year.", color: "#F44336" },
          { title: "Inclusive Education", icon: "🤝", desc: "The curriculum accommodates children with diverse learning needs, disabilities and backgrounds to ensure no child is left behind.", color: "#607D8B" },
        ].map(p => (
          <div key={p.title} style={{ border: "1px solid #eee", borderTop: `4px solid ${p.color}`, borderRadius: "3px", padding: "16px 14px", background: "#fafafa" }}>
            <div style={{ fontSize: "24px", marginBottom: "8px" }}>{p.icon}</div>
            <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px", color: p.color }}>{p.title}</div>
            <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.7 }}>{p.desc}</div>
          </div>
        ))}
      </div>

      {/* 5 Learning Areas */}
      <h2>The 5 Early Years Learning Areas</h2>
      <p>
        The KICD Early Years curriculum is organised into <strong>5 learning areas</strong> that are taught in both PP1 and PP2. These are not called "subjects" at this level — they are called <em>learning areas</em> to reflect the integrated, activity-based nature of learning.
      </p>
      <div style={{ marginBottom: "28px" }}>
        {[
          {
            area: "1. Language Activities",
            color: "#FF9800",
            strands: ["Listening and Speaking", "Reading Readiness", "Writing Readiness", "Creative Expression"],
            desc: "Develops communication skills in the mother tongue, Kiswahili and English. Children learn to listen attentively, express themselves orally, recognise letters and sounds, and develop pre-writing skills through drawing and tracing.",
            outcomes: ["Listen and respond to simple instructions", "Identify letters of the alphabet", "Recognise common words by sight", "Hold a pencil correctly and trace letters", "Tell a simple story in their home language"],
          },
          {
            area: "2. Mathematical Activities",
            color: "#2196F3",
            strands: ["Numbers", "Measurement", "Geometry", "Patterns"],
            desc: "Builds numeracy foundations through counting, sorting, matching and simple problem-solving. Children use physical objects (blocks, stones, counters) to understand number concepts before moving to abstract notation.",
            outcomes: ["Count objects from 1 to 20 (PP1) and 1 to 100 (PP2)", "Sort and classify objects by colour, shape and size", "Identify basic 2D shapes: circle, square, triangle, rectangle", "Understand concepts of more/less, big/small, heavy/light", "Recognise and continue simple patterns"],
          },
          {
            area: "3. Environmental Activities",
            color: "#04AA6D",
            strands: ["Living Things", "Non-Living Things", "Our Environment", "Health & Safety"],
            desc: "Introduces children to the world around them — plants, animals, weather, the home, the school and the community. Children observe, explore and ask questions about their natural and built environment.",
            outcomes: ["Identify common animals and plants in their environment", "Describe weather conditions (sunny, rainy, cloudy)", "Name parts of the human body", "Understand basic hygiene practices", "Identify safe and unsafe situations at home and school"],
          },
          {
            area: "4. Psychomotor & Creative Activities",
            color: "#9C27B0",
            strands: ["Gross Motor Skills", "Fine Motor Skills", "Creative Arts", "Music & Movement"],
            desc: "Develops physical coordination, creativity and self-expression through movement, art, music and drama. This learning area is critical for brain development and prepares children for writing and other fine motor tasks.",
            outcomes: ["Run, jump, hop and balance with control", "Use scissors, crayons and brushes with increasing accuracy", "Sing simple songs and recite rhymes", "Create drawings and models using various materials", "Participate in simple drama and role play"],
          },
          {
            area: "5. Religious Education",
            color: "#607D8B",
            strands: ["Christian Religious Education", "Islamic Religious Education", "Hindu Religious Education"],
            desc: "Introduces children to values, morals and spiritual foundations appropriate to their family's faith background. Focuses on love, respect, sharing, honesty and care for others. Schools offer CRE, IRE or HRE based on the learner's background.",
            outcomes: ["Understand the value of prayer and thanksgiving", "Identify religious celebrations and their meaning", "Demonstrate values of love, kindness and sharing", "Respect people of different faiths", "Know simple moral stories from their religious tradition"],
          },
        ].map(la => (
          <div key={la.area} style={{ background: "#fafafa", padding: "18px 22px", marginBottom: "16px", borderRadius: "0 4px 4px 0", borderLeft: `5px solid ${la.color}`, border: "1px solid #eee" }}>
            <h3 style={{ margin: "0 0 6px 0", fontSize: "16px", color: la.color }}>{la.area}</h3>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "10px" }}>
              {la.strands.map(s => <span key={s} style={{ background: la.color, color: "#fff", fontSize: "11px", padding: "2px 10px", borderRadius: "10px" }}>{s}</span>)}
            </div>
            <p style={{ margin: "0 0 12px 0", fontSize: "14px", color: "#444", lineHeight: 1.8 }}>{la.desc}</p>
            <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: "3px", padding: "12px 16px" }}>
              <div style={{ fontWeight: 700, fontSize: "12px", color: "#666", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Learning Outcomes</div>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", color: "#444", lineHeight: 2 }}>
                {la.outcomes.map(o => <li key={o}>{o}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* PP1 vs PP2 comparison */}
      <h2>PP1 vs PP2 — What Changes?</h2>
      <p>Both PP1 and PP2 cover the same 5 learning areas. The difference is in the <strong>depth, complexity and expectations</strong> at each level.</p>
      <table style={{ marginBottom: "28px" }}>
        <thead>
          <tr>
            <th>Learning Area</th>
            <th>PP1 (Age 4) Focus</th>
            <th>PP2 (Age 5) Focus</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Language Activities", "Oral language, listening, letter recognition, pre-writing strokes", "Reading readiness, phonics, sight words, simple sentence formation"],
            ["Mathematical Activities", "Counting 1–20, sorting, matching, basic shapes", "Counting 1–100, simple addition/subtraction, measurement concepts"],
            ["Environmental Activities", "Home, family, body parts, immediate surroundings", "School, community, weather, health, safety, living vs non-living"],
            ["Psychomotor & Creative", "Gross motor play, free art, simple songs and rhymes", "Fine motor tasks, structured art projects, drama, musical instruments"],
            ["Religious Education", "Values: love, sharing, kindness through stories and play", "Moral decision-making, prayer, religious celebrations and their meaning"],
          ].map(([area, pp1, pp2]) => (
            <tr key={area}>
              <td style={{ fontWeight: 700, color: "#FF9800" }}>{area}</td>
              <td style={{ fontSize: "13px" }}>{pp1}</td>
              <td style={{ fontSize: "13px" }}>{pp2}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* SBA in Early Years */}
      <h2>Assessment in Early Years (SBA)</h2>
      <p>
        There are <strong>no written examinations</strong> in the Early Years pathway. Assessment is entirely through <strong>School Based Assessment (SBA)</strong> — a continuous, observational process conducted by the class teacher throughout the year.
      </p>
      <div className="example-box">
        <div className="example-box-header">How Teachers Assess Early Years Learners</div>
        <div className="example-box-body">
          <table style={{ margin: 0 }}>
            <thead><tr><th>Tool</th><th>Description</th></tr></thead>
            <tbody>
              {[
                ["Observation Records", "Teacher observes and records each child's participation, behaviour and skill development during daily activities"],
                ["Portfolio", "Collection of each child's work samples — drawings, crafts, written attempts — showing growth over time"],
                ["Anecdotal Notes", "Brief written notes by the teacher recording significant learning moments or concerns"],
                ["Checklists", "Structured lists of expected competencies the teacher marks off as each child demonstrates them"],
                ["Parent Reports", "Regular communication with parents about the child's progress at home and school"],
              ].map(([tool, desc]) => (
                <tr key={tool}><td style={{ fontWeight: 700 }}>{tool}</td><td>{desc}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Start Learning Cards */}
      <h2 style={{ marginTop: "32px" }}>Start Learning — Choose a Grade</h2>
      <div className="subject-grid" style={{ marginBottom: "28px" }}>
        {[
          { label: "PP1", href: "/pp1", age: "Age 4", desc: "The first year of formal schooling. Children learn through play, songs, stories and hands-on activities in all 5 learning areas.", subjects: ["Language Activities", "Mathematical Activities", "Environmental Activities", "Psychomotor & Creative", "Religious Education"] },
          { label: "PP2", href: "/pp2", age: "Age 5", desc: "Builds on PP1 foundations. Deeper phonics, number work, creative expression and community awareness prepare children for Grade 1.", subjects: ["Language Activities", "Mathematical Activities", "Environmental Activities", "Psychomotor & Creative", "Religious Education"] },
        ].map(g => (
          <Link key={g.label} href={g.href} className="subject-card">
            <div className="subject-card-header" style={{ background: "#FF9800" }}>
              <div style={{ fontSize: "28px", fontWeight: 900 }}>{g.label}</div>
              <div style={{ fontSize: "12px", opacity: 0.9, marginTop: "2px" }}>{g.age} &bull; Early Years</div>
            </div>
            <div className="subject-card-body">
              <p style={{ margin: "0 0 10px 0", fontSize: "13px", color: "#444", lineHeight: 1.6 }}>{g.desc}</p>
              <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "12px", color: "#555" }}>
                {g.subjects.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </Link>
        ))}
      </div>

      {/* Note box */}
      <div className="note-box">
        <strong>For Parents & Teachers:</strong> The KICD Early Years curriculum designs, teacher guides and SBA tools are available free of charge from the official KICD website.{" "}
        <a href="https://kicd.ac.ke" target="_blank" rel="noreferrer" style={{ color: "#FF9800" }}>Visit kicd.ac.ke &rarr;</a>
      </div>

      {/* Bottom Prev/Next with sign in */}
      <PrevNext prev={{ href: '/kicd', label: 'KICD Framework' }} next={{ href: '/pathway/lower-primary', label: 'Lower Primary' }} bottom />
    </div>
  );
}

