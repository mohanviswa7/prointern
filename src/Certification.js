import React from "react";
import "./certificate.css";

function CertificationPage() {
  const certificateData = {
    name: "STEVEN V",
    course: "Internship on JAVA and Python",
    domain: "Python Development",
    startDate: "29-June-2025",
    endDate: "29-July-2025",
    issueDate: "25/07/2025",
    serialNo: "___________",
  };

  

  return (
    <div className="certificate-wrapper">
      <div className="certificate-container">
        {/* Background Certificate */}
        <img
          src="/logo512.png" // your uploaded certificate background image
          alt="Certificate Template"
          className="certificate-bg"
        />

        {/* Overlay Content */}
        <div className="certificate-overlay">
          <h1 className="cert-title">CERTIFICATE</h1>
          <h3 className="cert-subtitle">OF APPRECIATION</h3>

          {/* Stars Line */}
          <img src="/star.png" alt="Stars" className="stars" />

          <p className="cert-intro">This is to certify that</p>
          <h2 className="cert-name">{certificateData.name}</h2>

          <p className="cert-body">
            has successfully completed the Task-Based Internship Program in the</p>
           <p className="cert-body2"> domain of <b>{certificateData.domain}</b> at{" "}
            <b>PROINTERN</b> from <b>{certificateData.startDate}</b> to{" "}
            <b>{certificateData.endDate}</b>.
          </p>

          <h3 className="cert-course">{certificateData.course}</h3>
          <p className="cert-desc">
            A foundational course consisting of 15 structured online lessons
            covering 
          </p>
          <p className="cert-des">essential grammar rules and usage.</p>

          {/* Footer */}
          <p className="cert-issue-date">{certificateData.issueDate}</p>
          <p className="cert-issue-line">_________________</p>
          <p className="cert-issue">Issue Date</p>
          <p className="cert-serial">Serial No: {certificateData.serialNo}</p>

          {/* Stamp & Signature */}
          <img src="/stamp.png" alt="Stamp" className="stamp" />
          <img src="/signature.png" alt="Signature" className="sign" />
          <p className="cert-sign-line">__________________________</p>
          <p className="cert-sign">Signature</p>
        </div>
      </div>
    </div>
  );
}

export default CertificationPage;
