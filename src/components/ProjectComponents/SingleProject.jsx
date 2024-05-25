import React from "react";
import { ProjectContent, ProjectImage } from "./projectIndex";
function SingleProject() {
  return (
    <div className="px-4">
    <div className="grid grid-cols-2fr-1fr">
      <div>
        <ProjectImage />
      </div>
      <div>
        <ProjectContent />
      </div>
    </div>
  </div>
  );
}

export default SingleProject;
