import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import JSZip from "jszip";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecruiterForm = ({ taskKey }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    recruiterName: "",
    joiningDate: "",
    email: "",
    address: "",
    phoneNumber: "",
    candidateName: "",
    designation: "",
    aadharCard: null,
    candidatePhoto: null,
    panCard: null,
    paymentScreenshot: null,
    offerLetter: null,
    educationalCertificates: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, [name]: reader.result }); // Store Base64 string
      };
      reader.readAsDataURL(file); // Convert file to Base64
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data with Base64 files
    const updatedFormData = { ...formData };

    // Retrieve existing data from local storage
    const existingData =
      JSON.parse(localStorage.getItem("recruiterFormData")) || [];

    // Ensure existingData is an array
    const newData = Array.isArray(existingData)
      ? [...existingData, updatedFormData]
      : [updatedFormData];
    localStorage.setItem("recruiterFormData", JSON.stringify(newData));

    // Show toast message instead of alert
    toast.success("Form submitted successfully!");

    // Clear the form completely
    setFormData({
      recruiterName: "",
      joiningDate: "",
      email: "",
      address: "",
      phoneNumber: "",
      candidateName: "",
      designation: "",
      aadharCard: null,
      candidatePhoto: null,
      panCard: null,
      paymentScreenshot: null,
      offerLetter: null,
      educationalCertificates: null,
    });

    // Reset file input elements
    document.querySelectorAll("input[type='file']").forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div
      style={{
        background: "#2e75c7",
        padding: "30px",
        borderRadius: "15px",
        maxWidth: "800px",
        margin: "50px auto",
        color: "#000",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "#49BBBD",
          color: "#fff",
          fontWeight: "600",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ← Back
      </button>

      <h1
        style={{ textAlign: "center", marginBottom: "20px", color: "yellow" }}
      >
        Recruiter Form
      </h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px" }}>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Recruiter Name *
          <input
            type="text"
            name="recruiterName"
            required
            onChange={handleInputChange}
            value={formData.recruiterName}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Joining Date
          <input
            type="date"
            name="joiningDate"
            onChange={handleInputChange}
            value={formData.joiningDate}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Email *
          <input
            type="email"
            name="email"
            required
            onChange={handleInputChange}
            value={formData.email}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Address *
          <textarea
            name="address"
            required
            onChange={handleInputChange}
            value={formData.address}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          ></textarea>
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Phone Number
          <input
            type="tel"
            name="phoneNumber"
            onChange={handleInputChange}
            value={formData.phoneNumber}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Candidate Name
          <input
            type="text"
            name="candidateName"
            onChange={handleInputChange}
            value={formData.candidateName}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Designation
          <input
            type="text"
            name="designation"
            onChange={handleInputChange}
            value={formData.designation}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Aadhar Card *
          <input
            type="file"
            name="aadharCard"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            required
            onChange={handleFileUpload}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Candidate Photo
          <input
            type="file"
            name="candidatePhoto"
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            onChange={handleFileUpload}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          PAN Card
          <input
            type="file"
            name="panCard"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Payment Screenshot *
          <input
            type="file"
            name="paymentScreenshot"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleFileUpload}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          />
        </label>

        {taskKey !== "task2" && (
          <label style={{ display: "flex", flexDirection: "column" }}>
            Offer Letter *
            <input
              type="file"
              name="offerLetter"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              required
              onChange={handleFileUpload}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #000",
              }}
            />
          </label>
        )}

        <label style={{ display: "flex", flexDirection: "column" }}>
          Educational Certificates
          <input
            type="file"
            name="educationalCertificates"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileUpload}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#49BBBD",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default RecruiterForm;
