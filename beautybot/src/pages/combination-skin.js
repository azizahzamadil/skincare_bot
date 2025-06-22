import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import combinationSkinImage from "../assets/combination-skin-image.jpg"; // Replace with a relevant image for combination skin

const CombinationSkinPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector('.fade-in').classList.add('visible');
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />
      
      <section className="fade-in" style={styles.heroSection}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>A Comprehensive Guide to Understanding and Managing Combination Skin</h1>
          <p style={styles.heroDescription}>
            Struggling with both dry patches and oily T-zone? Learn how to balance and embrace your combination skin.
          </p>
        </div>
        <div style={styles.heroImageWrapper}>
          <img src={combinationSkinImage} alt="Combination skin close-up" style={styles.heroImage} />
        </div>
      </section>

      <section style={styles.contentSection}>
        <h2 style={styles.articleTitle}>Skin Types Differ and How to Manage Combination Skin</h2>
        <p style={styles.articleContent}>
          Skin types differ from person to person, and understanding your skin type is the first step in developing a skin health routine that works for you. Although skin care routines are seemingly straightforward for those with normal skin, oily skin, or dry skin, developing a skin care routine for combination skin might require more attention.
        </p>
        <p style={styles.articleContent}>
          You may have noticed some areas of your face produce more oil than others. Meanwhile, you also could have dry patches to contend with. If this is you, then you likely have combination skin. Not to fret, combination skin isn’t anything to be concerned about — a combination skin type is actually quite common. For most people, the trick is learning how to care for the different needs of individual areas of the face.
        </p>

        <h2 style={styles.articleTitle}>What Is Combination Skin?</h2>
        <p style={styles.articleContent}>
          Combination skin is exactly what it sounds like — a combination of oily and dry skin on your face. Studies have indicated sebum secretion occurs in different areas than where dry skin forms, making it very possible to have both oily and dry skin on one face. The shiny brightness from oily skin and the peeling from dry skin can often be uncomfortable and frustrating, especially because the remedy for one could exacerbate the problems of the other. Oftentimes, heavy moisturizers may cure your dry skin, while making oily skin worse. And oil-combatting cleansers could further dehydrate dry skin. A combination skin type may be due to genetics, hormonal changes, or the environment.
        </p>
        <p style={styles.articleContent}>
          Researchers have discovered that acne severity — an expected outcome of excess sebum production — has a 78% familial heritability across various ethnicities. Another study found that skin hydration decreases by 24.23% during sleep, producing excess sebum to compensate for skin dryness in low humidity.
        </p>

        <h2 style={styles.articleTitle}>What Are the Qualities of Combination Skin?</h2>
        <p style={styles.articleContent}>
          People with combination skin usually have oily T-zones — the area across the forehead and down the center of their nose and chin. Conversely, the cheeks, temples, jawline, or elsewhere might be dry, rough, and flaky.
        </p>
        <p style={styles.articleContent}>
          You may also notice enlarged pores in oily areas due to excess sebum production and inflammation. The prevalence of acne, cysts, and other clogged pores may also occur in the T-zone.
        </p>
        <p style={styles.articleContent}>
          Dry skin can also become easily inflamed. Research indicates that lipid depletion and dehydration in the face play an important role in conditions like eczema, which affects 2%-5% of the adult population.
        </p>

        <h2 style={styles.articleTitle}>How Can You Identify Whether You Have Combination Skin?</h2>
        <p style={styles.articleContent}>
          Combination skin is visible, making it easy to tell if you have this type of skin. You can also feel it by running a finger along the T-zone and cheeks — notice that the T-zone may be slicker than rough patches on your cheeks or elsewhere.
        </p>
        <p style={styles.articleContent}>
          Using a mild daily face cleanser and waiting to see your skin’s natural tendencies is another way to determine if you have a combination skin type. If the pores on your nose, chin, and browline become increasingly greasy with time, while the cheeks feel dried out or rough, it’s safe to say you have combination skin.
        </p>
        <p style={styles.articleContent}>
          Combination skin is likely genetic, but how you manage your skin health ultimately has the greatest impact on its feel and appearance. Using harsh products and not adhering to a regular cleansing and moisturizing routine could worsen oily, dry, and acne-prone skin.
        </p>

        <h2 style={styles.articleTitle}>What Are Basic Recommendations for Caring for Combination Skin?</h2>
        <p style={styles.articleContent}>
          While combination skin types can be difficult to manage, they’re not necessarily more difficult than having one or the other. As the name suggests, combination skin just requires a combined approach to skin management, targeting the needs of each area of skin specifically.
        </p>
        <p style={styles.articleContent}>
          For example, collagen is nearly 60% water by weight, so one of the best ways to combat dry skin is by hydrating from the inside out. Be sure to drink at least the recommended daily amount of water for your body. The National Academies of Science, Engineering, and Medicine recommends that women drink 2.7 liters daily and men have about 3.7 liters. When choosing a moisturizer, be sure to opt for non-comedogenic moisturizers to avoid exacerbating the oily areas of skin. Try seeking out topical skin care products that contain non-oily humectants, such as hyaluronic acid and glycerin, which will attract and hold water molecules in your skin without adding additional oil.
        </p>
        <p style={styles.articleContent}>
          Meanwhile, washing with a gentle, water-based facial cleanser is a great approach to treat oily areas of the skin without dehydrating the dry areas. A spot treatment could also help control sebum secretion and breakouts in particularly oily areas while avoiding the dry areas.
        </p>
        <p style={styles.articleContent}>
          Choose your products wisely. To create a more natural lipid balance, you should avoid harsh irritants and pore-clogging oils. If you’re searching for an effective non-comedogenic moisturizer, try OneSkin’s OS-01 Topical Supplements, including OS-01 EYE, OS-01 FACE, and OS-01 BODY, which contain hydrating ingredients that won’t clog pores. Better yet, try out OneSkin’s gentle daily cleanser, PREP, designed to support skin’s natural lipid and microbiome balance.
        </p>

        <h2 style={styles.articleTitle}>What Are Dos and Don'ts for Combination Skin Types?</h2>
        <p style={styles.articleContent}>
          Caring for your unique skin will vary from person to person, but there are some dos and don’ts for managing combination skin types.
        </p>

        <h3 style={styles.articleSubTitle}>The Dos of Combo Skin</h3>
        <ul style={styles.dosList}>
          <li>Always check to see what type of facial cleanser you’re using — some ingredients like benzoyl peroxide and salicylic acid can make your dry patches even drier. The drier your skin, the more oil you risk producing in your T-zone. If this happens, try gently blotting it away with blotting papers.</li>
          <li>A gentle exfoliant can help to remove stubborn dead skin cells and flakiness, leaving a smooth surface and cleaner pores. Start slow and work up the frequency of exfoliation, as over-exfoliated skin can experience worsening dryness and oiliness due to disruption in the natural skin barrier.</li>
          <li>A facial mask may also help you target troublesome areas on your face — yet not every mask is conducive to combination skin types. You may need to apply an oil-absorbing mask to oily areas and a hydrating mask to dry areas.</li>
          <li>Finally, a lightweight moisturizer will help prevent oil buildup in the pores and lock in hydration for less flakiness and irritation. Using the right moisturizer will promote the restoration of the skin’s surface and help regeneration. Search for hydrating non-oil based ingredients, like allantoin, glycerin, and hyaluronic acid to hydrate skin without adding heavy oils.</li>
          <li>Look for moisturizers and makeup that also have broad-spectrum sunscreen to protect your skin from harmful ultraviolet rays. Sun exposure can exacerbate dry skin and damage its barrier, which can worsen unwanted skin conditions.</li>
        </ul>

        <h3 style={styles.articleSubTitle}>The Don’ts of Combo Skin Care</h3>
        <ul style={styles.dontsList}>
          <li>Staying on top of washing your face after waking up, before bed, exercising, and spending time in hot, humid environments is critical. However, scrubbing at the skin’s surface — even if you’re trying to wash away flakiness — can worsen matters if over-done. You may consider taking a gentler approach using your fingers' pads to make circular motions to remove dead skin cells and oil. Also, avoid sleeping in makeup to prevent further skin damage and clogged pores.</li>
          <li>It’s best to stay away from alcohol-based and oil-based cleaners, too. Oil-based cleansers will only increase the oil in your pores, while alcohol-based cleansers can cause irritation and increase your dry patches. Additionally, while blotting papers are helpful, avoid wiping them across your entire face — this will spread the oil.</li>
          <li>Of all the don’ts of combination skin care, few compare to avoiding face-touching. A 2015 study found that humans touch their faces an average of 23 times per hour. Touching your face transfers dirt and bacteria from your hands. Face-picking is just as bad and may result in scarring and permanent skin damage.</li>
          <li>Also, be sure to wash your hands with soap and water before applying anything to your face, including your gel cleanser and daily peptide moisturizer.</li>
        </ul>

        <h2 style={styles.articleTitle}>Managing Combination Skin With Ease</h2>
        <p style={styles.articleContent}>
          Managing combination skin may require a few extra steps, but skin care will become a habit like any routine. Your skin is unique to you and deserves TLC, regardless of its type.
        </p>
      </section>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#FFE6F0", // Pink theme color
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
    background: "linear-gradient(135deg, #F9B6D3, #FCE4EC)", 
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
    lineHeight: "1.5", // Added spacing for readability
  },
  ingredientList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "2rem",
    marginTop: "1rem", // Added spacing between the items
    textAlign: "justify", // Justifying content
  },
  dosList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "2rem",
    textAlign: "justify", // Justifying content
  },
  dontsList: {
    listStyleType: "none",
    padding: "0",
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "2rem",
    textAlign: "justify", // Justifying content
  },
};

export default CombinationSkinPage;
