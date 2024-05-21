import React from "react";
import AboutButton from "./AboutButton";

function AboutText() {
  const handleHireMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    //making responsive
    <div>
      <div
        className="lg:text-[30px] lagerThenLg:text-[35px] md:text-[24px] md:ml-0 md:max-w-[50%] sm:text-[30px] sm:mr-[351px] sm:ml-[7%] mediumPhone:ml-[5%]  smallerPhone:ml-[5%]"
        style={{ fontFamily: "Inria Sans" }}
      >
        ABOUT ME
      </div>
      <p
        className="lg:text-[23px] lg:mw-[97%] lg:leading-[32px] lagerThenLg:text-[27px] md:text-[17px] md:w-[80%]  md:leading-[24px] md:ml-0   sm:text-[26px] sm:w-[90%] sm:leading-[27px] sm:ml-[7%] mediumPhone:ml-[5%] mediumPhone:w-[86%]  smallerPhone:text-[15px] smallerPhone:w-[90%] smallerPhone:ml-[5%] "
        style={{ fontFamily: "Josefin Sans" }}
      >
        Hello, I'm Sabbir Arnob, currently pursuing my BBA at Panjab Technical
        Institute (PTU). In late 2022, I discovered my passion for
        problem-solving and creating innovative solutions. Building something
        useful brings immense satisfaction, which led me to delve into coding
        and website development. Now, I'm well-versed in the latest technologies
        and capable of working independently or collaboratively to bring your
        dream projects to life. If you choose to work with me, rest assured,
        you're in safe hands.
      </p>

      <div className="flex gap-4 md:ml-0 sm:ml-[7%] mediumPhone:ml-[5%] smallerPhone:ml-[5%]">
        <AboutButton
          text="HIRE ME"
          bgColor="bg-blue-500"
          hoverColor="hover:bg-orange-500"
          onclick={handleHireMe}
        />
        <AboutButton
          text="RESUME"
          bgColor="bg-[#060D2D]"
          hoverColor="hover:bg-blue-600"
        />
      </div>
    </div>
  );
}

export default AboutText;
