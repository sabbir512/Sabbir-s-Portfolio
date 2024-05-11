import React from "react";

function Hero() {
  return (
    <div className="lg:pt-[70px] lg:pl-[89px] sm:pt-[50px] min-w-[80%]  mediumPhone:pt-[36px] max-w-[358px] pt-[4px] pl-[68px]">
      <p
        className="text-white lg:text-[40px] md:text-[38px] sm:text-[34px] mediumPhone:text-[30px] max-w-[358px] text-[20px]"
        style={{ fontFamily: "Roboto" }}
      >
        I’m a
      </p>
      <div
        className="text-white lg:text-[73px] lg:w-[39%]  lg:leading-[78px] md:text-[66px] md:min-w-[75%]  md:leading-[70px] sm:leading-[57px] sm:text-[54px] sm:min-w-[75%] mediumPhone:text-[44px] mediumPhone:leading-[53px] max-w-[358px] text-[28px] leading-[47px] w-[299px]"
        style={{ fontFamily: "Roboto" }}
      >
        FULL-STACK SOFTWARE DEVELOPER
      </div>
    </div>
  );
}

export default Hero;
