import React from "react";

function ExpImage({ Logos, logoName }) {
  return (
    <div className="w-[160px]">
      <div className="flex flex-col justify-center items-center">
        <img
          src={Logos}
          alt="logo"
          className="sm:w-[88px] sm:h-[78px] smallerPhone:w-[80px] smallerPhone:h-[70px] object-contain"
        />
        <p
          className="mt-2 sm:text-2xl smallerPhone:text-xl"
          style={{ fontFamily: "Roboto" }}
        >
          {logoName}
        </p>
      </div>
    </div>
  );
}

export default ExpImage;
