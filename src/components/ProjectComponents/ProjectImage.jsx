import React from "react";
function ProjectImage({image}) {
  return (
    <div className="h-full">
      <div className="w-full bg-gray-300 h-[67vh] rounded">
        <img
          src={image}
          alt="ProjectImage"
          className="w-[97%] h-[96%] m-auto pt-3 rounded-md"
        />
      </div>
    </div>
  );
}

export default ProjectImage;
