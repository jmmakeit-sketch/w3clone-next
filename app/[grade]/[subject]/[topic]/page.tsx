import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import GradeNavigator from "../../../grade-5/agriculture-nutrition/data/GradeNavigator";

function slugify(text: string) { 
  return text.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and"); 
}

export default async function TopicPage({ params }: { params: Promise<{ grade: string; subject: string; topic: string }> }) {
  const { grade, subject, topic } = await params;

  // Intercept and patch query values to align perfectly with DB strings
  const subjectDecoded = subject.replaceAll("-", " ");
  let queryName = subjectDecoded;
  if (subjectDecoded === "agriculture nutrition") {
    queryName = "Agriculture & Nutrition";
  }

  const { data: subjectData } = await supabase
    .from("subjects")
    .select("id, name, pathways(name), topics(id, name, order_index, content, description)")
    .ilike("name", queryName)
    .maybeSingle();

  if (!subjectData) notFound();

  const topics = (subjectData.topics || []).sort((a: any, b: any) => a.order_index - b.order_index);
  const idx = topics.findIndex((t: any) => slugify(t.name) === topic);
  if (idx === -1) notFound();

  const t = topics[idx];
  const prev = topics[idx - 1];
  const next = topics[idx + 1];
  
  const gradeName = grade.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  const gradeNum = parseInt(grade.replace("grade-", ""));
  const isUpperPrimary = gradeNum === 4 || gradeNum === 5 || gradeNum === 6;

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
        <Link href={`/${grade}/${subject}`}>{subjectData.name}</Link>
        <span className="breadcrumb-sep">&rsaquo;</span>
        <span>{t.name}</span>
      </div>

      <div className="prev-next" style={{ marginTop: 0, borderTop: "none", marginBottom: "24px", paddingTop: 0 }}>
        <Link href={prev ? `/${grade}/${subject}/${slugify(prev.name)}` : `/${grade}/${subject}`} className="prev">
          {prev ? `\u276E ${prev.name}` : `\u276E ${subjectData.name} Home`}
        </Link>
        <Link href={next ? `/${grade}/${subject}/${slugify(next.name)}` : `/${grade}/${subject}/quiz`} className="next">
          {next ? `${next.name} \u276F` : "Take Quiz \u276F"}
        </Link>
      </div>

      <h1>{t.name}</h1>

      {t.content ? (
        <LessonContent content={t.content} />
      ) : (
        <div className="note-box">
          <strong>Content coming soon!</strong> This topic is being prepared.{" "}
          <Link href={`/${grade}/${subject}`} style={{ color: "#04AA6D" }}>Explore other topics &rarr;</Link>
        </div>
      )}

      <div className="prev-next" style={{ marginTop: "32px" }}>
        <Link href={prev ? `/${grade}/${subject}/${slugify(prev.name)}` : `/${grade}/${subject}`} className="prev">
          {prev ? `\u276E ${prev.name}` : `\u276E ${subjectData.name} Home`}
        </Link>
        <Link href={next ? `/${grade}/${subject}/${slugify(next.name)}` : `/${grade}/${subject}/quiz`} className="next">
          {next ? `${next.name} \u276F` : "Take Quiz \u276F"}
        </Link>
      </div>
    </div>
  );
}

function LessonContent({ content }: { content: string }) {
  const blocks = content
    .replace(/\r/g, "")
    .split("\n\n")
    .map(b => b.trim())
    .filter(Boolean);

  return (
    <div className="lesson-body-content">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) return <h2 key={i}>{block.slice(3)}</h2>;
        if (block.startsWith("### ")) return <h3 key={i}>{block.slice(4)}</h3>;
        if (block.startsWith("**Example**"))
          return (
            <div key={i} className="example-box">
              <div className="example-box-header">Example</div>
              <div className="example-box-body">{block.replace("**Example**", "").trim()}</div>
            </div>
          );
        if (block.startsWith("**Note**"))
          return <div key={i} className="note-box"><strong>Note:</strong> {block.replace("**Note**", "").trim()}</div>;
        if (block.startsWith("**Warning**"))
          return <div key={i} className="warning-box"><strong>Warning:</strong> {block.replace("**Warning**", "").trim()}</div>;
        if (block.startsWith("`")) {
          const clean = block.replace(/^`[a-z]*\n?/, "").replace(/`$/, "");
          return <pre key={i} className="code-block"><code>{clean}</code></pre>;
        }
        if (block.includes("\n- ")) {
          const items = block.split("\n").filter(l => l.startsWith("- "));
          return <ul key={i}>{items.map((l, j) => <li key={j}>{l.slice(2)}</li>)}</ul>;
        }
        if (block.startsWith("- ")) return <li key={i}>{block.slice(2)}</li>;
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}