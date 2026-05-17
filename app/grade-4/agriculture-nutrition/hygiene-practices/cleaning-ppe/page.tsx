"use client";
import React from "react";
import { W3ExampleCard, W3NoteCard } from "../../../../components/W3ContentPackagers";
import { W3AssessmentCard } from "../../../../components/W3AssessmentCard";

export default function CleaningPPELesson() {
  return (
    <div className="content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div className="breadcrumb" style={{ fontSize: "14px", marginBottom: "15px", color: "#555" }}>
        <a href="/">Home</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4">Grade 4</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4/agriculture-nutrition">Agriculture & Nutrition</a> <span className="breadcrumb-sep">&gt;</span>
        <span>Cleaning PPE</span>
      </div>

      <h1>3.3 Cleaning Personal Protective Equipment</h1>
      <p>
        Personal Protective Equipment (PPE) shields us from cuts, dirt, chemical splatters, and germs while performing tasks. 
        However, if PPE is left dirty after use, it can harbor disease causing germs. Cleaning it regularly is essential for safety.
      </p>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      <h2>Common Personal Protective Equipment (PPE)</h2>
      <p>In our day-to-day domestic and agricultural projects, we utilize these protective items:</p>
      
      <ul>
        <li><strong>Gumboots:</strong> Waterproof boots that protect our feet from mud, sharp rocks, snake bites, and dirty swamp water.</li>
        <li><strong>Gloves:</strong> Wearable hand covers that prevent soil bacteria, thorns, or toxic chemicals from making contact with skin.</li>
        <li><strong>Dust Masks:</strong> Worn over the nose and mouth to keep us from breathing in dust, pollen, or smoke.</li>
        <li><strong>Overalls & Aprons:</strong> Protective body clothing that keeps our everyday clothes clean from stains, grease, and fluids.</li>
        <li><strong>Canvas Shoes:</strong> Closed shoes worn during dry light work to protect feet from minor injury.</li>
      </ul>

      <W3ExampleCard 
        title="Practical Skill: Cleaning Gumboots"
        objective="The correct procedure for restoring muddy gumboots after farm work:"
        visualPreview={
          <div style={{ background: "#E8F8F5", padding: "15px", borderRadius: "5px", borderLeft: "4px solid #16A085" }}>
            <h5 style={{ margin: "0 0 6px 0", color: "#16A085" }}>🥾 Boot Sanitation Process</h5>
            <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>
              1. Scrape off solid mud clots using a stick → 2. Scrub the outside surfaces using clean water, soap, and a stiff brush → 3. Rinse the interior thoroughly → 4. Place them upside-down in a shaded, well-ventilated area to dry completely.
            </p>
          </div>
        }
        sandboxLink="/sandboxes/cleaning-ppe-guide"
      />

      <W3NoteCard 
        title="Key Inquiry Question" 
        text="How does keeping PPE clean promote hygiene? Clean safety equipment prevents contaminated residues from dry soil or old kitchen waste from spreading germs back into clean storage zones or skin surfaces upon the next deployment!" 
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <W3AssessmentCard 
        question="Why should freshly scrubbed rubber gumboots be dried upside down in an airy, shaded spot instead of direct scorching sunlight?"
        type="radio"
        options={[
          "To allow internal trapped moisture to drain completely while preserving the rubber from cracking due to excessive heat",
          "To trap dust inside the toe area so they match the color of the farm soil",
          "To make them heavier so they stay firmly grounded during heavy storms"
        ]}
        correctAnswer="0"
        hint="Think about what happens to rubber or plastic if left under hot, boiling solar radiation for too long."
      />
    </div>
  );
}
