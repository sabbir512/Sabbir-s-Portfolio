import React from "react";
import laptopIcon from "../assets/icons/laptop-code-solid.svg";
function ServContent() {
  let cssStyle = {
    backgroundImage: "linear-gradient(#4B30A8, #64A3D6)",
    border: "8px solid transparent",
    borderRadius: "15px",
    backgroundClip: "padding-box, border-box",
    padding: "8px",
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="lg:w-[75%] lg:h-[370px] md:w-[94%] md:h-[390px] w-[75%] h-[370px] smallerPhone:w-[98%] smallerPhone:h-[395px] mediumPhone:w-[85%]"
        id="container"
        style={cssStyle}
      >
        <div className="bg-[#060D2D] w-full h-full">
          <div id="header" className="flex  w-full justify-center sm:pl-8 pt-3 smallerPhone:pl-3">
            {/*For image we have use this div */}
            <div className="sm:w-[100px] sm:h-[90px] smallerPhone:w-[80px] smallerPhone:h-[70px]">
              <div className="bg-white sm:w-[80px] sm:h-[80px] rounded-full flex m-auto smallerPhone:w-[60px] smallerPhone:h-[60px]">
                <img
                  src={laptopIcon}
                  alt="icon"
                  className="sm:h-[43px] sm:w-[52px] m-auto smallerPhone:h-[23px] smallerPhone:w-[32px]"
                />
              </div>
            </div>
            {/*For the head text */}
            <h1
              className="text-white leading-[26px] sm:font-medium md:leading-[26px] md:text-[22px] m-auto pl-3 sm:text-[28px] sm:leading-[36px] mediumPhone:pr-3 md:pr-0 text-[22px] smallerPhone:text-[14px] smallerPhone:font-normal mediumPhone:text-[20px]"
              style={{ fontFamily: "Roboto" }}
            >
              CUSTOM WEBSITE DEVELOPMENT
            </h1>
          </div>

          <div
            id="content"
            className="text-white"
            style={{ fontFamily: "Josefin Sans" }}
          >
            <p className="w-[95%] sm:pl-8 md:leading-[22px] sm:leading-[28px]  pt-3 sm:text-[22px] md:text-[16px] smallerPhone:text-[14px] smallerPhone:pl-3 mediumPhone:text-[18px] mediumPhone:leading-[22px]">
              Ready to establish a unique online presence? I specialize in
              crafting custom websites that are lightning-fast, feature clean
              and efficient code, and are optimized for search engines. With a
              focus on performance, reliability, and SEO, your website will
              stand out from the competition and attract more visitors. Let's
              build something extraordinary together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServContent;
