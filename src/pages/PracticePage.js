import React from "react";
import { useParams } from "react-router-dom";

const PracticePage = () => {
  const { examId } = useParams();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>{examId.toUpperCase()} - Practice Resources</h2>
      <p>Explore study materials, previous papers, and topic-wise questions.</p>
    </div>
  );
};

export default PracticePage;
