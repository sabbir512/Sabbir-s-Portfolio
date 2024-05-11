import React from "react";

function NavLogo() {
  return (
    <>
      <div id="logo">
        <div
          id="logoContainer"
          className="lg:w-[98px] cursor-pointer lg:h-[48px] md:w-[86px] md:h-[44px] md:pt-[1px] bg-[#EBDFB3] sm:w-[70px] sm:h-[34px] max-w-[640px] w-[65px] h-[30px]"
        >
          <div
            id="logoText"
            className="text-center pt-1  font-[400] lg:text-[28px] md:text-[24px] sm:text-[20px] max-w-[640px] text-[17px]"
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
