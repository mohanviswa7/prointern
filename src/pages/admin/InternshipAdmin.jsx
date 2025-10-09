import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import "./InternshipAdmin.css";

const InternshipAdmin = () => {
  const [reportType, setReportType] = useState("IT");
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", task: "" });
  const [adminFiles, setAdminFiles] = useState([]);
  const [recruiterData, setRecruiterData] = useState([]);

  useEffect(() => {
    // Fetch admin files from local storage
    const storedFiles = JSON.parse(localStorage.getItem("adminFiles")) || [];
    setAdminFiles(storedFiles);

    // Fetch recruiter form data from local storage
    const storedRecruiterData = JSON.parse(
      localStorage.getItem("recruiterFormData")
    );
    if (storedRecruiterData && Array.isArray(storedRecruiterData)) {
      setRecruiterData(storedRecruiterData);
    } else if (storedRecruiterData) {
      setRecruiterData([storedRecruiterData]);
    }
    console.log(storedRecruiterData, "storedRecruiterData");
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add Prointern logo
    const logo = new Image();
    logo.src = "./path/to/prointern-logo.jpg"; // Update with the correct path to the logo
    doc.addImage(logo, "JPEG", 10, 10, 50, 20);

    // Add heading
    doc.setFontSize(16);
    doc.text("IT Prointern Report", 10, 40);

    // Add table
    const tableColumn = ["Name", "Task"];
    const tableRows = students.map((student) => [student.name, student.task]);

    // Check if autoTable is attached
    if (typeof doc.autoTable === "function") {
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 50,
      });
    } else {
      console.error(
        "autoTable is not a function. Ensure jspdf-autotable is installed and imported correctly."
      );
    }

    doc.save("IT_Prointern_Report.pdf");
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.task) {
      setStudents([...students, { ...newStudent }]);
      setNewStudent({ name: "", task: "" });
    }
  };

  const handleEditStudent = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const handleApprove = (index) => {
    const updatedData = [...recruiterData];
    updatedData[index].is_approve = 1;
    updatedData[index].is_reject = 0; // Ensure reject is reset
    setRecruiterData(updatedData);
    localStorage.setItem("recruiterFormData", JSON.stringify(updatedData));
  };

  const handleReject = (index) => {
    const updatedData = [...recruiterData];
    updatedData[index].is_reject = 1;
    updatedData[index].is_approve = 0; // Ensure approve is reset
    setRecruiterData(updatedData);
    localStorage.setItem("recruiterFormData", JSON.stringify(updatedData));
  };

  return (
    <div className="internship-admin">
      <h1>Internship Admin Dashboard</h1>

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
          <form onSubmit={handleAddStudent} className="student-form">
            <label>
              Name:
              <input
                type="text"
                value={newStudent.name}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, name: e.target.value })
                }
                placeholder="Enter student name"
              />
            </label>
            <label>
              Task:
              <input
                type="text"
                value={newStudent.task}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, task: e.target.value })
                }
                placeholder="Enter task description"
              />
            </label>
            <button type="submit">Add Student</button>
          </form>

          <table className="student-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={student.name}
                      onChange={(e) =>
                        handleEditStudent(index, "name", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={student.task}
                      onChange={(e) =>
                        handleEditStudent(index, "task", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <button onClick={() => handleDeleteStudent(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={generatePDF} className="generate-pdf-btn">
            Generate PDF
          </button>
        </div>
      )}

      {reportType === "NonIT" && (
        <div
          className="non-it-report"
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <h2>Non-IT Report</h2>

          <table
            className="dynamic-table"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Recruiter Name
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Joining Date
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Email
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Address
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Phone Number
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Candidate Name
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Designation
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Aadhar Card
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Candidate Photo
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  PAN Card
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Payment Screenshot
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Offer Letter
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Educational Certificates
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {recruiterData.map((data, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.recruiterName || "N/A"}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.joiningDate || "N/A"}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.email || "N/A"}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.address || "N/A"}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.phoneNumber || "N/A"}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.candidateName || "N/A"}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.designation || "N/A"}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.aadharCard ? (
                      <a
                        href={`data:application/pdf;base64,${data.aadharCard}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.candidatePhoto ? (
                      <a
                        href={`data:image/jpeg;base64,${data.candidatePhoto}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.panCard ? (
                      <a
                        href={`data:application/pdf;base64,${data.panCard}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.paymentScreenshot ? (
                      <a
                        href={`data:image/png;base64,${data.paymentScreenshot}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.offerLetter ? (
                      <a
                        href={`data:application/pdf;base64,${data.offerLetter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {data.educationalCertificates ? (
                      <a
                        href={`data:application/pdf;base64,${data.educationalCertificates}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    <button
                      style={{
                        marginRight: "10px",
                        backgroundColor: data.is_approve
                          ? "#4CAF50"
                          : "#f0f0f0",
                        color: data.is_approve ? "#fff" : "#000",
                        cursor: "pointer",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                      onClick={() => handleApprove(index)}
                    >
                      {data.is_approve ? "Approved" : "Approve"}
                    </button>
                    <button
                      style={{
                        backgroundColor: data.is_reject ? "#f44336" : "#f0f0f0",
                        color: data.is_reject ? "#fff" : "#000",
                        cursor: "pointer",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                      onClick={() => handleReject(index)}
                    >
                      {data.is_reject ? "Rejected" : "Reject"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InternshipAdmin;
