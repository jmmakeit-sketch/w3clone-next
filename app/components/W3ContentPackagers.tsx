import React from "react";

interface ExampleCardProps {
  title: string;
  objective: string;
  visualPreview: React.ReactNode;
  sandboxLink?: string;
}

export function W3ExampleCard({ title, objective, visualPreview, sandboxLink }: ExampleCardProps) {
  return (
    <div className="example-box">
      <h3 className="example-title">{title}</h3>
      <p style={{ margin: "4px 0 12px 0", color: "#444" }}>{objective}</p>
      <div className="example-display-window">
        {visualPreview}
      </div>
      {sandboxLink && (
        <a href={sandboxLink} className="w3-btn-action">
          Try It Yourself »
        </a>
      )}
    </div>
  );
}

export function W3NoteCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="w3-panel-note">
      <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>{title}:</h4>
      <p style={{ margin: 0, color: "#222" }}>{text}</p>
    </div>
  );
}
