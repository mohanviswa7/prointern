// src/pages/UnpaidCourses.jsx
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
    <div className="unpaid-container">
      {/* Main Content */}
      <div className="main-content">
        {/* Left Content */}
        <div className="left-content">
          {/* ✅ Frozen PAID / UNPAID Buttons */}
          <div className="info-container">
            <div className="button-column">
              <label
                className={`type-button ${
                  selectedType === "paid" ? "selected-type-button" : ""
                }`}
              >
                <input type="checkbox" checked={selectedType === "paid"} disabled readOnly />
                <span
                  className={`type-text ${
                    selectedType === "paid" ? "selected-text" : ""
                  }`}
                >
                  PAID
                </span>
              </label>

              <label
                className={`type-button ${
                  selectedType === "unpaid" ? "selected-type-button" : ""
                }`}
              >
                <input type="checkbox" checked={selectedType === "unpaid"} disabled readOnly />
                <span
                  className={`type-text ${
                    selectedType === "unpaid" ? "selected-text" : ""
                  }`}
                >
                  UNPAID
                </span>
              </label>
            </div>
          </div>

          {/* Loader / Proceed Section */}
          <div className="loader-container">
            <img src={downloadImg} alt="course" className="courses-image" />
            <p className="redirect-text">You will be Redirected</p>
            <button className="proceed-btn" onClick={handleProceed}>
              PROCEED
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="right-content">
          <img src={techCircleImg} alt="circle" className="circle-image" />
          <img src={personImg} alt="person" className="person-image" />
        </div>
      </div>
    </div>
  );
}
