import React from "react";
import { useLocation } from "react-router-dom";
import "./PaidCourses.css";

// Import assets
import circleImg from "../assets/image.png";
import personImg from "../assets/person.png";
import liveVideo from "../assets/live.mp4";

export default function PaidCourses() {
  const location = useLocation();
  const { course: selectedCourse = "java", type: selectedType = "paid" } = location.state || {};

  const courses = {
    java: { title: "JAVA", desc: "Learn Java in a structured way" },
    python: { title: "PYTHON", desc: "Master Python programming" },
    datascience: { title: "DATA SCIENCE", desc: "Explore data-driven insights" },
    html: { title: "HTML", desc: "Learn the basics of web" },
    aiml: { title: "AI / ML", desc: "Artificial Intelligence & ML" },
  };

  return (
    <div className="paid-container">
      <div className="main-row">
        {/* Left section */}
        <div className="left-content">
          <div className="course-selection">
            {/* Row 1 */}
            <div className="course-row">
              {["java", "python"].map((id) => (
                <label
                  key={id}
                  className={`course-card ${selectedCourse === id ? "selected" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={selectedCourse === id}
                    disabled   // ✅ freeze
                    readOnly
                  />
                  <div className="course-text">
                    <h4 className={selectedCourse === id ? "selected-text" : ""}>
                      {courses[id].title}
                    </h4>
                    <p className={selectedCourse === id ? "selected-text" : ""}>
                      {courses[id].desc}
                    </p>
                  </div>
                </label>
              ))}

              <label
                className={`type-btn ${selectedType === "paid" ? "selected" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={selectedType === "paid"}
                  disabled   // ✅ freeze
                  readOnly
                />
                <span className={selectedType === "paid" ? "selected-text" : ""}>
                  PAID
                </span>
              </label>
            </div>

            {/* Row 2 */}
            <div className="course-row">
              {["datascience", "html"].map((id) => (
                <label
                  key={id}
                  className={`course-card ${selectedCourse === id ? "selected" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={selectedCourse === id}
                    disabled   // ✅ freeze
                    readOnly
                  />
                  <div className="course-text">
                    <h4 className={selectedCourse === id ? "selected-text" : ""}>
                      {courses[id].title}
                    </h4>
                    <p className={selectedCourse === id ? "selected-text" : ""}>
                      {courses[id].desc}
                    </p>
                  </div>
                </label>
              ))}

              <label
                className={`type-btn ${selectedType === "unpaid" ? "selected" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={selectedType === "unpaid"}
                  disabled   // ✅ freeze
                  readOnly
                />
                <span className={selectedType === "unpaid" ? "selected-text" : ""}>
                  UNPAID
                </span>
              </label>
            </div>

            {/* Row 3 */}
            <div className="course-row center">
              <label
                className={`course-card center-card ${selectedCourse === "aiml" ? "selected" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={selectedCourse === "aiml"}
                  disabled   // ✅ freeze
                  readOnly
                />
                <div className="course-text">
                  <h4 className={selectedCourse === "aiml" ? "selected-text" : ""}>
                    {courses.aiml.title}
                  </h4>
                  <p className={selectedCourse === "aiml" ? "selected-text" : ""}>
                    {courses.aiml.desc}
                  </p>
                </div>
              </label>

              <div className="empty-space"></div>
            </div>
          </div>

          {/* Video section */}
          <div className="video-section">
            <h3 className="welcome">WELCOME TO PRO INTERN LIVE SESSIONS :</h3>
            <video className="video" controls autoPlay>
              <source src={liveVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right section */}
        <div className="right-content">
          <img src={circleImg} alt="circle" className="circle-img" />
          <img src={personImg} alt="person" className="person-img" />
        </div>
      </div>
    </div>
  );
}
