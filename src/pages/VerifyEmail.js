import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "prointy@gmail.com";

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60); // 1 minute countdown

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 4) {
      alert("Please enter the full 4-digit code");
      return;
    }
    alert("Code verified successfully ✅");

    // ✅ Navigate to Reset Password page instead of Dashboard
    navigate("/reset", { state: { email } });
  };

  const handleResend = () => {
    alert(`OTP resent to ${email}`);
    setTimer(60); // reset timer
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="verify-container">
      <div className="verify-card">
        {/* Back Arrow */}
        <button className="back-btn" onClick={handleBack}>←</button>

        <h2>Verify your email address</h2>
        <p>
          We    l address<br />
          <strong>({email})</strong>. Enter in the field below.
        </p>

        {/* OTP Inputs */}
        <form onSubmit={handleSubmit} className="otp-form">
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="otp-input"
              />
            ))}
          </div>
          <button type="submit" className="signup-btn">
            Verify & Continue
          </button>
        </form>

        {/* Resend & Timer */}
        <p className="resend-text">
          Didn’t get the code?{" "}
          <span className="resend-link" onClick={handleResend}>
            Resend
          </span>
        </p>
        <p className="timer">Expires in 00:{timer < 10 ? `0${timer}` : timer}</p>
      </div>
    </div>
  );
}

export default VerifyEmail;