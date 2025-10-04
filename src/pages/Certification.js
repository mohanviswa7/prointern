import React, { useState } from "react";
import { jsPDF } from "jspdf";
import CertificateImage from "../pages/assets/CertificateNew2.jpg"; // Background certificate template
import ProinternLogo from "../../src/assets/prointern logo.jpg"; // Prointern logo

export default function CertificateGenerator() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSubmit = () => {
    if (!name || !course || !fromDate || !toDate) {
      alert("Please enter all details before generating certificate!");
      return;
    }

    const doc = new jsPDF("landscape", "pt", "a4");
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    const bgImg = new Image();
    bgImg.src = CertificateImage;

    bgImg.onload = () => {
      // Add background
      doc.addImage(bgImg, "JPEG", 0, 0, width, height);

      // Dotted border
      doc.setLineWidth(1);
      doc.setDrawColor(73, 187, 189);
      doc.setLineDash([4, 4], 0);
      doc.rect(20, 20, width - 40, height - 40);

      // Add Prointern Logo in center-top
      const logo = new Image();
      logo.src = ProinternLogo;
      logo.onload = () => {
        doc.addImage(logo, "JPEG", width / 2 - 50, 40, 100, 100);

        // Title
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(32);
        doc.text("CERTIFICATE OF COMPLETION", width / 2, 180, {
          align: "center",
        });

        // Subtitle
        doc.setFont("helvetica", "italic");
        doc.setFontSize(16);
        doc.text("This certificate is proudly presented to", width / 2, 220, {
          align: "center",
        });

        // Student Name
        doc.setFont("helvetica", "bold");
        doc.setFontSize(28);
        doc.text(name, width / 2, 260, { align: "center" });

        // Course Line
        doc.setFont("helvetica", "normal");
        doc.setFontSize(16);
        doc.text(
          `For successfully completing the Internship Program in the field of`,
          width / 2,
          300,
          { align: "center" }
        );

        // Course Name
        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.text(course, width / 2, 330, { align: "center" });

        // Internship Duration
        doc.setFont("helvetica", "italic");
        doc.setFontSize(14);
        doc.text(`Duration: ${fromDate} to ${toDate}`, width / 2, 370, {
          align: "center",
        });

        // Footer details
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(
          `Issued on: ${new Date().toLocaleDateString()}`,
          80,
          height - 80
        );
        doc.text("Authorized Signature", width - 180, height - 80);
        doc.text(
          "Serial No: PROINT-" + Math.floor(Math.random() * 10000),
          80,
          height - 50
        );

        // Save file
        doc.save(`${name}_Certificate.pdf`);
      };
    };
  };

  return (
    <div style={pageWrapper}>
      <div style={cardStyle}>
        <h2
          style={{
            color: "#333",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Generate Your Internship Certificate
        </h2>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Enter Course Name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={inputStyle}
        />
        <br />
        <input
          type="date"
          placeholder="From Date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          style={inputStyle}
        />
        <input
          type="date"
          placeholder="To Date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          style={inputStyle}
        />
        <br />
        <button onClick={handleSubmit} style={buttonStyle}>
          Generate Certificate
        </button>
      </div>
    </div>
  );
}

// Styles
const pageWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "linear-gradient(to right, #49BBBD, #1F8A9E)",
};

const cardStyle = {
  background: "#fff",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
  textAlign: "center",
  width: "500px",
};

const inputStyle = {
  padding: "10px",
  margin: "10px",
  width: "80%",
  border: "1px solid #49BBBD",
  borderRadius: "5px",
};

const buttonStyle = {
  padding: "12px 30px",
  background: "#49BBBD",
  border: "none",
  borderRadius: "8px",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  marginTop: "15px",
};
