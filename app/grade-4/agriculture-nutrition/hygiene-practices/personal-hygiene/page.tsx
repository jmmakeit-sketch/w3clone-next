"use client";
import React from "react";
import { W3ExampleCard, W3NoteCard } from "../../../../components/W3ContentPackagers";
import { W3AssessmentCard } from "../../../../components/W3AssessmentCard";

export default function PersonalHygieneLesson() {
  return (
    <div className="content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div className="breadcrumb" style={{ fontSize: "14px", marginBottom: "15px", color: "#555" }}>
        <a href="/">Home</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4">Grade 4</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4/agriculture-nutrition">Agriculture & Nutrition</a> <span className="breadcrumb-sep">&gt;</span>
        <span>Personal Hygiene</span>
      </div>

      <h1>3.1 Personal Hygiene</h1>
      <p>
        When handling food, gardening, or working around domestic animals, maintaining <strong>personal hygiene</strong> is 
        our first line of defense. Proper hygiene protects our bodies from harmful micro-organisms and prevents the spread 
        of communicable diseases.
      </p>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      <h2>Core Practices for Food & Agricultural Hygiene</h2>
      <p>Learners must practice and master these four foundational pillars of personal cleanliness:</p>
      
      <ul>
        <li><strong>Thorough Hand Washing:</strong> Washing hands with running water and soap before touching food, after using the toilet, and after handling farm soils or animals.</li>
        <li><strong>Using Clean Water:</strong> Always selecting treated, boiled, or clean water pipes to clean utensils, surface spaces, and ingredients.</li>
        <li><strong>Cleaning Foods:</strong> Washing raw fruits and vegetables thoroughly under flowing water to flush away pesticide residues, dirt, or parasite eggs.</li>
        <li><strong>Personal Protective Equipment (PPE):</strong> Wearing clean aprons, hairnets, and closed shoes in the kitchen to prevent contamination and protect oneself from minor spills.</li>
      </ul>

      <W3ExampleCard 
        title="The 6-Step Handwashing Protocol"
        objective="Demonstrating effective germ removal before handling kitchen food products:"
        visualPreview={
          <div style={{ background: "#EBF5FB", padding: "15px", borderRadius: "6px", borderLeft: "4px solid #3498DB" }}>
            <h5 style={{ margin: "0 0 6px 0", color: "#2980B9" }}>🧼 Sanitation Step-List</h5>
            <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>
              1. Wet hands with clean running water → 2. Apply soap → 3. Rub palms, backs of hands, and between fingers for 20 seconds → 4. Clean under fingernails → 5. Rinse completely → 6. Dry with a clean, dry towel.
            </p>
          </div>
        }
        sandboxLink="/sandboxes/handwashing-timer"
      />

      <W3NoteCard 
        title="Key Inquiry Question" 
        text="How does personal hygiene promote good health? By acting as a barrier! It completely neutralizes bacteria, viruses, and parasites before they can gain entry into our digestive tracks or contaminate food supplies, stopping illnesses like cholera or typhoid." 
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <W3AssessmentCard 
        question="Which personal hygiene practice is most effective at preventing the transfer of bacteria from garden soils into a household meal?"
        type="radio"
        options={[
          "Wiping dusty hands on a dirty kitchen apron before serving a plate",
          "Washing hands thoroughly with soap and running water after finishing farm tasks",
          "Sprinkling dry wood ash over freshly harvested unwashed carrot roots"
        ]}
        correctAnswer="1"
        hint="Running water combined with soap lifting action is essential for complete sanitation."
      />
    </div>
  );
}
