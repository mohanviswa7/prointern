import React from "react";
import "./InternshipPage.css";
import logo from "./assets/logo.png";
import profile from "./assets/profile.png";
import logout from "./assets/logout.png";
import notification from "./assets/notification.png";
import { Link } from "react-router-dom"; 
import bookgirl from "./assets/bookgirl.png";
import ml from "./assets/ml.png";

export default function InternshipPage() {
  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><Link to="/homepage">Home</Link></li>
          <li><Link to="/internship">InternshipPage</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/competitive-exam">Competitive Exam</Link></li>
          <li><Link to="/placement">Placement Assistance</Link></li>
          <li><Link to="/certification">Certification</Link></li> 
        </ul>
        <div className="nav-actions">
          <img src={notification} alt="Notification" className="icon" />
          <span className="username">Steven</span>
          <img src={profile} alt="Profile" className="profile-pic" />
          <img src={logout} alt="Logout" className="icon" />
        </div>
      </nav>

      {/* Top Course Selection */}
      <div className="course-selector">
        <div className="course-card">JAVA</div>
        <div className="course-card">PYTHON</div>
        <div className="course-card">DATA SCIENCE</div>
        <div className="course-card">HTML</div>
        <div className="course-card">AI/ML</div>
        <button className="submit-btn">Submit</button>
      </div>

      {/* Main Section */}
      <div className="main-section">
        {/* Left - Course Intro */}
        <div className="left-card">
          <h2>Introduction to JAWA</h2>
          <div className="lesson">
            <span>Understanding JAVA Principles</span>
            <span>45 Minutes</span>
          </div>
          <div className="lesson">
            <span>Importance of JAWA Methods</span>
            <span>1 Hour</span>
          </div>
          <div className="lesson">
            <span>The Role of JAWA in IT Sector</span>
            <span>45 Minutes</span>
          </div>
        </div>

        {/* Right - Course Contents & Books */}
        <div className="right-section">
          <div className="content-card">
            <h3>Course Contents</h3>
            <p className="progress">2/5 Completed</p>
            <div className="lesson">Get Started <span>1 Hour</span></div>
            <div className="lesson">Work with Numpy <span>59:00</span></div>
            <div className="lesson">Using Illustrator <span>1 Hour</span></div>
            <div className="lesson">What is Pandas? <span>12:54</span></div>
          </div>

          <div className="content-card">
            <h3>Book for you</h3>
            <div className="books">
              <div className="book-card">
                <img src={bookgirl} alt="Java Book" />
                <p>All Benefits of JAWA</p>
                <span className="price">$24</span>
              </div>
              <div className="book-card">
                <img src={ml} alt="ML Book" />
                <p>All Benefits of ML</p>
                <span className="price">$24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
