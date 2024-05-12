import React from "react";
import Hero from "./Hero";
import About from "./About";
function Home() {
  return (
    <div className="w-full">
      <Hero />
     <hr className="w-[94%]  mt-7 mb-16 mx-auto"/>
      <About />
    </div>
  );
}

export default Home;
