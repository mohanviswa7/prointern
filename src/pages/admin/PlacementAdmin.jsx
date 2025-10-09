import React, { useState, useEffect } from "react";
import "./PlacementAdmin.css";

const PlacementAdmin = () => {
  const [reportType, setReportType] = useState("IT");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students data from local storage
    const storedStudents =
      JSON.parse(localStorage.getItem("placementStudents")) || [];
    setStudents(storedStudents);
  }, []);

  return (
    <div className="placement-admin">
      <h1>Placement Admin Dashboard</h1>

      <div className="report-selection">
        <button
          className={reportType === "IT" ? "active" : ""}
          onClick={() => setReportType("IT")}
        >
          IT Report
        </button>
        <button
          className={reportType === "NonIT" ? "active" : ""}
          onClick={() => setReportType("NonIT")}
        >
          Non-IT Report
        </button>
      </div>

      {reportType === "IT" && (
        <div className="it-report">
          <h2>IT Report</h2>
          <table className="placement-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Placement Role</th>
                <th>Company Name</th>
              </tr>
            </thead>
            <tbody>
              {students
                .filter((student) => student.placementType === "IT")
                .map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.role}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {reportType === "NonIT" && (
        <div className="non-it-report">
          <h2>Non-IT Report</h2>
          <table className="placement-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Placement Role</th>
                <th>Company Name</th>
              </tr>
            </thead>
            <tbody>
              {students
                .filter((student) => student.placementType === "NonIT")
                .map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.role}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PlacementAdmin;
