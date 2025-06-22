// src/pages/AboutUs.js
import React from 'react';

function AboutUs() {
  const styles = {
    pageContainer: {
      fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#FFE6F0",
      minHeight: "100vh",
      color: "#4B2E39",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "4rem",
      paddingBottom: "3rem",
    },
    contentBox: {
      backgroundColor: "#FFD6E8",
      borderRadius: "20px",
      padding: "3rem 2rem",
      maxWidth: "800px",
      width: "100%",
      textAlign: "center",
      boxShadow: "0 8px 25px rgba(231, 94, 170, 0.2)",
    },
    title: {
      color: "#D63384",
      fontWeight: 700,
      fontSize: "2.8rem",
      marginBottom: "1.5rem",
      marginTop: 0,
    },
    paragraph: {
      fontSize: "1.15rem",
      lineHeight: "1.8",
      marginBottom: "1.5rem",
      color: "#5A2A47",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentBox}>
        <h2 style={styles.title}>About BeautyBot</h2>
        <p style={styles.paragraph}>
          BeautyBot is your personal AI-powered skincare assistant dedicated to helping you find the perfect skincare products tailored to your unique skin needs.
        </p>
        <p style={styles.paragraph}>
          Our mission is to simplify skincare by providing science-backed, customized advice that evolves with your skin’s changing needs.
        </p>
        <p style={styles.paragraph}>
          Join thousands of users who trust BeautyBot for smarter skincare decisions every day!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
