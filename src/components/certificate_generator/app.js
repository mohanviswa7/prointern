import React, { useState } from 'react';

const Certificate = () => {
  const [candidateName, setCandidateName] = useState('STEVEN V');
  const [selectedCourse, setSelectedCourse] = useState({
    title: 'Internship on JAWA and Python',
    description: 'A foundational course consisting of 15 structured online lessons covering essential grammar rules and usage.',
    domain: 'Python Development'
  });

  const courses = [
    {
      title: 'Internship on JAWA and Python',
      description: 'A foundational course consisting of 15 structured online lessons covering essential grammar rules and usage.',
      domain: 'Python Development'
    },
    {
      title: 'Web Development Bootcamp',
      description: 'A comprehensive program covering HTML, CSS, JavaScript, and modern frameworks with 20 hands-on projects.',
      domain: 'Web Development'
    },
    {
      title: 'Data Science with Python',
      description: 'An intensive course covering data analysis, machine learning, and visualization with 12 practical modules.',
      domain: 'Data Science'
    },
    {
      title: 'Mobile App Development',
      description: 'Learn to build native and cross-platform mobile applications with 18 structured lessons and live projects.',
      domain: 'Mobile Development'
    },
    {
      title: 'Cloud Computing Fundamentals',
      description: 'Master cloud platforms and DevOps practices through 16 comprehensive modules and real-world scenarios.',
      domain: 'Cloud Computing'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Controls */}
      <div className="max-w-2xl mx-auto mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Certificate Generator</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Candidate Name
            </label>
            <input
              type="text"
              id="name"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter candidate name"
            />
          </div>

          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
              Select Course
            </label>
            <select
              id="course"
              value={selectedCourse.title}
              onChange={(e) => {
                const course = courses.find(c => c.title === e.target.value);
                setSelectedCourse(course);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {courses.map((course, index) => (
                <option key={index} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Certificate */}
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white" style={{ aspectRatio: '1.41', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Background geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Left geometric shapes */}
            <div className="absolute left-0 top-0 w-40 h-full">
              <div className="absolute top-0 left-0 w-20 h-32 bg-gradient-to-br from-pink-300 to-pink-400 transform rotate-45 -translate-x-8 translate-y-8"></div>
              <div className="absolute top-16 left-4 w-16 h-24 bg-gradient-to-br from-green-300 to-green-400 transform -rotate-12"></div>
              <div className="absolute top-32 left-0 w-12 h-20 bg-gradient-to-br from-blue-400 to-blue-500 transform rotate-12 -translate-x-4"></div>
              <div className="absolute top-52 left-8 w-8 h-16 bg-gradient-to-br from-yellow-300 to-orange-300 transform -rotate-45"></div>
            </div>

            {/* Right geometric shapes */}
            <div className="absolute right-0 top-0 w-40 h-full">
              <div className="absolute top-16 right-0 w-24 h-32 bg-gradient-to-bl from-blue-400 to-blue-600 transform -rotate-12 translate-x-8"></div>
              <div className="absolute top-40 right-4 w-20 h-28 bg-gradient-to-bl from-green-300 to-green-500 transform rotate-25"></div>
              <div className="absolute bottom-32 right-0 w-16 h-24 bg-gradient-to-bl from-pink-300 to-pink-500 transform -rotate-25 translate-x-6"></div>
            </div>

            {/* Top and bottom colored bars */}
            <div className="absolute top-0 left-20 right-20 h-1 bg-gradient-to-r from-blue-500 via-green-400 to-pink-400"></div>
            <div className="absolute bottom-0 left-20 right-20 h-1 bg-gradient-to-r from-pink-400 via-green-400 to-blue-500"></div>
            <div className="absolute left-0 top-20 bottom-20 w-1 bg-gradient-to-b from-blue-500 via-green-400 to-pink-400"></div>
            <div className="absolute right-0 top-20 bottom-20 w-1 bg-gradient-to-b from-pink-400 via-green-400 to-blue-500"></div>
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-20 py-16">
            {/* Header */}
            <div className="text-right w-full mb-8">
              <div className="flex items-center justify-end">
                <div className="w-8 h-8 mr-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M20,80 L50,20 L80,80 L50,60 Z" fill="#3B82F6"/>
                    <path d="M35,65 L50,45 L65,65 Z" fill="#F97316"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-orange-500">PROINTERN</span>
              </div>
            </div>

            {/* Certificate title */}
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-gray-800 mb-2">CERTIFICATE</h1>
              <h2 className="text-2xl font-semibold text-blue-600 tracking-widest">OF APPRECIATION</h2>
              <div className="flex justify-center items-center mt-4 space-x-2">
                <span className="text-blue-600 text-2xl">★</span>
                <span className="text-blue-600 text-xl">★</span>
                <span className="text-blue-600 text-2xl">★</span>
                <span className="text-blue-600 text-xl">★</span>
                <span className="text-blue-600 text-2xl">★</span>
              </div>
            </div>

            {/* Certificate content */}
            <div className="text-center mb-8 max-w-4xl">
              <p className="text-lg text-gray-700 mb-4">This is to certify that</p>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">{candidateName}</h3>
              <p className="text-lg text-gray-700 mb-2">
                has successfully completed the Task-Based Internship Program in the
              </p>
              <p className="text-lg text-gray-700 mb-8">
                domain of <span className="font-semibold">{selectedCourse.domain}</span>, at <span className="font-bold">PROINTERN</span> from <span className="font-semibold">29-June-2025</span> to <span className="font-semibold">29-July-2025</span>.
              </p>
            </div>

            {/* Course details */}
            <div className="text-center mb-12 max-w-3xl">
              <h4 className="text-2xl font-bold text-blue-600 mb-4">{selectedCourse.title}</h4>
              <p className="text-base text-gray-700 leading-relaxed">
                {selectedCourse.description}
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end w-full max-w-2xl">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">25/07/2025</p>
                <div className="w-32 h-px bg-gray-400 mb-1"></div>
                <p className="text-sm text-gray-600">Issue Date</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  {/* Signature */}
                  <svg width="120" height="40" viewBox="0 0 120 40" className="mx-auto">
                    <path d="M10,25 Q20,15 30,25 T50,25 Q60,15 70,25 T90,25 Q100,15 110,25" 
                          stroke="#3B82F6" strokeWidth="2" fill="none"/>
                  </svg>
                  {/* Stamp */}
                  <div className="w-16 h-16 mx-auto mt-2 relative">
                    <div className="w-full h-full rounded-full border-2 border-blue-600 flex items-center justify-center">
                      <div className="text-xs text-center text-blue-600 font-bold leading-tight">
                        VERIFIED<br/>PROINTERN
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-32 h-px bg-gray-400 mb-1"></div>
                <p className="text-sm text-gray-600">Signature</p>
              </div>
            </div>

            {/* Serial number */}
            <div className="absolute bottom-8 left-20">
              <p className="text-sm text-gray-600">Serial No:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
