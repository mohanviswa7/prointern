import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import circleImg from "../assets/image.png";
import personImg from "../assets/person.png";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState(null); // IT or NONIT
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedType === "paid") {
      const options = {
        key: "rzp_live_RR3GHL1TJu3MZw", // Razorpay live API key
        amount: 50000, // Payment amount in paise (e.g., ₹500)
        currency: "INR",
        name: "Prointern",
        description: "Course Payment",
        handler: function (response) {
          // Navigate to Taskscreen after payment success
          navigate("/taskscreen");
        },
        prefill: {
          name: "Your Name",
          email: "your.email@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#49BBBD",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      // Navigate directly to Taskscreen for unpaid courses
      navigate("/taskscreen");
    }
  };

  const ITcourses = {
    java: {
      title: "JAVA",
      desc: "Master Java to build web & apps",
      duration: "6 Months",
      actualAmount: 80000,
      scholarshipAmount: 40000,
    },
    python: {
      title: "PYTHON",
      desc: "Master Python programming",
      duration: "6 Months",
      actualAmount: 80000,
      scholarshipAmount: 40000,
    },
    datascience: {
      title: "DATA SCIENCE",
      desc: "Explore data-driven insights",
      duration: "12 Months",
      actualAmount: 160000,
      scholarshipAmount: 80000,
    },
    mernstack: {
      title: "MERNSTACK",
      desc: "Learn the advanced stacks",
      duration: "6 Months",
      actualAmount: 80000,
      scholarshipAmount: 40000,
    },
    aiml: {
      title: "AI / ML",
      desc: "Artificial Intelligence & ML",
      duration: "6 Months",
      actualAmount: 80000,
      scholarshipAmount: 40000,
    },
    dataanalysis: {
      title: "DATA ANALYSIS",
      desc: "Detail structure about data analysis",
      duration: "6 Months",
      actualAmount: 80000,
      scholarshipAmount: 40000,
    },
    datastructure: {
      title: "SAP Basic",
      desc: "SAP Basic course for beginners",
      duration: "6 Months",
      actualAmount: 80000,
      scholarshipAmount: 40000,
    },
    softwaretesting: {
      title: "SOFTWARE TESTING",
      desc: "advanced testing stacks",
      duration: "6 Months",
      actualAmount: 80000,
      scholarshipAmount: 40000,
    },
    powerbi: {
      title: "POWER BI",
      desc: "Integrating Concepts",
      duration: "6 Months",
      actualAmount: 80000,
      scholarshipAmount: 40000,
    },
    clouddeveloping: {
      title: "Cloud Developing",
      desc: "Emphathetic Cloud Parts",
      duration: "12 Months",
      actualAmount: 160000,
      scholarshipAmount: 80000,
    },
    aws: {
      title: "AWS",
      desc: "Asthetic domain and server services",
      duration: "6 Months",
      actualAmount: 80000,
      scholarshipAmount: 40000,
    },
    linux: {
      title: "Linux",
      desc: "OS for Different Systems",
      duration: "6 Months",
      actualAmount: 80000,
      scholarshipAmount: 40000,
    },
  };

  const NonITcourses = {
    hr: {
      title: "Human Resources",
      desc: "Learn HR & people management",
      duration: "2 Months",
      fee: 3000,
    },
    finance: {
      title: "Finance Basics",
      desc: "Learn corporate finance essentials",
      duration: "2 Months",
      fee: 3000,
    },
    event: {
      title: "Event Management",
      desc: "Learn corporate finance essentials",
      duration: "2 Months",
      fee: 3000,
    },
    sales: {
      title: "Sales & Marketing",
      desc: "Master sales strategies & growth",
      duration: "2 Months",
      fee: 3000,
    },
    design: {
      title: "Graphic Design",
      desc: "Basics of creative design tools",
      duration: "2 Months",
      fee: 3000,
    },
    bde: {
      title: "Business Development",
      desc: "Basics of creative design tools",
      duration: "2 Months",
      fee: 3000,
    },
  };

  const handleCourseSelection = (id) => {
    setSelectedCourse(id);

    // Retrieve the logged-in profile name (mocked for now)
    const profileName = localStorage.getItem("profileName") || "Guest";

    // Prepare course data
    const courseData = {
      category: selectedCategory,
      courseId: id,
      courseDetails:
        selectedCategory === "IT" ? ITcourses[id] : NonITcourses[id],
    };

    // Update local storage to avoid duplicates
    const existingData =
      JSON.parse(localStorage.getItem("selectedCourses")) || {};
    existingData[profileName] = existingData[profileName] || [];

    // Remove any existing course for the same category
    existingData[profileName] = existingData[profileName].filter(
      (course) => course.category !== selectedCategory
    );

    // Add the new course
    existingData[profileName].push(courseData);
    localStorage.setItem("selectedCourses", JSON.stringify(existingData));
  };

  return (
    <>
      <style>{`
        .courses-main-flex {
          width: 75vw;
          max-width: 1400px;
          margin: 48px auto 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          justify-content: center;
        }
        .courses-card {
          background: #fff;
          border-radius: 24px;
          box-shadow: 0 6px 32px rgba(30,60,120,0.13);
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 320px;
          max-width: 48%;
          flex: 1 1 48%;
          margin-bottom: 24px;
        }
        .courses-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 0;
          text-align: center;
        }
        .highlight {
          color: #ff9100;
        }
        .category-row {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin: 20px 0;
        }
        .category-btn {
          background: #fff;
          border: 2px solid #49BBBD;
          color: #49BBBD;
          font-weight: 600;
          border-radius: 10px;
          padding: 12px 32px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: 0.2s;
        }
        .category-btn.selected,
        .category-btn:hover {
          background: #49BBBD;
          color: #fff;
        }
        .courses-options-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
          margin-top: 14px;
        }
        .courses-option-checkbox {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f8faff;
          border: 2px solid #e0e7ff;
          border-radius: 12px;
          padding: 8px 12px;
          font-size: 1.08rem;
          font-weight: 600;
          color: #1a237e;
          cursor: pointer;
          transition: 0.2s;
        }
        .courses-option-checkbox.selected,
        .courses-option-checkbox:hover {
          border: 2px solid #49BBBD;
          background: #e0f7fa;
        }
        .type-row {
          display: flex;
          gap: 14px;
          margin: 14px 0;
          justify-content: center;
        }
        .type-btn {
          background: #fff;
          border: 2px solid #49BBBD;
          color: #49BBBD;
          font-weight: 600;
          border-radius: 8px;
          padding: 6px 24px;
          font-size: 1.08rem;
          cursor: pointer;
          transition: 0.2s;
        }
        .type-btn.selected,
        .type-btn:hover {
          background: #49BBBD;
          color: #fff;
        }
        .submit-btn {
          background: #aeb915;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 12px;
        }
        .submit-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        .courses-options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .back-button-container {
          margin-bottom: 16px;
        }
        .back-button {
          background: #49BBBD;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>

      <div className="courses-main-flex">
        {/* LEFT CARD */}
        <div className="courses-card courses">
          {!selectedCategory ? (
            <>
              <div className="courses-title">
                <span className="highlight">Choose Category</span>
              </div>
              <div className="category-row">
                <button
                  className={`category-btn ${
                    selectedCategory === "IT" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedCategory("IT")}
                >
                  IT
                </button>
                <button
                  className={`category-btn ${
                    selectedCategory === "NONIT" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedCategory("NONIT")}
                >
                  NON-IT
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="courses-title">
                <span className="highlight">{selectedCategory} Courses</span>
              </div>
              <div className="courses-options-grid">
                {(selectedCategory === "IT" ? ITcourses : NonITcourses) &&
                  Object.keys(
                    selectedCategory === "IT" ? ITcourses : NonITcourses
                  ).map((id) => (
                    <label
                      key={id}
                      className={`courses-option-checkbox${
                        selectedCourse === id ? " selected" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCourse === id}
                        onChange={() => {
                          handleCourseSelection(id);
                        }}
                        style={{
                          accentColor: "#49BBBD",
                          width: 18,
                          height: 18,
                        }}
                      />
                      <div>
                        <span style={{ fontWeight: 600 }}>
                          {
                            (selectedCategory === "IT"
                              ? ITcourses
                              : NonITcourses)[id].title
                          }
                        </span>
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.95em",
                            color: "#666",
                          }}
                        >
                          {
                            (selectedCategory === "IT"
                              ? ITcourses
                              : NonITcourses)[id].desc
                          }
                        </span>
                        {selectedCategory === "NONIT" && (
                          <span
                            style={{
                              display: "block",
                              fontSize: "0.9em",
                              color: "#ff5722",
                              animation: "blinker 1.5s linear infinite",
                            }}
                          >
                            Duration: {NonITcourses[id].duration} | Fee: ₹
                            {NonITcourses[id].fee}
                          </span>
                        )}
                      </div>
                    </label>
                  ))}
              </div>

              {/* Paid / Unpaid row */}
              <div className="type-row">
                <button
                  className={`type-btn${
                    selectedType === "paid" ? " selected" : ""
                  }`}
                  onClick={() => setSelectedType("paid")}
                  type="button"
                >
                  PAID
                </button>
                {/* {selectedCategory === 'IT' && (
                  <button
                    className={`type-btn${selectedType === "unpaid" ? " selected" : ""}`}
                    onClick={() => setSelectedType("unpaid")}
                    type="button"
                  >
                    UNPAID
                  </button>
                )} */}
              </div>

              {/* Submit */}
              <button
                className="submit-btn"
                disabled={!selectedCourse || !selectedType}
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </>
          )}
        </div>

        {/* RIGHT CARD */}
        {selectedCategory && (
          <div className="courses-card details">
            {selectedCategory === "IT" && selectedCourse ? (
              <>
                <h3>{ITcourses[selectedCourse].title} - Details</h3>
                <p>{ITcourses[selectedCourse].desc}</p>
                <p>• Exclusive learning material</p>
                <p>• No ads, smooth playback</p>
                <p>• Structured lessons</p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#ff5722",
                    animation: "blinker 1.5s linear infinite",
                  }}
                >
                  Duration: {ITcourses[selectedCourse].duration}
                </p>
                <table
                  style={{
                    width: "100%",
                    marginTop: "16px",
                    borderCollapse: "collapse",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          border: "1px solid #ddd",
                          padding: "8px",
                          backgroundColor: "#f2f2f2",
                        }}
                      >
                        Actual Amount
                      </th>
                      <th
                        style={{
                          border: "1px solid #ddd",
                          padding: "8px",
                          backgroundColor: "#f2f2f2",
                        }}
                      >
                        Scholarship Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        ₹{ITcourses[selectedCourse].actualAmount}
                      </td>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        ₹{ITcourses[selectedCourse].scholarshipAmount}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : selectedCategory === "NONIT" ? (
              <>
                <h3>Paid Non-IT Courses</h3>
                <p>• Professional learning material</p>
                <p>• Certification on completion</p>
                <p>• Job-oriented curriculum</p>
              </>
            ) : (
              <p>Please select a course to see details.</p>
            )}
            <div
              className="courses-image-section"
              style={{ position: "relative", height: 60 }}
            >
              <img src={personImg} alt="person" className="personImage" />
            </div>

            {/* Back Button */}
            <div className="back-button-container">
              <button
                className="back-button"
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedCourse(null);
                  setSelectedType(null);
                }}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hidden Live Session Section */}
      <div id="liveSession" style={{ display: "none", marginTop: "32px" }}>
        <h2>Live Session</h2>
        <p>Welcome to the live session!</p>
        {/* Add live session content here */}
      </div>

      <style>
        @keyframes blinker{" "}
        {50 %
          {
            opacity: 0,
          }}
      </style>
    </>
  );
}
