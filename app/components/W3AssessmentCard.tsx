import React, { useState } from "react";

interface AssessmentProps {
  question: string;
  type: "radio" | "text";
  options?: string[];
  correctAnswer: string; // index string for radio (e.g. "1"), or clean text string for inputs
  hint?: string;
}

export function W3AssessmentCard({ question, type, options, correctAnswer, hint }: AssessmentProps) {
  const [selected, setSelected] = useState<string>("");
  const [textInput, setTextInput] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  const checkAnswer = () => {
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setSelected("");
    setTextInput("");
    setSubmitted(false);
  };

  const isCorrect = type === "radio" 
    ? selected === correctAnswer 
    : textInput.trim().toLowerCase() === correctAnswer.toLowerCase();

  return (
    <div style={{
      backgroundColor: "#283593", /* Deep administrative blue context */
      color: "#fff",
      padding: "20px",
      margin: "24px 0",
      borderRadius: "4px",
      fontFamily: "Verdana, sans-serif"
    }}>
      <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", borderBottom: "1px solid #5c6bc0", paddingBottom: "8px" }}>
        Test Yourself with Exercises:
      </h3>
      <p style={{ fontSize: "15px", marginBottom: "16px", color: "#fff", lineHeight: "1.5" }}>{question}</p>

      <div style={{ backgroundColor: "#fff", color: "#000", padding: "16px", borderRadius: "4px", marginBottom: "16px" }}>
        {type === "radio" && options ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {options.map((opt, idx) => (
              <label key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "14px" }}>
                <input 
                  type="radio" 
                  name="quiz-opt" 
                  value={idx.toString()} 
                  checked={selected === idx.toString()} 
                  onChange={(e) => setSelected(e.target.value)}
                  disabled={submitted} 
                />
                {opt}
              </label>
            ))}
          </div>
        ) : (
          <input 
            type="text" 
            placeholder="Type your answer here..." 
            value={textInput} 
            onChange={(e) => setTextInput(e.target.value)}
            disabled={submitted}
            style={{ width: "100%", padding: "8px 12px", fontSize: "14px", border: "1px solid #ccc", borderRadius: "4px", fontFamily: "inherit" }}
          />
        )}
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
        {!submitted ? (
          <button 
            onClick={checkAnswer} 
            className="w3-btn-action" 
            style={{ border: "none" }}
            disabled={type === "radio" ? !selected : !textInput.trim()}
          >
            Submit Answer
          </button>
        ) : (
          <button onClick={resetQuiz} className="w3-btn-action" style={{ background: "#666", border: "none" }}>
            Try Again
          </button>
        )}

        {hint && !submitted && (
          <button 
            onClick={() => setShowHint(!showHint)} 
            style={{ background: "transparent", border: "none", color: "#bbb", cursor: "pointer", fontSize: "13px", textDecoration: "underline" }}
          >
            {showHint ? "Hide Hint" : "Show Hint"}
          </button>
        )}
      </div>

      {showHint && !submitted && hint && (
        <div style={{ marginTop: "12px", fontSize: "13px", color: "#fff4a3", fontStyle: "italic" }}>
          💡 Hint: {hint}
        </div>
      )}

      {submitted && (
        <div style={{
          marginTop: "16px",
          padding: "12px",
          borderRadius: "4px",
          fontWeight: "700",
          fontSize: "15px",
          backgroundColor: isCorrect ? "#d4edda" : "#f8d7da",
          color: isCorrect ? "#155724" : "#721c24"
        }}>
          {isCorrect 
            ? "✓ Correct! Brilliant work. You're ready for the next topic section." 
            : `✗ Not quite. The correct answer was: ${type === "radio" && options ? options[parseInt(correctAnswer)] : correctAnswer}`}
        </div>
      )}
    </div>
  );
}
