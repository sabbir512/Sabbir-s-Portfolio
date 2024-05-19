import React from "react";
import ExpContent from "./ExpContent";
function Experience() {
  return (
    <div className="pb-7">
      <h2
        className="text-white font-medium text-center lg:text-[65px] md:text-[50px] sm:text-[40px] mediumPhone:text-[22px] smallerPhone:text-[18px]"
        style={{ fontFamily: "Roboto" }}
      >
        EXPERIENCE
      </h2>
      <hr className="sm:w-[42%] mt-3 sm:mb-9 mx-auto smallerPhone:w-[48%] smallerPhone:mb-6" />

      <ExpContent />
    </div>
  );
}

export default Experience;
