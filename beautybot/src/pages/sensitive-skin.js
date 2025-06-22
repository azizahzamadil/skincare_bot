import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import sensitiveSkinImage from "../assets/sensitive-skin-image.jpg"; // Replace with a relevant image for sensitive skin

const SensitiveSkinPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector('.fade-in').classList.add('visible');
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />
      
      <section className="fade-in" style={styles.heroSection}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Sensitive Skin: Why Your Skin Reacts—And How to Calm It Like a Pro</h1>
          <p style={styles.heroDescription}>
            Let’s be real—having sensitive skin feels like playing skincare roulette. One day you’re glowing, the next you’re red, itchy, and wondering if your moisturizer just betrayed you. If your skin seems to have an attitude, reacts to practically everything, or flushes from just looking at a cotton pad the wrong way—this guide is for you.
          </p>
        </div>
        <div style={styles.heroImageWrapper}>
          <img src={sensitiveSkinImage} alt="Sensitive skin close-up" style={styles.heroImage} />
        </div>
      </section>

      <section style={styles.contentSection}>
        <h2 style={styles.articleTitle}>The Science of Why Your Skin Is “So Sensitive”</h2>
        <p style={styles.articleContent}>
          Sensitive skin isn’t a flaw. It’s a skin type, and like all skin types, it’s rooted in biology. At the heart of it all is your skin barrier—the thin, protective wall that keeps moisture in and bad stuff (like allergens, bacteria, and irritants) out.
        </p>
        <p style={styles.articleContent}>
          When that barrier is damaged—or just naturally thin, like it often is in people with sensitive skin—your skin becomes hyperreactive. It reacts to things most other skin types wouldn’t even notice. That reaction isn’t “weakness.” It’s your skin’s way of asking for help.
        </p>

        <h2 style={styles.articleTitle}>Real Talk: What Does Sensitive Skin Feel Like?</h2>
        <p style={styles.articleContent}>
          Sensitive skin is unpredictable. One week, your go-to product is your holy grail. The next week? It’s burning you like betrayal. You might experience:
        </p>
        <ul style={styles.signList}>
          <li>Redness that lingers</li>
          <li>Tightness even after moisturizing</li>
          <li>Stinging or burning when applying products</li>
          <li>Sudden flaking or inflammation</li>
          <li>Skin that turns into a tomato after being in the sun or wind for 10 minutes</li>
        </ul>
        <p style={styles.articleContent}>
          You’re not imagining it. You’re not “overreacting.” And no, it’s not because you don’t drink enough water (though that helps). You’re dealing with skin that’s more finely tuned to its environment—and more vulnerable to imbalance.
        </p>

        <h2 style={styles.articleTitle}>The Golden Rule of Sensitive Skin: Less Is Always More</h2>
        <p style={styles.articleContent}>
          Sensitive skin doesn’t need a 10-step routine. It doesn’t want layers of products, exotic plant extracts, or six different serums that promise glass skin.
        </p>
        <p style={styles.articleContent}>
          It wants peace. Start with the gentlest cleanser you can find. Look for cream or milk textures, fragrance-free, and non-foaming. Skip anything labeled “deep-cleansing,” “detoxifying,” or “invigorating”—those are marketing speak for “possibly irritating.”
        </p>
        <p style={styles.articleContent}>
          Follow up with a moisturizer that restores your skin barrier. Ingredients like ceramides, squalane, glycerin, and panthenol are your skin’s new best friends. They don’t tingle, they don’t “do too much,” and that’s the point.
        </p>

        <h2 style={styles.articleTitle}>What Not To Do (Even If TikTok Says It’s Cool)</h2>
        <ul style={styles.mistakeList}>
          <li>Stop using scrubs. If it feels like sandpaper, it’s not helping.</li>
          <li>Drop the fragrance. Yes, even if it smells like lavender fields in Paris.</li>
          <li>Step away from the peel pads. You’re not missing out—you’re protecting your barrier.</li>
          <li>Don't experiment every week. Trendy doesn’t mean safe. Patch test, always.</li>
          <li>Avoid essential oils. Just because it’s natural doesn’t mean it’s gentle.</li>
        </ul>
        <p style={styles.articleContent}>
          And perhaps most importantly: stop blaming yourself. You’re not being “extra.” You’re being cautious, and that’s wise when your skin is reactive.
        </p>

        <h2 style={styles.articleTitle}>Sensitive Skin Is Not a Flaw—It’s an Invitation</h2>
        <p style={styles.articleContent}>
          Sensitive skin teaches us what skincare is really about: listening, slowing down, simplifying. It forces you to build a routine rooted in trust. Not just between you and your skin—but between you and your self-worth.
        </p>
        <p style={styles.articleContent}>
          So instead of fighting your skin, start working with it. Protect it. Respect it. Choose formulas designed to heal, not to impress. Because when your sensitive skin is finally calm—no redness, no burning, no flaking—it feels like you’ve come home to yourself.
        </p>
        <p style={styles.articleContent}>
          And trust me, the glow you get from happy, calm skin? That’s the most beautiful kind of glow there is.
        </p>
      </section>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#F6E1F1", 
    color: "#333", 
    fontFamily: "'Lora', serif",
    minHeight: "100vh",
    padding: "2rem 3rem",
  },
  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    background: "linear-gradient(135deg, #E4C1F9, #F6D7EC)", 
    borderRadius: "20px",
    padding: "2rem",
    marginBottom: "3rem",
  },
  heroText: {
    flex: 1,
    color: "#2D3748",
    maxWidth: "50%",
  },
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
  },
  heroDescription: {
    fontSize: "1.1rem",
    color: "#4A4A4A",
    maxWidth: "80%",
  },
  heroImageWrapper: {
    flex: 1,
    textAlign: "center",
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
    color: "#F77EB6", 
    fontWeight: "700",
    marginBottom: "1rem",
  },
  articleContent: {
    fontSize: "1.1rem",
    color: "#4A4A4A",
    marginBottom: "2rem",
    lineHeight: "1.8", // Spacing for readability
  },
  signList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "2rem",
  },
  mistakeList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "2rem",
  },
};

export default SensitiveSkinPage;
