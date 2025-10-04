import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaUsers, FaTasks } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // if using react-router

const InternshipWorkflow = () => {
  const navigate = useNavigate();

  const tasks = [
    { key: "task1", title: "Internship Hiring", durationDays: 3, icon: <FaUserTie size={40} /> },
    { key: "task2", title: "Staff Hiring", durationDays: 4, icon: <FaUsers size={40} /> },
    { key: "task3", title: "Team Handling", durationDays: 21, icon: <FaTasks size={40} /> },
  ];

  const [completedTasks, setCompletedTasks] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (taskKey) => {
    if (!currentInput.trim()) {
      setMessage("Please enter task details to submit.");
      return;
    }

    if (!completedTasks.includes(taskKey)) {
      setCompletedTasks([...completedTasks, taskKey]);
      setMessage(`Task "${tasks.find(t => t.key === taskKey).title}" completed!`);
      setCurrentInput("");
    }
  };

  const stipendMessage =
    completedTasks.length === tasks.length
      ? "🎉 All tasks completed! You are eligible for a stipend of ₹15,000."
      : "Complete all tasks to earn your stipend.";

  return (
    <div
      style={{
        background: "#2e75c7",
        padding: "50px 20px",
        borderRadius: "20px",
        maxWidth: "1000px",
        margin: "50px auto",
        color: "#fff",
        boxShadow: "0px 15px 40px rgba(0,0,0,0.3)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Internship Workflow</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {tasks.map((task, index) => {
          const isEnabled = index === 0 || completedTasks.includes(tasks[index - 1].key);
          const isCompleted = completedTasks.includes(task.key);

          return (
            <motion.div
              key={task.key}
              whileHover={{ scale: isEnabled ? 1.05 : 1 }}
              style={{
                background: isCompleted ? "#49BBBD" : "#1a457f",
                opacity: isEnabled ? 1 : 0.5,
                cursor: isEnabled ? "pointer" : "not-allowed",
                padding: "20px",
                borderRadius: "15px",
                width: "220px",
                textAlign: "center",
                boxShadow: "0px 6px 18px rgba(0,0,0,0.3)",
                position: "relative",
                transition: "all 0.3s ease",
                color: "#fff",
              }}
              title={!isEnabled ? "First task is not completed. You are not eligible for this task." : ""}
            >
              <div style={{ marginBottom: "10px", color: "#fff" }}>{task.icon}</div>
              <h3 style={{ marginBottom: "10px" }}>{task.title}</h3>
              <p style={{ marginBottom: "15px" }}>
                Duration: {task.durationDays} {task.durationDays > 1 ? "days" : "day"}
              </p>

              {isEnabled && !isCompleted && (
                <>
                  <input
                    type="text"
                    placeholder={`Enter details for ${task.title}`}
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    style={{
                      width: "90%",
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #fff",
                      marginBottom: "10px",
                      background: "#2e75c7",
                      color: "#fff",
                    }}
                  />
                  <button
                    onClick={() => handleSubmit(task.key)}
                    style={{
                      padding: "8px 15px",
                      borderRadius: "8px",
                      border: "none",
                      background: "#49BBBD",
                      color: "#fff",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </button>
                </>
              )}

              {isCompleted && (
                <p style={{ color: "#d4edda", fontWeight: "600", marginTop: "10px" }}>✅ Completed</p>
              )}
            </motion.div>
          );
        })}
      </div>

      {message && (
        <div style={{ marginTop: "20px", color: "#d4edda", fontWeight: "600", textAlign: "center" }}>
          {message}
        </div>
      )}

      <div style={{ marginTop: "30px", fontWeight: "700", fontSize: "1.2rem", color: completedTasks.length === tasks.length ? "#d4edda" : "#ffdddd", textAlign: "center" }}>
        {stipendMessage}
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => navigate("/home")}
          style={{
            marginTop: "40px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#fff",
            color: "#2e75c7",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default InternshipWorkflow;
