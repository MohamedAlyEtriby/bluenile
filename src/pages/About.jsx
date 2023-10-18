import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs";
import BackGroundPages from "../components/BackGroundPages";

const About = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <BackGroundPages image="Aboutusslide" title="About Us"/>
      <AboutUs />
    </div>
  );
};

export default About;
