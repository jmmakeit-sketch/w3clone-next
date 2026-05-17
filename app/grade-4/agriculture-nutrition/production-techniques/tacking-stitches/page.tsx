"use client";
import React from "react";
import { W3ExampleCard, W3NoteCard } from "../../../../components/W3ContentPackagers";
import { W3AssessmentCard } from "../../../../components/W3AssessmentCard";

export default function TackingStitchesLesson() {
  return (
    <div className="content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div className="breadcrumb" style={{ fontSize: "14px", marginBottom: "15px", color: "#555" }}>
        <a href="/">Home</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4">Grade 4</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4/agriculture-nutrition">Agriculture & Nutrition</a> <span className="breadcrumb-sep">&gt;</span>
        <span>Production Techniques</span>
      </div>

      <h1>4.1 Making Tacking Stitches</h1>
      <p>
        In needlework, <strong>tacking stitches</strong> (sometimes called basting stitches) are loose, temporary stitches. 
        Tailors and dressmakers use them to hold pieces of fabric securely together before making the final, permanent machine or hand stitches.
      </p>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      <h2>The Two Primary Types of Tacking Stitches</h2>
      <p>The KICD curriculum requires Grade 4 learners to master two classic needle patterns:</p>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginBottom: "25px" }}>
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "5px", background: "#f9f9f9", flex: "1", minWidth: "250px" }}>
          <h4 style={{ margin: "0 0 8px 0", color: "#2E4053" }}>🪡 1. Even Tacking Stitches</h4>
          <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
            The stitches and the spaces between them are of <strong>equal length</strong> (usually about 6mm to 1cm). 
            This provides uniform holding power along flat fabric edges.
          </p>
        </div>
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "5px", background: "#f9f9f9", flex: "1", minWidth: "250px" }}>
          <h4 style={{ margin: "0 0 8px 0", color: "#2E4053" }}>🪡 2. Long and Short Tacking Stitches</h4>
          <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
            Consists of one long stitch followed by a short space or short stitch. This method is incredibly quick to stitch 
            and works perfectly for holding long straight fabric blocks before permanent joining.
          </p>
        </div>
      </div>

      <W3ExampleCard 
        title="Class Project: Designing a Handkerchief"
        objective="Applying stitches while practicing creative design and math measurements:"
        visualPreview={
          <div style={{ border: "2px dashed #95A5A6", padding: "15px", borderRadius: "4px", background: "#fff", position: "relative" }}>
            <span style={{ position: "absolute", top: "5px", right: "10px", fontSize: "11px", color: "#95A5A6", fontFamily: "monospace" }}>15cm x 15cm Fabric Block</span>
            <h5 style={{ margin: "0 0 6px 0", color: "#34495E" }}>✂️ Materials Required:</h5>
            <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
              • Square pieces of locally sourced cotton material<br />
              • Bright sewing threads (makes the temporary stitches easy to see and pull out later)<br />
              • A hand sewing needle and safety thimble
            </p>
          </div>
        }
        sandboxLink="/sandboxes/stitch-simulator"
      />

      <W3NoteCard 
        title="Key Inquiry Question" 
        text="How can we use tacking stitches in making items? By using them to perfectly secure folds or hems on things like square handkerchiefs or custom scarecrow clothes. It keeps the fabric flat so our hands don't slip while working!" 
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <W3AssessmentCard 
        question="What makes tacking stitches different from permanent seams like running or backstitches?"
        type="radio"
        options={[
          "They are sewn very tight using steel wires so they can never be removed",
          "They are loose, temporary stitches made to hold fabric ready, and are designed to be removed later",
          "They are only used to attach heavy wooden buttons to large animal blankets"
        ]}
        correctAnswer="1"
        hint="Think about why we make them fast and easily visible using a contrast colored thread."
      />
    </div>
  );
}
