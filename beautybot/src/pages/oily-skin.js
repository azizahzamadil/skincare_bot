import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import oilySkinImage from "../assets/oily-skin-image.jpg"; // Placeholder image for oily skin

const OilySkinPage = () => {
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
          <img src={oilySkinImage} alt="Oily skin close-up" style={styles.heroImage} />
        </div>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>How To Create a Skincare Routine for Oily Skin</h1>
          <p style={styles.heroDescription}>
            November 11, 2024 | By: Rachel Sokol | skincare.com by L'Oréal
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={styles.contentSection}>
        <h2 style={styles.articleTitle}>Building a Skincare Routine for Oily Skin</h2>
        <p style={styles.articleContent}>
          We’ll be honest: Building a skincare routine for oily skin can take a bit of trial and error. If you’re always reaching for the blotting papers, your instinct may be to reach for drying products that help quell shine. That’s not always the best approach, though—even oily skin needs hydration to look and feel its best. On the flip side, it’s important not to use anything too heavy or rich, as doing so may leave your skin feeling slick or greasy. You need to find a happy medium.
        </p>
        <p style={styles.articleContent}>
          Fortunately for you, we’re here to help. Ahead, we’ll reveal the must-follow skincare steps for oily skin and share our simple (but effective) AM and PM skincare routines for oily skin. Along the way, you’ll get a look at some of our favorite products to keep your skin feeling balanced and healthy.
        </p>

        <h2 style={styles.articleTitle}>How To Tell if You Have Oily Skin</h2>
        <p style={styles.articleContent}>
          Oily skin is a skin type characterized by—you guessed it—a higher-than-average production of oil (also known as sebum). Those with oily skin may find that their complexion looks shiny, especially in the T-zone area. Enlarged pores, particularly around the nose and cheeks, can also be indicative of oily skin.
        </p>
        <p style={styles.articleContent}>
          If you’re unsure whether your skin is, in fact, oily, try washing your face with a gentle cleanser and letting it dry without applying any products. Then, wait a half hour and assess your skin. While those with drier skin types will find that their skin feels tight or uncomfortable, oily skin may appear slick or shiny, and it won’t feel tight. If it’s shiny in certain areas but feels tight and thirsty in others, you probably have combination skin.
        </p>
        <p style={styles.articleContent}>
          You can also use blotting papers to gauge how oily your skin is. Lightly sweep the sheet across your face, then take a look at it. The more translucent it appears, the more oil it’s picked up—and the oilier your skin is likely to be. While you can’t change how much oil your skin produces (it’s primarily determined by genetics), the right products and routine can help keep shine to a minimum.
        </p>

        <h2 style={styles.articleTitle}>The Best Skincare Products for Oily Skin</h2>
        <p style={styles.articleContent}>
          When building a skincare routine for oily skin, you’ll want to look for products that can help temper shine and keep your pores clear without stripping or drying out your skin.
        </p>
        <p style={styles.articleContent}>
          The American Academy of Dermatology (AAD) advises sticking with oil-free products and opting for non-comedogenic options, particularly if you’re prone to clogged pores and breakouts.
        </p>
        <p style={styles.articleContent}>
          The best skincare routines for oily skin almost always start off with a gentle (yet thorough) cleanse. Avoid the temptation to reach for something super drying—the AAD says that gentle, foaming cleansers are typically your best bet. If you want to exfoliate, consider doing so with a mild chemical exfoliant, like salicylic acid, which is oil-soluble and can penetrate your pores to break up debris.
        </p>
        <p style={styles.articleContent}>
          Moisturizers are also essential for oily skin. Skipping moisturizer can leave your skin dehydrated, which can trigger your body to produce more oil to compensate. To keep your skin hydrated, look for lightweight, water-based moisturizers that absorb quickly. Keep an eye out for ingredients such as hyaluronic acid and niacinamide—both can be excellent additions to your skincare routine for oily skin.
        </p>
        <p style={styles.articleContent}>
          Lastly, remember that sunscreen is a non-negotiable, no matter the weather. Lightweight, fluid sunscreens tend to be the best picks for oily skin, as they won’t leave your skin feeling greasy or weighed down.
        </p>
      </section>
    </div>
  );
};

// Styles for the page
const styles = {
  pageContainer: {
    backgroundColor: "#FFF1F6", 
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
    background: "linear-gradient(135deg, #B3CDE0, #F3C5D5)", 
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
    width: "100%", // Ensure the image stretches across the screen
    height: "auto", // Maintain aspect ratio
    objectFit: "cover", // Ensures the image fits well within the dimensions
    maxHeight: "500px", // Limit height to a reasonable value to avoid large banners
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  },
  contentSection: {
    marginTop: "3rem",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
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
  },
};

export default OilySkinPage;
