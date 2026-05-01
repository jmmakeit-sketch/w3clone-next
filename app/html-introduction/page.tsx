import Link from "next/link";

export default function HtmlIntroductionPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <span>HTML Introduction</span>
      </div>
      <h1>HTML Introduction</h1>
      <p>HTML is the standard markup language for creating Web pages.</p>
      <div className="note-box">
        <strong>Note:</strong> In your CBC site, lesson pages load dynamically from Supabase.
      </div>
      <h2>What is HTML?</h2>
      <p>HTML stands for Hyper Text Markup Language. It describes the structure of a web page.</p>
      <div className="example-box">
        <div className="example-box-header">Example</div>
        <div className="example-box-body">
          <div className="code-block">{`<!DOCTYPE html>
<html>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>`}</div>
        </div>
      </div>
      <div className="prev-next">
        <Link href="/" className="prev">Home</Link>
        <Link href="/html-editors" className="next">HTML Editors</Link>
      </div>
    </div>
  );
}