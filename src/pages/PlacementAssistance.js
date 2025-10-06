import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";

const containerStyle = {
  backgroundColor: "#146B8A",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Arial, sans-serif",
  color: "#fff",
};

const mainContentStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "space-between",
  padding: "60px 80px",
  position: "relative",
};

const leftColumn = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  width: "30%",
};

const groupPhotoStyle = {
  width: "175px",
  height: "175px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid white",
  alignSelf: "flex-start",
};

const paidAssistanceBoxStyle = {
  backgroundColor: "#2C4E6C",
  borderRadius: "12px",
  padding: "20px",
  color: "white",
  fontWeight: "700",
  fontSize: "13px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "100%",
  boxSizing: "border-box",
};

const logosRow = {
  display: "flex",
  gap: "15px",
  alignItems: "center",
  flexWrap: "wrap",
};

const companyLogoStyle = {
  objectFit: "contain",
  height: "60px",
};

const centerWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
};

const optionCardContainer = {
  backgroundColor: "#2C4E6C",
  borderRadius: "16px",
  padding: "25px 20px",
  boxShadow: "0 6px 12px rgba(0,0,0,0.25)",
  width: "220px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
};

const optionButton = (active, type) => ({
  backgroundColor:
    type === "Paid"
      ? active
        ? "#ffe5ea"
        : "#fce4ec"
      : active
      ? "#f8a5b6"
      : "#f3aebd",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontWeight: "bold",
  fontSize: "16px",
  color: "#8b1c3b",
  padding: "14px 18px",
  width: "100%",
  justifyContent: "flex-start",
  cursor: "pointer",
  boxShadow: active
    ? "inset 0 3px 6px rgba(0,0,0,0.15)"
    : "0 3px 6px rgba(0,0,0,0.15)",
  transition: "0.3s ease",
});

const iconBox = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "6px",
  width: "36px",
  height: "36px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const centerCard = {
  backgroundColor: "#2C4E6C",
  width: "350px",
  height: "280px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  textAlign: "center",
  boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
};

const iqImageStyle = {
  width: "120px",
  height: "120px",
  objectFit: "contain",
};

const proceedButtonStyle = {
  backgroundColor: "#DD7300",
  border: "none",
  borderRadius: "5px",
  color: "white",
  fontWeight: "bold",
  padding: "10px 30px",
  cursor: "pointer",
  fontSize: "13px",
  letterSpacing: "0.5px",
};

const rightColumn = {
  width: "25%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
  position: "relative",
};

const placementBadgeStyle = {
  width: "180px",
  objectFit: "contain",
  marginTop: "20px",
};

export default function PlacementAssistance() {
  const [paidStatus, setPaidStatus] = useState("");
  const navigate = useNavigate();

  const handleSelect = (status) => {
    setPaidStatus(status);
    if (status === "Paid") {
      toast.success("✅ Redirecting to Paid Courses...");
      navigate("/coursepaid");
    } else if (status === "Unpaid") {
      toast.success("✅ Redirecting to Unpaid Courses...");
      navigate("/courseunpaid");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={mainContentStyle}>
        {/* Left Column */}
        <div style={leftColumn}>
          <img src="/images/group.png" alt="Group" style={groupPhotoStyle} />
          <div style={paidAssistanceBoxStyle}>
            <div>WELCOME TO PROINTERN PAID ASSISTANCE :</div>
            <div style={logosRow}>
              <img src="/images/tcs.png" alt="TCS" style={companyLogoStyle} />
              <img src="/images/techmahindra.png" alt="Tech Mahindra" style={companyLogoStyle} />
              <img src="/images/hcl.png" alt="HCL Tech" style={companyLogoStyle} />
              <img src="/images/infosys.png" alt="Infosys" style={companyLogoStyle} />
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div style={centerWrapper}>
          {/* Toggle card */}
          <div style={optionCardContainer}>
            <div
              style={optionButton(paidStatus === "Paid", "Paid")}
              onClick={() => handleSelect("Paid")}
            >
              <div style={iconBox}>
                <Bookmark color="#b3003c" size={20} />
              </div>
              PAID
            </div>

            <div
              style={optionButton(paidStatus === "Unpaid", "Unpaid")}
              onClick={() => handleSelect("Unpaid")}
            >
              <div style={iconBox}>
                <Bookmark color="#b3003c" size={20} />
              </div>
              UNPAID
            </div>
          </div>

          {/* IQ Card */}
          <div style={centerCard}>
            <img src="/images/iq.png" alt="IQ Test" style={iqImageStyle} />
            <p>You Need to Attend the IQ Test</p>
            <button style={proceedButtonStyle}>PROCEED</button>
          </div>
        </div>

        {/* Right Column */}
        <div style={rightColumn}>
          <img src="/images/placement.png" alt="Placement Assistance" style={placementBadgeStyle} />
        </div>
      </div>
    </div>
  );
}
