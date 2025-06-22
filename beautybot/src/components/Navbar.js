import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ searchTerm, setSearchTerm, handleSearch, isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Fetch logged-in user's info
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:8000/api/user/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.error("User fetch failed:", err);
        setUser(null);
      });
  }, [isAuthenticated]); // will rerun when login status changes

  const navItems = [
    { label: "Questionnaire", path: "/questionnaire" },
    { label: "Recommendations", path: "/recommendations" },
    { label: "Skin Profile", path: "/skinprofile" },
    { label: "About Us", path: "/aboutus" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/logout");
  };

  console.log(user);

  const styles = {
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem 3rem",
      backgroundColor: "#FFD6E8",
      backdropFilter: "blur(12px)",
      borderBottom: "2px solid #E75EAA",
      boxShadow: "0 2px 8px rgba(231, 94, 170, 0.3)",
      gap: "1rem",
      flexWrap: "wrap",
    },
    logo: {
      fontSize: "1.8rem",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
    },
    navLinks: {
      display: "flex",
      gap: "1.8rem",
      fontSize: "1rem",
      fontWeight: "500",
    },
    navLink: {
      color: "#333",
      textDecoration: "none",
      transition: "color 0.3s",
      cursor: "pointer",
    },
    loginButton: {
      fontWeight: "600",
      background: "none",
      border: "none",
      color: "#E75EAA",
      cursor: "pointer",
      fontSize: "1rem",
      textDecoration: "underline",
      padding: 0,
    },
  };

  return (
    <>
      <header style={styles.header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={styles.logo}>
            <span style={{ color: "#E75EAA", fontWeight: "700" }}>Beauty</span>
            <span style={{ color: "#7B8AFE", fontWeight: "700" }}>Bot</span>
          </div>
        </Link>

        <nav style={styles.navLinks}>
          {isAuthenticated &&
            navItems.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                style={styles.navLink}
                onMouseEnter={(e) => (e.target.style.color = "#E75EAA")}
                onMouseLeave={(e) => (e.target.style.color = "#333")}
              >
                {label}
              </Link>
            ))}
        </nav>

        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontWeight: 600 }}>Hi, {user.username}</span>
            <button style={styles.loginButton} onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button
            style={styles.loginButton}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </header>

      <div style={{ height: "5.2rem" }} /> {/* Padding below fixed navbar */}
    </>
  );
}

export default Navbar;
