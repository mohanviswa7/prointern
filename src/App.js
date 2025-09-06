import React from "react";
import HomePage from "./components/HomePage.jsx";

 // ✅ use correct case
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ only once

function App() {
  return (
    
    
    <div className="flex justify-center items-center">
      <section className="w-4/5 h-full"></section>
<Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      
      </Routes>
    </Router>
    


    </div>
  );
}

export default App;
