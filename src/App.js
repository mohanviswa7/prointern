import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
  Link,
} from "react-router-dom";

import { ToastMessageContainer, AppToasts } from "./components/ToastMessage";

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

import ProtectedRoute from "./components/ProtectedRoute";
import TaskScreen from "./pages/Taskscreen.jsx";
import Hero from "./pages/internship/hero.jsx";
import CareersPage from "./pages/Careers.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import TermsAndConditions from "./pages/Termsandconditions.js";
import MockTestPage from "./pages/MockTestPage";
import PracticePage from "./pages/PracticePage";
import PlacementAdmin from "./pages/admin/PlacementAdmin.jsx";
import CoursesAdmin from "./pages/admin/CoursesAdmin.jsx";
import InternshipAdmin from "./pages/admin/InternshipAdmin.jsx";
import CompetetiveAdmin from "./pages/admin/CompetetiveAdmin.jsx";
import RecruiterForm from "./pages/RecruiterForm.jsx";

// --- Attractive Full-Width Navbar CSS ---
const navbarCss = `
.attractive-navbar {
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  border-radius: 0;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  background: #fff;
  position: relative;
  z-index: 10;
  padding: 0;
  left: 50%;
  transform: translateX(-50%);
}
.attractive-navbar-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  min-height: 70px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}
.attractive-navbar-logo {
  flex: 0 0 160px;
  display: flex;
  justify-content: flex-start;
}
.attractive-navbar-logo img {
  width: 140px;
  height: auto;
  object-fit: contain;
}
.attractive-navbar-nav {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  position: relative;
}
.attractive-navbar-nav ul {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.attractive-navbar-nav ul li {
  position: relative;
  font-size: 1.08rem;
  font-weight: 500;
  color: #1a237e;
  cursor: pointer;
  padding: 8px 18px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
}
.attractive-navbar-nav ul li .dropdown-arrow {
  margin-left: 6px;
  font-size: 0.9em;
  color: #d81e5b;
}
.attractive-navbar-nav ul li.active,
.attractive-navbar-nav ul li:hover {
  background: linear-gradient(90deg, #49BBBD 0%, #d81e5b 100%);
  color: #fff;
  box-shadow: 0 2px 8px rgba(216,30,91,0.08);
}
.attractive-navbar-right {
  flex: 0 0 220px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-end;
  margin-left: 0;
}
.attractive-navbar-bell {
  font-size: 1.3rem;
  cursor: pointer;
}
.attractive-navbar-user {
  font-size: 1rem;
  font-weight: 600;
  color: #1a237e;
}
.attractive-navbar-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e0e7ff;
}
.attractive-navbar-logout {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #d81e5b;
  cursor: pointer;
  transition: color 0.2s;
  margin-left: 4px;
}
.attractive-navbar-logout:hover {
  color: #49BBBD;
}
/* Dropdown card */
.dropdown-card {
  position: absolute;
  top: 50px;
  left: 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  padding: 10px 0;
  min-width: 150px;
  display: none;
  flex-direction: column;
  z-index: 20;
}
.dropdown-card.show {
  display: flex;
}
.dropdown-card button {
  background: none;
  border: none;
  padding: 8px 16px;
  text-align: left;
  cursor: pointer;
  font-weight: 500;
  color: #1a237e;
}
.dropdown-card button:hover {
  background: #f0f0f0;
  color: #d81e5b;
}
@media (max-width: 1200px) {
  .attractive-navbar-inner {
    padding: 0 10px;
    max-width: 100vw;
  }
  .attractive-navbar-nav ul {
    gap: 16px;
  }
}
@media (max-width: 900px) {
  .attractive-navbar-inner {
    padding: 0 4px;
  }
  .attractive-navbar-nav ul {
    gap: 10px;
  }
}
@media (max-width: 700px) {
  .attractive-navbar-inner {
    flex-direction: column;
    align-items: stretch;
    min-height: 0;
    padding: 0 2px;
  }
  .attractive-navbar-nav ul {
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .attractive-navbar-right {
    margin-left: 0;
    justify-content: center;
    gap: 10px;
    margin-top: 6px;
  }
  .attractive-navbar-logo {
    justify-content: center;
    margin-bottom: 6px;
  }
}
`;

