import React from "react";
import WorkImage from "./WorkImage";
function Work() {
  return (
    <div className="w-[100%]">
      <h2
        className="text-white font-medium text-center text-[65px]"
        style={{ fontFamily: "Roboto" }}
      >
        MY WORK
      </h2>
      <hr className="w-[34%] mt-3 mb-9 mx-auto" />
      <div className="flex flex-row gap-[18px] justify-center items-center">
        <WorkImage />
        <WorkImage />
        <WorkImage />
      </div>

      {/*Creating the bottom button*/}
      <div id="bigbutton" className="text-center py-4">
        <a href="#">
          <button
            className="text-[38px] font-bold text-white border-[#000D47] border-8 rounded-md border-solid px-5 py-1 ease-in duration-300 hover:bg-orange-500 hover:border-orange-600"
            style={{ fontFamily: "Istok Web" }}
          >
            More Projects
          </button>
        </a>
      </div>
    </div>
  );
}

export default Work;
