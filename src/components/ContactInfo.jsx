import React from "react";
import { phoneIcon, emailIcon, classesForIcons } from "./projectContent";
function ContactInfo() {
  return (
    <div className="text-white lg:w-[90%] md:w-[98%] extPhone:w-[90%] smallerPhone:w-[100%]">
      <div>
        <h1
          className="lg:text-[40px] font-thin pb-2 md:text-[34px] sm:text-[28px] mediumPhone:text-[28px] smallerPhone:text-[18px]"
          style={{ fontFamily: "Roboto" }}
        >
          Drop Me a Message
        </h1>

        <p
          className="lagerThenLg:text-[22px] lg:leading-[24px] font-thin lg:text-[20px] md:leading-[22px] md:text-[19px] sm:leading-[20px] sm:text-[17px] mediumPhone:text-[20px] mediumPhone:leading-[22px] smallerPhone:text-[15px] smallerPhone:leading-[16px]"
          style={{ fontFamily: "Josefin Sans" }}
        >
          Thank you for dropping by. Whether you need website development,
          support, or maintenance, I'm here to provide you with the best work
          experience and satisfaction guarantee. Feel free to reach out via
          email or phone, or simply fill out the contact form of your side. I
          look forward to assisting you with your needs and exceeding your
          expectations!
        </p>
      </div>

      <div className="pt-3 flex gap-3 items-center ">
        <div className={classesForIcons.divClass}>
          <img
            src={phoneIcon}
            alt="PhoneIcon"
            className={classesForIcons.imageClass}
          />
        </div>
        <p
          className="lg:text-[20px] font-thin md:text-[18px] mediumPhone:text-[16px] smallerPhone:text-[10px]"
          style={{ fontFamily: "Roboto" }}
        >
          +880 1751-669703
        </p>
      </div>

      <div className="pt-3 flex gap-3 items-center">
        <div className={classesForIcons.divClass}>
          <img
            src={emailIcon}
            alt="PhoneIcon"
            className={classesForIcons.imageClass}
          />
        </div>
        <p
          className="lg:text-[20px] font-thin md:text-[16px] mediumPhone:text-[14px] smallerPhone:text-[10px]"
          style={{ fontFamily: "Roboto" }}
        >
          sabbirkhan.kst178@gmail.com
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
