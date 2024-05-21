import React from "react";
import {
  faceBookIcon,
  linkedinIcon,
  instagramIcon,
  classesForIcons,
} from "./projectContent";
function FooterIcon() {
  return (
    <div>
      <div id="socialMedia" className="text-white grid grid-cols-3 gap-8">
        <a href="https://www.google.com" target="_blank">
          <div className={classesForIcons.divClass}>
            <img
              src={faceBookIcon}
              alt="PhoneIcon"
              className={classesForIcons.imageClass}
            />
          </div>
        </a>

        <a href="https://www.google.com" target="_blank">
          <div className={classesForIcons.divClass}>
            <img
              src={linkedinIcon}
              alt="PhoneIcon"
              className={classesForIcons.imageClass}
            />
          </div>
        </a>

        <a href="https://www.google.com" target="_blank">
          <div className={classesForIcons.divClass}>
            <img
              src={instagramIcon}
              alt="PhoneIcon"
              className={classesForIcons.imageClass}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default FooterIcon;
