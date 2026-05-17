"use client";
import React from "react";
import { W3ExampleCard, W3NoteCard } from "../../../../components/W3ContentPackagers";
import { W3AssessmentCard } from "../../../../components/W3AssessmentCard";

export default function DomesticHygieneLesson() {
  return (
    <div className="content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div className="breadcrumb" style={{ fontSize: "14px", marginBottom: "15px", color: "#555" }}>
        <a href="/">Home</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4">Grade 4</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4/agriculture-nutrition">Agriculture & Nutrition</a> <span className="breadcrumb-sep">&gt;</span>
        <span>Domestic Hygiene</span>
      </div>

      <h1>3.2 Domestic Hygiene</h1>
      <p>
        A clean home and kitchen environment is vital for health. <strong>Domestic hygiene</strong> involves using 
        systematic cleaning methods to keep our living, cooking, and farm processing areas free from dust, waste, and pests.
      </p>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      <h2>Four Methods for Maintaining a Clean Environment</h2>
      <p>Learners practice and apply these methods daily, often using improvised local materials:</p>

      <ul>
        <li><strong>Sweeping:</strong> Removing loose dust and dirt particles from floors using a broom (which can be improvised from local twigs or grass).</li>
        <li><strong>Dusting:</strong> Wiping down shelves, windows, tables, and counters using a clean damp or dry cloth to remove accumulated soot and debris.</li>
        <li><strong>Mopping:</strong> Washing hard floor surfaces with clean water, soap, and a mop to eliminate sticky stains and micro-organisms.</li>
        <li><strong>Disposal of Refuse:</strong> Collecting organic and inorganic wastes responsibly and discarding them safely into designated dustbins or compost pits.</li>
      </ul>

      <W3ExampleCard 
        title="Improvised Cleaning Tools Project"
        objective="Developing creativity through locally engineered sanitation resources:"
        visualPreview={
          <div style={{ background: "#FCF3CF", padding: "15px", borderRadius: "6px", borderLeft: "4px solid #F39C12" }}>
            <h5 style={{ margin: "0 0 6px 0", color: "#B7950B" }}>🧹 Resource Substitution</h5>
            <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>
              If commercial cleaning brushes are unavailable, learners can construct soft floor brooms out of palm fronds or local grasses, and craft wiping cloths out of clean, repurposed old cotton clothing.
            </p>
          </div>
        }
        sandboxLink="/sandboxes/tool-improvisation"
      />

      <W3NoteCard 
        title="Key Inquiry Question" 
        text="How can we maintain a hygienic environment? By forming consistent housecleaning routines! Sweeping, mopping, and ensuring prompt refuse disposal removes breeding shelters for common disease-carrying pests like flies, cockroaches, and rats." 
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <W3AssessmentCard 
        question="Which method is best suited for managing kitchen vegetable scraps and peelings to prevent domestic flies from gathering?"
        type="radio"
        options={[
          "Leaving refuse scattered open under the kitchen washing basin surface",
          "Gathering scraps immediately and depositing them into a covered bin or compost pit",
          "Sweeping the raw peels out directly into the main walking paths"
        ]}
        correctAnswer="1"
        hint="Pests look for open, exposed food scraps to breed and multiply."
      />
    </div>
  );
}
