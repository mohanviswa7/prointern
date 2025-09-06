import React from "react";

import {  FaPowerOff, FaBell } from "react-icons/fa";
// import logo2 from '../7a9ffcf752486682afd2d74121b8b52220dfad46.jpg';



import '../internship/nav.css';
//import 'src/pages/internship/nav.css';

// import logo2 from '../../assets/internship-assets/7a9ffcf752486682afd2d74121b8b52220dfad46.jpg';
// import logo from '../../assets/internship-assets/582fb6b58c98dbc1172a29af039574aa4474e76c (1).png';

// import Icon from '../assets/ChalkboardTeacher.jpg';
export default function Nav({selected, handleCheck}) {

//  const courses=["JAVA","Python","DataScience","AIML","HTML"]

  return ( 
    <>

  

   
   <div className="internship-dropdown">
   <div className="internship-card">
  <div className="card-header">
    {/* <img src={Icon} alt="Web Dev" className="card-icon" /> */}
    <input className="check" type="checkbox" checked={selected==="JAVA"} onChange={(e)=>handleCheck(e,"JAVA")} style={{background:"#A85775", width:"50px",height:"20px", position:"relative",top:"20px", borderColor:"#A85775"}} />
    <span className="card-title">JAVA</span>
  </div>
  <p className="para">Lorem Ipsum is simply dummy text </p>
</div>

<div className="internship-card" style={{position:"relative", left:"-100px"}}>
  <div className="card-header">
    {/* <img src={Icon} alt="Python" className="card-icon" /> */}
    <input className="check" type="checkbox" checked={selected==="Python"} onChange={(e)=>handleCheck(e,"Python")} style={{background:"#A85775", width:"50px",height:"20px", position:"relative",top:"20px", borderColor:"#A85775"}} />
    <span className="card-title">Python</span>
  </div>
  <p className="para">Lorem Ipsum is simply dummy text</p>
</div>

<div className="internship-card">
  <div className="card-header">
    {/* <img src={Icon} alt="Data Science" className="card-icon" /> */}
    <input className="check" type="checkbox"  checked={selected==="DataScience"} onChange={(e)=>handleCheck(e,"DataScience")} style={{background:"#A85775", width:"50px",height:"20px", position:"relative",top:"20px", borderColor:"#A85775"}} />
    <span className="card-title">DATA SCIENCE</span>
  </div>
  <p className="para">Lorem Ipsum is simply dummy text</p>
</div>

<div className="internship-card"  style={{position:"relative", left:"-100px"}}>
  <div className="card-header">
    {/* <img src={Icon} alt="Data Science" className="card-icon" /> */}
    <input className="check" type="checkbox"  checked={selected==="HTML"} onChange={(e)=>handleCheck(e,"HTML")} style={{background:"#A85775", width:"50px",height:"20px", position:"relative",top:"20px", borderColor:"#A85775"}} />
    <span className="card-title">HTML</span>
  </div>
  <p className="para">Lorem Ipsum is simply dummy text </p>
</div>

<div className="internship-card" style={{position:"relative", left:"100px"}}>
  <div className="card-header">
    {/* <img src={Icon} alt="Data Science" className="card-icon" /> */}
    <input className="check" type="checkbox"  checked={selected==="AIML"} onChange={(e)=>handleCheck(e,"AIML")} style={{background:"#A85775", width:"50px",height:"20px", position:"relative",top:"20px", borderColor:"#A85775"}} />
    <span className="card-title">AI/ML</span>
  </div>
  <p className="para">Lorem Ipsum is simply dummy text</p>
</div>
{selected &&(
<div  style={{position:"relative", top:"-130px", left:"100px", display:"flex", flexDirection:"column", gap:"5px"}}>
  <div className="internship-card">
  <div className="card-header">
    {/* <img src={Icon} alt="Data Science" className="card-icon" /> */}
    <input className="check" type="checkbox" style={{background:"#A85775", width:"50px",height:"20px", position:"relative",top:"20px", borderColor:"#A85775"}} />
    <span className="card-title">PAID</span>
  </div>
  <p className="para">Lorem Ipsum is simply dummy text </p>
</div>
<div className="internship-card">
  <div className="card-header">
    {/* <img src={Icon} alt="Data Science" className="card-icon" /> */}
    <input className="check" type="checkbox" style={{background:"#A85775", width:"50px",height:"20px", position:"relative",top:"20px", borderColor:"#A85775"}} />
    <span className="card-title">UNPAID</span>
  </div>
  <p className="para">Lorem Ipsum is simply dummy text </p>
</div>
</div>
)}

     <button className="nav-btn" style={{position:"absolute",top:"170px",left:"400px"}}>Submit

    </button>
            </div>
            
          
    
    </>
  );
  }

