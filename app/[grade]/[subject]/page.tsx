"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import GradeNavigator from "../../grade-5/agriculture-nutrition/data/GradeNavigator";

function slugify(text: string) {
  return text.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

const PATHWAY_COLORS: Record<string, string> = {
  "Early Years": "#FF9800",
  "Lower Primary": "#2196F3",
  "Upper Primary": "#9C27B0",
  "Junior Secondary": "#F44336",
  "Senior Secondary": "#607D8B",
};

const STATIC_SUBJECTS: Record<string, Record<string, {
  description: string;
  pathway: string;
  color: string;
  whatYouLearn: string[];
  topics: { name: string; desc: string; strands: string[] }[];
  sbaNote: string;
  prevLabel: string; prevHref: string;
  nextLabel: string; nextHref: string;
}>> = {
  "pp1": {
    "language-activities": {
      description: "Language Activities in PP1 develops foundational communication skills in the child's mother tongue, Kiswahili and English.",
      pathway: "Early Years", color: "#FF9800",
      whatYouLearn: ["Listen attentively to stories", "Speak clearly and confidently"],
      topics: [{ name: "Listening & Speaking", desc: "Children develop active listening skills.", strands: ["Active Listening"] }],
      sbaNote: "Language Activities assessment in PP1 uses observation records.",
      prevLabel: "PP1 Overview", prevHref: "/pp1",
      nextLabel: "Mathematical Activities", nextHref: "/pp1/mathematical-activities",
    }
  }
};

export default function SubjectPage() {
  const params = useParams();
  const grade = (params?.grade as string) || "";
  const subject = (params?.subject as string) || "";
  
  const [topics, setTopics] = useState<any[]>([]);
  const [subjectData, setSubjectData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const staticData = STATIC_SUBJECTS[grade]?.[subject];

  useEffect(() => {
    if (!staticData && subject) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [grade, subject]);

  async function fetchData() {
    try {
      setLoading(true);
      // Reconstitute both standard spaces and potential ampersands
      const subjectDecoded = subject.replaceAll("-", " ");
      
      // Attempt broad matching to handle ampersand variations seamlessly
      let queryName = subjectDecoded;
      if (subjectDecoded === "agriculture nutrition") {
        queryName = "Agriculture & Nutrition";
      }

      const { data, error } = await supabase
        .from("subjects")
        .select("id, name, description, pathways(name)")
        .ilike("name", queryName)
        .maybeSingle();

      if (data) {
        setSubjectData(data);
        const { data: topicsData } = await supabase
          .from("topics")
          .select("id, name, description, order_index")
          .eq("subject_id", data.id)
          .order("order_index", { ascending: true });
        
        setTopics(topicsData || []);
      }
    } catch (err) {
      console.error("Error loading subject details:", err);
    } finally {
      setLoading(false);
    }
  }

  const gradeName = grade.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  const color = staticData?.color || PATHWAY_COLORS[subjectData?.pathways?.name || ""] || "#9C27B0";
  const subjectName = subjectData?.name || subject.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());

  const gradeNum = parseInt(grade.replace("grade-", ""));
  const isUpperPrimary = gradeNum === 4 || gradeNum === 5 || gradeNum === 6;

  if (staticData) {
    return (
      <div className="p-4">
        <h1>{subjectName} ({gradeName})</h1>
        <p>{staticData.description}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {isUpperPrimary && (
        <div className="mb-4">
          <GradeNavigator currentGrade={gradeNum.toString() as "4" | "5" | "6"} />
        </div>
      )}

      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <Link href={`/${grade}`}>{gradeName}</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>{subjectName}</span>
      </div>

      <div style={{ background: `linear-gradient(135deg, ${color} 0%, #4a148c 100%)`, color: "#fff", padding: "36px 32px 44px 32px", borderRadius: "4px" }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "34px", fontWeight: 700 }}>{subjectName}</h1>
        <p style={{ margin: 0, opacity: 0.92, fontSize: "15px", maxWidth: "680px", lineHeight: 1.8 }}>
          {subjectData?.description || `Welcome to the core curriculum hub for ${subjectName} in ${gradeName}.`}
        </p>
      </div>

      <h2>Lessons & Topics</h2>
      {loading ? (
        <p style={{ color: "#666", fontSize: "14px" }}>Loading syllabus curriculum mapping...</p>
      ) : topics.length > 0 ? (
        <div className="topic-list" style={{ display: "grid", gap: "12px" }}>
          {topics.map((t) => (
            <Link key={t.id} href={`/${grade}/${subject}/${slugify(t.name)}`} style={{ textDecoration: "none" }}>
              <div style={{ padding: "20px", border: "1px solid #e0e0e0", borderRadius: "4px", background: "#fff", cursor: "pointer" }}>
                <strong style={{ color: "#333", fontSize: "16px" }}>{t.name}</strong>
                {t.description && <p style={{ margin: "6px 0 0 0", color: "#666", fontSize: "13px", lineHeight: 1.5 }}>{t.description}</p>}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ padding: "24px", border: "1px solid #ffcc80", background: "#fffde7", borderRadius: "4px", color: "#e65100" }}>
          No lessons found under the key "{queryName}" for this track yet. We are currently configuring these files.
        </div>
      )}
    </div>
  );
}