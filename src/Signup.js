import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa"; // email icon
import "./style.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("User Registered:", formData);

    // show success message, no navigation
    setSuccessMessage("Signup successful! You can now login.");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Logo */}
        <img src="/logo192.png" alt="ProIntern Logo" className="signup-logo" />

        <h2>Create an Account</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <div className="input-with-icon">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn">
            SIGN UP
          </button>
        </form>

        {/* Success message after signup */}
        {successMessage && <p className="success-msg">{successMessage}</p>}

        <p className="login-text">
          Have an account already?{" "}
          <Link to="/login" className="signup-link">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
