import React, { useState } from "react";
import placementImg from "../pages/assets/100-placement-assistance-small.png";
import iqImg from "../pages/assets/public/IQ Test (3).jpeg";

const companies = [
  { name: "TCS", logo: "/images/tcs.png", hr: "9876543210" },
  { name: "Tech Mahindra", logo: "/images/techmahindra.png", hr: "9876501234" },
  { name: "HCLTech", logo: "/images/hcl.png", hr: "9001122334" },
  { name: "Infosys", logo: "/images/infosys.png", hr: "9123456780" },
];

const prointernHR = "9000000000";

export default function PlacementAssistance() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [type, setType] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questions, setQuestions] = useState(generateQuestions());

  // Generate random IQ-style questions
  function generateQuestions() {
    const baseQuestions = [
      {
        question: "If CAT is coded as DBU, then DOG is coded as?",
        options: ["FQI", "EPI", "DPH", "FQH"],
        answer: "FQH",
      },
      {
        question: "What comes next in the series: 2, 4, 8, 16, ?",
        options: ["18", "24", "30", "32"],
        answer: "32",
      },
      {
        question: "Find the odd one: Apple, Banana, Carrot, Mango",
        options: ["Apple", "Banana", "Carrot", "Mango"],
        answer: "Carrot",
      },
      {
        question: "Which number is missing: 3, 6, 12, 24, ?",
        options: ["36", "48", "46", "60"],
        answer: "48",
      },
      {
        question: "Which is heavier: 1 kg cotton or 1 kg iron?",
        options: ["Cotton", "Iron", "Both Equal", "None"],
        answer: "Both Equal",
      },
      {
        question: "If 5x = 20, what is x?",
        options: ["2", "3", "4", "5"],
        answer: "4",
      },
      {
        question: "Choose the word that doesn’t belong: Red, Blue, Yellow, Apple",
        options: ["Red", "Blue", "Yellow", "Apple"],
        answer: "Apple",
      },
      {
        question: "Which number is smallest: 2/3, 3/4, 5/6, 1/2?",
        options: ["2/3", "3/4", "5/6", "1/2"],
        answer: "1/2",
      },
      {
        question: "What comes next in sequence: A, C, F, J, ?",
        options: ["K", "O", "N", "P"],
        answer: "O",
      },
      {
        question: "If today is Monday, what day will it be after 9 days?",
        options: ["Wednesday", "Thursday", "Friday", "Tuesday"],
        answer: "Wednesday",
      },
    ];
    return baseQuestions.sort(() => Math.random() - 0.5);
  }

  const handleCompanyClick = (name) => {
    setSelectedCompany(name === selectedCompany ? null : name);
    setType((prev) => ({ ...prev, [name]: null }));
  };

  const handleType = (name, t) => {
    setType((prev) => ({ ...prev, [name]: t }));
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const correct = questions[currentQuestion].answer === option;
    if (correct) setScore((prev) => prev + 1);
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setQuizCompleted(true);
        setQuizStarted(false);
      }
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8faff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      {/* QUIZ OVERLAY */}
      {quizStarted && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "40px 50px",
              width: 500,
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#1a237e", marginBottom: 20 }}>
              IQ Test ({currentQuestion + 1}/10)
            </h2>
            <p style={{ fontWeight: 600, color: "#333", marginBottom: 20 }}>
              {questions[currentQuestion].question}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {questions[currentQuestion].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  style={{
                    background:
                      selectedOption === opt
                        ? opt === questions[currentQuestion].answer
                          ? "#49BBBD"
                          : "#ff6b6b"
                        : "#fff",
                    color:
                      selectedOption === opt
                        ? "#fff"
                        : "#1a237e",
                    border: "2px solid #49BBBD",
                    borderRadius: 8,
                    padding: "10px",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                  disabled={!!selectedOption}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MAIN UI */}
      <div
        style={{
          display: "flex",
          gap: 40,
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1100,
        }}
      >
        {/* Company Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 4px 24px rgba(30,60,120,0.13)",
            padding: 32,
            minWidth: 320,
            maxWidth: 420,
            flex: "1 1 340px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={placementImg}
            alt="100% Placement Assistance"
            style={{ width: 120, marginBottom: 18 }}
          />
          <h2 style={{ fontWeight: 700, color: "#1a237e", marginBottom: 18 }}>
            Top Companies
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              justifyContent: "center",
            }}
          >
            {companies.map((company) => (
              <div
                key={company.name}
                style={{
                  background: "#f8faff",
                  borderRadius: 12,
                  padding: "12px 18px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  minWidth: 110,
                  boxShadow: "0 2px 8px rgba(30,60,120,0.07)",
                  cursor: "pointer",
                  border:
                    selectedCompany === company.name
                      ? "2px solid #49BBBD"
                      : "2px solid transparent",
                  position: "relative",
                }}
                onClick={() => handleCompanyClick(company.name)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img
                    src={company.logo}
                    alt={company.name}
                    style={{ width: 36, height: 36, objectFit: "contain" }}
                  />
                  <span style={{ fontWeight: 600, color: "#222" }}>
                    {company.name}
                  </span>
                </div>
                {selectedCompany === company.name && (
                  <div style={{ marginTop: 10, width: "100%", textAlign: "center" }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleType(company.name, "paid");
                      }}
                      style={buttonStyle(type[company.name] === "paid")}
                    >
                      PAID
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleType(company.name, "unpaid");
                      }}
                      style={buttonStyle(type[company.name] === "unpaid")}
                    >
                      UNPAID
                    </button>
                    {type[company.name] && (
                      <div style={{ marginTop: 10, color: "#1a237e", fontWeight: 600 }}>
                        HR Number:{" "}
                        {quizCompleted
                          ? type[company.name] === "paid"
                            ? company.hr
                            : prointernHR
                          : "99XXXXXXX"}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* IQ Test Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 4px 24px rgba(30,60,120,0.13)",
            padding: 32,
            minWidth: 320,
            maxWidth: 420,
            flex: "1 1 340px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={iqImg} alt="IQ Test" style={{ width: 120, marginBottom: 18 }} />
          <h2 style={{ fontWeight: 700, color: "#1a237e", marginBottom: 12 }}>
            IQ Test
          </h2>
          {!quizCompleted ? (
            <>
              <p style={{ color: "#444", textAlign: "center", marginBottom: 24 }}>
                You need to attend the IQ Test to unlock HR Numbers.
              </p>
              <button
                onClick={() => {
                  setQuizStarted(true);
                  setQuestions(generateQuestions());
                  setCurrentQuestion(0);
                  setScore(0);
                }}
                style={{
                  background: "#49BBBD",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 32px",
                  fontWeight: 600,
                  fontSize: "1.08rem",
                  cursor: "pointer",
                }}
              >
                START TEST
              </button>
            </>
          ) : (
            <div style={{ textAlign: "center", color: "#1a237e" }}>
              ✅ Test Completed<br />
              Your Score: {score}/10
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const buttonStyle = (selected) => ({
  background: selected ? "#49BBBD" : "#fff",
  color: selected ? "#fff" : "#49BBBD",
  border: "2px solid #49BBBD",
  borderRadius: 8,
  padding: "6px 18px",
  fontWeight: 600,
  marginRight: 8,
  cursor: "pointer",
  fontSize: "1.02rem",
  transition: "background 0.2s, color 0.2s",
});
