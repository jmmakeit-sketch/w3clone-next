"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";

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
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <Link href={`/${grade}`}>{gradeName}</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>{subjectName}</span>
      </div>

      <div style={{ background: `linear-gradient(135deg, ${pathwayColor} 0%, #036b45 100%)`, color: "#fff", padding: "32px", borderRadius: "4px", marginBottom: "28px" }}>
        <h1 style={{ margin: "0 0 8px 0", fontSize: "28px", fontWeight: 700 }}>{subjectName}</h1>
        {pathway && <p style={{ margin: "0 0 16px 0", opacity: 0.9, fontSize: "14px" }}>{pathway}</p>}
        {subjectData?.description && <p style={{ margin: "0 0 20px 0", opacity: 0.92, fontSize: "15px" }}>{subjectData.description}</p>}
        {topics[0] && (
          <Link href={`/${grade}/${subject}/${slugify(topics[0].name)}`}
            style={{ background: "#fff", color: pathwayColor, padding: "10px 22px", fontWeight: 700, fontSize: "14px", textDecoration: "none", borderRadius: "2px", display: "inline-block" }}>
            Start learning {subjectName} now &raquo;
          </Link>
        )}
      </div>

      {topics.length > 0 && (
        <>
          <h2>Topics in this Subject</h2>
          <div className="subject-grid">
            {topics.map((t: any) => (
              <Link key={t.id} href={`/${grade}/${subject}/${slugify(t.name)}`} className="subject-card">
                <div className="subject-card-header" style={{ background: pathwayColor }}>{t.name}</div>
                {t.description && <div className="subject-card-body">{t.description}</div>}
              </Link>
            ))}
          </div>
        </>
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