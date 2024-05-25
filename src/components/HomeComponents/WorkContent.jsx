import React from "react";
import WorkBtn from "./WorkBtn";
function WorkContent({ Image, content, websiteUrl, githubUrl }) {
  return (
    <div>
      <div
        id="container"
        className="max-w-[100%] w-full lg:h-[520px] bg-[#000D47] relative lagerThenLg:h-[550px] md:h-[390px] sm:h-[385px] mediumPhone:h-[510px] smallerPhone:h-[360px]"
      >
        <div className="aspect-w-3 aspect-h-4" id="image">
          <img
            src={Image}
            alt="ProjectImage"
            className="object-cover lagerThenLg:h-[240px] lg:h-[200px] md:h-[110px] w-full sm:h-[90px]"
          />
          {/*Adding Content After image*/}
          <div
            id="content"
            className="text-white lg:text-[17px] pt-2 px-2 lg:leading-[29px] lagerThenLg:text-[20px] lagerThenLg:leading-[30px] md:text-[15px] md:leading-[20px] sm:text-[14px] sm:leading-[18px]  mediumPhone:text-[17px] mediumPhone:leading-[24px] mediumPhone:w-[95%] smallerPhone:text-[14px] smallerPhone:leading-[18px]"
          >
            <p style={{ fontFamily: "Josefin Sans" }}>{content}</p>
          </div>
          {/*Adding Buttons*/}
          <div
            id="button "
            className="text-white flex items-center px-2 lg:gap-8 md:gap-6 pt-3 absolute bottom-[3%] sm:gap-4 mediumPhone:gap-6 smallerPhone:gap-5"
          >
            <WorkBtn url={websiteUrl} btnText="View Website" />
            <WorkBtn url={githubUrl} btnText="Source Code" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkContent;
