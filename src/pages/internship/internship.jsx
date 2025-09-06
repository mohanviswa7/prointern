import React from "react";
import Nav from "../internship/nav.jsx";
import Hero from "../internship/hero.jsx";
import {  useState } from "react";

export default function Internship() {

    const [selected, setSelected]=useState(null);
    function handleCheck(e,course){
       if (e.target.checked) {
      setSelected(course);   // when checked
    } else {
      setSelected(null);     // when unchecked
    }
    }
    


  return (
    <>  
    <Nav selected={selected} handleCheck={handleCheck}/>
    <Hero  selected={selected}/>
    </>
  );
}


