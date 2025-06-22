// src/pages/RecommendationsPage.js
import React, { useState, useEffect } from 'react';

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const savedRecommendations = localStorage.getItem('beautybot_recommendations');
    if (savedRecommendations) {
      setRecommendations(JSON.parse(savedRecommendations));
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#F8D7E9",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#5A2A47",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
        <h1
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          ✨ Handpicked Just for You
        </h1>
        <p
          style={{
            fontSize: "1rem",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#6D4B5B",
            maxWidth: "500px",
            marginInline: "auto",
          }}
        >
          Your skincare lineup is ready — scroll down to explore.
        </p>

        {recommendations.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {recommendations.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFEFF7",
                  border: "2px solid #EAC1D6",
                  borderRadius: "1.25rem",
                  padding: "1.5rem",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#7A4E64" }}>
                  Recommended for your skin type
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "1rem",
              color: "#5A2A47",
            }}
          >
            No recommendations available. Please complete the questionnaire first.
          </p>
        )}
      </div>
    </div>
  );
}
