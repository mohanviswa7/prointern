import React, { useState } from "react";
// import Java from '../assets/d3a37060c6bccc34fd4e6485ccd099c8b1eb1165.png';

import Java from '../../assets/internship-assets/d3a37060c6bccc34fd4e6485ccd099c8b1eb1165.png';

import Book1 from '../../assets/internship-assets/59e91cde877aacb096082025aaa7528e15f2789e.png';
import Book2 from '../../assets/internship-assets/a6a75cf5ca47b6a4fceb75f355da0105034713c7.png';

import Pythonlogo from '../../assets/internship-assets/py.jpeg';
import AIMLlogo from '../../assets/internship-assets/aiml.jpeg';
import DSlogo from '../../assets/internship-assets/datascience.jpeg';
import Htmllogo from '../../assets/internship-assets//html.png';


// import { useNavigate } from "react-router-dom";




export default function Hero({selected}) {

const titles={
  JAVA:"Welcome to Java Course",
  Python:" Welcome to Python Course",
  DataScience:"Welcome to DataScience Course",
  AIML:"Welcome to AIML Course",
  HTML:"Welcom to HTML Course"

};

const logos={
   JAVA:Java,
  Python:Pythonlogo,
  DataScience:DSlogo,
  AIML:AIMLlogo,
  HTML:Htmllogo
}

const coursecontent1={
  JAVA:"Working with Loops",
  Python:"Working with Numpy",
  DataScience:"Working with...",
  AIML:"Working with Machine Learning",
  HTML:"Working with HTML tags"
}
const coursecontent2={
  JAVA:"Working with funtions",
  Python:"Working with built-in-funtions",
  DataScience:"Working with...",
  AIML:"Working with Machine Learning",
  HTML:"Working with HTML tags"
}
const coursecontent3={
  JAVA:"Working with OOPS",
  Python:"Working with OOPS",
  DataScience:"Working with...",
  AIML:"Working with Machine Learning",
  HTML:"Working with HTML tags"
}


 

   return (<>

    <style>{`
    .container1 {
        width: 500px;
        height: 400px;
        
        background-size: cover;
        background-position: center;
        position: relative;
        top: 300px;
        left: 80px;
        padding: 10px;
        border-radius: 10px;
    }
    .container1 h1 {
        text-align: end;
        font-size: 50px;
    }
    .Boxs {
        display: flex;              /* ✅ use flex */
        flex-direction: column;     /* ✅ stack vertically */
        gap: 20px;                  /* ✅ spacing between boxes */
        margin-top: 20px;
    }
    .box1 {
        width: 100%;
        height: 70px;
        border: 2px solid white;
        border-radius: 10px;
        padding: 10px;
        
        
        position: relative;
    }
    .child-box1 {
        width: 120px;
        height: 30px;
        border-radius: 5px;
        background-color: white;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        position: absolute;
        top: 10px;
        right: 10px;
    }



      
       .course-container {
          width: 400px;
          
          border-radius: 12px;
          padding: 20px;
          font-family: Arial, sans-serif;
          position: relative;
          float: right;
          left: -350px;
            top: -90px;
          
        }
        .course-container h3 {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 5px;
          color:white;
        }
        .progress {
          font-size: 13px;
          color: #49BBBD;
          margin-bottom: 20px;
        }

         .progress-bar {
          display: flex;
          gap: 5px;
          margin: 10px 0 20px 0;
        }
        .progress-segment {
          flex: 1;
          height: 5px;
          border-radius: 3px;
          background: #d3d3d3;
        }
        .progress-segment.active {
          background: #00b4d8; /* teal blue like screenshot */
        }

        .lesson-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f9f9f9;
          padding: 12px 15px;
          border-radius: 8px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .lesson-box:hover {
          background: #eef7ff;
        }
        .lesson-left {
          display: flex;
          flex-direction: column;
        }
        .lesson-left p {
          margin: 0;
          font-size: 15px;
          font-weight: 500;
        }
        .lesson-left span {
          font-size: 13px;
          color: gray;
        }
        .lesson-time {
          font-size: 13px;
          color: #555;
        } 




 .book-section {
  background: #fff;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 280px;
  position:absolute;   
  top: 120px;
  left: 78%;
}

.book-section h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.book-container {
  display: flex;
  gap: 10px;
}

.book-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  text-align: center;
  flex: 1;
  padding: 8px;
}

.book-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}

.book-content {
  margin-top: 6px;
}

.book-content p {
  font-size: 14px;
  font-weight: 500;
  margin: 5px 0;
}

.price {
  font-size: 14px;
  font-weight: bold;
  color:#49BBBD;
}

    `}</style>
    
    <div className="container1" style={{  backgroundImage: selected ? `url(${logos[selected]})` : "none",}}>
        <h1>01</h1>
        <p style={{ color: "white", fontSize:"20px" }}>
  {selected ? titles[selected] : ""}
</p>

        <div className="Boxs">
            <div className="box1">
                <h4>Understanding  Principles</h4>
                <p>Lesson 01</p>
                <div className="child-box1">
                    ⏱ 45 Minutes
                </div>
            </div>

            <div className="box1" style={{backgroundColor:"#f3f3f39a"}}>
                <h4>Importance of  methods </h4>
                <p>Lesson 02</p>
                <div className="child-box1">
                    ⏱ 1 Hour
                </div>
            </div>

            <div className="box1">
                <h4>The Role of  in IT Sector</h4>
                <p>Lesson 03</p>
                <div className="child-box1">
                    ⏱ 45 Minutes
                </div>
            </div>
        </div>
    </div>

 
         <div className="course-container">
        <h3>Course Contents</h3>
        <p className="progress">2/5 COMPLETED</p>
        
        {/* Progress bar */}
        <div className="progress-bar">
          <div className="progress-segment active"></div>
          <div className="progress-segment active"></div>
          <div className="progress-segment"></div>
          <div className="progress-segment"></div>
          <div className="progress-segment"></div>
        </div>

        <div className="lesson-box">
          <div className="lesson-left">
            <p>Get Started</p>
            <span>⏱ 1 Hour </span>
          </div>
          <div className="lesson-time">5 Lessons</div>
        </div>

        <div className="lesson-box">
          <div className="lesson-left">
            <p>{selected ? coursecontent1[selected]:"...."}</p>
            <span>⏱ 59:00</span>
          </div>
          <div className="lesson-time">13 Lessons</div>
        </div>

        <div className="lesson-box">
          <div className="lesson-left">
            <p>{selected ? coursecontent2[selected]:""}</p>
            <span>⏱ 1 Hour </span>
          </div>
          <div className="lesson-time">4 Lessons</div>
        </div>

        <div className="lesson-box">
          <div className="lesson-left">
            <p>{selected ? coursecontent3[selected]:""}</p>
            <span> ⏱ 12:54</span>
          </div>
          <div className="lesson-time">5 Lessons</div>
        </div>
      </div>


       <div className="book-section">
      <h3>Book for you</h3>
      <div className="book-container">
        {/* Card 1 */}
        <div className="book-card">
          <img
            src={Book1}
            alt="Jawa Benefits"
            className="book-image"
          />
          <div className="book-content">
            <p>All Benefits of JAWA</p>
            <span className="price">$24</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="book-card">
          <img
            src={Book2}
            alt="ML Benefits"
            className="book-image"
          />
          <div className="book-content">
            <p>All Benefits of ML</p>
            <span className="price">$24</span>
          </div>
        </div>
      </div>
    </div>


    </>);
}


