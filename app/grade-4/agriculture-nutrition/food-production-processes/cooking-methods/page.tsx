"use client";
import React from "react";
import { W3ExampleCard, W3NoteCard } from "../../../../components/W3ContentPackagers";
import { W3AssessmentCard } from "../../../../components/W3AssessmentCard";

export default function CookingMethodsLesson() {
  return (
    <div className="content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div className="breadcrumb" style={{ fontSize: "14px", marginBottom: "15px", color: "#555" }}>
        <a href="/">Home</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4">Grade 4</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4/agriculture-nutrition">Agriculture & Nutrition</a> <span className="breadcrumb-sep">&gt;</span>
        <span>Cooking Methods</span>
      </div>

      <h1>2.4 Boiling and Shallow Frying Food</h1>
      <p>
        Cooking makes food easier to digest, kills harmful germs, and improves flavor. In this lesson, we will focus on 
        two common household cooking techniques: <strong>Boiling</strong> and <strong>Shallow Frying</strong>, while 
        emphasizing crucial safety precautions.
      </p>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      <h2>Comparing Cooking Methods</h2>
      <p>Different foods require different applications of heat depending on their texture and structure:</p>

      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "25px" }}>
        <thead>
          <tr style={{ background: "#f2f2f2", textAlign: "left" }}>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Method</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>How it Works</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Common Local Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "12px", border: "1px solid #ddd" }}><strong>Boiling</strong></td>
            <td style={{ padding: "12px", border: "1px solid #ddd" }}>Cooking food completely immersed in water heated to its boiling point (100°C).</td>
            <td style={{ padding: "12px", border: "1px solid #ddd" }}>Boiled maize, sweet potatoes, cassava, or eggs.</td>
          </tr>
          <tr>
            <td style={{ padding: "12px", border: "1px solid #ddd" }}><strong>Shallow Frying</strong></td>
            <td style={{ padding: "12px", border: "1px solid #ddd" }}>Cooking food in a shallow pan using a small amount of oil or fat to brown the surface.</td>
            <td style={{ padding: "12px", border: "1px solid #ddd" }}>Pancakes, eggs, sausages, or lightly frying onions/tomatoes for stew.</td>
          </tr>
        </tbody>
      </table>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <h2>⚠️ Kitchen Safety & Accident Prevention</h2>
      <p>
        Working with fire, boiling water, and hot oils requires absolute care to avoid burns or scalds. 
      </p>

      <W3ExampleCard 
        title="Safe Cooking Protocols"
        objective="Crucial safety actions to practice during your cooking experiments:"
        visualPreview={
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", padding: "5px" }}>
            <div style={{ border: "1px solid #ddd", padding: "12px", borderRadius: "4px", background: "#FFF3E0", flex: "1", minWidth: "240px" }}>
              <h5 style={{ margin: "0 0 6px 0", color: "#E65100" }}>💧 While Boiling</h5>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                Always turn pot handles toward the back of the stove so they aren't accidentally knocked over. Use a dry cloth or mitts to lift hot lids away from your face to avoid steam burns.
              </p>
            </div>
            <div style={{ border: "1px solid #ddd", padding: "12px", borderRadius: "4px", background: "#FFF3E0", flex: "1", minWidth: "240px" }}>
              <h5 style={{ margin: "0 0 6px 0", color: "#E65100" }}>🍳 While Shallow Frying</h5>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                Ensure food items are dry before placing them in hot oil—water droplets cause hot oil to spit out violently. Never leave a frying pan unattended on an active fire.
              </p>
            </div>
          </div>
        }
        sandboxLink="/sandboxes/cooking-safety"
      />

      <W3NoteCard 
        title="Key Inquiry Question" 
        text="How can we cook foods safely using boiling and frying methods? By following systematic procedures, wearing protective aprons, ensuring the cooking environment is stable, and managing fire levels responsibly to minimize danger to self and others!" 
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <W3AssessmentCard 
        question="What is the safest way to prevent hot oil from splashing or spitting out of a pan while performing shallow frying?"
        type="radio"
        options={[
          "Pouring cold water directly into the oil while it is heating up",
          "Ensuring the food items are properly patted dry before carefully sliding them into the pan",
          "Frying the food on the highest possible heat setting without using a lid"
        ]}
        correctAnswer="2"
        hint="Water and hot cooking oil react aggressively when mixed over a live flame."
      />
    </div>
  );
}
