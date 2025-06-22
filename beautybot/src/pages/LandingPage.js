import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import homepagemodel from '../assets/homepage-model.png'; // Correct path for the image

const howWorksSteps = [
  {
    icon: "📝",
    title: "Step 1: Fill Questionnaire",
    description: "Quickly fill out a questionnaire about your skin type and concerns.",
  },
  {
    icon: "🧠",
    title: "Step 2: AI Analysis",
    description: "Our AI analyzes your answers and compares them with thousands of products.",
  },
  {
    icon: "⚖️",
    title: "Step 3: Personalized Routine",
    description: "Receive a custom skincare routine tailored to your needs.",
  },
];

const skinTypes = [
  { type: "Oily", color: "#D8A7FF", description: "Oily skin often looks shiny, especially in the T-zone. It may have larger pores and be prone to acne. Keeping the skin balanced is essential.", fontColor: "#3E2A8C" },
  { type: "Dry", color: "#FFF6A3", description: "Dry skin can feel tight and may show flakiness. It's often more sensitive, leading to redness and irritation. Proper hydration is crucial.", fontColor: "#D18F0F" },
  { type: "Combination", color: "#FFDAA1", description: "Combination skin has oily areas (usually the T-zone) and dry patches (often the cheeks). It needs a routine that balances both concerns.", fontColor: "#4A3D24" },
  { type: "Sensitive", color: "#D2FFAE", description: "Sensitive skin is prone to irritation, redness, and inflammation. Be cautious with strong ingredients and opt for gentle skincare.", fontColor: "#7F9C00" },
  { type: "Normal", color: "#A7D8FF", description: "Normal skin is balanced, not too oily or dry. It feels comfortable without tightness, and pores are small. A good skincare routine helps maintain this balance.", fontColor: "#003366" }
];

