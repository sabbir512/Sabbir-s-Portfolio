import React from "react";
import realStateImage from "../assets/projectImage/realstate.png";
function WorkImage() {
  return (
    <div>
      <div id="container" className="w-[414px] h-[513px] bg-[#000D47] relative">
        <div className="w-[414px] h-[261px]" id="image">
          <img src={realStateImage} alt="" />
          {/*Adding Content After image*/}
          <div
            id="content"
            className="text-white text-[19px] pt-2 px-2 leading-[32px]"
          >
            <p style={{ fontFamily: "Josefin Sans" }}>
              This single-page website is a testament to my skills in
              JavaScript, CSS, and HTML. Utilizing Swiper.js for animations
              added an extra layer of dynamism to the project. While the journey
              had its challenges, overcoming them was immensely rewarding, and I
              gained valuable insights along the way.
            </p>
          </div>
          {/*Adding Buttons*/}
          <div
            id="button "
            className="text-white flex items-center px-2 gap-8 pt-3 absolute bottom-[9px]"
          >
            <a href="#" className="">
              <button
                className="text-[16px] border-[#113080] border-4 border-solid px-3 py-2 rounded hover:bg-blue-600  ease-in duration-500"
                style={{ fontFamily: "Istok Web" }}
              >
                View Website
              </button>
            </a>

            <a href="#">
              <button
                className="text-[16px] border-[#113080] border-4 border-solid px-3 py-2 rounded hover:bg-blue-600  ease-in duration-500"
                style={{ fontFamily: "Istok Web" }}
              >
                Source Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkImage;
