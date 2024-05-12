import React from "react";
import Image from "./Image";
import AboutText from "./AboutText";
function About() {
  return (
    <div className="text-white flex gap-3">
      <Image />
      <AboutText />
    </div>
  );
}

export default About;
