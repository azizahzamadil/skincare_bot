import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import drySkinImage from "../assets/dry-skin-image.jpg"; // Placeholder image for dry skin

const DrySkinPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector('.fade-in').classList.add('visible');
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="fade-in" style={styles.heroSection}>
        <div style={styles.heroImageWrapper}>
          <img src={drySkinImage} alt="Dry skin close-up" style={styles.heroImage} />
        </div>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Diminish Dryness With This Step-by-Step Dry Skin Routine</h1>
          <p style={styles.heroDescription}>
            March 31, 2025 | By: Lauren Levinson | skincare.com by L'Oréal
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={styles.contentSection}>
        <h2 style={styles.articleTitle}>A Simple Skin-Care Routine for Dry Skin Types</h2>
        <p style={styles.articleContent}>
          Addressing dry skin concerns can feel like an uphill battle if you’re not sure where to start. While creating an effective dry skin routine doesn’t have to be complicated, it is important to prioritize using the right products and ingredients for your needs. To promote a dewy, comfortable complexion, a skincare routine for dry skin should be gentle, soothing, and above all else, deeply moisturizing—every step of the way. Here, we’ll discuss some of the best ingredients to add to your dry skin routine, and offer a look at some of our favorite products to use to keep your complexion hydrated, soft, and healthy-looking.
        </p>

        <h2 style={styles.articleTitle}>What Causes Dry Skin?</h2>
        <p style={styles.articleContent}>
          There’s no one answer to the cause of dry skin. For some people, dryness is due to genetics, skin conditions, or a loss of moisture due to aging. For others, it’s because of dry air, which can crop up in the winter with brisk outdoor temperatures or central heating systems.
        </p>
        <p style={styles.articleContent}>
          Dry skin can also be a result of over-washing or the use of harsh skincare products that damage the skin barrier. In these instances, the skin’s natural protective oils are stripped away, leaving the skin with a dry, tight feeling. No matter the cause, a dry skin routine that centers around gentle, nourishing products is a great way to restore your skin’s healthy look and feel.
        </p>

        <h2 style={styles.articleTitle}>What Ingredients Are Good for Dry Skin?</h2>
        <p style={styles.articleContent}>
          Before you put anything on your face, it’s a good idea to do your homework and determine which ingredients can help address your specific concerns. Some ingredients to look out for when shopping for skincare for dry skin include:
        </p>
        <ul style={styles.ingredientList}>
          <li><strong>Hyaluronic acid:</strong> Unless you’re totally new to skincare, you’re probably at least passingly familiar with hyaluronic acid. Products with this humectant ingredient can help draw moisture into the skin, promoting a plumper, more hydrated appearance.</li>
          <li><strong>Ceramides:</strong> The term ceramides refers to a class of lipids that exist within the skin’s natural moisture barrier. Among other things, they help trap water in the skin to prevent moisture loss (in other words, dehydration). Over time, however, your skin’s production of ceramides may decrease, resulting in dryness and dehydration. Using products that contain ceramides can help keep your skin feeling moisturized and healthy.</li>
          <li><strong>Niacinamide:</strong> Niacinamide, a form of vitamin B3, can be found in a wide range of products, from cleansers and serums to moisturizers and even sunscreens. According to the Cleveland Clinic, it can help reduce redness, soothe irritation, and boost skin hydration—making it a worthwhile addition to your dry skin routine.</li>
          <li><strong>Glycerin:</strong> Like hyaluronic acid, glycerin is a humectant ingredient that, when used topically, can help hydrate the skin, protect against dryness, and improve skin elasticity.</li>
          <li><strong>Squalane:</strong> According to the Cleveland Clinic, squalane is an oily compound that’s structurally similar to your skin’s natural oil (also known as sebum). In skincare products, it can help seal in moisture to improve skin hydration—and, unlike many other oils, it’s non-comedogenic, so you don’t have to worry about it clogging your pores.</li>
          <li><strong>Vitamin E:</strong> If your dry skin feels rough or scaly, consider adding a product with vitamin E to your routine. When used topically—like in a facial moisturizer—vitamin E can help seal in moisture and promote softer-feeling skin.</li>
        </ul>

        <h2 style={styles.articleTitle}>The Ideal Skincare Routine for Dry Skin</h2>
        <p style={styles.articleContent}>
          A hydrating routine for dry skin should include a gentle, creamy cleanser, a moisturizing toner, and a rich cream or balm that restores the skin's natural barrier.
        </p>

        <h2 style={styles.articleTitle}>Common Mistakes to Avoid</h2>
        <ul style={styles.mistakeList}>
          <li>Using harsh, foamy cleansers that strip moisture</li>
          <li>Skipping moisturizer, which leaves skin vulnerable</li>
          <li>Over-exfoliating, which weakens the skin barrier</li>
          <li>Exposing skin to hot water in showers</li>
        </ul>

        <h2 style={styles.articleTitle}>Key Ingredients for Nourishing Dry Skin</h2>
        <ul style={styles.ingredientList}>
          <li><strong>Hyaluronic Acid:</strong> Attracts and retains moisture</li>
          <li><strong>Shea Butter:</strong> Rich, nourishing hydration</li>
          <li><strong>Panthenol:</strong> Soothes and heals dry, irritated skin</li>
        </ul>

        <h2 style={styles.articleTitle}>Lifestyle Tips for Hydrating Dry Skin</h2>
        <ul style={styles.lifestyleList}>
          <li>Use a humidifier to add moisture to the air</li>
          <li>Drink plenty of water to stay hydrated</li>
          <li>Limit caffeine and alcohol, which can dehydrate your skin</li>
        </ul>

        <p style={styles.articleContent}>
          Dry skin needs consistent hydration. By following the right routine and avoiding common pitfalls, your skin can feel soft, plump, and glowing.
        </p>
      </section>
    </div>
  );
};

// Styles for the page
const styles = {
  pageContainer: {
    backgroundColor: "#FFE8F1", 
    color: "#333", 
    fontFamily: "'Lora', serif",
    minHeight: "100vh",
    padding: "2rem 3rem",
  },
  heroSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #F9C9D2, #FFB6C1)", 
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
    textAlign: "center", // Centering the title
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
    textAlign: "justify", // Justifying content for better readability
  },
  articleTitle: {
    fontSize: "2rem",
    color: "#F76C8C", 
    fontWeight: "700",
    marginBottom: "1rem",
  },
  articleContent: {
    fontSize: "1.1rem",
    color: "#4A4A4A",
    marginBottom: "2rem",
    lineHeight: "1.8",
    textAlign: "justify", // Justifying content for better spacing
  },
  ingredientList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "2rem",
    marginTop: "1rem", // Added spacing between items
    textAlign: "justify", // Justifying content
  },
  lifestyleList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "2rem",
    textAlign: "justify", // Justifying content
  },
  causeList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "2rem",
    textAlign: "justify", // Justifying content
  },
  mistakeList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "2rem",
    textAlign: "justify", // Justifying content
  },
};

export default DrySkinPage;
