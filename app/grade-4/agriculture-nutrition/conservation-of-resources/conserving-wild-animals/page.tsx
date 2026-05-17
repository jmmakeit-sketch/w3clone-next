"use client";
import React from "react";
import { W3ExampleCard, W3NoteCard } from "../../../../components/W3ContentPackagers";
import { W3AssessmentCard } from "../../../../components/W3AssessmentCard";

export default function ConservingWildAnimalsLesson() {
  return (
    <div className="content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div className="breadcrumb" style={{ fontSize: "14px", marginBottom: "15px", color: "#555" }}>
        <a href="/">Home</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4">Grade 4</a> <span className="breadcrumb-sep">&gt;</span> 
        <a href="/grade-4/agriculture-nutrition">Agriculture & Nutrition</a> <span className="breadcrumb-sep">&gt;</span>
        <span>Conserving Wild Animals</span>
      </div>

      <h1>1.4 Conserving Wild Animals</h1>
      <p>
        Farmers share local ecosystems with small wild creatures. While certain animals feed on or damage crops, 
        maintaining natural biodiversity is important. We can protect agricultural food reserves using 
        <strong>non-lethal deterrence methods</strong> that keep wildlife away safely.
      </p>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      <h2>Small Wild Animals That Destroy Crops</h2>
      <p>
        Learners should be aware of common local animals that often frequent school farms or kitchen gardens:
      </p>
      <ul>
        <li><strong>Birds:</strong> Pick at ripening grains, sunflower seeds, and newly emerged seedlings.</li>
        <li><strong>Hares and Squirrels:</strong> Gnaw at tender legume pods, green leaves, and underground root structures.</li>
        <li><strong>Monkeys:</strong> Gather fruit crops and harvest green maize directly from stalks.</li>
      </ul>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <h2>Co-existing via Scarecrows</h2>
      <p>
        Instead of using traps or harmful chemical deterrents, communities utilize a <strong>scarecrow</strong>. 
        A scarecrow mimics human presence, using movement and visual cues to deflect pests away from fields.
      </p>

      <W3ExampleCard 
        title="Classroom Project: Constructing a Scarecrow"
        objective="Steps for assembling a basic garden deterrent using local materials:"
        visualPreview={
          <div style={{ background: "#F5F5F5", padding: "15px", borderRadius: "6px", borderLeft: "4px solid #8E44AD" }}>
            <h5 style={{ margin: "0 0 8px 0", color: "#8E44AD" }}>🌾 Materials and Positioning</h5>
            <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
              Tie two sticks together in a cross formation to simulate shoulders and arms. Dress the frame in loose old clothes that catch breeze currents, and fill the head space with dry vegetation or old sacks.
            </p>
            <span style={{ fontSize: "12px", background: "#E8F8F5", color: "#117864", padding: "3px 8px", borderRadius: "10px", fontWeight: "bold" }}>
              💡 Biodiversity Goal: Deters animal pests safely without harming wildlife.
            </span>
          </div>
        }
        sandboxLink="/sandboxes/scarecrow-builder"
      />

      <W3NoteCard 
        title="Pertinent and Contemporary Issue: Biodiversity Conservation" 
        text="By deterring crop destruction using physical motion cues like scarecrows, farmers avoid using toxic poisons that contaminate water supplies or wipe out bird and animal populations." 
      />

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

      <W3AssessmentCard 
        question="What is the main environmental benefit of installing a scarecrow in a primary school vegetable patch?"
        type="radio"
        options={[
          "It completely traps small crop pests so they can be removed permanently",
          "It safely scares wild animals away from farm areas without harming or killing them",
          "It adds extra mineral nutrients into loam soils during heavy rainfall events"
        ]}
        correctAnswer="1"
        hint="Consider how non-lethal deterrents protect crops while ensuring safety for local animals."
      />
    </div>
  );
}
