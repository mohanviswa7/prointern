import React from "react";
import "./HomePage.css";
import girl from "./assets/girl.png";
import boy from "./assets/boy.png";
import logo from "./assets/logo.png";
import profile from "./assets/profile.png";
import logout from "./assets/logout.png";
import notification from "./assets/notification.png";
import training from "./assets/training.png";
import Ellipse from "./assets/Ellipse.png";
import { Link } from "react-router-dom"; 

function HomePage() {
  return (
    <div className="home-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><Link to="/homepage">Home</Link></li>
          <li><Link to="/internship">Internship</Link></li>
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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            <span className="highlight">Studying</span> Online is now much easier
          </h1>
          <p>
            Prointern is an interesting platform that will teach you in a more
            interactive way
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Join for free</button>
            <button className="btn-secondary">Watch how it works</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={girl} alt="Student" className="hero-girl" />

          {/* Floating cards */}
          <div className="floating-card1">
            {/* Assisted Students */}
            <div className="float-card student-card">
              <div className="icon blue">📅</div>
              <div>
                <h4>250k</h4>
                <p>Assisted Student</p>
              </div>
            </div>
            </div>
            

            {/* Congratulations */}
            <div className="floating-card2">
            <div className="float-card congrat-card">
              <div className="icon orange">✉️</div>
              <div>
                <h4>Congratulations</h4>
                <p>Your admission completed</p>
              </div>
            </div>
            </div>

            {/* User Experience Class */}
             <div className="floating-card3">
            <div className="float-card class-card">
              <img src={Ellipse} alt="Teacher" className="mini-pic" />
              <div>
                <h4>User Experience Class</h4>
                <p>Today at 12.00 PM</p>
                <button className="join-btn">Join Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Wave */}
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,213.3C96,203,192,181,288,160C384,139,480,117,576,122.7C672,128,768,160,864,160C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat"><h2>15K+</h2><p>Students</p></div>
        <div className="stat"><h2>75%</h2><p>Total success</p></div>
        <div className="stat"><h2>35</h2><p>Main questions</p></div>
        <div className="stat"><h2>26</h2><p>Chief experts</p></div>
        <div className="stat"><h2>16</h2><p>Years of experience</p></div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="service-card">
          <div className="icon-wrapper">
            <img src={training} alt="Training" />
          </div>
          <h3>Training</h3>
          <p>
            Simple and secure control of your organization’s financial and legal
            transactions. Send customized invoices and contracts.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-wrapper">
            <img src={require("./assets/internship.png")} alt="Internship" />
          </div>
          <h3>Internship</h3>
          <p>
            Schedule and reserve classrooms at one campus or multiple campuses.
            Keep detailed records of student attendance.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-wrapper">
            <img src={require("./assets/placement.png")} alt="Placement Assistance" />
          </div>
          <h3>Placement Assistance</h3>
          <p>
            Automate and track emails to individuals or groups. Skilline’s built-in
            system helps organize your organization.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="testimonial-text">
          <h5>TESTIMONIAL</h5>
          <h2>What They Say?</h2>
          <p>
            Prointern has got more than 100k positive ratings from our users
            around the world.
          </p>
          <p>Some of the students and teachers were greatly helped by the skiline.</p>
          <p>Are you too? Please give your assessment</p>
          <button className="btn-primary">Write your assessment</button>
        </div>

         <img src={boy} alt="User" className="testimonial-img" />
        <div className="testimonial-box">
          <div className="feedback">
            <p>
              “Thank you so much for your help. It’s exactly what I’ve been
              looking for. You won’t regret it.It really saves me time and effort. Prointern is exactly what our business has been lacking.”
            </p>
            <span>- Gloria Rose</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="newsletter">
          <p>Subscribe to get our Newsletter</p>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
        <p className="footer-links">Careers | Privacy Policy | Terms & Conditions</p>
        <p>© 2025 Prointern Technologies Inc.</p>
      </footer>
    </div>
  );
}

export default HomePage;
