import React from "react";

function ProjectHead() {
  return (
    <div >
      <h1 className="text-[40px] font-thin pt-5 text-center" style={{ fontFamily: "Roboto" }}>My Projects</h1>
      <hr className="border-gray-500 border-[1px] border-solid lg:w-[20%] md:w-[28%] m-auto mb-5 smallerPhone:w-[90%] mediumPhone:w-[70%] extPhone:w-[55%] sm:w-[45%]"/>
      <p className="w-[80%] m-auto mb-8"  style={{ fontFamily: "Josefin Sans" }}>I have worked on several projects in the past that were instrumental in enhancing my skills and building my logical thinking. These projects provided great learning opportunities. Feel free to visit the websites or check out the code repositories</p>
    </div>
  );
}

export default ProjectHead;
