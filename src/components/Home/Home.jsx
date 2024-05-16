import React from "react";
import { Hero, About, Work } from "../index";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <hr className="w-[94%]  mt-7 mb-16 mx-auto" />
      <About />
      <hr className="w-[94%] mt-7 sm:mb-16 mx-auto smallerPhone:mb-10" />
      <Work />
    </div>
  );
}

export default Home;
