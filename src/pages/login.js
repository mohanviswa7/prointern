import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // 🔹 State for Forgot Password modal
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter both email and password");
      return;
    }

    console.log("Logged in:", formData);

    // ✅ Save login state
    localStorage.setItem("isLoggedIn", true);

    // ✅ Navigate to /home
    navigate("/home", { state: { email: formData.email } });
  };

  const handleGoogleLogin = () => {
    alert("Google Sign-in clicked (Integrate OAuth here)");
  };

  // 🔹 Handle Forgot Password submit
  const handleForgotSubmit = (e) => {
    e.preventDefault();

    if (!forgotEmail) {
      alert("Please enter your email");
      return;
    }

    setShowForgot(false);

    // ✅ Navigate to Verify Email page instead of Reset
    navigate("/verify", { state: { email: forgotEmail } });

  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Logo */}
        <img src="/logo192.png" alt="ProIntern Logo" className="signup-logo" />

        <h2>Welcome Back</h2>
        <p>Login to continue</p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div style={{ textAlign: "right", marginTop: "5px" }}>
            {/* 🔹 open Forgot Password modal */}
            <span
              className="forgot-link"
              onClick={() => setShowForgot(true)}
              style={{ cursor: "pointer" }}
            >
              Forgot Password?
            </span>
          </div>

          <button type="submit" className="signup-btn">
            LOG IN
          </button>
        </form>

        {/* Google Sign-In Button */}
        <button onClick={handleGoogleLogin} className="google-btn">
          <span className="google-icon">G</span> Sign-in with Google
        </button>

        <p className="login-text">
          Don’t have an account?{" "}
          <Link to="/" className="signup-link">
            Sign up now
          </Link>
        </p>
      </div>

      {/* 🔹 Forgot Password Modal */}
      {showForgot && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-btn" onClick={() => setShowForgot(false)}>
              ✖
            </button>
            <h3>Forgot your Password?</h3>
            <p>
              Enter your email address and we will share a link to verify your
              identity.
            </p>
            <form onSubmit={handleForgotSubmit}>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
              />
              <button type="submit" className="signup-btn">
                ➤ Verify Email
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
