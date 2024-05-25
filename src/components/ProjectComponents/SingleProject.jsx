import React from "react";
import { ProjectContent, ProjectImage } from "./projectIndex";
import {
  realStateImage,
  tributePage,
  newsApp,
  contentObject,
} from "../projectContent";

import {
  realStateWebUrl,
  realStateCodeUrl,
  tributePageWebUrl,
  tributePageCodeUrl,
  newsAppWebUrl,
  newsAppCodeUrl,
} from "../projectContent";
function SingleProject() {
  return (
    <div className="px-4">
      {/*First Project */}
      <div className="grid grid-cols-2fr-1fr gap-6">
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
      <div className="grid grid-cols-1fr-2fr mt-5 gap-6">
        <div>
          <ProjectContent
            heading="Tribute Page"
            contents={contentObject.tributeapp}
            webUrl={tributePageWebUrl}
            githubUrl={tributePageCodeUrl}
          />
        </div>
        <div>
          <ProjectImage image={tributePage} />
        </div>
      </div>

      {/*Third Project*/}
      <div className="grid grid-cols-2fr-1fr mt-5 gap-6">
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
    </div>
  );
}

export default SingleProject;
