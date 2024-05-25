import React from "react";
import { contentObject } from "../projectContent";
function ProjectContent() {
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
          Real State
        </h1>
      </div>
      <p style={{ fontFamily: "Josefin Sans" }}>{contentObject.realstate}</p>
    </div>
  );
}

export default ProjectContent;
