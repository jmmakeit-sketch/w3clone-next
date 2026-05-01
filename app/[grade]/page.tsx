import Link from "next/link";
import { supabase } from "@/lib/supabase";

const PATHWAY_COLORS: Record<string, string> = {
  "Early Years": "#FF9800",
  "Lower Primary": "#2196F3",
  "Upper Primary": "#9C27B0",
  "Junior Secondary": "#F44336",
  "Senior Secondary": "#607D8B",
  "STEM": "#04AA6D",
};

function slugify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

export default async function GradePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;
  const gradeName = grade.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());

  const { data: subjects } = await supabase
    .from("subjects")
    .select("id, name, description, pathways(name)")
    .ilike("grade_slug", grade)
    .order("name", { ascending: true });

  const subjectList = subjects || [];

  const grouped: Record<string, typeof subjectList> = {};
  subjectList.forEach(s => {
    const pathway = (s.pathways as any)?.name || "General";
    if (!grouped[pathway]) grouped[pathway] = [];
    grouped[pathway].push(s);
  });

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <span>{gradeName}</span>
      </div>

      <div style={{ background: "linear-gradient(135deg, #04AA6D 0%, #036b45 100%)", color: "#fff", padding: "32px", borderRadius: "4px", marginBottom: "28px" }}>
        <h1 style={{ margin: "0 0 8px 0", fontSize: "28px", fontWeight: 700 }}>{gradeName}</h1>
        <p style={{ margin: 0, opacity: 0.9, fontSize: "15px" }}>Select a subject below to start learning. All content is aligned to the KICD CBC framework.</p>
      </div>

      {subjectList.length > 0 ? (
        Object.entries(grouped).map(([pathway, subs]) => (
          <div key={pathway} style={{ marginBottom: "28px" }}>
            <h2 style={{ fontSize: "15px", fontWeight: 700, color: PATHWAY_COLORS[pathway] || "#04AA6D", borderBottom: `2px solid ${PATHWAY_COLORS[pathway] || "#04AA6D"}`, paddingBottom: "6px", marginBottom: "14px" }}>
              {pathway}
            </h2>
            <div className="subject-grid">
              {subs.map((s: any) => (
                <Link key={s.id} href={`/${grade}/${slugify(s.name)}`} className="subject-card">
                  <div className="subject-card-header" style={{ background: PATHWAY_COLORS[pathway] || "#04AA6D" }}>{s.name}</div>
                  {s.description && <div className="subject-card-body">{s.description}</div>}
                </Link>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="note-box">
          <strong>Coming Soon:</strong> Full subject content for {gradeName} is being prepared and will be available shortly.
        </div>
      )}

      <div className="prev-next">
        <Link href="/" className="prev">Home</Link>
        <span />
      </div>
    </div>
  );
}
