import React from "react";
import logo from "../assets/prointern logo.jpg";     // adjust path
import stevan from "../assets/stevan.jpg"; // adjust path
import "./Navbar.css"; // your CSS code

const Navbar = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="ProIntern Logo" />
      </div>

      {/* Menu */}
      <nav>
        <ul>
          <li className="active">Home</li>
          <li>Internship ▾</li>
          <li>Courses ▾</li>
          <li>Competitive Exam ▾</li>
          <li>Placement Assistance ▾</li>
          <li>Certification ▾</li>
        </ul>
      </nav>

      {/* Right Section */}
      <div className="header-right">
        <span className="bell-icon">🔔</span>
        <span className="user">Steven</span>
        <img src={stevan} alt="Stevan" className="user-avatar" />
        <button className="logout-btn" aria-label="Logout">
          ⏻
        </button>
      </div>
    </header>
  );
};

export default Navbar;