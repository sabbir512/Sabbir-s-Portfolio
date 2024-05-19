import React from "react";
import ExpImage from "./ExpImage";
import {
  htmlLogo,
  cssLogo,
  tailwindLogo,
  javaScriptLogo,
  reactLogo,
  typeScriptLogo,
  nodeLogo,
  expressJsLogo,
  figmaLogo,
  mongoLogo,
  gitLogo,
  githubLogo,
} from "./projectContent";
function ExpContent() {
  return (
    <div className="text-white w-[100%] text-center pt-5 grid gap-y-8">
      <div className="grid sm:grid-cols-4 justify-items-center content-center smallerPhone:grid-cols-2 smallerPhone:gap-y-6">
        <ExpImage Logos={htmlLogo} logoName="HTML5" />
        <ExpImage Logos={cssLogo} logoName="CSS3" />
        <ExpImage Logos={tailwindLogo} logoName="TailwindCSS" />
        <ExpImage Logos={javaScriptLogo} logoName="JavaScript" />
      </div>

      <div className="grid sm:grid-cols-4 justify-items-center content-center smallerPhone:grid-cols-2 smallerPhone:gap-y-6">
        <ExpImage Logos={reactLogo} logoName="ReactJs" />
        <ExpImage Logos={typeScriptLogo} logoName="TypeScript" />
        <ExpImage Logos={nodeLogo} logoName="NodeJS" />
        <ExpImage Logos={expressJsLogo} logoName="ExpressJS" />
      </div>

      <div className="grid sm:grid-cols-4 justify-items-center content-center smallerPhone:grid-cols-2 smallerPhone:gap-y-6">
        <ExpImage Logos={figmaLogo} logoName="Figma" />
        <ExpImage Logos={mongoLogo} logoName="MongoDB" />
        <ExpImage Logos={gitLogo} logoName="Git" />
        <ExpImage Logos={githubLogo} logoName="Github" />
      </div>
    </div>
  );
}

export default ExpContent;
