import React from "react";
import myImage from "../assets/photo/sabbir.jpeg";
function Image() {
  return (
    <div className=" ml-11 pb-7">
      <div className="w-[477px] h-[498px] border-solid border-8 border-[#4EB8E0] rounded-md">
        <img src={myImage} alt="Image" className="w-[459px] h-[480px] transform -translate-x-4 -translate-y-4 right-0 bottom-0 rounded" />
      </div>
    </div>
  );
}

export default Image;
