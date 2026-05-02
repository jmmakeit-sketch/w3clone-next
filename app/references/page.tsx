import Link from "next/link";

const REFS = [
  { section: "Official KICD Documents", color: "#04AA6D", items: [
    { title: "KICD Official Website", href: "https://kicd.ac.ke", ext: true, desc: "Kenya Institute of Curriculum Development — official curriculum designs, teacher guides and policy documents." },
    { title: "Early Years Curriculum Design", href: "https://kicd.ac.ke", ext: true, desc: "The official KICD curriculum design for PP1 and PP2 (2017). Covers all 5 learning areas." },
    { title: "Lower Primary Curriculum Design", href: "https://kicd.ac.ke", ext: true, desc: "Grade 1–3 curriculum design covering all 7 subjects." },
    { title: "Upper Primary Curriculum Design", href: "https://kicd.ac.ke", ext: true, desc: "Grade 4–6 curriculum design including Agriculture, Integrated Science and Social Studies." },
    { title: "Junior Secondary Curriculum Design", href: "https://kicd.ac.ke", ext: true, desc: "Grade 7–9 curriculum design including Pre-Technical Studies and Health Education." },
    { title: "Senior Secondary Curriculum Design", href: "https://kicd.ac.ke", ext: true, desc: "Grade 10–12 curriculum designs for STEM, Arts & Sports Science and Social Sciences pathways." },
  ]},
  { section: "Assessment & SBA", color: "#2196F3", items: [
    { title: "SBA Assessment Guide", href: "/references/sba-guides", ext: false, desc: "How School Based Assessment works across all CBC levels — tools, frequency and reporting." },
    { title: "KPSEA Information", href: "/references/kpsea", ext: false, desc: "Kenya Primary School Education Assessment — sat at end of Grade 6. Format, grading and what to expect." },
    { title: "KILEA Information", href: "/references/kilea", ext: false, desc: "Kenya Junior Secondary Education Assessment — sat at end of Grade 9. Pathway selection implications." },
    { title: "KSCE Information", href: "/references/ksce", ext: false, desc: "Kenya Secondary Certificate of Education — sat at end of Grade 12. University and TVET entry requirements." },
  ]},
  { section: "Curriculum Guides", color: "#9C27B0", items: [
    { title: "CBC Core Competencies", href: "/about", ext: false, desc: "All 7 core competencies of the CBC explained with examples across grade levels." },
    { title: "CBC Core Values", href: "/about", ext: false, desc: "The 8 national core values embedded in every CBC subject from PP1 to Grade 12." },
    { title: "Pertinent & Contemporary Issues", href: "/kicd", ext: false, desc: "Cross-cutting themes like environmental education, gender, financial literacy and life skills." },
    { title: "Community Service Learning", href: "/kicd", ext: false, desc: "How CBC uses community service as a learning tool across all grade levels." },
  ]},
  { section: "For Parents & Teachers", color: "#F44336", items: [
    { title: "Parent Handbook", href: "/references/parent-guide", ext: false, desc: "Understanding CBC as a parent — what to expect at each level, how to support learning at home." },
    { title: "Teacher Implementation Guide", href: "/references/teacher-guide", ext: false, desc: "How to implement CBC pedagogy — learner-centred approaches, activity-based learning and SBA tools." },
    { title: "CBC Glossary", href: "/references/glossary", ext: false, desc: "Key CBC terms defined — competency, strand, sub-strand, SBA, PCI, and more." },
    { title: "Ministry of Education", href: "https://education.go.ke", ext: true, desc: "Official Ministry of Education website — policy documents, circulars and CBC implementation updates." },
  ]},
];

export default function ReferencesPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>References</span>
      </div>

      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "36px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: 0 }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: 700 }}>CBC References</h1>
        <p style={{ margin: 0, opacity: 0.92, fontSize: "15px", maxWidth: "580px", lineHeight: 1.8 }}>
          Complete reference materials for the Kenya Competency Based Curriculum — official KICD documents, assessment guides, curriculum designs and resources for parents and teachers.
        </p>
      </div>
      <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderTop: "none", padding: "14px 32px 18px 32px", marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#1a5c35" }}>All content on this site is aligned to official KICD curriculum designs. External links open the official KICD or government websites.</p>
      </div>

      {REFS.map(section => (
        <div key={section.section} style={{ marginBottom: "32px" }}>
          <h2 style={{ borderBottom: `3px solid ${section.color}`, paddingBottom: "8px", marginBottom: "14px" }}>{section.section}</h2>
          <table>
            <thead>
              <tr><th>Reference</th><th>Description</th><th></th></tr>
            </thead>
            <tbody>
              {section.items.map(item => (
                <tr key={item.title}>
                  <td style={{ fontWeight: 700, whiteSpace: "nowrap" }}>
                    {item.ext ? (
                      <a href={item.href} target="_blank" rel="noreferrer" style={{ color: section.color, textDecoration: "none" }}>{item.title} &#8599;</a>
                    ) : (
                      <Link href={item.href} style={{ color: section.color, textDecoration: "none" }}>{item.title}</Link>
                    )}
                  </td>
                  <td style={{ fontSize: "13px", color: "#555" }}>{item.desc}</td>
                  <td>
                    {item.ext ? (
                      <a href={item.href} target="_blank" rel="noreferrer" style={{ color: section.color, fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap" }}>Open &rarr;</a>
                    ) : (
                      <Link href={item.href} style={{ color: section.color, fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap" }}>View &rarr;</Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div className="note-box">
        <strong>Disclaimer:</strong> CBC Kenya Schools is an independent educational resource. We are not affiliated with KICD or the Ministry of Education. All curriculum content is sourced from publicly available KICD documents and aligned to the official CBC framework.
      </div>

      <div className="prev-next">
        <Link href="/how-to" className="prev">How To</Link>
        <Link href="/" className="next">Back to Home</Link>
      </div>
    </div>
  );
}