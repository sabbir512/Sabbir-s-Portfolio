import React from "react";
import { ProjectHead, SingleProject } from "../ProjectComponents/projectIndex";

function Project() {
  return (
    <div className="pb-6 min-h-[100vh] bg-gray-100">
      <ProjectHead />
      <SingleProject />
    </div>
  );
}

export default Project;
