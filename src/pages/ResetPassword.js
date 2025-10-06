import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "your email";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // popup control

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      alert("⚠️ Please fill in both fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    console.log(`Password reset for ${email}`);

    // ✅ Show success popup instead of alert
    setShowSuccess(true);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            position: "absolute",
            left: "20px",
            top: "20px"
          }}
        >
          ←
        </button>

        <h2>Reset Password</h2>
        <p style={{ marginBottom: "15px" }}>
          Resetting password for <strong>{email}</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="signup-btn">
            Submit
          </button>
        </form>
      </div>

      {/* ✅ Success Modal */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button
              className="close-btn"
              onClick={() => navigate("/login")}
            >
              ✖
            </button>
            <h3>Password Reset Successful 🎉</h3>
            <p>You can now login with your new password.</p>
            <button
              className="signup-btn"
              onClick={() => navigate("/login")}
            >
              Proceed to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
