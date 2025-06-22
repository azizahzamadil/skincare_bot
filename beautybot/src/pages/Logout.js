import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token"); // Clear auth token
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>You’ve been successfully logged out!</h2>
        <p style={styles.message}>We hope to see you again soon 🌸</p>
        <button style={styles.loginButton} onClick={() => navigate("/login")}>
          Login Again
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#FFF0F5",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  card: {
    background: "linear-gradient(135deg, #FFD1E3 0%, #FCE5F3 100%)",
    borderRadius: 24,
    padding: "2rem",
    boxShadow: "0 10px 25px rgba(255, 168, 212, 0.6)",
    textAlign: "center",
    maxWidth: 420,
    width: "100%",
    color: "#7B2F74",
  },
  title: {
    fontSize: "1.6rem",
    fontWeight: "700",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1rem",
    marginBottom: "1.8rem",
  },
  loginButton: {
    backgroundColor: "#E75EAA",
    color: "white",
    border: "none",
    borderRadius: 24,
    padding: "12px 24px",
    fontWeight: "700",
    fontSize: 16,
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(231, 94, 170, 0.7)",
  },
};

export default Logout;
