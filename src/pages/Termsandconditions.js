import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBook,
  FaMoneyBillWave,
  FaUserCheck,
  FaCopyright,
  FaHandshake,
  FaShieldAlt,
  FaCalendarAlt,
  FaGavel,
  FaCheckCircle,
  FaArrowLeft,
  FaEnvelope,
} from "react-icons/fa";

const termsSections = [
  {
    icon: <FaBook size={25} color="#2e75c7" />,
    title: "1. Course Enrollment",
    content: (
      <ul>
        <li>Enrollment in any course is subject to approval by Prointern.</li>
        <li>
          All course fees must be paid in full prior to the commencement of the
          course unless otherwise agreed.
        </li>
        <li>
          Prointern reserves the right to refuse enrollment or cancel courses at
          its discretion.
        </li>
      </ul>
    ),
  },
  {
    icon: <FaMoneyBillWave size={25} color="#2e75c7" />,
    title: "2. Payment and Refunds",
    content: (
      <ul>
        <li>
          Course fees are non-refundable except in cases where Prointern cancels
          the course.
        </li>
        <li>Any request for a refund must be submitted in writing.</li>
        <li>
          Payment can be made through authorized payment channels specified by
          Prointern.
        </li>
      </ul>
    ),
  },
  {
    icon: <FaUserCheck size={25} color="#2e75c7" />,
    title: "3. Attendance and Participation",
    content: (
      <ul>
        <li>
          Students are expected to attend all classes and actively participate.
        </li>
        <li>
          Prointern may remove students from a course for disruptive behavior or
          non-compliance with rules.
        </li>
      </ul>
    ),
  },
  {
    icon: <FaCopyright size={25} color="#2e75c7" />,
    title: "4. Intellectual Property",
    content: (
      <ul>
        <li>
          All content, materials, and resources provided by Prointern are
          protected under copyright laws.
        </li>
        <li>
          Students are prohibited from reproducing, sharing, or distributing
          course content without explicit permission.
        </li>
      </ul>
    ),
  },
  {
    icon: <FaHandshake size={25} color="#2e75c7" />,
    title: "5. Code of Conduct",
    content: (
      <ul>
        <li>
          Respectful behavior towards instructors, staff, and fellow students is
          required.
        </li>
        <li>
          Harassment, discrimination, or offensive behavior will not be
          tolerated.
        </li>
      </ul>
    ),
  },
  {
    icon: <FaShieldAlt size={25} color="#2e75c7" />,
    title: "6. Liability",
    content: (
      <ul>
        <li>
          Prointern is not responsible for any personal loss, damage, or injury
          incurred during participation in courses or events.
        </li>
        <li>Students participate at their own risk.</li>
      </ul>
    ),
  },
  {
    icon: <FaCalendarAlt size={25} color="#2e75c7" />,
    title: "7. Privacy",
    content: (
      <ul>
        <li>
          Prointern respects your privacy. Any personal data collected will be
          used in accordance with our Privacy Policy.
        </li>
        <li>
          Students consent to the collection and use of their data for course
          administration and communication purposes.
        </li>
      </ul>
    ),
  },
  {
    icon: <FaBook size={25} color="#2e75c7" />,
    title: "8. Course Changes and Cancellation",
    content: (
      <ul>
        <li>
          Prointern reserves the right to modify course content, schedule, or
          instructors at any time.
        </li>
        <li>
          In the event of course cancellation, students will be notified and
          provided with options for rescheduling or refunds.
        </li>
      </ul>
    ),
  },
  {
    icon: <FaGavel size={25} color="#2e75c7" />,
    title: "9. Dispute Resolution",
    content: (
      <ul>
        <li>
          Any disputes arising out of the terms and conditions shall be resolved
          amicably.
        </li>
        <li>
          If unresolved, disputes will be subject to the jurisdiction of local
          courts.
        </li>
      </ul>
    ),
  },
  {
    icon: <FaCheckCircle size={25} color="#2e75c7" />,
    title: "10. Acceptance of Terms",
    content: (
      <p>
        By enrolling in any Prointern course, you acknowledge that you have
        read, understood, and agree to these Terms and Conditions.
      </p>
    ),
  },
  {
    icon: <FaEnvelope size={25} color="#2e75c7" />,
    title: "Contact Us",
    content: (
      <p>
        Prointern Training Institute
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
        Phone: +91-XXXXXXXXXX
      </p>
    ),
  },
];

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        background: "linear-gradient(to right, #f5f7fa, #dbe9fb)",
        display: "flex",
        justifyContent: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
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
            background: "#2e75c7",
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
          style={{
            textAlign: "center",
            color: "#2e75c7",
            fontSize: "3rem",
            marginBottom: "10px",
          }}
        >
          Terms and Conditions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            marginBottom: "40px",
            color: "#1b4f8c",
          }}
        ></motion.p>

        {/* Sub-cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {termsSections.map((section, index) => (
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {section.icon}
                <h2 style={{ fontSize: "1.2rem", color: "#2e75c7", margin: 0 }}>
                  {section.title}
                </h2>
              </div>
              <div style={{ color: "#333", fontSize: "0.95rem" }}>
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
