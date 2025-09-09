import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CoursesPage.css'
import circleImg from '../assets/image.png';
import personImg from '../assets/person.png';

//import personImg from "../../assets/internship-assets/person.png";

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!selectedCourse || !selectedType) return
    if (selectedType === 'paid') {
      navigate('/paid-courses', { state: { course: selectedCourse } })
    } else if (selectedType === 'unpaid') {
      navigate('/unpaid-courses', { state: { course: selectedCourse } })
    }
  }

  const courses = {
    java: { title: 'JAVA', desc: 'Master Java to build web & apps' },
    python: { title: 'PYTHON', desc: 'Master Python programming' },
    datascience: { title: 'DATA SCIENCE', desc: 'Explore data-driven insights' },
    html: { title: 'HTML', desc: 'Learn the basics of web' },
    aiml: { title: 'AI / ML', desc: 'Artificial Intelligence & ML' },
  }

  return (
    <div className="container">
      <div className="mainContent">
        <div className="leftContent">
          <div className="courseSelectionBox">
            <div className="courseRow">
              {['java','python'].map((id) => (
                <label key={id} className="courseCard">
                  <input
                    type="checkbox"
                    checked={selectedCourse === id}
                    onChange={() => setSelectedCourse(id)}
                  />
                  <div className="courseTextContainer">
                    <p className="courseTitle">{courses[id].title}</p>
                    <p className="courseDesc">{courses[id].desc}</p>
                  </div>
                </label>
              ))}

              <label className="typeButton">
                <input
                  type="checkbox"
                  checked={selectedType === 'paid'}
                  onChange={() => setSelectedType('paid')}
                />
                <span className="typeText">PAID</span>
              </label>
            </div>

            <div className="courseRow">
              {['datascience','html'].map((id) => (
                <label key={id} className="courseCard">
                  <input
                    type="checkbox"
                    checked={selectedCourse === id}
                    onChange={() => setSelectedCourse(id)}
                  />
                  <div className="courseTextContainer">
                    <p className="courseTitle">{courses[id].title}</p>
                    <p className="courseDesc">{courses[id].desc}</p>
                  </div>
                </label>
              ))}

              <label className="typeButton">
                <input
                  type="checkbox"
                  checked={selectedType === 'unpaid'}
                  onChange={() => setSelectedType('unpaid')}
                />
                <span className="typeText">UNPAID</span>
              </label>
            </div>

            <div className="courseRow centeredRow">
              <label className="courseCard aimlCard">
                <input
                  type="checkbox"
                  checked={selectedCourse === 'aiml'}
                  onChange={() => setSelectedCourse('aiml')}
                />
                <div className="courseTextContainer">
                  <p className="courseTitle">{courses.aiml.title}</p>
                  <p className="courseDesc">{courses.aiml.desc}</p>
                </div>
              </label>

              <button
                className={`submitButton ${!selectedCourse || !selectedType ? 'disabled' : ''}`}
                disabled={!selectedCourse || !selectedType}
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </div>

          <div className="infoBox">
            <h3 className="sectionTitle">Paid Courses</h3>
            <p className="point">• Exclusive Learning Material – Access to high-quality, officially curated course videos hosted on the platform.</p>
            <p className="point">• No Ads, No Interruptions – Smooth playback directly from the official website.</p>
            <p className="point">• Structured Learning Path – Lessons are released in sequence to match the curriculum.</p>

            <h3 className="sectionTitle unpaidTitle">Unpaid Courses</h3>
            <p className="point">• Introductory Learning Material – Access to basic topics and sample lessons.</p>
            <p className="point">• Open Access – No payment or registration required.</p>
            <p className="point">• Community Support – Doubt clearing via discussion forums or public Q&amp;A.</p>
            <p className="point">• Limited Resources – Basic notes or public documents only.</p>
            <p className="point">• No Certification – These courses are for self-paced learning only.</p>
          </div>
        </div>

        <div className="rightContent">
          <div className="imageContainer">
            <img src={circleImg} alt="circle" className="circleImage" />
            <img src={personImg} alt="person" className="personImage" />

          </div>
        </div>
      </div>
    </div>
  )
}