// --- Navbar Component ---
function Navbar({ onSelectInternship }) {
  const navigate = useNavigate();
  const location = useLocation(); // Access the current location
  const [active, setActive] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const navOptions = [
    { label: "Home", path: "/home" },
    { label: "Internship", path: "/internship" },
    { label: "Courses", path: "/courses" },
    { label: "Competitive Exam", path: "/competitive-exam" },
    { label: "Placement Assistance", path: "/placement-assistance" },
  ];

  const navOptionsAdmin = [
    { label: "InternshipAdmin", path: "/internshipadmin" },
    { label: "Courses Admin", path: "/coursesadmin" },
    { label: "Competitive Exam Admin", path: "/competetiveadmin" },
    { label: "Placement Assistance Admin", path: "/placementadmin" },
    { label: "Certification", path: "/certification" },
  ];

  // Determine which nav options to use based on the current path
  const isAdminDashboard = [
    "/admin-dashboard",
    "/internshipadmin",
    "/coursesadmin",
    "/placementadmin",
    "/competetiveadmin",
    "/certification",
  ].some((path) => location.pathname.startsWith(path));
  const currentNavOptions = isAdminDashboard ? navOptionsAdmin : navOptions;
  console.log("Mohan", isAdminDashboard);

  // Ensure Navbar does not switch to default options when on admin routes

  let profileName = localStorage.getItem("profileName") || "User";
  try {
    const authUser = JSON.parse(localStorage.getItem("auth_user"));
    if (authUser && authUser.email) profileName = authUser.email;
  } catch {}

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("profileName");
    localStorage.removeItem("auth_user");
    AppToasts.logoutSuccess();
    navigate("/login");
  };

  // Hover logic for 10 seconds
  const handleInternshipHover = (type) => {
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      if (onSelectInternship) onSelectInternship(type);
      navigate("/internship");
      setActive("Internship");
      setShowDropdown(false);
    }, 10000); // 10 seconds
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    setShowDropdown(false);
  };

  const handleInternshipClick = (type) => {
    clearTimeout(hoverTimeoutRef.current);
    if (onSelectInternship) onSelectInternship(type);
    navigate("/internship");
    setActive("Internship");
    setShowDropdown(false);
  };

  return (
    <>
      <style>{navbarCss}</style>
      <header className="header attractive-navbar">
        <div className="attractive-navbar-inner">
          <div className="attractive-navbar-logo">
            <img src="/images/logo.png" alt="ProIntern Logo" />
          </div>

          <nav className="attractive-navbar-nav">
            <ul>
              {currentNavOptions.map((option) => (
                <li
                  key={option.label}
                  className={active === option.label ? "active" : ""}
                  onMouseEnter={() => {
                    if (option.label === "Internship") setShowDropdown(true);
                  }}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    if (option.label !== "Internship") {
                      setActive(option.label);
                      navigate(option.path);
                    }
                  }}
                >
                  {option.label}
                  {option.label === "Internship" && (
                    <span className="dropdown-arrow">▾</span>
                  )}

                  {option.label === "Internship" && (
                    <div
                      className={`dropdown-card ${showDropdown ? "show" : ""}`}
                    >
                      <button
                        onMouseEnter={() => handleInternshipHover("IT")}
                        onClick={() => handleInternshipClick("IT")}
                      >
                        IT
                      </button>
                      <button
                        onMouseEnter={() => handleInternshipHover("NonIT")}
                        onClick={() => handleInternshipClick("NonIT")}
                      >
                        Non-IT
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="attractive-navbar-right">
            <span className="attractive-navbar-bell">🔔</span>
            <span className="attractive-navbar-user">{profileName}</span>
            <img
              src="/images/dp.png"
              alt="Profile"
              className="attractive-navbar-avatar"
            />
            <button className="attractive-navbar-logout" onClick={handleLogout}>
              ⏻
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

// --- Admin Dashboard Welcome Component ---
function AdminDashboardWelcome() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "2rem",
          color: "orange",
          animation: "blinker 1.5s linear infinite",
        }}
      >
        Welcome to Admin Dashboard
      </h1>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "white",
          animation: "blinker 1.5s linear infinite",
        }}
      >
        Please Select Any Admin Dashboard in Top
      </p>
      <style>
        {`
          @keyframes blinker {
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}

// --- App Component ---
function App() {
  const location = useLocation();
  const [internshipScreen, setInternshipScreen] = useState(null);

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar onSelectInternship={(option) => setInternshipScreen(option)} />
      )}

      <Routes>
        <Route index element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/careers"
          element={
            <ProtectedRoute>
              <CareersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/privacy"
          element={
            <ProtectedRoute>
              <PrivacyPolicy />
            </ProtectedRoute>
          }
        />
        <Route
          path="/terms"
          element={
            <ProtectedRoute>
              <TermsAndConditions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/internship"
          element={
            <ProtectedRoute>
              {internshipScreen === "IT" && <Hero />}
              {internshipScreen === "NonIT" && <TaskScreen />}
              {!internshipScreen && <Internship />}
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
        <Route path="/mocktest/:examId" element={<MockTestPage />} />
        <Route path="/practice/:examId" element={<PracticePage />} />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboardWelcome />
            </ProtectedRoute>
          }
        />
        <Route path="/internshipadmin" element={<InternshipAdmin />} />
        <Route path="/coursesadmin" element={<CoursesAdmin />} />
        <Route path="/placementadmin" element={<PlacementAdmin />} />
        <Route path="/competetiveadmin" element={<CompetetiveAdmin />} />
        <Route path="/recruiter-form" element={<RecruiterForm />} />
      </Routes>
      <ToastMessageContainer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
