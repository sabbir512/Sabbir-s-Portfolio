import React from "react";
import { ProjectContent, ProjectImage } from "./projectIndex";
function SingleProject() {
  return (
    <div>
      <div className="grid grid-flow-cols-3">
        <div className="grid grid-cols-2fr-1fr gap-4">
          <div className="col-span-2">
            <ProjectImage />
          </div>
        </div>
        <div className="col-span-1">
          <ProjectContent />
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
