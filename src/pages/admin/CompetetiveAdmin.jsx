import React, { useState, useEffect } from "react";
import "./CoursesAdmin.css";

const CompetetiveAdmin = () => {
  const [reportType, setReportType] = useState("IT");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students data from local storage
    const storedStudents =
      JSON.parse(localStorage.getItem("competetiveStudents")) || [];
    setStudents(storedStudents);
  }, []);

  return (
    <div className="courses-admin">
      <h1>Competetive Admin Dashboard</h1>

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
          <table className="courses-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course Name</th>
              </tr>
            </thead>
            <tbody>
              {students
                .filter((student) => student.courseType === "IT")
                .map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.courseName}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {reportType === "NonIT" && (
        <div className="non-it-report">
          <h2>Non-IT Report</h2>
          <table className="courses-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course Name</th>
              </tr>
            </thead>
            <tbody>
              {students
                .filter((student) => student.courseType === "NonIT")
                .map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.courseName}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompetetiveAdmin;
