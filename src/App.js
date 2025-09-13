import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";         // signup page
import VerifyEmail from "./VerifyEmail";  
import Login from "./Login";          
import HomePage from "./HomePage"; 
import ResetPassword from "./ResetPassword"; 
import Certification from "./Certification";
import InternshipPage from "./InternshipPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/reset" element={<ResetPassword />} /> {/* Added */}
        <Route path="/certification" element={<Certification />} />
        <Route path="/internship" element={<InternshipPage />} />

      </Routes>
    </Router>
  );
}

export default App;
