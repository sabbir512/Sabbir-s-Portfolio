import React from "react";

function NavLogo() {
  return (
    <>
      <div id="logo">
        <div
          id="logoContainer"
          className="lg:w-[98px] cursor-pointer lg:h-[48px] md:w-[86px] md:h-[44px] md:pt-[1px] bg-[#EBDFB3] sm:w-[70px] sm:h-[34px]  mediumPhone:w-[65px] mediumPhone:h-[30px]"
        >
          <div
            id="logoText"
            className="text-center lg:pt-[2px] md:pt-[3px] font-[400] lg:text-[28px] md:text-[24px] sm:text-[22px]  mediumPhone:text-[20px] mediumPhone:pt-0 max-w-[358px] text-[14px]"
            style={{ fontFamily: "Italiana" }}
          >
            SDEV
          </div>
        </div>
      </div>
    </>
  );
}

export default NavLogo;
