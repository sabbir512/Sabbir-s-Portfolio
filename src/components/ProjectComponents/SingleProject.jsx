import React from "react";
import { ProjectContent, ProjectImage } from "./projectIndex";
import {
  realStateImage,
  tributePage,
  newsApp,
  netfilxImg,
  contentObject,
} from "../projectContent";

import {
  realStateWebUrl,
  realStateCodeUrl,
  tributePageWebUrl,
  tributePageCodeUrl,
  newsAppWebUrl,
  newsAppCodeUrl,
  netfilxWebUrl,
  netfilxCodeUrl,
} from "../projectContent";
function SingleProject() {
  return (
    <div className="px-4 lg:px-4 sm:px-8">
      {/*First Project */}
      <div className="grid md:grid-cols-2fr-1fr gap-6 smallerPhone:grid-rows-1 smallerPhone:border-red-500">
        <div>
          <ProjectImage image={realStateImage} />
        </div>
        <div>
          <ProjectContent
            heading="Real State"
            contents={contentObject.realstate}
            webUrl={realStateWebUrl}
            githubUrl={realStateCodeUrl}
          />
        </div>
      </div>

      {/*Second Project*/}
      <div className="grid md:grid-cols-1fr-2fr mt-5 gap-6 smallerPhone:grid-rows-1">
        <div className="order-2 md:order-none">
          <ProjectContent
            heading="Tribute Page"
            contents={contentObject.tributeapp}
            webUrl={tributePageWebUrl}
            githubUrl={tributePageCodeUrl}
          />
        </div>
        <div className="order-1 md:order-none">
          <ProjectImage image={tributePage} />
        </div>
      </div>

      {/*Third Project*/}
      <div className="grid md:grid-cols-2fr-1fr mt-5 gap-6 grid-rows-1">
        <div>
          <ProjectImage image={newsApp} />
        </div>
        <div>
          <ProjectContent
            heading="News App"
            contents={contentObject.newsapp}
            webUrl={newsAppWebUrl}
            githubUrl={newsAppCodeUrl}
          />
        </div>
      </div>
      {/*-------------------*/}

      {/*Fourth Project*/}
      <div className="grid md:grid-cols-1fr-2fr mt-5 gap-6 smallerPhone:grid-rows-1">
        <div className="order-2 md:order-none">
          <ProjectContent
            heading="Netflix Clone"
            contents={contentObject.netflixClone}
            webUrl={netfilxWebUrl}
            githubUrl={netfilxCodeUrl}
          />
        </div>
        <div className="order-1 md:order-none">
          <ProjectImage image={netfilxImg} />
        </div>
      </div>
      {/*-------------------*/}
    </div>
  );
}

export default SingleProject;
