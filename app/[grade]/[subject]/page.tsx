"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";

function slugify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-");
}

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

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <Link href={`/${grade}`}>{gradeName}</Link>
        <span className="breadcrumb-sep">›</span>
        <span>{subjectName}</span>
      </div>

      <h1>{subjectName}</h1>
      {pathway && <p style={{ color: "#666", fontSize: "14px", marginBottom: "16px" }}>📚 {pathway}</p>}
      {subjectData?.description && <p>{subjectData.description}</p>}

      {topics.length > 0 && (
        <>
          <h2>Topics in this Subject</h2>
          <div className="subject-grid">
            {topics.map((t: any) => (
              <Link key={t.id} href={`/${grade}/${subject}/${slugify(t.name)}`} className="subject-card">
                <div className="subject-card-header" style={{ background: "#04AA6D" }}>{t.name}</div>
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