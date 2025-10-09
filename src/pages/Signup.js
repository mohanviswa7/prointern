import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify"; // import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import ProinternLogo from "../../src/assets/prointern logo.jpg";
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Admin",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password check
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
      return;
    }

    // Get users from localStorage (if none, create empty array)
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.find((user) => user.email === formData.email);
    if (userExists) {
      toast.error("Email already registered. Please log in.", {
        position: "top-center",
      });
      return;
    }

    // Save new user
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ Use your existing toast function (signInSuccessful style)
    toast.success("Sign Up Successful! You can now log in.", {
      position: "top-center",
    });

    // redirect after delay
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      <ToastContainer /> {/* Add ToastContainer to render toast messages */}
      <div
        className="signup-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          className="signup-card"
          style={{
            width: "350px",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <center>
            <img
              src={ProinternLogo}
              alt="ProIntern Logo"
              className="signup-logo"
              style={{ marginBottom: "15px" }}
            />
          </center>

          <h2
            style={{
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            Create an Account
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />

            <label>Email Address</label>
            <div className="input-with-icon" style={{ position: "relative" }}>
              <FaEnvelope
                className="input-icon"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "#aaa",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: "10px 10px 10px 35px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
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
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />

            <div>
              <label>Select Role:</label>
              <div
                style={{
                  display: "flex",
                  gap: "5px" /* Reduced gap for closer alignment */,
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  id="admin"
                  name="role"
                  value="Admin"
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  required
                />
                <label htmlFor="admin" style={{ margin: 0 }}>
                  Admin
                </label>

                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="Student"
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  required
                />
                <label htmlFor="student" style={{ margin: 0 }}>
                  Student
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="signup-btn"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#FFA500" /* Orange color */,
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              SIGN UP
            </button>
          </form>

          <p
            className="login-text"
            style={{
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Have an account already?{" "}
            <Link
              to="/login"
              className="signup-link"
              style={{
                color: "#007BFF",
                textDecoration: "none",
              }}
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
