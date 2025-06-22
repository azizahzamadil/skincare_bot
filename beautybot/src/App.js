import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Page components
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import QuestionPage from './pages/QuestionPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Recommendations from './pages/Recommendations';
import SkinProfile from './pages/SkinProfile';
import OilySkinPage from './pages/oily-skin';
import DrySkinPage from './pages/dry-skin';
import CombinationSkinPage from './pages/combination-skin';
import SensitiveSkinPage from './pages/sensitive-skin';
import NormalSkinPage from './pages/normal-skin';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching:", searchTerm);
  };

  useEffect(() => {
    // Update authentication status when the token in localStorage changes
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, []);

  return (
    <Router>
      {/* Global Navbar - visible on all pages */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        isAuthenticated={isAuthenticated}
      />

      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/login"
          element={
            <Login
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/logout"
          element={
            <Logout
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/aboutus"
          element={<AboutUs />}
        />
        <Route
          path="/oily-skin"
          element={<OilySkinPage />}
        />
        <Route
          path="/normal-skin"
          element={<NormalSkinPage />}
        />
        <Route
          path="/dry-skin"
          element={<DrySkinPage />}
        />
        <Route
          path="/combination-skin"
          element={<CombinationSkinPage />}
        />
        <Route
          path="/sensitive-skin"
          element={<SensitiveSkinPage />}
        />

        {/* Protected Routes */}
        <Route
          path="/questionnaire"
          element={
            isAuthenticated ? (
              <QuestionPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/recommendations"
          element={
            isAuthenticated ? (
              <Recommendations />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/skinprofile"
          element={
            isAuthenticated ? (
              <SkinProfile />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
