import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { gapi } from "gapi-script";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import ProinternLogo from "../assets/prointern logo.jpg";
const clientId =
  "667601110937-lkjld131c8s2rg84s5ekf4i38mbtifjp.apps.googleusercontent.com";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Forgot password state
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email profile",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleGoogleLogin = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      const userData = {
        name: profile.getName(),
        email: profile.getEmail(),
        image: encodeURI(profile.getImageUrl()), // Ensure URL is properly escaped
      };

      // Save user to localStorage
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("profileName", userData.name);
      localStorage.setItem("googleUser", JSON.stringify(userData));

      // Redirect
      navigate("/home", { state: { email: userData.email } });
    });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please enter your name, email, and password", {
        position: "top-center",
      });
      return;
    }

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );
    if (!user) {
      toast.error("Invalid email or password", {
        position: "top-center",
      });
      return;
    }

    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("profileName", formData.name);

    // Validate role and redirect accordingly
    if (user.role === "Student") {
      toast.success("Login successful! Redirecting to home...", {
        position: "top-center",
      });
      setTimeout(
        () => navigate("/home", { state: { email: formData.email } }),
        2000
      );
    } else if (user.role === "Admin") {
      toast.success("Login successful! Redirecting to admin dashboard...", {
        position: "top-center",
      });
      setTimeout(
        () =>
          navigate("/admin-dashboard", { state: { email: formData.email } }),
        2000
      );
    } else {
      toast.error("User role not found", {
        position: "top-center",
      });
    }
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      toast.error("Please enter your email", {
        position: "top-center",
      });
      return;
    }
    setShowForgot(false);
    navigate("/verify", { state: { email: forgotEmail } });
  };

  return (
    <div className="signup-container">
      <ToastContainer /> {/* Add ToastContainer to render toast messages */}
      <div className="signup-card">
        <img
          src={ProinternLogo}
          alt="ProIntern Logo"
          className="signup-logo"
          style={{ marginBottom: "15px" }}
        />

        <h2>Welcome Back</h2>
        <p>Login to continue</p>

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
        {/* <button onClick={handleGoogleLogin} className="google-btn">
          <span className="google-icon">G</span> Sign-in with Google
        </button> */}

        <p className="login-text">
          Don’t have an account?{" "}
          <Link to="/" className="signup-link">
            Sign up now
          </Link>
        </p>
      </div>
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
