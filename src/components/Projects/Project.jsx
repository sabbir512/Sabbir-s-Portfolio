import React from "react";
import { ProjectHead, SingleProject } from "../ProjectComponents/projectIndex";

function Project() {
  return (
    <div className="mb-6 min-h-[100vh]">
      <ProjectHead />
      <SingleProject />
    </div>
  );
}

export default Project;
