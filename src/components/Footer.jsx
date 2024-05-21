import React from "react";
import { NavLogo, FooterIcon } from "./index";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#4A35C2] via-[#4B60CB] to-[#4F92D6] pt-4 pb-4">
      <hr className="w-[96%]  mx-auto border-gray-500 border-[1px] border-solid" />
      <div className="mt-5 md:px-16 sm:px-10 flex justify-between items-center extPhone:px-4 smallerPhone:px-2 ">
        <NavLogo />
        <p
          className="text-white md:text-[20px] font-thin sm:text-[18px] extPhone:text-[15px] smallerPhone:text-[10px] "
          style={{ fontFamily: "Roboto" }}
        >
          2024-SDEV|All rights reserved
        </p>

        <FooterIcon />
      </div>
    </div>
  );
}

export default Footer;
