import React from "react";
import Image from "./Image";
import AboutText from "./AboutText";

function About() {
  return (
    <div className="text-white flex md:flex-row sm:flex-col gap-3 sm:justify-center sm:items-start">
      <Image />
      <AboutText />
    </div>
  );
}

export default About;
