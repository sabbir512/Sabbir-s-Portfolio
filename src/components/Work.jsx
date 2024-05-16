import React from "react";
import WorkContent from "./WorkContent";
//Getting the image and content from projectContent file, because i don't want grow bigger this componnet so that's why i simply export it from another file.
import { realStateImage, tributePage, newsApp } from "./projectContent";
import { contentObject } from "./projectContent";
import {
  realStateWebUrl,
  realStateCodeUrl,
  tributePageWebUrl,
  tributePageCodeUrl,
  newsAppWebUrl,
  newsAppCodeUrl,
} from "./projectContent";
function Work() {
  return (
    <div className="w-[100%]">
      <h2
        className="text-white font-medium text-center lg:text-[65px] md:text-[50px] sm:text-[40px] mediumPhone:text-[20px] smallerPhone:text-[16px]"
        style={{ fontFamily: "Roboto" }}
      >
        MY WORK
      </h2>
      <hr className="sm:w-[34%] mt-3 sm:mb-9 mx-auto smallerPhone:w-[38%] smallerPhone:mb-6" />
      <div className="flex sm:flex-row md:gap-[18px] sm:gap-[10px] justify-center items-center mediumPhone:flex-col mediumPhone:gap-4 smallerPhone:flex-col gap-3">
        <WorkContent
          Image={realStateImage}
          content={contentObject.realstate}
          websiteUrl={realStateWebUrl}
          githubUrl={realStateCodeUrl}
        />
        <WorkContent
          Image={tributePage}
          content={contentObject.tributeapp}
          websiteUrl={tributePageWebUrl}
          githubUrl={tributePageCodeUrl}
        />

        <WorkContent
          Image={newsApp}
          content={contentObject.newsapp}
          websiteUrl={newsAppWebUrl}
          githubUrl={newsAppCodeUrl}
        />
      </div>

      {/*Creating the bottom button*/}
      <div id="bigbutton" className="text-center py-4">
        <a href="#">
          <button
            className="md:text-[38px] font-bold text-white border-[#000D47] border-8 rounded-md border-solid px-5 py-1 ease-in duration-300 hover:bg-orange-500 hover:border-orange-600 sm:text-[30px] mediumPhone:text-[20px] smallerPhone:text-[18px]"
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
