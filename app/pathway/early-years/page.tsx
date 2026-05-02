import Link from "next/link";

function PrevNext({ prev, next, bottom }: { prev: { href: string; label: string }, next: { href: string; label: string }, bottom?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: bottom ? "40px 0 16px 0" : "0 0 28px 0", gap: "10px", flexWrap: "wrap" }}>
      <Link href={prev.href} style={{ background: "#04AA6D", color: "#fff", padding: "10px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
        &#10094; Previous
      </Link>
      {bottom && (
        <Link href="/signin" style={{ border: "1px solid #ccc", color: "#555", padding: "10px 22px", borderRadius: "3px", fontSize: "13px", textDecoration: "none", background: "#fff" }}>
          Sign in to track progress
        </Link>
      )}
      <Link href={next.href} style={{ background: "#04AA6D", color: "#fff", padding: "10px 22px", borderRadius: "3px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
        Next &#10095;
      </Link>
    </div>
  );
}

export default function EarlyYearsPage() {
  const prev = { href: "/kicd", label: "KICD Framework" };
  const next = { href: "/pp1", label: "PP1 Overview" };

  const learningAreas = [
    {
      area: "1. Language Activities", color: "#e65100",
      strands: ["Listening & Speaking", "Reading Readiness", "Writing Readiness", "Creative Expression"],
      desc: "Develops communication skills in the mother tongue, Kiswahili and English. Children learn to listen attentively, express themselves orally, recognise letters and sounds, and develop pre-writing skills through drawing and tracing.",
      outcomes: ["Follow simple oral instructions", "Recognise all 26 letters", "Produce beginning sounds of letters", "Hold a pencil correctly and trace letters", "Tell a simple story orally"],
    },
    {
      area: "2. Mathematical Activities", color: "#FF9800",
      strands: ["Numbers 1-20", "Sorting & Matching", "Basic Shapes", "Patterns"],
      desc: "Builds number sense, counting, sorting and pattern recognition using physical objects. Children count from 1 to 20, sort by colour, shape and size, and explore basic 2D shapes in their environment.",
      outcomes: ["Count objects 1 to 20", "Write numerals 1 to 20", "Sort objects by colour, size and shape", "Name circle, square, triangle and rectangle", "Recognise and continue a simple pattern"],
    },
    {
      area: "3. Environmental Activities", color: "#2e7d32",
      strands: ["My Body", "My Family & Home", "Living Things", "Health & Safety"],
      desc: "Introduces children to their body, family, home, common animals and plants, and basic health and safety. Learning happens through observation walks, discussions and hands-on exploration.",
      outcomes: ["Name 10 external body parts", "Identify family members and their roles", "Distinguish living from non-living things", "Name 5 common animals and 5 plants", "State 3 safety rules at home and school"],
    },
    {
      area: "4. Psychomotor & Creative Activities", color: "#6a1b9a",
      strands: ["Gross Motor Skills", "Fine Motor Skills", "Art & Craft", "Music & Movement"],
      desc: "Develops physical coordination, creativity and self-expression through movement, art, music and drama. Essential for brain development and physical readiness for Grade 1.",
      outcomes: ["Run, jump, hop and balance with coordination", "Use scissors to cut a straight line", "Thread beads onto a string", "Produce a drawing or painting", "Sing 3 Kenyan children songs from memory"],
    },
    {
      area: "5. Religious Education", color: "#4e342e",
      strands: ["Values & Morals", "Stories & Songs", "Prayer & Worship", "Celebrations"],
      desc: "Introduces core values through stories, songs, prayer and celebrations appropriate to the child's faith (CRE, IRE or HRE). Develops love, kindness, honesty, sharing and respect.",
      outcomes: ["Name 4 core values and explain them", "Recall moral lesson from 2 religious stories", "Recite a simple prayer from memory", "Demonstrate sharing and kindness daily", "Describe one religious celebration"],
    },
  ];

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>Early Years Pathway</span>
      </div>

      <PrevNext prev={prev} next={next} />

      <div style={{ background: "linear-gradient(135deg, #FF9800 0%, #e65100 100%)", color: "#fff", padding: "36px 32px 44px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <div style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 12px", borderRadius: "10px", marginBottom: "12px", letterSpacing: "1px" }}>EARLY YEARS EDUCATION &bull; EYE &bull; AGES 4-5</div>
        <h1 style={{ margin: "0 0 12px 0", fontSize: "34px", fontWeight: 700 }}>Early Years Pathway</h1>
        <p style={{ margin: "0 0 20px 0", opacity: 0.95, fontSize: "15px", maxWidth: "620px", lineHeight: 1.9 }}>
          The Early Years pathway covers Pre-Primary 1 (PP1) and Pre-Primary 2 (PP2) — the entry point of Kenya's CBC framework.
          It replaces the old Nursery and Kindergarten system with a structured, play-based curriculum designed by KICD
          to develop the whole child: cognitively, socially, emotionally and physically.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {["PP1 and PP2", "Ages 4-5", "5 Learning Areas", "No National Exam", "Play-Based Learning", "Mother Tongue Instruction"].map(h => (
            <span key={h} style={{ background: "rgba(255,255,255,0.2)", padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600 }}>{h}</span>
          ))}
        </div>
      </div>

      <div style={{ background: "#fff8e1", border: "1px solid #FFB300", borderTop: "none", padding: "14px 32px 16px 32px", marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#856404", lineHeight: 1.7 }}>
          <strong>KICD Curriculum Design (2017):</strong> The Early Years curriculum was introduced in 2017 as part of the CBC rollout.
          It is governed by the Early Years Education Curriculum Design published by KICD and approved by the Ministry of Education.
        </p>
      </div>

      <h2>What is the Early Years Pathway?</h2>
      <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#333" }}>
        The Early Years pathway is the <strong>foundation of Kenya's 2-6-3-3 education structure</strong>. It spans two years —
        PP1 for children aged 4 and PP2 for children aged 5 — and forms the first two years of the six-year primary education block.
      </p>
      <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#333" }}>
        Unlike the old nursery system which was largely unregulated, the CBC Early Years curriculum is a <strong>structured national programme</strong> with
        defined learning outcomes, teacher guides, observation tools and SBA frameworks. Every child in Kenya follows the same KICD-approved curriculum.
      </p>

      <h2>Key Principles of Early Years Learning</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px", margin: "16px 0 28px 0" }}>
        {[
          { title: "Play-Based Learning", desc: "All learning in Early Years happens through guided play, exploration and hands-on activities. Children learn best when they are active and engaged.", color: "#FF9800" },
          { title: "Mother Tongue Instruction", desc: "KICD requires Early Years learning to be conducted in the child's mother tongue to build strong language foundations before English and Kiswahili.", color: "#2196F3" },
          { title: "Holistic Development", desc: "The curriculum targets physical, cognitive, social, emotional and moral development simultaneously — not just academic skills.", color: "#04AA6D" },
          { title: "Child-Centred Approach", desc: "The teacher is a guide and facilitator. Children explore and discover knowledge at their own pace with teacher support.", color: "#9C27B0" },
          { title: "Continuous Assessment", desc: "No written exams in Early Years. Teachers assess through observation, portfolios and activity records throughout the year.", color: "#F44336" },
          { title: "Inclusive Education", desc: "The curriculum accommodates children with diverse learning needs, disabilities and backgrounds so no child is left behind.", color: "#607D8B" },
        ].map(p => (
          <div key={p.title} style={{ border: "1px solid #eee", borderTop: "4px solid " + p.color, borderRadius: "3px", padding: "16px 14px", background: "#fafafa" }}>
            <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px", color: p.color }}>{p.title}</div>
            <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.7 }}>{p.desc}</div>
          </div>
        ))}
      </div>

      <h2>The 5 Early Years Learning Areas</h2>
      <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#333", marginBottom: "20px" }}>
        The KICD Early Years curriculum is organised into <strong>5 learning areas</strong> taught in both PP1 and PP2.
        These are not called subjects at this level — they are called learning areas to reflect the integrated, activity-based nature of early childhood learning.
      </p>
      <div style={{ marginBottom: "28px" }}>
        {learningAreas.map(la => (
          <div key={la.area} style={{ background: "#fafafa", padding: "18px 22px", marginBottom: "14px", borderRadius: "0 4px 4px 0", border: "1px solid #eee", borderLeft: "5px solid " + la.color }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", color: la.color }}>{la.area}</h3>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "10px" }}>
              {la.strands.map(s => <span key={s} style={{ background: la.color, color: "#fff", fontSize: "11px", padding: "2px 10px", borderRadius: "10px" }}>{s}</span>)}
            </div>
            <p style={{ margin: "0 0 12px 0", fontSize: "14px", color: "#444", lineHeight: 1.8 }}>{la.desc}</p>
            <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: "3px", padding: "12px 16px" }}>
              <div style={{ fontWeight: 700, fontSize: "12px", color: "#666", marginBottom: "6px", textTransform: "uppercase" as const, letterSpacing: "0.5px" }}>Key Learning Outcomes</div>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", color: "#444", lineHeight: 2 }}>
                {la.outcomes.map(o => <li key={o}>{o}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h2>PP1 vs PP2 — What Changes?</h2>
      <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#333" }}>Both PP1 and PP2 cover the same 5 learning areas. The difference is in the depth, complexity and expectations at each level.</p>
      <table style={{ marginBottom: "28px" }}>
        <thead>
          <tr><th>Learning Area</th><th>PP1 (Age 4) Focus</th><th>PP2 (Age 5) Focus</th></tr>
        </thead>
        <tbody>
          {[
            ["Language Activities", "Oral language, listening, letter recognition, pre-writing strokes", "Phonics, sight words, simple sentence reading and early writing"],
            ["Mathematical Activities", "Counting 1-20, sorting, matching, basic shapes", "Counting 1-100, simple addition and subtraction, measurement"],
            ["Environmental Activities", "Home, family, body parts, immediate surroundings", "School, community, weather, food groups, safety"],
            ["Psychomotor & Creative", "Gross motor play, free art, simple songs and rhymes", "Fine motor tasks, structured art, drama, musical instruments"],
            ["Religious Education", "Values: love, sharing, kindness through stories and play", "Moral decision-making, prayer, religious celebrations"],
          ].map(([area, pp1, pp2]) => (
            <tr key={area}>
              <td style={{ fontWeight: 700, color: "#FF9800" }}>{area}</td>
              <td style={{ fontSize: "13px" }}>{pp1}</td>
              <td style={{ fontSize: "13px" }}>{pp2}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Assessment in Early Years (SBA)</h2>
      <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#333" }}>
        There are <strong>no written examinations</strong> in the Early Years pathway. Assessment is entirely through
        <strong> School Based Assessment (SBA)</strong> — a continuous, observational process conducted by the class teacher throughout the year.
      </p>
      <div className="example-box" style={{ marginBottom: "28px" }}>
        <div className="example-box-header">How Teachers Assess Early Years Learners</div>
        <div className="example-box-body">
          <table style={{ margin: 0 }}>
            <thead><tr><th>Tool</th><th>Description</th></tr></thead>
            <tbody>
              {[
                ["Observation Records", "Teacher observes and records each child's participation, behaviour and skill development during daily activities"],
                ["Portfolio", "Collection of each child's work samples — drawings, crafts, written attempts — showing growth over time"],
                ["Anecdotal Notes", "Brief written notes recording significant learning moments or concerns about individual children"],
                ["Checklists", "Structured lists of expected competencies the teacher marks off as each child demonstrates them"],
                ["Parent Reports", "Regular communication with parents about the child's progress at home and school"],
              ].map(([tool, desc]) => (
                <tr key={tool}><td style={{ fontWeight: 700 }}>{tool}</td><td>{desc}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2>Start Learning — Choose a Grade</h2>
      <div className="subject-grid" style={{ marginBottom: "28px" }}>
        {[
          { label: "PP1", href: "/pp1", age: "Age 4", desc: "The first year of formal schooling. Children learn through play, songs, stories and hands-on activities in all 5 learning areas." },
          { label: "PP2", href: "/pp2", age: "Age 5", desc: "Builds on PP1 foundations with deeper phonics, number work and creative expression to prepare children for Grade 1." },
        ].map(g => (
          <Link key={g.label} href={g.href} className="subject-card">
            <div className="subject-card-header" style={{ background: "#FF9800" }}>
              <div style={{ fontSize: "28px", fontWeight: 900 }}>{g.label}</div>
              <div style={{ fontSize: "12px", opacity: 0.9, marginTop: "2px" }}>{g.age} &bull; Early Years</div>
            </div>
            <div className="subject-card-body">
              <p style={{ margin: 0, fontSize: "13px", color: "#444", lineHeight: 1.6 }}>{g.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="note-box">
        <strong>For Parents and Teachers:</strong> The KICD Early Years curriculum designs, teacher guides and SBA tools are available free from the official KICD website.{" "}
        <a href="https://kicd.ac.ke" target="_blank" rel="noreferrer" style={{ color: "#FF9800" }}>Visit kicd.ac.ke &rarr;</a>
      </div>

      <PrevNext prev={prev} next={next} bottom />
    </div>
  );
}

