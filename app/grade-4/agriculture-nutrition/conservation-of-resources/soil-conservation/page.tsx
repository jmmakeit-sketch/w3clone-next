"use client";
import React from "react";
import { W3ExampleCard, W3NoteCard } from "../../../../components/W3ContentPackagers";
import { W3AssessmentCard } from "../../../../components/W3AssessmentCard";

export default function SoilConservationLesson() {
  return (
    <div className="content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div className="breadcrumb" style={{ fontSize: "14px", marginBottom: "15px", color: "#555" }}>
        <a href="/">Home</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4">Grade 4</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4/agriculture-nutrition">Agriculture & Nutrition</a> <span className="breadcrumb-sep">&gt;</span>
        <span>Soil Conservation</span>
      </div>

      <h1>1.1 Soil Conservation</h1>
      <p>
        Welcome to your first lesson in resource conservation! <strong>Soil conservation</strong> is the practice of 
        protecting the soil from erosion and loss of fertility. Soil is a scarce resource that takes hundreds of years 
        to form, making its preservation vital for food security in Kenya.
      </p>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      <h2>Lesson 1: Identifying Suitable Soil for Gardening</h2>
      <p>
        Not all soil is created equal when it comes to farming or establishing kitchen gardens. To grow healthy crops, 
        we must identify the characteristics of the three primary soil types found in our environment:
      </p>

      <ul>
        <li><strong>Loam Soil:</strong> The ideal mix! It contains a perfect balance of sand, clay, and organic matter (humus). It retains the right amount of moisture and nutrients.</li>
        <li><strong>Clay Soil:</strong> Made of very fine particles. It holds water tightly, drains poorly, and becomes hard and sticky, making it difficult for delicate root systems to expand.</li>
        <li><strong>Sandy Soil:</strong> Formed of large, loose particles. Water drains away almost instantly, washing nutrients along with it and leaving crops dry.</li>
      </ul>

      <W3ExampleCard 
        title="Classroom Experiment: Soil Water Retention Test"
        objective="Observe how different soil types hold or drain water differently:"
        visualPreview={
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: "10px" }}>
            <div style={{ border: "1px solid #ddd", padding: "12px", background: "#f9f9f9", borderRadius: "4px", flex: "1", minWidth: "180px" }}>
              <h5 style={{ margin: "0 0 8px 0", color: "#E67E22" }}>⌛ Sandy Soil</h5>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>Water pours through instantly. Very little moisture is captured.</p>
            </div>
            <div style={{ border: "1px solid #ddd", padding: "12px", background: "#f9f9f9", borderRadius: "4px", flex: "1", minWidth: "180px" }}>
              <h5 style={{ margin: "0 0 8px 0", color: "#2ECC71" }}>🌱 Loam Soil</h5>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>Drains steadily. Captures a rich sponge-layer of water perfect for plants.</p>
            </div>
            <div style={{ border: "1px solid #ddd", padding: "12px", background: "#f9f9f9", borderRadius: "4px", flex: "1", minWidth: "180px" }}>
              <h5 style={{ margin: "0 0 8px 0", color: "#3498DB" }}>💧 Clay Soil</h5>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>Water pools on top and barely drops through, causing waterlogging.</p>
            </div>
          </div>
        }
        sandboxLink="/sandboxes/soil-test"
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <h2>Lesson 2: Making Compost Manure (Heap Method)</h2>
      <p>
        Instead of wasting organic materials, we can use them to restore soil fertility through <strong>composting</strong>. 
        Composting turns organic waste into valuable nutrients for our crops.
      </p>

      <h3>Suitable Materials vs Unsuitable Materials</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr style={{ background: "#f2f2f2", textAlign: "left" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>✔️ Suitable (Organic Waste)</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>❌ Unsuitable (Do Not Use)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Slashed vegetation, dry leaves, weeds</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Plastics, polythene bags, glass bottles</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Kitchen fruit peels, vegetable scraps</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Chemicals, synthetic synthetic materials</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Animal manure, wood ash</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Diseased plants or meat remnants</td>
          </tr>
        </tbody>
      </table>

      <W3NoteCard 
        title="Key Inquiry Question: How can composting conserve the environment?" 
        text="Composting recycles organic waste back into the ecosystem naturally. This prevents trash pileups, enriches topsoil structures, and reduces the need for costly commercial fertilizers!" 
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <W3AssessmentCard 
        question="Which of the following items is suitable for collection and processing into organic heap compost manure?"
        type="radio"
        options={[
          "Polythene carrier bags and plastic straws",
          "Slashed garden vegetation and fruit kitchen scraps",
          "Broken glass panes and metallic soda cans"
        ]}
        correctAnswer="1"
        hint="Organic composting requires natural materials that decay easily under microbial action."
      />
    </div>
  );
}
