
import React from "react";
import "./HomePage.css"; // inside HomePage.jsx

import logo from "../assets/prointern logo.jpg";
import stevan from "../assets/stevan.jpg";
import Group from "../assets/Mask Group.jpg";
import prointern from"../assets/prointern.jpg";


 // make sure css is imported

export default function HomePage() {
  return (
       
    <div>
      {/* ================= navbar================= */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="ProIntern Logo" />
        </div>
        <nav>
          <ul>
           <li>Home</li>

            <li>Internship▾</li>
            <li>Courses ▾</li>
            <li>Competitive Exam▾</li>
            <li>Placement Assistance▾</li>
            <li>Certification▾</li>
          </ul>
        </nav>

        <div className="header-right">
      <span className="bell-icon">🔔</span>
          <span className="user">Steven</span>
          <img src={stevan} alt="Stevan" className="user-avatar" />
          <button className="logout-btn" aria-label="Logout">
            ⏻
          </button>
        </div>
      </header>

      {/* ================= Hero Section ================= */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            <span className="highlight">Studying</span> Online is now much
            easier
          </h1>
          <p>
            Prointern is an interesting platform that will teach you in a more
            interactive way
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Join for free</button>
            <button className="btn-secondary">▶ Watch how it works</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://totc.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.4596723e.png&w=1920&q=75"
            alt="Student"
          />

          {/* Floating Cards */}
          <div className="floating-card card-top">
            <p>📅 250k Assisted Student</p>
          </div>

          <div className="floating-card card-middle">
            <p>🎉 Congratulations</p>
            <span>Your admission completed</span>
          </div>

          <div className="floating-card card-bottom">
            <p>👩‍🎓 User Experience Class</p>
            <span>Today at 12.00 PM</span>
            <button className="join-btn">Join Now</button>
          </div>
        </div>
      </section>

      {/* ================= Stats Section ================= */}
      <section className="stats-section">
        <div className="stat-box">
          <h2>15K+</h2>
          <p>Students</p>
        </div>
        <div className="stat-box">
          <h2>75%</h2>
          <p>Total success</p>
        </div>
        <div className="stat-box">
          <h2>35</h2>
          <p>Main questions</p>
        </div>
        <div className="stat-box">
          <h2>26</h2>
          <p>Chief experts</p>
        </div>
        <div className="stat-box">
          <h2>16</h2>
          <p>Years of experience</p>
        </div>
      </section>

      {/* ================= Services Section ================= */}
      <section className="services-section">
        <h3 className="section-subtitle">All-in-One, One Step.</h3>
        <p className="section-desc">
          Prointern is a powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
<br></br>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-circle">📘</div>
            <h4>Training</h4>
            <p>
              Expert-level training with live sessions and mentorship to
              strengthen your skills.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-circle">💼</div>
            <h4>Internship</h4>
            <p>
              Gain real-world experience by working on industry-level projects
              under expert guidance.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-circle">🎯 </div>
            <h4>Placement Assistance</h4>
            <p>
              We assist students with job opportunities and career development
              programs.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Testimonials Section ================= */}
      <section className="testimonials-section">
  <div className="testimonial-left">
    <p className="subtitle"></p>
    <h2>What They Say?</h2>
    <p>
      Prointern has got more than 100k positive ratings from our users worldwide. 
      Students and teachers greatly benefit from this platform.
    </p>
    <p className="assessment">
      Are you too? Please give your assessment
    </p>
    <br></br>
    <button className="assessment-btn">
      Write your assessment <span>→</span>
    </button>
  </div>

  <div className="testimonial-right">
    <img src={Group} alt="Student" className="testimonial-img" />
    <div className="testimonial-card">
      <p>
        “Thank you so much for your help. It’s exactly what I’ve been looking for. 
        Prointern saves me time and effort.”
      </p>
      <h4>Gloria Rose</h4>
      <p className="stars">⭐⭐⭐⭐⭐</p>
    </div>
  </div>
</section>


      {/* ================= Footer Section ================= */}
      <footer className="footer">
  <div className="footer-top">
    <div className="footer-brand">
      <img src={prointern} alt="ProIntern" className="footer-logo" />
      <span>Virtual Class for Zoom</span>
    </div>
  </div>

  <div className="footer-newsletter">
    <h3>Subscribe to get our Newsletter</h3>
    <div className="newsletter-form">
      <input type="email" placeholder="Your Email" />
      <button>Subscribe</button>
    </div>
  </div>
<div className="footer-links">
  <a href="/careers">Careers</a>
  <a href="/privacy">Privacy Policy</a>
  <a href="/terms">Terms & Conditions</a>
</div>

  <div className="footer-bottom">
    <p>© 2025 Prointern Technologies Inc.</p>
  </div>
</footer>
</div>
    
  );
}
