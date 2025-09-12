import React, { useState } from "react";
import axios from "axios";
import "./ProinternQuiz.css";

export default function Certification() {
  const [questions, setQuestions] = useState([]); // store fetched questions
  const [answers, setAnswers] = useState({}); // store user answers
  const [started, setStarted] = useState(false); // quiz start flag

  // ✅ Fetch questions from backend
  const fetchQuestions = async () => {
    try {
      // 👉 Replace with your backend API
      const res = await axios.get("http://localhost:5000/api/questions"); // 🔹 API 1: Fetch questions
      setQuestions(res.data); // assuming backend returns an array of questions
      setStarted(true);
    } catch (err) {
      console.error("Error fetching questions:", err);
    }
  };

  // ✅ Handle answer change
  const handleAnswerChange = (index, value) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value.toLowerCase(), // store as lowercase (a/b/c/d)
    }));
  };

  // ✅ Submit answers to backend
  const handleSubmit = async () => {
    try {
      const payload = {
        answers,
      };

      // 👉 Replace with your backend API
      await axios.post("http://localhost:5000/api/submit", payload); // 🔹 API 2: Submit answers
      alert("✅ Answers submitted successfully!");
    } catch (err) {
      console.error("Error submitting answers:", err);
      alert("❌ Failed to submit answers!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans fade-in">
      <main className="pt-24">
        <div className="max-w-6xl mx-auto py-10 px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">
            WELCOME TO PROINTERN QUIZ TEST:
          </h1>

          {/* Quiz Button & Marks */}
          {!started && (
            <div className="flex justify-center items-center space-x-6 mb-10">
              <button
                onClick={fetchQuestions}
                className="bg-orange-500 text-white font-bold px-6 py-2 rounded shadow hover:bg-orange-600 bounce"
              >
                QUIZ TEST
              </button>
              <span className="text-lg font-semibold tracking-wide">
                Total Marks : 20
              </span>
            </div>
          )}

          {/* Questions Grid */}
          {started && (
            <div className="grid grid-cols-3 gap-6 text-left fade-in">
              {questions.slice(0, 20).map((q, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg shadow transform transition duration-300 
                            hover:scale-105 hover:bg-purple-700 hover:shadow-lg"
                >
                  <h2 className="font-bold mb-2 text-lg">Q{index + 1}:</h2>
                  <p className="text-sm text-gray-300 italic">{q.question}</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {q.options.map((opt, i) => (
                      <li key={i}>
                        {String.fromCharCode(97 + i)}) {opt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Answer Circles */}
          {started && (
            <div className="mt-12">
              <h2 className="font-semibold mb-4">
                Write the options for all MCQ’s here :
              </h2>
              <div className="grid grid-cols-6 gap-4 max-w-xl mx-auto">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div
                    key={index}
                    className="relative w-12 h-12 flex items-center justify-center"
                  >
                    {/* Question Number */}
                    <span className="absolute -top-2 -left-2 w-5 h-5 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-bold">
                      {index + 1}
                    </span>

                    {/* Answer Input */}
                    <input
                      type="text"
                      maxLength="1"
                      value={answers[index] || ""}
                      onChange={(e) =>
                        handleAnswerChange(index, e.target.value)
                      }
                      className="w-12 h-12 rounded-full border border-gray-400 text-center text-black font-bold focus:ring-2 focus:ring-purple-500 transition"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submit */}
          {started && (
            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className="bg-purple-600 px-6 py-2 rounded text-white font-bold shadow hover:bg-purple-700 hover:scale-105 transition"
              >
                SUBMIT
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}






