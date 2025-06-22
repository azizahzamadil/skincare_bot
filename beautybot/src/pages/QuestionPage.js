// src/pages/QuestionPage.js
import React, { useState, useEffect } from "react";
// import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: "How does your skin usually feel a few hours after washing?",
    options: [
      "Tight or dry",
      "Comfortable and balanced",
      "Oily or shiny in some areas",
      "Oily all over",
    ],
    multiSelect: false,
  },
  {
    id: 2,
    question: "How often do you notice visible flakes or dry patches on your skin?",
    options: ["Often", "Sometimes", "Rarely", "Never"],
    multiSelect: false,
  },
  {
    id: 3,
    question: "How frequently do you experience breakouts or pimples?",
    options: [
      "Very often (more than twice a month)",
      "Occasionally (once or twice a month)",
      "Rarely (a few times a year)",
      "Never",
    ],
    multiSelect: false,
  },
  {
    id: 4,
    question: "When you press your skin, does it leave an indentation or look shiny?",
    options: [
      "Leaves an indentation (dehydrated)",
      "No indentation, looks normal",
      "Looks shiny, especially on forehead, nose, and chin (T-zone)",
      "Shiny all over face",
    ],
    multiSelect: false,
  },
  {
    id: 5,
    question: "How sensitive is your skin to new products or environmental changes?",
    options: [
      "Very sensitive (redness, irritation easily)",
      "Somewhat sensitive",
      "Not very sensitive",
    ],
    multiSelect: false,
  },
  {
    id: 6,
    question: "Do you often notice redness, flushing, or visible capillaries?",
    options: ["Yes, frequently", "Sometimes", "Rarely", "Never"],
    multiSelect: false,
  },
  {
    id: 7,
    question: "How large or visible are your pores?",
    options: [
      "Very large and noticeable",
      "Moderately visible",
      "Small and barely visible",
      "I don’t notice them",
    ],
    multiSelect: false,
  },
  {
    id: 8,
    question: "How oily does your skin feel by midday?",
    options: [
      "Very oily, needs blotting or powder",
      "Slightly oily in some areas",
      "Mostly normal, not oily",
      "Dry or tight, no oiliness",
    ],
    multiSelect: false,
  },
  {
    id: 9,
    question: "What best describes your skin’s texture?",
    options: [
      "Rough or flaky",
      "Smooth and even",
      "Combination (rough in some areas, smooth in others)",
      "Oily and sometimes bumpy",
    ],
    multiSelect: false,
  },
  {
    id: 10,
    question: "Do you have dark spots, pigmentation, or uneven skin tone?",
    options: [
      "Yes, many spots",
      "A few spots",
      "Slight unevenness",
      "No pigmentation concerns",
    ],
    multiSelect: false,
  },
  {
    id: 11,
    question: "How visible are fine lines or wrinkles?",
    options: [
      "Very visible",
      "Slightly visible",
      "Barely noticeable",
      "Not visible at all",
    ],
    multiSelect: false,
  },
  {
    id: 12,
    question: "How does your skin react to sun exposure?",
    options: [
      "Burns easily, redness appears",
      "Tans gradually",
      "No noticeable reaction",
      "Not sure",
    ],
    multiSelect: false,
  },
  {
    id: 13,
    question: "How often do you use sunscreen?",
    options: ["Every day", "Only when outdoors for long periods", "Rarely", "Never"],
    multiSelect: false,
  },
  {
    id: 14,
    question: "Do you have any known allergies or reactions to skincare ingredients?",
    options: ["Yes (please specify if possible)", "No", "Not sure"],
    multiSelect: false,
  },
  {
    id: 15,
    question: "What type of skincare products do you prefer?",
    options: [
      "Lightweight and oil-free",
      "Rich and moisturizing",
      "Natural or organic ingredients",
      "Fragrance-free and hypoallergenic",
    ],
    multiSelect: false,
  },
  {
    id: 16,
    question: "How much time do you want to spend on your daily skincare routine?",
    options: ["Less than 5 minutes", "5 to 10 minutes", "More than 10 minutes"],
    multiSelect: false,
  },
  {
    id: 17,
    question: "What are your main skincare goals? (Select up to 3)",
    options: [
      "Control oiliness and acne",
      "Hydrate and nourish dry skin",
      "Reduce redness and sensitivity",
      "Brighten and even out skin tone",
      "Anti-aging and reduce wrinkles",
      "Protect skin from sun damage",
    ],
    multiSelect: true,
    maxSelect: 3,
  },
  {
    id: 18,
    question: "Which products do you currently use? (Select all that apply)",
    options: [
      "Cleanser",
      "Toner",
      "Serum",
      "Moisturizer",
      "Sunscreen",
      "Exfoliator",
      "Face mask",
    ],
    multiSelect: true,
  },
  {
    id: 19,
    question: "How often do you exfoliate your skin?",
    options: ["2 or more times a week", "Once a week", "Occasionally", "Never"],
    multiSelect: false,
  },
  {
    id: 20,
    question: "How often does your skin feel oily and shiny?",
    options: ["Most of the day", "Only in the afternoon", "Rarely", "Never"],
    multiSelect: false,
  },
];

