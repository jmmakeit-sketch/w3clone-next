"use client";
import React from "react";
import { W3ExampleCard, W3NoteCard } from "../../../../components/W3ContentPackagers";
import { W3AssessmentCard } from "../../../../components/W3AssessmentCard";

export default function FuelConservationLesson() {
  return (
    <div className="content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div className="breadcrumb" style={{ fontSize: "14px", marginBottom: "15px", color: "#555" }}>
        <a href="/">Home</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4">Grade 4</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4/agriculture-nutrition">Agriculture & Nutrition</a> <span className="breadcrumb-sep">&gt;</span>
        <span>Fuel Conservation</span>
      </div>

      <h1>1.3 Fuel Conservation</h1>
      <p>
        Energy used for cooking at home is an important household resource. By learning how to manage and conserve 
        different types of fuels, we reduce household waste, protect local forests, and save financial resources.
      </p>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      <h2>Common Types of Household Fuels</h2>
      <p>
        In Kenyan households, different forms of energy are utilized based on regional availability and specific 
        cooking equipment:
      </p>
      <ul>
        <li><strong>Firewood:</strong> Obtained from trees; commonly utilized in rural settings with traditional three-stone stoves.</li>
        <li><strong>Charcoal:</strong> Wood that has been pre-processed by slow-burning; commonly used in urban and peri-urban areas with metal or ceramic jikos.</li>
        <li><strong>Liquefied Petroleum Gas (LPG):</strong> Clean-burning gas stored in pressurized metal cylinders.</li>
        <li><strong>Kerosene:</strong> Liquid petroleum fuel utilized in smaller wicked cookstoves.</li>
      </ul>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <h2>Practical Methods to Conserve Fuel</h2>
      <p>
        Reducing energy wastage requires deliberate habits during daily meal preparation:
      </p>

      <W3ExampleCard 
        title="Fuel Efficiency Guidelines"
        objective="Two primary strategies to minimize household cooking energy waste:"
        visualPreview={
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", padding: "5px" }}>
            <div style={{ border: "1px solid #ddd", padding: "12px", borderRadius: "4px", background: "#fdfefe", flex: "1", minWidth: "240px" }}>
              <h5 style={{ margin: "0 0 6px 0", color: "#D35400" }}>⏱️ 1. Advance Food Preparation</h5>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                Always wash, peel, cut, and sort all ingredients <strong>before</strong> lighting up the stove. This avoids leaving an empty pot heating unnecessarily while preparing items.
              </p>
            </div>
            <div style={{ border: "1px solid #ddd", padding: "12px", borderRadius: "4px", background: "#fdfefe", flex: "1", minWidth: "240px" }}>
              <h5 style={{ margin: "0 0 6px 0", color: "#27AE60" }}>🛑 2. Immediate Extinguishing</h5>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                Turn off gas valves or spray water lightly onto remaining active charcoal embers immediately after removing the cooking pot to preserve unused fuel for future meals.
              </p>
            </div>
          </div>
        }
        sandboxLink="/sandboxes/fuel-efficiency"
      />

      <W3NoteCard 
        title="Key Inquiry Question: How does reducing fuel wastage conserve resources?" 
        text="When we practice fuel conservation, we minimize the over-harvesting of forests for wood and charcoal, decrease indoor air smoke emissions, and directly lower household operating costs!" 
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <W3AssessmentCard 
        question="Which action demonstrates an effective method of conserving cooking fuel inside a domestic kitchen environment?"
        type="radio"
        options={[
          "Lighting the stove thirty minutes before beginning to slice vegetables",
          "Leaving charcoal embers to burn out completely after cooking is done",
          "Preparing all cooking ingredients in advance and extinguishing fires immediately after use"
        ]}
        correctAnswer="2"
        hint="Consider which option actively stops energy from being consumed by empty air."
      />
    </div>
  );
}
