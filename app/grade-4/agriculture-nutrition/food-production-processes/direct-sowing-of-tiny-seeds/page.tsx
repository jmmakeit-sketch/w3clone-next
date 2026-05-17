"use client";
import React from "react";
import { W3ExampleCard, W3NoteCard } from "../../../../components/W3ContentPackagers";
import { W3AssessmentCard } from "../../../../components/W3AssessmentCard";

export default function DirectSowingLesson() {
  return (
    <div className="content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div className="breadcrumb" style={{ fontSize: "14px", marginBottom: "15px", color: "#555" }}>
        <a href="/">Home</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4">Grade 4</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4/agriculture-nutrition">Agriculture & Nutrition</a> <span className="breadcrumb-sep">&gt;</span>
        <span>Direct Sowing</span>
      </div>

      <h1>2.1 Direct Sowing of Tiny Seeds</h1>
      <p>
        In agriculture, some crops have seeds so tiny or delicate that moving them after they sprout can damage their root systems. 
        Instead of growing them in a nursery and transplanting them, we use <strong>direct sowing</strong>—planting them directly 
        into their final growing bed.
      </p>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      <h2>Crops Established via Direct Sowing</h2>
      <p>
        According to the KICD curriculum framework, examples of important food crops established using direct sowing include:
      </p>
      <ul>
        <li><strong>Carrots:</strong> Root crops that require clean, loose soil expansion. Transplanting carrots causes bent or split roots.</li>
        <li><strong>Millet:</strong> A valuable grain crop sown directly over larger field surface profiles.</li>
        <li><strong>Kale / Sukuma Wiki (Optional Container method):</strong> Can also be directly established in specialized household containers.</li>
      </ul>

      <W3ExampleCard 
        title="Sowing Methods: Drilling in Furrows vs. Broadcasting"
        objective="Understand the two primary techniques used for tiny seed placement:"
        visualPreview={
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", padding: "5px" }}>
            <div style={{ border: "1px solid #ddd", padding: "12px", borderRadius: "4px", background: "#fcf8e3", flex: "1", minWidth: "240px" }}>
              <h5 style={{ margin: "0 0 6px 0", color: "#8A6D3B" }}>📏 1. Drilling in Furrows (Recommended)</h5>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                Make shallow, straight grooves (furrows) using a stick. Mix tiny seeds with dry sand or ash to ensure even spacing, drop them along the row, and cover lightly with loose soil.
              </p>
            </div>
            <div style={{ border: "1px solid #ddd", padding: "12px", borderRadius: "4px", background: "#fcf8e3", flex: "1", minWidth: "240px" }}>
              <h5 style={{ margin: "0 0 6px 0", color: "#A1887F" }}>🌾 2. Broadcasting</h5>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                Scattering seeds evenly over the entire finely tilted soil surface by hand. This requires careful thinning out later so plants don't crowd each other.
              </p>
            </div>
          </div>
        }
        sandboxLink="/sandboxes/seed-sowing"
      />

      <W3NoteCard 
        title="Key Inquiry Question" 
        text="How does direct sowing of tiny seeds enhance food production process? By eliminating transplant shock! Growth starts immediately, reducing field labor requirements and improving crop survival rates for food security." 
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <W3AssessmentCard 
        question="Why do we mix tiny seeds like carrots with sand or dry wood ash prior to drilling them into soil furrows?"
        type="radio"
        options={[
          "To poison crop pests that feed on young seedling roots",
          "To help distribute the tiny seeds evenly and avoid overcrowding them in one spot",
          "To make the seedbeds dark so they absorb heat from sunshine faster"
        ]}
        correctAnswer="1"
        hint="Think about how hard it is to separate tiny dark seeds using just your fingertips."
      />
    </div>
  );
}
