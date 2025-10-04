import React, { useState } from "react";
import logo from "../assets/prointern logo.jpg";
import stevan from "../assets/stevan.jpg";
import "./Navbar.css";

const navOptions = [
  "Home",
  "Internship",
  "Courses",
  "Competitive Exam",
  "Placement Assistance",
  "Certification",
];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <header className="header navbar-attractive">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="ProIntern Logo" />
        </div>

        {/* Menu */}
        <nav>
          <ul>
            {navOptions.map((option) => (
              <li
                key={option}
                className={active === option ? "active" : ""}
                onClick={() => setActive(option)}
              >
                {option}
                {["Internship", "Courses", "Competitive Exam", "Placement Assistance", "Certification"].includes(option) && (
                  <span className="dropdown-arrow">▾</span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="header-right">
          <span className="bell-icon">🔔</span>
          <span className="user">{localStorage.getItem("profileName") || "User"}</span>
          <img src={stevan} alt="Stevan" className="user-avatar" />
          <button className="logout-btn" aria-label="Logout">
            ⏻
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;