import React from "react";
import { faceBookIcon, linkedinIcon, instagramIcon } from "./projectContent";
function FooterIcon() {
  return (
    <div>
      <div id="socialMedia" className="text-white grid grid-cols-3 gap-8">
        <a href="https://www.google.com" target="_blank">
          <div className="lagerThenLg:w-[55px] lagerThenLg:h-[55px] rounded-lg bg-[#3E73DB] flex lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px]  mediumPhone:w-[40px] mediumPhone:h-[40px] smallerPhone:w-[30px] smallerPhone:h-[30px]">
            <img
              src={faceBookIcon}
              alt="PhoneIcon"
              className="lg:w-[22px] lg:h-[25px] m-auto sm:w-[17px] sm:h-[20px] mediumPhone:w-[22px] mediumPhone:h-[25px] smallerPhone:w-[14px]  smallerPhone:h-[17px]"
            />
          </div>
        </a>

        <a href="https://www.google.com" target="_blank">
          <div className="lagerThenLg:w-[55px] lagerThenLg:h-[55px] rounded-lg bg-[#3E73DB] flex lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px]  mediumPhone:w-[40px] mediumPhone:h-[40px] smallerPhone:w-[30px] smallerPhone:h-[30px]">
            <img
              src={linkedinIcon}
              alt="PhoneIcon"
              className="lg:w-[22px] lg:h-[25px] m-auto sm:w-[17px] sm:h-[20px] mediumPhone:w-[22px] mediumPhone:h-[25px] smallerPhone:w-[14px]  smallerPhone:h-[17px]"
            />
          </div>
        </a>

        <a href="https://www.google.com" target="_blank">
          <div className="lagerThenLg:w-[55px] lagerThenLg:h-[55px] rounded-lg bg-[#3E73DB] flex lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px]  mediumPhone:w-[40px] mediumPhone:h-[40px] smallerPhone:w-[30px] smallerPhone:h-[30px]">
            <img
              src={instagramIcon}
              alt="PhoneIcon"
              className="lg:w-[22px] lg:h-[25px] m-auto sm:w-[17px] sm:h-[20px] mediumPhone:w-[22px] mediumPhone:h-[25px] smallerPhone:w-[14px]  smallerPhone:h-[17px]"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default FooterIcon;
