import React from "react";
import ServContent from "./ServContent";
//ServObject is object where i have put the content as object because i don't want to make this component big
import {
  laptopIcon,
  wordpressIcon,
  screwIcon,
  codeIcon,
  servObject,
} from "./projectContent";
function Services() {
  return (
    <div className="pb-7 w-full">
      <h2
        className="text-white font-medium text-center lg:text-[65px] md:text-[50px] sm:text-[40px] mediumPhone:text-[22px] smallerPhone:text-[18px]"
        style={{ fontFamily: "Roboto" }}
      >
        MY SERVICES
      </h2>
      <hr className="sm:w-[44%] mt-3 sm:mb-9 mx-auto smallerPhone:w-[50%] smallerPhone:mb-6" />
      <div className="grid md:grid-cols-2 smallerPhone:grid-cols-1 gap-y-2">
        <ServContent
          iconImage={laptopIcon}
          contentTitle={servObject.customWeb.title}
          content={servObject.customWeb.desc}
        />
        <ServContent
          iconImage={wordpressIcon}
          contentTitle={servObject.wordPress.title}
          content={servObject.wordPress.desc}
        />
        <ServContent
          iconImage={screwIcon}
          contentTitle={servObject.support.title}
          content={servObject.support.desc}
        />
        <ServContent
          iconImage={codeIcon}
          contentTitle={servObject.programming.title}
          content={servObject.programming.desc}
        />
      </div>
    </div>
  );
}

export default Services;