const LandingPage = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !isAuthenticated) return;

    fetch("http://localhost:8000/api/user/", {
      headers: { Authorization: `Token ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  }, [isAuthenticated]);

  const handleTryNowClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/questionnaire");
    }
  };

  const handleSkinTypeClick = (type) => {
    navigate(`/${type.toLowerCase()}-skin`);
  };

  // Intersection Observer
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        {/* Hero Section */}
        <section className="fade-in" style={styles.heroSection}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Get Your <span style={{ color: "#E75EAA" }}>Skin Analysis</span> Today!
            </h1>
            <button style={styles.tryNowButton} onClick={handleTryNowClick}>
              Try Now
            </button>
          </div>
          <div style={styles.heroImageWrapper}>
            <img
              src={homepagemodel}
              alt="Woman profile"
              style={styles.heroImage}
            />
          </div>
        </section>

        {/* How BeautyBot Works */}
        <section className="fade-in" style={styles.howItWorksSection}>
          <h2 style={styles.sectionTitle}>How BeautyBot Works</h2>
          <div style={styles.stepsContainer}>
            {howWorksSteps.map(({ icon, title, description }) => (
              <div key={title} className="slide-in" style={styles.stepCard}>
                <div style={styles.stepIcon}>{icon}</div>
                <h3 style={styles.stepTitle}>{title}</h3>
                <p style={styles.stepDescription}>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skin Type Cards */}
        <section className="fade-in" style={styles.skinTypeSection}>
          <h2 style={styles.sectionTitle}>What is Your Skin Type?</h2>
          <div style={styles.skinTypeCardsContainer}>
            {skinTypes.map((skinType, index) => (
              <div
                key={skinType.type}
                style={{
                  ...styles.card,
                  backgroundColor: skinType.color,
                  color: skinType.fontColor,
                  flexBasis: index < 3 ? '30%' : '45%',
                  marginBottom: '2rem'
                }}
                onClick={() => handleSkinTypeClick(skinType.type)}
                className="fade-in card"
              >
                <h3 style={styles.cardTitle}>{skinType.type}</h3>
                <p style={styles.cardDescription}>{skinType.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="fade-in" style={styles.tipsSection}>
          <h2 style={styles.sectionTitle}>Skin Care Tips & Tricks</h2>
          <div style={styles.tipsContainer}>
            <div style={styles.tipItem}>
              <h3 style={styles.tipTitle}>Hydration is Key</h3>
              <p style={styles.tipDescription}>
                Drink plenty of water and use moisturizers to keep your skin hydrated.
              </p>
            </div>
            <div style={styles.tipItem}>
              <h3 style={styles.tipTitle}>Sunscreen Everyday</h3>
              <p style={styles.tipDescription}>
                Never skip sunscreen—even on cloudy days. Protect your skin from UV damage.
              </p>
            </div>
            <div style={styles.tipItem}>
              <h3 style={styles.tipTitle}>Know Your Ingredients</h3>
              <p style={styles.tipDescription}>
                Understanding what works for your skin type is crucial.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={styles.footerBox}>
        © 2025 BeautyBot | Built by Siti Nur Azizah
      </footer>

      {/* Embedded CSS */}
      <style>{`
        .fade-in { opacity: 0; animation: fadeIn 1s forwards; }
        .fade-in.visible { opacity: 1; }
        .slide-in { animation: slideIn 0.6s ease-out; }
        .card:hover {
          transform: scale(1.05);
          background-color: #f2c6e0;
          box-shadow: 0 12px 25px rgba(231, 94, 170, 0.5);
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}</style>
    </div>
  );
};

// Keep your styles object unchanged
const styles = {
  pageContainer: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#FFE6F0",
    overflowX: "hidden",
    minHeight: "100vh",
    color: "#333",
  },
  contentContainer: {
    padding: "2rem 4rem",
    marginTop: "1rem",
  },
  heroSection: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    padding: "2rem",
    borderRadius: 20,
    backgroundColor: "#FFD6E8",
    marginBottom: "4rem",
  },
  heroText: {
    flex: 1,
  },
  heroTitle: {
    fontSize: "2.2rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    lineHeight: 1.2,
  },
  tryNowButton: {
    backgroundColor: "#E75EAA",
    color: "white",
    padding: "0.75rem 2.25rem",
    fontWeight: "700",
    border: "none",
    borderRadius: 30,
    fontSize: "1.2rem",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(231, 94, 170, 0.5)",
    transition: "background-color 0.3s",
  },
  heroImageWrapper: {
    flex: 1,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "320px",
    maxWidth: "350px",
    marginLeft: "1rem",
    backgroundColor: "#FFD6E8",
    borderRadius: 20,
    boxShadow: "0 8px 25px rgba(235, 165, 203, 0.5)",
  },
  heroImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    objectFit: "cover",
  },
  howItWorksSection: {
    marginBottom: "6rem",
  },
  footerBox: {
    marginTop: "5rem",
    padding: "1rem 0",
    backgroundColor: "#E75EAA",
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "1rem",
    userSelect: "none",
    width: "100vw",
  },
  sectionTitle: {
    color: "#E75EAA",
    fontWeight: "700",
    fontSize: "2.2rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  stepsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },
  stepCard: {
    padding: "1.5rem",
    backgroundColor: "white",
    borderRadius: 16,
    boxShadow: "0 6px 20px rgba(231, 94, 170, 0.25)",
    textAlign: "center",
    maxWidth: "300px",
  },
  stepIcon: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#7B8AFE",
  },
  stepTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    marginBottom: "0.6rem",
    color: "#7B8AFE",
  },
  stepDescription: {
    fontSize: "1rem",
    color: "#333",
  },
  skinTypeSection: {
    marginTop: "3rem",
    marginBottom: "6rem",
  },
  skinTypeCardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  card: {
    padding: "1.5rem",
    borderRadius: 16,
    boxShadow: "0 6px 20px rgba(231, 94, 170, 0.25)",
    cursor: "pointer",
    maxWidth: "250px",
    transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#333",
  },
  tipsSection: {
    marginTop: "3rem",
  },
  tipsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexDirection: "column",
    alignItems: "center",
  },
  tipItem: {
    width: "700px",
    maxWidth: "100%",
    padding: "1.5rem",
    backgroundColor: "white",
    borderRadius: 16,
    boxShadow: "0 6px 20px rgba(231, 94, 170, 0.25)",
    textAlign: "center",
  },
  tipTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#E75EAA",
  },
  tipDescription: {
    fontSize: "1rem",
    color: "#333",
  },
};

export default LandingPage;
