import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle, FaLock, FaUserShield, FaCookieBite, FaEnvelope, FaArrowLeft } from "react-icons/fa";

const policySections = [
  {
    icon: <FaInfoCircle size={25} color="#6a1b9a" />,
    title: "1. Information We Collect",
    content: (
      <ul>
        <li>Personal details (name, email, phone number, address)</li>
        <li>Educational and professional background</li>
        <li>Payment and billing information</li>
        <li>Usage data (login activity, course progress, feedback)</li>
      </ul>
    ),
  },
  {
    icon: <FaInfoCircle size={25} color="#6a1b9a" />,
    title: "2. How We Use Your Information",
    content: (
      <ul>
        <li>Provide training, internship, and placement services</li>
        <li>Improve our courses and learning experience</li>
        <li>Process payments and generate invoices</li>
        <li>Send updates, offers, and important notifications</li>
        <li>Comply with legal and regulatory requirements</li>
      </ul>
    ),
  },
  {
    icon: <FaUserShield size={25} color="#6a1b9a" />,
    title: "3. Sharing of Information",
    content: (
      <ul>
        <li>Placement partners and recruiters (for internship/job opportunities)</li>
        <li>Service providers (for payment processing, hosting, analytics)</li>
        <li>Legal authorities (if required by law)</li>
      </ul>
    ),
  },
  {
    icon: <FaLock size={25} color="#6a1b9a" />,
    title: "4. Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, misuse, or loss.",
  },
  {
    icon: <FaUserShield size={25} color="#6a1b9a" />,
    title: "5. Your Rights",
    content:
      "You have the right to access, update, or delete your personal information. You can also unsubscribe from our communications at any time by contacting us.",
  },
  {
    icon: <FaCookieBite size={25} color="#6a1b9a" />,
    title: "6. Cookies & Tracking",
    content:
      "Our website may use cookies and tracking tools to enhance your browsing experience and analyze usage patterns.",
  },
  {
    icon: <FaInfoCircle size={25} color="#6a1b9a" />,
    title: "7. Updates to this Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.",
  },
  {
    icon: <FaEnvelope size={25} color="#6a1b9a" />,
    title: "8. Contact Us",
    content: (
      <p>
        <strong>ProIntern Training Institute</strong>
        <br />
        #236, 92/1A, Venkataadri IT City,
        <br />
        Konappana Agrahara Village,
        <br />
        HP Avenue Road, Electronic City,
        <br />
        Bengaluru - 560100
        <br />
        Email: support@prointern.com
        <br />
        Phone: +91-8123402974
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        background: "linear-gradient(to right, #f5f7fa, #e0c3fc)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Main Rectangular Container */}
      <div
        style={{
          background: "#fff",
          borderRadius: "25px",
          padding: "40px",
          maxWidth: "1000px",
          width: "100%",
          boxShadow: "0px 15px 40px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/home")}
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#6a1b9a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 15px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          <FaArrowLeft /> Back
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", color: "#6a1b9a", fontSize: "3rem", marginBottom: "10px" }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: "center", fontSize: "1.2rem", marginBottom: "40px", color: "#4a148c" }}
        >
          Effective Date: September 25, 2025
        </motion.p>

        {/* Sub-cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {policySections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                background: "#f9f9f9",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0px 6px 18px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {section.icon}
                <h2 style={{ fontSize: "1.2rem", color: "#6a1b9a", margin: 0 }}>{section.title}</h2>
              </div>
              <div style={{ color: "#333", fontSize: "0.95rem" }}>{section.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
