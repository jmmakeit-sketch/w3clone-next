"use client";
import React from "react";
import { W3ExampleCard, W3NoteCard } from "../../../../components/W3ContentPackagers";
import { W3AssessmentCard } from "../../../../components/W3AssessmentCard";

export default function WaterConservationLesson() {
  return (
    <div className="content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div className="breadcrumb" style={{ fontSize: "14px", marginBottom: "15px", color: "#555" }}>
        <a href="/">Home</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4">Grade 4</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4/agriculture-nutrition">Agriculture & Nutrition</a> <span className="breadcrumb-sep">&gt;</span>
        <span>Water Conservation</span>
      </div>

      <h1>1.2 Water Conservation</h1>
      <p>
        Water is one of our most precious scarce resources. In farming, managing water efficiently ensures that 
        crops survive dry seasons without exhausting municipal or local water sources.
      </p>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      <h2>Introduction to Drip Irrigation</h2>
      <p>
        <strong>Drip irrigation</strong> is a highly effective method of watering crops where water is delivered 
        slowly and directly to the base or root zone of individual plants. 
      </p>

      {/* Visual Component Concept */}
      <W3ExampleCard 
        title="Homemade Drip Irrigation System"
        objective="How to innovate a water-conserving drip bottle using recycled containers:"
        visualPreview={
          <div style={{ border: "1px solid #42A5F5", padding: "15px", borderRadius: "6px", background: "#E3F2FD" }}>
            <h4 style={{ margin: "0 0 10px 0", color: "#1E88E5" }}>🪛 Bottle Drip Rig Assembly</h4>
            <ol style={{ margin: 0, paddingLeft: "20px", fontSize: "14px" }}>
              <li>Obtain a clean, discarded plastic plastic water bottle.</li>
              <li>Make a tiny pinhole pierce at the bottom cap or lower profile using a small pin.</li>
              <li>Fill the container with water, tighten the top lid partially to regulate air pressure, and secure it next to the crop's roots.</li>
            </ol>
          </div>
        }
        sandboxLink="/sandboxes/drip-irrigation"
      />

      <W3NoteCard 
        title="Key Inquiry Question: How does drip irrigation conserve water?" 
        text="By dropping water slowly only where the roots live, it entirely avoids throwing water onto empty spaces between pathways and drastically lowers losses caused by surface evaporation!" 
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <W3AssessmentCard 
        question="Why is drip irrigation preferred over overhead sprinkler watering options when dealing with limited water reserves?"
        type="radio"
        options={[
          "It sprays water across a wide area to wet leaves",
          "It delivers water directly to the plant root zone, minimizing evaporation losses",
          "It washes away topsoil layers to help seed coats crack open easily"
        ]}
        correctAnswer="1"
        hint="Think about precision application directly where the plant absorbs its moisture."
      />
    </div>
  );
}
