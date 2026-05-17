"use client";
import React from "react";
import { W3ExampleCard, W3NoteCard } from "../../../../components/W3ContentPackagers";
import { W3AssessmentCard } from "../../../../components/W3AssessmentCard";

export default function BalancedDietLesson() {
  return (
    <div className="content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div className="breadcrumb" style={{ fontSize: "14px", marginBottom: "15px", color: "#555" }}>
        <a href="/">Home</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4">Grade 4</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4/agriculture-nutrition">Agriculture & Nutrition</a> <span className="breadcrumb-sep">&gt;</span>
        <span>Balanced Diet</span>
      </div>

      <h1>2.3 Balanced Diet</h1>
      <p>
        Eating a variety of food helps our bodies grow strong, fight diseases, and keep energy levels high. 
        A <strong>balanced diet</strong> means eating a meal containing the correct proportions of nutrients from different food groups.
      </p>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      <h2>The Three Essential Food Groups</h2>
      <p>To compose a balanced plate using locally available foods, we select items from each of these main categories:</p>
      
      <ul>
        <li><strong>Energy-Giving Foods (Carbohydrates):</strong> Foods like maize, millet, cassava, and sweet potatoes that fuel our bodies for work and play.</li>
        <li><strong>Body-Building Foods (Proteins):</strong> Foods like eggs, beans, peas, meat, and milk that repair our bodies and help us grow.</li>
        <li><strong>Protective Foods (Vitamins & Minerals):</strong> Fruits and vegetables like kales (sukuma wiki), carrots, mangoes, and oranges that protect us from illnesses.</li>
      </ul>

      <W3ExampleCard 
        title="The Balanced Plate Guide"
        objective="Proportion layout for a typical healthy meal plan:"
        visualPreview={
          <div style={{ display: "flex", gap: "10px", padding: "10px", background: "#f9f9f9", borderRadius: "5px" }}>
            <div style={{ padding: "10px", background: "#FFE082", borderRadius: "4px", flex: "1", textAlign: "center" }}>🌾 1/4 Carbohydrates</div>
            <div style={{ padding: "10px", background: "#FFAB91", borderRadius: "4px", flex: "1", textAlign: "center" }}>🍗 1/4 Proteins</div>
            <div style={{ padding: "10px", background: "#A5D6A7", borderRadius: "4px", flex: "2", textAlign: "center" }}>🥦 1/2 Fruits & Vegetables</div>
          </div>
        }
        sandboxLink="/sandboxes/diet-builder"
      />

      <W3NoteCard 
        title="Key Inquiry Question" 
        text="How does variety in diet impact on health? Eating only one type of food leads to nutrient deficiencies. Variety ensures the body gets all the materials it requires to stay healthy, energetic, and fully immune to infections!" 
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <W3AssessmentCard 
        question="A Grade 4 learner prepared a lunch comprising of Ugali (Carbohydrate) and Roasted Meat (Protein). Which food group is missing to make this a truly balanced diet?"
        type="radio"
        options={[
          "More Energy-Giving foods like cassava",
          "Protective foods like Kales (Sukuma Wiki) or a slice of ripe mango",
          "An extra helping of body-building beans"
        ]}
        correctAnswer="1"
        hint="Think about which group protects the body from common sicknesses and vitamins."
      />
    </div>
  );
}
