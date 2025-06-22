import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import normalSkinImage from "../assets/normal-skin-image.jpg"; // Replace with a relevant image for normal skin

const NormalSkinPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector('.fade-in').classList.add('visible');
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />
      
      <section className="fade-in" style={styles.heroSection}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Getting To Know My Skin: Normal Skin 101</h1>
          <p style={styles.heroDescription}>
            It’s time to get to know the normal skin type to the fullest!
          </p>
        </div>
        <div style={styles.heroImageWrapper}>
          <img src={normalSkinImage} alt="Normal skin close-up" style={styles.heroImage} />
        </div>
      </section>

      <section style={styles.contentSection}>
        <h2 style={styles.articleTitle}>What is Normal Skin?</h2>
        <p style={styles.articleContent}>
          Normal skin refers to skin that is well-balanced – neither too dry nor too oily. It has a regular texture, minimal imperfections, and a soft appearance. Due to its well-balanced nature, normal skin can tolerate most things without overreacting.
        </p>

        <h2 style={styles.articleTitle}>How Can I Identify Normal Skin?</h2>
        <p style={styles.articleContent}>
          You can learn how to determine your skin type in our previous article here, and trust me, it’s straightforward. Normal skin type characteristics include:
        </p>
        <ul style={styles.signList}>
          <li>Doesn’t feel too oily nor too dry, the perfect balance of both.</li>
          <li>Radiant appearance.</li>
          <li>No/minimal blemishes or redness.</li>
          <li>Texture that is smooth and soft.</li>
          <li>Pores are not very visible or appear small.</li>
        </ul>

        <h2 style={styles.articleTitle}>Do I Still Need a Skincare Routine Even If I Have Normal Skin?</h2>
        <p style={styles.articleContent}>
          Normal skin does not mean that you never see any issues. Skin is a living, breathing organ that changes and reacts to the environment so you can experience dryness, oiliness, and even occasional breakouts. A good skincare routine can help maintain and protect the skin, and address specific concerns when they do pop up.
        </p>
        <p style={styles.articleContent}>
          Your skin type still needs daily attention to keep your skin looking the best. Treat your skin well, and it will treat you well in return.
        </p>

        <h2 style={styles.articleTitle}>How Do I Maintain Normal Skin?</h2>
        <p style={styles.articleContent}>
          Maintaining can be challenging if you’re overthinking, so let’s make it simple with just three must-have steps — cleanse, moisturize, and apply sunscreen daily.
        </p>
        <p style={styles.articleContent}>
          When you wash your face daily, you’re getting rid of the dirt, pollutants, and other bacteria which can lead to acne. The sunscreen protects you from aging faster, and moisturizer helps your skin stay hydrated.
        </p>
        <p style={styles.articleContent}>
          If you’re feeling fancy, you can consider exfoliating. Since normal skin rarely reacts badly when you try new products, you can either do physical or chemical exfoliation. But, the primary function of exfoliating is to remove dead skin cells, blackheads, or whiteheads.
        </p>

        <h2 style={styles.articleTitle}>Play Safe with These Ingredients</h2>
        <p style={styles.articleContent}>
          As I mentioned before, it’s not all rainbows and sunshine for normal skin. There is a possibility that you would react to specific products, so look out for these ingredients to maintain a good complexion and youthful skin.
        </p>
        <ul style={styles.ingredientList}>
          <li><strong>Hyaluronic Acid and Ceramides:</strong> Boost hydration and water retention.</li>
          <li><strong>Panthenol:</strong> A provitamin B5 that offers excellent hydration.</li>
          <li><strong>Salicylic acid:</strong> Balances the skin and helps with acne.</li>
          <li><strong>Niacinamide:</strong> Helps with redness, acne, oil control, and balancing skin tone.</li>
          <li><strong>Vitamin C:</strong> In its purest form, it can help lighten dark spots and even out skin tone.</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#FADADD", // Light pink background
    color: "#333", 
    fontFamily: "'Lora', serif",
    minHeight: "100vh",
    padding: "2rem 3rem",
  },
  heroSection: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(135deg, #F7A7B9, #FAD3D9)", 
    borderRadius: "20px",
    padding: "2rem",
    marginBottom: "3rem",
    textAlign: "center",
  },
  heroText: {
    color: "#2D3748",
    maxWidth: "80%",
  },
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
    textAlign: "center",
  },
  heroDescription: {
    fontSize: "1.1rem",
    color: "#4A4A4A",
  },
  heroImageWrapper: {
    width: "100%",
  },
  heroImage: {
    borderRadius: "20px",
    maxWidth: "80%",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  },
  contentSection: {
    marginTop: "3rem",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "justify",
  },
  articleTitle: {
    fontSize: "2rem",
    color: "#F77EB6", 
    fontWeight: "700",
    marginBottom: "1rem",
  },
  articleContent: {
    fontSize: "1.1rem",
    color: "#4A4A4A",
    marginBottom: "2rem",
    lineHeight: "1.8",
  },
  ingredientList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "2rem",
  },
  signList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "2rem",
  },
};

export default NormalSkinPage;
