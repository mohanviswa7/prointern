import React, { useState } from "react";
import "./internship.css";

export default function InternshipSelection() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [assistType, setAssistType] = useState("");

  const courses = [
    { id: "JAVA", name: "JAVA", desc: "Master Java to build web & apps" },
    { id: "PYTHON", name: "PYTHON", desc: "Master Python programming" },
    { id: "DATA_SCIENCE", name: "DATA SCIENCE", desc: "Explore data-driven insights" },
    { id: "HTML", name: "HTML", desc: "Learn the basics of web" },
    { id: "AI_ML", name: "AI / ML", desc: "Artificial Intelligence & ML" },
  ];

  return (
    <div className="main-container">
      {/* Left Card */}
      <div className="card left-card">
        <h2 className="title">Choose Internship</h2>
        <p className="subtitle">Choose your internship course and get started with ProIntern!</p>

        <div className="course-list">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`course-item ${selectedCourse === course.id ? "active" : ""}`}
              onClick={() => setSelectedCourse(course.id)}
            >
              <input
                type="checkbox"
                checked={selectedCourse === course.id}
                readOnly
              />
              <div>
                <h3>{course.name}</h3>
                <p>{course.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Paid / Unpaid Buttons */}
        {selectedCourse && (
          <div className="btn-group">
            <button
              className={`btn ${assistType === "PAID" ? "active" : ""}`}
              onClick={() => setAssistType("PAID")}
            >
              PAID
            </button>
            <button
              className={`btn ${assistType === "UNPAID" ? "active" : ""}`}
              onClick={() => setAssistType("UNPAID")}
            >
              UNPAID
            </button>
          </div>
        )}

        {/* Submit Button */}
        <button
          className="submit-btn"
          disabled={!selectedCourse || !assistType}
        >
          SUBMIT
        </button>
      </div>

      {/* Right Card */}
      <div className="card right-card">
        {selectedCourse ? (
          <>
            <h2 className="title">
              Internship in {courses.find((c) => c.id === selectedCourse)?.name}
            </h2>

            <h3 style={{ color: "#1a237e", marginTop: "20px" }}>Paid Courses</h3>
            <ul>
              <li>Exclusive Learning Material – Official curated videos</li>
              <li>No Ads, No Interruptions – Smooth playback</li>
              <li>Structured Learning Path – Sequential lessons</li>
            </ul>

            <h3 style={{ color: "#00695c", marginTop: "20px" }}>Unpaid Courses</h3>
            <ul>
              <li>Introductory Material – Basic lessons only</li>
              <li>Open Access – No registration needed</li>
              <li>No Certification – Self-paced learning only</li>
            </ul>
          </>
        ) : (
          <div style={{ textAlign: "center", marginTop: "50px", color: "#777" }}>
            <p>Please select an internship course from the left.</p>
          </div>
        )}
      </div>
    </div>
  );
}
