import React, { useState } from "react";
import "./internship.css";

export default function InternshipSelection() {
  const [selectedCourse, setSelectedCourse] = useState(
    localStorage.getItem("selectedCourse") || ""
  );
  const [assistType, setAssistType] = useState(
    localStorage.getItem("assistType") || ""
  );
  const [uploadedFile, setUploadedFile] = useState(null);

  const courses = [
    { id: "JAVA", name: "JAVA", desc: "Master Java to build web & apps" },
    { id: "PYTHON", name: "PYTHON", desc: "Master Python programming" },
    {
      id: "DATA_SCIENCE",
      name: "DATA SCIENCE",
      desc: "Explore data-driven insights",
    },
    { id: "MERNSTACK", name: "MERNSTACK", desc: "Learn the advanced stacks" },
    { id: "AI_ML", name: "AI / ML", desc: "Artificial Intelligence & ML" },
    {
      id: "DATA ANALYSIS",
      name: "DATA ANALYSIS",
      desc: "Detail structure about data analysis",
    },
    {
      id: "SOFTWARE TESTING",
      name: "SOFTWARE TESTING",
      desc: "advanced testing stacks",
    },
  ];

  const handleSubmit = () => {
    const submission = {
      selectedCourse,
      assistType,
      uploadedFile,
    };
    localStorage.setItem("internshipSubmission", JSON.stringify(submission));
    alert("Submission saved successfully!");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedFile(reader.result);
        localStorage.setItem("uploadedFile", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaidClick = () => {
    // Open Razorpay payment URL in a new window
    const paymentWindow = window.open("https://rzp.io/rzp/xx2PZNQK", "_blank");
    if (paymentWindow) {
      paymentWindow.focus();
    } else {
      alert(
        "Unable to open payment gateway. Please check your browser settings."
      );
    }
  };

  return (
    <div className="main-container">
      {/* Left Card */}
      <div className="card left-card">
        <h2 className="title">Choose Internship</h2>
        <p className="subtitle">
          Choose your internship course and get started with ProIntern!
        </p>

        <div className="course-list">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`course-item ${
                selectedCourse === course.id ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCourse(course.id);
                localStorage.setItem("selectedCourse", course.id);
              }}
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
              onClick={handlePaidClick}
            >
              PAID
            </button>
            {/* <button
              className={`btn ${assistType === "UNPAID" ? "active" : ""}`}
              onClick={() => {
                setAssistType("UNPAID");
                localStorage.setItem("assistType", "UNPAID");
              }}
            >
              UNPAID
            </button> */}
          </div>
        )}

        {/* Submit Button */}
        {/* <button
          className="submit-btn"
          disabled={!selectedCourse || !assistType}
          onClick={handleSubmit}
        >
          SUBMIT
        </button> */}
      </div>

      {/* Right Card */}
      <div className="card right-card">
        {selectedCourse ? (
          <>
            <h2 className="title">
              Internship in {courses.find((c) => c.id === selectedCourse)?.name}
            </h2>

            <h3 style={{ color: "#1a237e", marginTop: "20px" }}>
              Paid Courses
            </h3>
            <ul>
              <li>Exclusive Learning Material – Official curated videos</li>
              <li>No Ads, No Interruptions – Smooth playback</li>
              <li>Structured Learning Path – Sequential lessons</li>
            </ul>

            <h3 style={{ color: "#00695c", marginTop: "20px" }}>
              Unpaid Courses
            </h3>
            <ul>
              <li>Introductory Material – Basic lessons only</li>
              <li>Open Access – No registration needed</li>
              <li>No Certification – Self-paced learning only</li>
            </ul>
          </>
        ) : (
          <div
            style={{ textAlign: "center", marginTop: "50px", color: "#777" }}
          >
            <p>Please select an internship course from the left.</p>
          </div>
        )}
      </div>
    </div>
  );
}
