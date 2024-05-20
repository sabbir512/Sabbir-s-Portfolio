import React from "react";
import ServContent from "./ServContent";
function Services() {
  return (
    <div className="pb-5 w-full">
      <h2
        className="text-white font-medium text-center lg:text-[65px] md:text-[50px] sm:text-[40px] mediumPhone:text-[22px] smallerPhone:text-[18px]"
        style={{ fontFamily: "Roboto" }}
      >
        MY SERVICES
      </h2>
      <hr className="sm:w-[44%] mt-3 sm:mb-9 mx-auto smallerPhone:w-[50%] smallerPhone:mb-6" />
      <div className="grid md:grid-cols-2 smallerPhone:grid-cols-1">
        <ServContent />
        <ServContent />
      </div>
    </div>
  );
}

export default Services;