export default function QuestionPage({ searchTerm, setSearchTerm, handleSearch }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestion = questions[currentStep];
  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAnswers = localStorage.getItem("beautybot_answers");
    const savedRecommendations = localStorage.getItem("beautybot_recommendations");

    if (savedAnswers && savedRecommendations) {
      setAnswers(JSON.parse(savedAnswers));
      setRecommendations(JSON.parse(savedRecommendations));
      setCurrentStep(questions.length); // jump to result screen
    }
  }, []);

  const handleOptionToggle = (option) => {
    if (currentQuestion.multiSelect) {
      const prevAnswers = answers[currentQuestion.id] || [];
      const isSelected = prevAnswers.includes(option);

      if (!isSelected && currentQuestion.maxSelect && prevAnswers.length >= currentQuestion.maxSelect) {
        alert(`You can select up to ${currentQuestion.maxSelect} options only.`);
        return;
      }

      const updatedOptions = isSelected
        ? prevAnswers.filter((opt) => opt !== option)
        : [...prevAnswers, option];

      setAnswers({ ...answers, [currentQuestion.id]: updatedOptions });
    } else {
      setAnswers({ ...answers, [currentQuestion.id]: option });
    }
  };

  const canProceed = () => {
    const answer = answers[currentQuestion.id];
    return currentQuestion.multiSelect ? answer && answer.length > 0 : answer !== undefined;
  };

  const handleNext = () => {
    if (!canProceed()) {
      alert("Please select at least one option.");
      return;
    }
    setCurrentStep((s) => Math.min(s + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = async () => {

    if (!canProceed()) {
      alert("Please select at least one option.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });

      const result = await response.json();
      setRecommendations(result);
      setCurrentStep(questions.length);

      // Store to localStorage
      localStorage.setItem("beautybot_answers", JSON.stringify(answers));
      localStorage.setItem("beautybot_recommendations", JSON.stringify(result));

      navigate('/recommendations');

    } catch (error) {
      console.error("Error sending answers to backend:", error);
      alert("Oops! Something went wrong.");
    }
  };

  const progressPercent = Math.round(((currentStep + 1) / questions.length) * 100);
  if (currentStep >= questions.length) {
    return (
      <div
        style={{
          backgroundColor: "#F8D7E9",
          minHeight: "100vh",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#5A2A47",
          padding: "0.1rem 1rem 3rem",
          textAlign: "center",
        }}
      >
        {/* <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        /> */}

        <div
          style={{
            backgroundColor: "#FFD6E8",
            padding: "2rem",
            borderRadius: "1.5rem",
            boxShadow: "0 2px 12px rgba(231, 94, 170, 0.15)",
            maxWidth: "600px",
            margin: "4rem auto 0",
            textAlign: "left",
          }}
        >
          <h2 style={{ color: "#E75EAA", fontWeight: "700", fontSize: "1.8rem", marginBottom: "1rem" }}>
            🎉 Your Personalized Skincare Recommendations
          </h2>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {Array.isArray(recommendations) && recommendations.map((item, index) => (
              <li
                key={index}
                style={{
                  padding: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  border: "1.5px solid #E75EAA",
                  fontWeight: "600",
                  color: "#5A2A47",
                  boxShadow: "0 1px 5px rgba(0,0,0,0.05)",
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
          <button
          onClick={() => {
            localStorage.removeItem("beautybot_answers");
            localStorage.removeItem("beautybot_recommendations");
            setAnswers({});
            setRecommendations([]);
            setCurrentStep(0);
          }}
          style={{
            marginTop: "2rem",
            padding: "0.75rem 2rem",
            fontWeight: "600",
            backgroundColor: "#E75EAA",
            color: "white",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          🔄 Start Over
        </button>
      </div>
    );
  }

  return (
  <div
    style={{
      backgroundColor: "#F8D7E9",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#5A2A47",
      textAlign: "center",
      paddingBottom: "4rem",
      boxSizing: "border-box",
    }}
  >
    {/* <Navbar
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
    /> */}

    <div
      style={{
        padding: "6rem 1rem 3rem",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Progress Bar */}
      <div style={{ width: "100%", marginBottom: 30 }}>
        <div
          style={{
            height: 8,
            background: "rgba(90, 42, 71, 0.2)",
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: 6,
          }}
        >
          <div
            style={{
              width: `${progressPercent}%`,
              height: 8,
              backgroundColor: "#DDA0BC",
              borderRadius: 4,
              transition: "width 0.3s ease",
            }}
          />
        </div>
        <div style={{ fontWeight: 600, fontSize: 14 }}>
          Question {currentStep + 1} of {questions.length}
        </div>
      </div>

      {/* Question */}
      <h2
        style={{
          fontWeight: "700",
          fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
          marginBottom: 40,
        }}
      >
        {currentQuestion.question}
      </h2>

      {/* Options */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20 }}>
        {currentQuestion.options.map((option) => {
          const isSelected = currentQuestion.multiSelect
            ? (answers[currentQuestion.id] || []).includes(option)
            : answers[currentQuestion.id] === option;

          return (
            <button
              key={option}
              onClick={() => handleOptionToggle(option)}
              style={{
                padding: "1.25rem 0",
                borderRadius: 30,
                border: isSelected ? "3px solid #DDA0BC" : "2px solid rgba(221, 160, 188, 0.7)",
                backgroundColor: isSelected ? "rgba(221, 160, 188, 0.4)" : "transparent",
                color: "#5A2A47",
                fontWeight: "700",
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                cursor: "pointer",
                textTransform: "capitalize",
                letterSpacing: 1.3,
                transition: "all 0.3s ease",
              }}
            >
              {option}
              {currentQuestion.multiSelect && isSelected ? " ✓" : ""}
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div
        style={{
          marginTop: 50,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {currentStep > 0 ? (
          <button
            onClick={handlePrevious}
            style={{
              backgroundColor: "transparent",
              border: "2px solid #DDA0BC",
              borderRadius: 30,
              color: "#5A2A47",
              padding: "0.75rem 2rem",
              fontWeight: 600,
              cursor: "pointer",
              minWidth: 120,
            }}
          >
            Previous
          </button>
        ) : (
          <div style={{ minWidth: 120 }} />
        )}

        {currentStep < questions.length - 1 ? (
          <button
            onClick={handleNext}
            style={{
              backgroundColor: "#DDA0BC",
              border: "none",
              borderRadius: 30,
              color: "#5A2A47",
              padding: "0.75rem 2rem",
              fontWeight: 600,
              cursor: "pointer",
              minWidth: 120,
            }}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#DDA0BC",
              border: "none",
              borderRadius: 30,
              color: "#5A2A47",
              padding: "0.75rem 2rem",
              fontWeight: 600,
              cursor: "pointer",
              minWidth: 120,
            }}
          >
            Submit
          </button>
        )}
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div
          style={{
            marginTop: "3rem",
            backgroundColor: "#FFD6E8",
            padding: "2rem",
            borderRadius: "1.5rem",
            boxShadow: "0 2px 12px rgba(231, 94, 170, 0.15)",
            width: "100%",
            maxWidth: "600px",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              color: "#E75EAA",
              fontWeight: "700",
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            🎉 Recommended Products for You
          </h3>

          <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
            {recommendations.map((item, index) => (
              <li
                key={index}
                style={{
                  padding: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  border: "1.5px solid #E75EAA",
                  fontWeight: "600",
                  color: "#5A2A47",
                  boxShadow: "0 1px 5px rgba(0,0,0,0.05)",
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

}