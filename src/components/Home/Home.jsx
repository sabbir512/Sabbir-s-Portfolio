import React from "react";
import { Hero, About, Work, Experience } from "../index";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <hr className="w-[94%]  mt-7 mb-16 mx-auto" />
      <About />
      <hr className="w-[94%] mt-7 sm:mb-16 mx-auto smallerPhone:mb-10" />
      <Work />
      <hr className="w-[94%] mt-7 sm:mb-16 mx-auto smallerPhone:mb-10" />
      <Experience />
    </div>
  );
}

export default Home;
