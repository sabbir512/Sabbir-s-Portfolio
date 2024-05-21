import React from "react";
import { NavLogo, FooterIcon } from "./index";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#4A35C2] via-[#4B60CB] to-[#4F92D6] pt-4 pb-8">
      <hr className="w-[96%]  mx-auto border-gray-500 border-[1px] border-solid" />
      <div className="mt-5 px-16 flex justify-between items-center">
        <NavLogo />
        <p
          className="text-white text-[20px] font-thin"
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
