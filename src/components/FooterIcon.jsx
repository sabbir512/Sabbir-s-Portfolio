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
      <div
        id="socialMedia"
        className="text-white grid grid-cols-3 gap-8 md:gap-8 sm:gap-6 mediumPhone:grid-cols-3 extPhone:gap-4 smallerPhone:gap-2 smallerPhone:grid-cols-2 "
      >
        <a
          href="https://www.google.com"
          target="_blank"
          className="ease-in duration-300"
        >
          <div className={classesForIcons.divClass}>
            <img
              src={faceBookIcon}
              alt="PhoneIcon"
              className={classesForIcons.imageClass}
            />
          </div>
        </a>

        <a
          href="https://www.google.com"
          target="_blank"
          className="ease-in duration-300"
        >
          <div className={classesForIcons.divClass}>
            <img
              src={linkedinIcon}
              alt="PhoneIcon"
              className={classesForIcons.imageClass}
            />
          </div>
        </a>

        <a
          href="https://www.google.com"
          target="_blank"
          className="ease-in duration-300"
        >
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
