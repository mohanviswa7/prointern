import React, { useEffect, useState } from "react";

const AdminReport = () => {
  const [adminFiles, setAdminFiles] = useState([]);

  useEffect(() => {
    const files = JSON.parse(localStorage.getItem("adminFiles")) || [];
    setAdminFiles(files);
  }, []);

  // Function to generate a downloadable PDF
  const generatePDF = (file) => {
    const doc = new jsPDF();
    doc.text("Task: " + file.taskKey, 10, 10);
    doc.text("File Name: " + file.fileName, 10, 20);
    doc.text(
      "Uploaded At: " + new Date(file.uploadedAt).toLocaleString(),
      10,
      30
    );
    doc.save(`${file.fileName}.pdf`);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "50px auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Admin Report
      </h1>

      {adminFiles.length === 0 ? (
        <p style={{ textAlign: "center" }}>No files uploaded yet.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Task</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                File Name
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Uploaded At
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {adminFiles.map((file, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {file.taskKey}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {file.fileName}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {new Date(file.uploadedAt).toLocaleString()}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <a
                    href={localStorage.getItem(`${file.taskKey}-sheet`)}
                    download={file.fileName}
                    style={{
                      color: "#2e75c7",
                      textDecoration: "underline",
                      marginRight: "10px",
                    }}
                  >
                    Download Sheet
                  </a>
                  <button
                    onClick={() => generatePDF(file)}
                    style={{
                      background: "#2e75c7",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Download PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminReport;
