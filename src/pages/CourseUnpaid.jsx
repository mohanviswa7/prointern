import React from "react";
import { useLocation } from "react-router-dom";
import "./UnpaidCourses.css";
import downloadImg from "../assets/download.png";
import techCircleImg from "../assets/tech-circle.png";
import personImg from "../assets/person.png";

export default function UnpaidCourses() {
  const location = useLocation();
  const { course = "datascience", type = "unpaid" } = location.state || {};

  const selectedType = type; // frozen selection

  const handleProceed = () => {
    console.log("Selected type:", selectedType);
    // navigate somewhere if needed
  };

  return (
    <div
      className="unpaid-container"
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(120deg, #f8faff 60%, #e0f7fa 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
      }}
    >
      <div
        className="main-content"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: 1100,
          minHeight: "80vh",
          background: "#fff",
          borderRadius: 24,
          boxShadow: "0 4px 24px rgba(30,60,120,0.13)",
          overflow: "hidden",
        }}
      >
        {/* Left Content */}
        <div
          className="left-content"
          style={{
            flex: "1 1 350px",
            minWidth: 320,
            padding: "48px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#f8faff",
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              color: "#1a237e",
              marginBottom: 18,
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Welcome to <span style={{ color: "#49BBBD" }}>ProIntern</span> Unpaid Version
          </h2>
          <p
            style={{
              color: "#444",
              textAlign: "center",
              marginBottom: 24,
              fontSize: "1.08rem",
              maxWidth: 400,
            }}
          >
            You have selected the <b>{course.toUpperCase()}</b> course as <b>UNPAID</b>.<br />
            Please wait while we prepare your free resources and redirect you to the learning dashboard.
          </p>

          {/* Frozen PAID / UNPAID Buttons */}
          {/* <div className="info-container" style={{ marginBottom: 32 }}>
            <div className="button-column" style={{ display: "flex", gap: 18 }}>
              <label
                className={`type-button ${selectedType === "paid" ? "selected-type-button" : ""}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: selectedType === "paid" ? "2px solid #49BBBD" : "2px solid #eee",
                  background: selectedType === "paid" ? "#49BBBD" : "#fff",
                  color: selectedType === "paid" ? "#fff" : "#49BBBD",
                  fontWeight: 600,
                  fontSize: "1.08rem",
                  cursor: "not-allowed",
                  transition: "all 0.2s",
                }}
              >
                <input type="checkbox" checked={selectedType === "paid"} disabled readOnly />
                <span className={`type-text ${selectedType === "paid" ? "selected-text" : ""}`}>PAID</span>
              </label>
              <label
                className={`type-button ${selectedType === "unpaid" ? "selected-type-button" : ""}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: selectedType === "unpaid" ? "2px solid #49BBBD" : "2px solid #eee",
                  background: selectedType === "unpaid" ? "#49BBBD" : "#fff",
                  color: selectedType === "unpaid" ? "#fff" : "#49BBBD",
                  fontWeight: 600,
                  fontSize: "1.08rem",
                  cursor: "not-allowed",
                  transition: "all 0.2s",
                }}
              >
                <input type="checkbox" checked={selectedType === "unpaid"} disabled readOnly />
                <span className={`type-text ${selectedType === "unpaid" ? "selected-text" : ""}`}>UNPAID</span>
              </label>
            </div>
          </div> */}

          {/* Loader / Proceed Section */}
          <div className="loader-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src={downloadImg}
              alt="course"
              className="courses-image"
              style={{
                width: 90,
                height: 90,
                marginBottom: 18,
                animation: "spin 1.5s linear infinite",
              }}
            />
            <p className="redirect-text" style={{ color: "#49BBBD", fontWeight: 600, marginBottom: 18 }}>
              Loading your course...
            </p>
            <button
              className="proceed-btn"
              style={{
                background: "#49BBBD",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "10px 32px",
                fontWeight: 600,
                fontSize: "1.08rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(30,60,120,0.07)",
                marginTop: 8,
              }}
              onClick={handleProceed}
            >
              PROCEED
            </button>
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg);}
                  100% { transform: rotate(360deg);}
                }
              `}
            </style>
          </div>
        </div>

        {/* Right Content */}
        <div
          className="right-content"
          style={{
            flex: "1 1 350px",
            minWidth: 320,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            padding: "48px 32px",
          }}
        >
          <img
            src={techCircleImg}
            alt="circle"
            className="circle-image"
            style={{
              width: "60%",
              maxWidth: 220,
              position: "absolute",
              top: 32,
              right: 32,
              opacity: 0.10,
              zIndex: 0,
            }}
          />
          <img
            src={personImg}
            alt="person"
            className="person-image"
            style={{
              width: "60%",
              maxWidth: 180,
              borderRadius: "50%",
              marginBottom: 18,
              zIndex: 1,
              boxShadow: "0 2px 12px #49bbbd33",
            }}
          />
          <h2
            style={{
              fontWeight: 700,
              color: "#1a237e",
              marginBottom: 12,
              zIndex: 1,
              textAlign: "center",
            }}
          >
            Free Learning Resources
          </h2>
          <p
            style={{
              color: "#444",
              textAlign: "center",
              marginBottom: 24,
              zIndex: 1,
              fontSize: "1.08rem",
              maxWidth: 320,
              marginTop: 0,
            }}
          >
            Access notes, assignments, and recorded sessions for your selected course. Upgrade to paid for live classes and more!
          </p>
        </div>
      </div>
    </div>
  );
}