"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import NavSync from "../../components/NavSync";

function slugify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-");
}

const PATHWAY_COLORS: Record<string, string> = {
  "Early Years": "#FF9800",
  "Lower Primary": "#2196F3",
  "Upper Primary": "#9C27B0",
  "Junior Secondary": "#F44336",
  "Senior Secondary": "#607D8B",
  "STEM": "#04AA6D",
};

export default function SubjectPage() {
  const params = useParams();
  const grade = params.grade as string;
  const subject = params.subject as string;
  const [topics, setTopics] = useState<any[]>([]);
  const [subjectData, setSubjectData] = useState<any>(null);

  useEffect(() => { fetchData(); }, [grade, subject]);

  async function fetchData() {
    const subjectDecoded = subject.replaceAll("-", " ");
    const { data } = await supabase
      .from("subjects")
      .select("id, name, description, pathways(name)")
      .ilike("name", subjectDecoded)
      .single();
    if (data) {
      setSubjectData(data);
      const { data: topicsData } = await supabase
        .from("topics")
        .select("id, name, description, order_index")
        .eq("subject_id", data.id)
        .order("order_index", { ascending: true });
      setTopics(topicsData || []);
    }
  }

  const gradeName = grade.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  const subjectName = subjectData?.name || subject.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  const pathway = subjectData?.pathways?.name || "";
  const pathwayColor = PATHWAY_COLORS[pathway] || "#04AA6D";

  return (
    <div>
      <NavSync grade={grade} />

      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <Link href={`/${grade}`}>{gradeName}</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>{subjectName}</span>
      </div>

      {/* Hero banner — same color as pathway */}
      <div style={{ background: `linear-gradient(135deg, ${pathwayColor} 0%, #036b45 100%)`, color: "#fff", padding: "32px 32px 48px 32px", borderRadius: "4px 4px 0 0", marginBottom: "0" }}>
        <h1 style={{ margin: "0 0 8px 0", fontSize: "28px", fontWeight: 700 }}>{subjectName}</h1>
        {pathway && <p style={{ margin: "0 0 16px 0", opacity: 0.9, fontSize: "14px" }}>{pathway}</p>}
        {subjectData?.description && <p style={{ margin: "0 0 20px 0", opacity: 0.92, fontSize: "15px", maxWidth: "560px", lineHeight: 1.7 }}>{subjectData.description}</p>}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {topics[0] && (
            <Link href={`/${grade}/${subject}/${slugify(topics[0].name)}`}
              style={{ background: "#fff", color: pathwayColor, padding: "10px 22px", fontWeight: 700, fontSize: "14px", textDecoration: "none", borderRadius: "2px", display: "inline-block" }}>
              Start learning {subjectName} now &raquo;
            </Link>
          )}
          <Link href={`/${grade}`}
            style={{ background: "rgba(255,255,255,0.2)", color: "#fff", padding: "10px 22px", fontWeight: 700, fontSize: "14px", textDecoration: "none", borderRadius: "2px", display: "inline-block" }}>
            &laquo; Back to {gradeName}
          </Link>
        </div>
      </div>

      {/* Light green bridge section — connects hero to content, like W3Schools */}
      <div style={{ background: "#d4edda", borderLeft: "1px solid #ddd", borderRight: "1px solid #ddd", borderBottom: "1px solid #c3e6cb", padding: "20px 32px 24px 32px", marginBottom: "28px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 8px 0", color: "#1a5c35" }}>
          {topics.length > 0 ? `Topics in ${subjectName}` : `About ${subjectName}`}
        </h2>
        <p style={{ margin: 0, fontSize: "14px", color: "#2d6a4f", lineHeight: 1.7 }}>
          {topics.length > 0
            ? `This subject has ${topics.length} topic${topics.length > 1 ? "s" : ""}. Each topic includes examples, exercises and quizzes aligned to the KICD CBC framework.`
            : `Content for ${subjectName} is being prepared. Check back soon for full lessons and exercises.`}
        </p>
      </div>

      {/* Topics grid */}
      {topics.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <div className="subject-grid">
            {topics.map((t: any, i: number) => (
              <Link key={t.id} href={`/${grade}/${subject}/${slugify(t.name)}`} className="subject-card">
                <div className="subject-card-header" style={{ background: pathwayColor }}>
                  <span style={{ fontSize: "11px", opacity: 0.8, display: "block", marginBottom: "2px" }}>Topic {i + 1}</span>
                  {t.name}
                </div>
                {t.description && <div className="subject-card-body">{t.description}</div>}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Examples in each topic — like W3Schools "Examples in Each Chapter" */}
      {topics.length > 0 && (
        <div style={{ background: "#f9f9f9", border: "1px solid #ddd", borderRadius: "4px", padding: "20px 24px", marginBottom: "28px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 12px 0" }}>Examples in Each Topic</h2>
          <p style={{ fontSize: "14px", color: "#444", margin: "0 0 14px 0", lineHeight: 1.7 }}>
            Every topic in <strong>{subjectName}</strong> includes worked examples, practice exercises and a short quiz 
            to test your understanding — all aligned to the CBC competency framework.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {["Examples", "Exercises", "Quizzes", "SBA Tips"].map(label => (
              <span key={label} style={{ background: "#04AA6D", color: "#fff", padding: "4px 14px", borderRadius: "2px", fontSize: "13px", fontWeight: 700 }}>{label}</span>
            ))}
          </div>
        </div>
      )}

      <div className="prev-next">
        <Link href={`/${grade}`} className="prev">{gradeName}</Link>
        {topics[0] && (
          <Link href={`/${grade}/${subject}/${slugify(topics[0].name)}`} className="next">{topics[0].name}</Link>
        )}
      </div>
    </div>
  );
}
