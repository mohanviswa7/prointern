import React from "react";
import "./PaidCourses.css";
import circleImg from "../assets/image.png";
import personImg from "../assets/person.png";
import liveVideo from "../assets/live.mp4";

export default function PaidCourses() {
  // You can get course info from props, location, or context if needed
  // For now, we'll just show the live session and right card

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f8faff 60%, #e0f7fa 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 40,
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {/* Live Session Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 4px 24px rgba(30,60,120,0.13)",
            padding: 32,
            minWidth: 340,
            maxWidth: 540,
            flex: "1 1 340px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontWeight: 700, color: "#1a237e", marginBottom: 18 }}>
            Live Session
          </h2>
          <video
            style={{
              width: "100%",
              borderRadius: 10,
              boxShadow: "0 2px 12px #49bbbd33",
              background: "#000",
              marginBottom: 18,
              minHeight: 220,
            }}
            controls
            autoPlay
          >
            <source src={liveVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={{ color: "#444", textAlign: "center", marginBottom: 0 }}>
            Enjoy your interactive live class session with ProIntern experts!
          </p>
        </div>
        {/* Attractive Right Card */}
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
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={circleImg}
            alt="circle"
            style={{
              width: 120,
              position: "absolute",
              top: 24,
              right: 24,
              opacity: 0.12,
              zIndex: 0,
            }}
          />
          <img
            src={personImg}
            alt="person"
            style={{
              width: 120,
              borderRadius: "50%",
              marginBottom: 18,
              zIndex: 1,
              boxShadow: "0 2px 12px #49bbbd33",
            }}
          />
          <h2 style={{ fontWeight: 700, color: "#1a237e", marginBottom: 12, zIndex: 1 }}>
            Welcome to ProIntern
          </h2>
          <p style={{ color: "#444", textAlign: "center", marginBottom: 24, zIndex: 1 }}>
            You have unlocked live sessions and premium resources. Enjoy learning with our expert instructors!
          </p>
        </div>
      </div>
    </div>
  );
}