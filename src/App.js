import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

import {
  ToastMessageContainer,
  AppToasts,
} from "./components/ToastMessage"; // ✅ centralized toasts

import Home from "./pages/home";
import Internship from "./pages/internship/internship.jsx";
import Courses from "./pages/Courses.jsx";
import PaidCourses from "./pages/CoursePaid.jsx";
import UnpaidCourses from "./pages/CourseUnpaid.jsx";
import CompetitiveExam from "./pages/CompetitiveExam";
import PlacementAssistance from "./pages/PlacementAssistance";
import Certification from "./pages/Certification";
import Login from "./pages/login";
import Signup from "./pages/Signup.js"; 
import VerifyEmail from "./pages/VerifyEmail.js";
import ResetPassword from "./pages/ResetPassword.js";


import ProtectedRoute from "./components/ProtectedRoute"; // ✅ we’ll create this

// ✅ Navbar styles
const navStyle = {
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 40px",
  height: "60px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  fontSize: "14px",
};

const navLinksContainer = {
  display: "flex",
  gap: "30px",
  alignItems: "center",
  flexGrow: 1,
  marginLeft: "40px",
};

const navLinkStyle = {
  color: "#d81e5b",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "14px",
};

const logoStyle = {
  width: 175,
  height: 52,
  objectFit: "contain",
};

// ✅ Navbar Component
function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // clear login state
    AppToasts.logoutSuccess(); // ✅ centralized toast
    navigate("/login");
  };

  return (
    <nav style={navStyle}>
      <img src="/images/logo.png" alt="Prointern Logo" style={logoStyle} />

      <div style={navLinksContainer}>
        <Link to="/home" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/internship" style={navLinkStyle}>
          Internship
        </Link>
        <Link to="/courses" style={navLinkStyle}>
          Courses
        </Link>
        <Link to="/competitive-exam" style={navLinkStyle}>
          Competitive Exam
        </Link>
        <Link to="/placement-assistance" style={navLinkStyle}>
          Placement Assistance
        </Link>
        <Link to="/certification" style={navLinkStyle}>
          Certification
        </Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span style={{ fontSize: "20px", cursor: "pointer" }}>🔔</span>
        <span style={{ fontSize: "14px", fontWeight: "500", color: "#333" }}>
          Profile name
        </span>
        <img
          src="images/dp.png"
          alt="Profile"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
        <span onClick={handleLogout} style={{ fontSize: "24px", cursor: "pointer" }}>
          ⏻
        </span>
      </div>
    </nav>
  );
}

// ✅ App Component
function App() {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar only if NOT on login or signup page */}
      {location.pathname !== "/login" && location.pathname !== "/signup" && <Navbar />}

      <Routes>
        {/* Redirect `/` → `/signup` */}
        <Route index element={<Navigate to="/signup" />} />

        {/* Auth Pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/internship"
          element={
            <ProtectedRoute>
              <Internship />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/paid-courses"
          element={
            <ProtectedRoute>
              <PaidCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unpaid-courses"
          element={
            <ProtectedRoute>
              <UnpaidCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/competitive-exam"
          element={
            <ProtectedRoute>
              <CompetitiveExam />
            </ProtectedRoute>
          }
        />
        <Route
          path="/placement-assistance"
          element={
            <ProtectedRoute>
              <PlacementAssistance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/certification"
          element={
            <ProtectedRoute>
              <Certification />
            </ProtectedRoute>
          }
        />

        <Route path="/verify" element={<VerifyEmail />} />

        <Route path="/reset" element={<ResetPassword />} />

      </Routes>

      {/* ✅ Centralized Toast Container */}
      <ToastMessageContainer />
    </>
  );
}

// ✅ Wrap App with Router
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
