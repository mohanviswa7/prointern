import React, { useState } from "react";
import ProinternLogo from "../../src/assets/prointern logo.jpg";
import stevan from "../../src/assets/stevan.jpg";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Added for navigation

const navOptions = [
  "Home",
  "Internship",
  "Courses",
  "Competitive Exam",
  "Placement Assistance",
  "Certification",
];

const navOptionsAdmin = [
  "InternshipAdmin",
  "CoursesAdmin",
  "Competitive Exam Admin",
  "Placement Assistance Admin",
  "Certification",
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation
  const [active, setActive] = useState("Home");

  // Determine which nav options to use based on the current path
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");
  const currentNavOptions = isAdminDashboard ? navOptionsAdmin : navOptions;

  const handleNavigation = (option) => {
    setActive(option);

    // Define routes for admin options
    if (isAdminDashboard) {
      switch (option) {
        case "Competitive Exam Admin":
          navigate("/competetiveadmin");
          break;
        case "Placement Assistance Admin":
          navigate("/placementadmin");
          break;
        case "Certification":
          navigate("/certification");
          break;
        default:
          break;
      }
    }
  };

  return (
   <header className="header navbar-attractive">
  <div className="navbar-inner">
    {/* Logo */}
    <div className="logo">
     <img src={ProinternLogo} alt="ProIntern Logo" className="signup-logo" />
    </div>

    {/* Menu */}
    <nav>
      <ul>
        {currentNavOptions.map((option) => (
          <li
            key={option}
            className={active === option ? "active" : ""}
            onClick={() => handleNavigation(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </nav>

    {/* User Profile */}
    <div className="user-profile">
     <img src={stevan} alt="User Profile" className="user-avatar" />
    </div>
  </div>
</header>
  );
};

export default Navbar;
