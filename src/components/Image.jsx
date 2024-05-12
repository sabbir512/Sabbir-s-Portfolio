import React from "react";
import myImage from "../assets/photo/sabbir.jpeg";
function Image() {
  return (
    <div>
      <div className="w-[477px] h-[498px] border-solid border-8 border-[#4EB8E0] ">
        <img src={myImage} alt="Image" className="w-[459px] h-[480px]" />
      </div>
    </div>
  );
}

export default Image;
