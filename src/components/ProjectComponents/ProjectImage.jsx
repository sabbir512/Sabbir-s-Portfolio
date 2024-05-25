import React from "react";
import { realStateImage } from "../projectContent";
function ProjectImage() {
  return (
    <div className="h-full">
      <div className="w-[94%] bg-gray-300 h-[67vh] rounded">
        <img
          src={realStateImage}
          alt="ProjectImage"
          className="w-[97%] h-[96%] m-auto pt-3 rounded-md"
        />
      </div>
    </div>
  );
}

export default ProjectImage;
