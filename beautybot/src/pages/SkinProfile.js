// src/pages/SkinProfile.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SkinProfile() {
  const [recommendations, setRecommendations] = useState([]);
  const [previousRecommendations, setPreviousRecommendations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("beautybot_recommendations");
    const previous = localStorage.getItem("beautybot_prev");

    if (saved) setRecommendations(JSON.parse(saved));
    console.log("🌸 Recommendations:", JSON.parse(saved));

    if (previous) setPreviousRecommendations(JSON.parse(previous));
  }, []);

  useEffect(() => {
    if (recommendations.length > 0) {
      console.log("💡 Morning Routine:", getRoutine(recommendations, "morning"));
      console.log("💡 Evening Routine:", getRoutine(recommendations, "evening"));
    }
  }, [recommendations]);

  const getRoutine = (products, type) => {
    const stepsOrder = [
      "Cleanser",
      "Toner",
      "Essence",
      "Serum",
      "Moisturizer",
      "Sunscreen",
      "Exfoliator",
      "Face mask"
    ];

    return stepsOrder
      .map((step) =>
        products.find(
          (p) =>
            p.name.toLowerCase().includes(step.toLowerCase()) &&
            (p.routine_type === type || p.routine_type === "both")
        )
      )
      .filter(Boolean);
  };

  const handleRetake = () => {
    const current = localStorage.getItem("beautybot_recommendations");
    if (current) localStorage.setItem("beautybot_prev", current);

    localStorage.removeItem("beautybot_recommendations");
    localStorage.removeItem("beautybot_answers");
    navigate("/questionnaire");
  };

  return (
    <div style={{ background: "#F8D7E9", minHeight: "100vh", paddingBottom: "3rem" }}>
      <div style={{ padding: "1rem 1rem 1rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ color: "#5A2A47", fontSize: "2rem", fontWeight: 700 }}>
          🧖 Your Personalized Skin Profile
        </h2>

        <RoutineSection title="🌞 Morning Routine" products={getRoutine(recommendations, "morning")} />
        <RoutineSection title="🌙 Evening Routine" products={getRoutine(recommendations, "evening")} />

        <button
          onClick={handleRetake}
          style={{
            marginTop: "2rem",
            padding: "0.75rem 2rem",
            fontWeight: "600",
            backgroundColor: "#E75EAA",
            color: "white",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          🔁 Retake Questionnaire
        </button>

        {previousRecommendations.length > 0 && (
          <div style={{ marginTop: "3rem" }}>
            <h3 style={{ color: "#7a3851", fontSize: "1.2rem", fontWeight: "bold" }}>
              🕒 Your Previous Routine
            </h3>
            <RoutineSection
              title="Previous Routine"
              products={getRoutine(previousRecommendations, "both")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function RoutineSection({ title, products }) {
  if (!products || products.length === 0) return null;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3 style={{ color: "#E75EAA", fontSize: "1.5rem", fontWeight: 600 }}>{title}</h3>
      <ol style={{ paddingLeft: "1.5rem", color: "#5A2A47", fontWeight: "600", fontSize: "1rem" }}>
        {products.map((product, index) => (
          <li key={index} style={{ marginBottom: "0.75rem" }}>
            <span style={{ fontWeight: "bold" }}>{product.name}</span> — {getStepDescription(product.name)}
          </li>
        ))}
      </ol>
    </div>
  );
}

function getStepDescription(name) {
  name = name.toLowerCase();
  if (name.includes("cleanser")) return "Start your routine by cleansing your face.";
  if (name.includes("toner")) return "Use toner to balance your skin's pH.";
  if (name.includes("essence")) return "Apply essence to hydrate and prep the skin.";
  if (name.includes("serum")) return "Use serum to target specific skin concerns.";
  if (name.includes("moisturizer")) return "Apply moisturizer to lock in hydration.";
  if (name.includes("sunscreen")) return "Finish with sunscreen to protect from UV rays (morning only).";
  if (name.includes("exfoliator")) return "Use 1–2 times per week to remove dead skin cells.";
  if (name.includes("mask")) return "Use a mask 1–2 times per week for deep treatment.";
  return "Apply as needed.";
}
