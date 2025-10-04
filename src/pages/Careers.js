import React, { useState } from "react";
import { FaLaptopCode, FaBriefcase, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // React Router hook

const CareersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate(); // For navigation

  const itRoles = [
    "Software Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "DevOps Engineer",
    "Java Developer",
    "Python Developer",
  ];

  const nonItRoles = [
    "HR Executive",
    "Sales Manager",
    "Business Development Executive",
  ];

  const rolesVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "50px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#f5f5f5",
      }}
    >
      {/* Background Card */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "30px",
          padding: "50px 30px",
          maxWidth: "1000px",
          width: "100%",
          boxShadow: "0px 15px 40px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate("/home")}
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            background: "#6a1b9a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 15px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "600",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaArrowLeft /> Back
        </button>

        <h1 style={{ textAlign: "center", color: "#6a1b9a", fontSize: "3rem" }}>
          Careers at Prointern
        </h1>
        <p style={{ textAlign: "center", fontSize: "1.2rem", marginBottom: "40px", color: "#4a148c" }}>
          Select your area of interest to explore open roles
        </p>

        {/* Category Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* IT Card */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.3)" }}
            onClick={() => setSelectedCategory("IT")}
            style={{
              background: "linear-gradient(135deg, #42a5f5, #478ed1)",
              color: "#fff",
              borderRadius: "20px",
              padding: "30px 20px",
              width: "250px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s",
            }}
          >
            <FaLaptopCode size={50} style={{ marginBottom: "15px" }} />
            <h2>IT Careers</h2>
            <p>Explore technology-driven roles</p>
          </motion.div>

          {/* Non-IT Card */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.3)" }}
            onClick={() => setSelectedCategory("Non-IT")}
            style={{
              background: "linear-gradient(135deg, #ff7043, #f4511e)",
              color: "#fff",
              borderRadius: "20px",
              padding: "30px 20px",
              width: "250px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s",
            }}
          >
            <FaBriefcase size={50} style={{ marginBottom: "15px" }} />
            <h2>Non-IT Careers</h2>
            <p>Explore business & support roles</p>
          </motion.div>
        </div>

        {/* Roles Section with AnimatePresence */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              key={selectedCategory}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={rolesVariants}
              transition={{ duration: 0.5 }}
              style={{ marginTop: "50px", textAlign: "center" }}
            >
              <h3 style={{ fontSize: "2rem", color: "#4a148c", marginBottom: "30px" }}>
                {selectedCategory === "IT" ? "Available IT Roles" : "Available Non-IT Roles"}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                {(selectedCategory === "IT" ? itRoles : nonItRoles).map((role, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background:
                        selectedCategory === "IT"
                          ? "rgba(66, 165, 245, 0.15)"
                          : "rgba(255, 112, 67, 0.15)",
                      color: selectedCategory === "IT" ? "#0d47a1" : "#bf360c",
                      padding: "12px 20px",
                      borderRadius: "12px",
                      width: "300px",
                      fontWeight: "600",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    {role}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CareersPage;
