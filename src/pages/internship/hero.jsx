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
      id: "DATA Science",
      name: "DATA Science",
      desc: "Detail structure about data science",
    },
    {
      id: "SOFTWARE TESTING",
      name: "SOFTWARE TESTING",
      desc: "advanced testing stacks",
    },
    {
      id: "POWER BI",
      name: "POWER BI",
      desc: "Integrating Concepts",
    },
    {
      id: "Cloud developing",
      name: "Cloud Developing",
      desc: "Emphathetic Cloud Parts",
    },
    {
      id: "AWS",
      name: "AWS",
      desc: "Asthetic domain and server services",
    },
    {
      id: "Linux",
      name: "Linux",
      desc: "OS for Different Systems",
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
    <div className="main-container" style={{ display: "flex", gap: "20px" }}>
      {/* Left Card */}
      <div
        className="card left-card"
        style={{
          flex: "1",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2 className="title">Choose Internship</h2>
        <p className="subtitle">
          Choose your internship course and get started with ProIntern!
        </p>

        <div
          className="course-list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className={`course-item ${
                selectedCourse === course.id ? "active" : ""
              }`}
              style={{
                boxSizing: "border-box",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              }}
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
          <div className="btn-group" style={{ marginTop: "20px" }}>
            <button
              className={`btn ${assistType === "PAID" ? "active" : ""}`}
              onClick={handlePaidClick}
            >
              PAID
            </button>
          </div>
        )}
      </div>

      {/* Right Card */}
      <div
        className="card right-card"
        style={{
          flex: "1",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        {selectedCourse ? (
          <>
            <h2 className="title">
              Internship in {courses.find((c) => c.id === selectedCourse)?.name}
            </h2>

            <p
              style={{
                textAlign: "center",
                color: "#ff6600",
                fontWeight: "bold",
                animation: "blink 1s infinite",
              }}
            >
              For IT Internship: ₹15,000
            </p>
            <style>
              {`
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
              `}
            </style>

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
