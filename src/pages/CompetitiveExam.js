import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import buisnessImg from "../pages/assets/BuisnessMan.png";

const exams = [
  {
    key: "gate",
    label: "GATE",
    icon: "🎓",
    desc: "Graduate Aptitude Test in Engineering for M.Tech admissions and PSU jobs.",
  },
  {
    key: "upsc",
    label: "UPSC",
    icon: "🏛️",
    desc: "Civil Services Examination for IAS, IPS, IFS and other top government posts.",
  },
  {
    key: "banking",
    label: "Banking",
    icon: "💼",
    desc: "IBPS, SBI PO/Clerk, and other exams for careers in the banking sector.",
  },
  {
    key: "neet",
    label: "NEET",
    icon: "🧑‍⚕️",
    desc: "Medical entrance exam for MBBS, BDS, and other health science courses.",
  },
  {
    key: "ssc",
    label: "SSC",
    icon: "🧑‍💻",
    desc: "Staff Selection Commission exams for various government jobs.",
  },
];

export default function CompetitiveExam() {
  const [selectedExam, setSelectedExam] = useState(null);
  const [examType, setExamType] = useState({});
  const navigate = useNavigate();

  const handleExamClick = (key) => {
    setSelectedExam(key);
  };

  const handleTypeSelect = (key, type) => {
    setExamType((prev) => ({
      ...prev,
      [key]: type,
    }));
  };

  const handleMockTest = () => {
    if (!selectedExam) {
      alert("Please select an exam to start the mock test!");
      return;
    }
    navigate(`/mocktest/${selectedExam}`);
  };

  const handlePractice = () => {
    if (!selectedExam) {
      alert("Please select an exam to explore practice resources!");
      return;
    }
    navigate(`/practice/${selectedExam}`);
  };

  return (
    <div className="competitive-exam-page">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ background: "#f8faff", padding: "48px 0" }}
      >
        <div
          className="hero-left"
          style={{
            width: "100vw",
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
            <span className="highlight text">Crack</span>
            <br />
            <span className="section-subtitle">
              Competitive Exams with Confidence
            </span>
          </h1>
          <p
            style={{
              color: "#3cb371",
              textAlign: "center",
              maxWidth: 600,
              marginTop: 18,
              fontSize: "1.08rem",
              fontWeight: 500,
            }}
          >
            Prepare for top competitive exams with expert guidance, mock tests,
            and personalized study plans.
          </p>

          {/* Buttons */}
          <div
            className="hero-buttons"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginTop: "18px",
            }}
          >
            <button className="btn-primary" onClick={handleMockTest}>
              Start Free Mock Test
            </button>
            <button className="btn-secondary" onClick={handlePractice}>
              Explore Exam Resources
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={buisnessImg}
            alt="Competitive Exam"
            style={{
              maxWidth: 340,
              borderRadius: 18,
              height: 320,
              objectFit: "cover",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            }}
          />
        </div>
      </section>

      {/* Exam Categories */}
      <section className="services-section">
        <h3 className="section-subtitle">Popular Competitive Exams</h3>
        <div
          className="services-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            justifyContent: "center",
          }}
        >
          {exams.map((exam) => (
            <div
              key={exam.key}
              className="service-card"
              style={{
                background: selectedExam === exam.key ? "#e0f7fa" : "#fff",
                border:
                  selectedExam === exam.key
                    ? "2px solid #49BBBD"
                    : "2px solid #eee",
                borderRadius: "18px",
                width: 220,
                minHeight: 210,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                boxShadow: "0 4px 24px rgba(30,60,120,0.13)",
                fontSize: "2.5rem",
                cursor: "pointer",
                transition: "all 0.2s",
                position: "relative",
                padding: 16,
              }}
              onClick={() => handleExamClick(exam.key)}
            >
              <div className="icon-circle" style={{ fontSize: "2.5rem" }}>
                {exam.icon}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  marginTop: 8,
                }}
              >
                {exam.label}
              </div>
              <div
                style={{
                  fontSize: "0.98rem",
                  color: "#444",
                  marginTop: 6,
                  textAlign: "center",
                }}
              >
                {exam.desc}
              </div>

              {selectedExam === exam.key && (
                <div
                  style={{
                    marginTop: 18,
                    width: "100%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    gap: 18,
                  }}
                >
                  <button
                    style={{
                      background:
                        examType[exam.key] === "paid" ? "#49BBBD" : "#fff",
                      color:
                        examType[exam.key] === "paid" ? "#fff" : "#49BBBD",
                      border: "2px solid #49BBBD",
                      borderRadius: 8,
                      padding: "8px 24px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: "1.08rem",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTypeSelect(exam.key, "paid");
                    }}
                  >
                    PAID
                  </button>

                  <button
                    style={{
                      background:
                        examType[exam.key] === "unpaid" ? "#49BBBD" : "#fff",
                      color:
                        examType[exam.key] === "unpaid" ? "#fff" : "#49BBBD",
                      border: "2px solid #49BBBD",
                      borderRadius: 8,
                      padding: "8px 24px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: "1.08rem",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTypeSelect(exam.key, "unpaid");
                    }}
                  >
                    UNPAID
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
