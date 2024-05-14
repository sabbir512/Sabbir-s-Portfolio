import React from "react";
import myImage from "../assets/photo/sabbir.jpeg";
function Image() {
  return (
    //Making them responsive
    <div className=" ml-11 pb-7 sm:ml-[65px]">
      <div className="lg:w-[457px] lg:h-[478px] lagerThenLg:w-[477px] lagerThenLg:h-[498px] md:w-[420px] md:h-[451px] sm:w-[440px] sm:h-[441px] border-solid border-8 border-[#4EB8E0] rounded-md">
        <img
          src={myImage}
          alt="Image"
          className="lg:w-[439px] lg:h-[460px] lagerThenLg:w-[459px] lagerThenLg:h-[480px] md:w-[402px] md:h-[433px] sm:w-[422px] sm:h-[443] bg-no-repeat bg-center  transform -translate-x-4 -translate-y-4 right-0 bottom-0 rounded"
        />
      </div>
    </div>
  );
}

export default Image;
