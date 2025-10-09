import React from "react";
import { useParams } from "react-router-dom";

const MockTestPage = () => {
  const { examId } = useParams();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>{examId.toUpperCase()} - Mock Test</h2>
      <p>Welcome! Your mock test for {examId.toUpperCase()} will begin shortly.</p>
      <button style={{ background: "#49BBBD", color: "#fff", padding: "10px 20px", borderRadius: "8px" }}>
        Start Test
      </button>
    </div>
  );
};

export default MockTestPage;
