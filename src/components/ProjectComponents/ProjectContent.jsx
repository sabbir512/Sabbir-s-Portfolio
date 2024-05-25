import React from "react";
import WorkBtn from "../HomeComponents/WorkBtn";
function ProjectContent({ webUrl, githubUrl, contents, heading }) {
  return (
    <div className="w-full">
      <div className="bg-gray-300 rounded h-[15vh]">
        <h1
          className="flex justify-center items-center h-full text-5xl"
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
        className="text-[20px] leading-[28px] pt-4 mb-[5%] h-full flex items-center"
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
