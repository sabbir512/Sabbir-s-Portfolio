import React from "react";
import {
  Hero,
  About,
  Work,
  Experience,
  Services,
  Contact,
  Footer,
} from "../index";

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
      <hr className="w-[94%] mt-7 sm:mb-16 mx-auto smallerPhone:mb-10" />
      <Services />
      <p className="pt-10"></p>
      <Contact />
     
      <Footer />
    </div>
  );
}

export default Home;
