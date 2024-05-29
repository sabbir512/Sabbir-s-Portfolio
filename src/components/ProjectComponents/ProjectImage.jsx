import React from "react";
function ProjectImage({image}) {
  return (
    <div className="h-full">
      <div className="w-full bg-gray-300 lg:h-[67vh] md:h-[50vh] rounded sm:h-[60vh] extPhone:h-[50vh] smallerPhone:h-[35vh] mediumPhone:h-[45vh]">
        <img
          src={image}
          alt="ProjectImage"
          className="md:w-[97%] h-[96%] m-auto pt-3 rounded-md smallerPhone:w-[94%]"
        />
      </div>
    </div>
  );
}

export default ProjectImage;
