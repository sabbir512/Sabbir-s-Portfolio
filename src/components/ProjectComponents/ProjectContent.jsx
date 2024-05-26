import React from "react";
import WorkBtn from "../HomeComponents/WorkBtn";
function ProjectContent({ webUrl, githubUrl, contents, heading }) {
  return (
    <div className="w-full">
      <div className="bg-gray-300 rounded h-[15vh] lg:h-[15vh] md:h-[10vh]">
        <h1
          className="flex justify-center items-center h-full text-5xl lg:text-5xl sm:leading-5xl md:text-3xl extPhone:text-[4xl] smallerPhone:text-2xl"
          style={{
            fontFamily: "Inria Sans",
            fontWeight: "bold",
            color: "mediumblue",
          }}
        >
          {heading}
        </h1>
      </div>

      <p
        className="text-[20px] leading-[28px] pt-4 mb-[5%] h-full flex items-center lg:text-[20px] lg:leading-[28px] md:text-[16px] md:leading-[18px] md:mb-[5%] sm:mb-[3%] sm:leading-[24px] mediumPhone:text-[17px] mediumPhone:leading-[20px] smallerPhone:text-[14px] smallerPhone:leading-[17px]"
        style={{ fontFamily: "Josefin Sans" }}
      >
        {contents}
      </p>

      <div className="flex items-center gap-6">
        <WorkBtn btnText="View Website" url={webUrl} />
        <WorkBtn btnText="Source Code" url={githubUrl} />
      </div>
    </div>
  );
}

export default ProjectContent;
