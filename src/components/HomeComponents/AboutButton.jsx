import React from "react";

function AboutButton({
  text = "",
  bgColor = "bg-blue-500",
  hoverColor = "hover:bg-orange-500",
  onclick,
  resume,
}) {
  return (
    <div className="pl-1 pt-4">
      <a href={resume}>
        <button
          onClick={onclick}
          className={`${bgColor} ease-in duration-300 h-12 w-26  mediumPhone:px-8 rounded 
      text-[20px] ${hoverColor} border-blue-600 border-2 border-solid  hover:text-white md:px-5 sm:h-10 md:text-[17px] smallerPhone:text-[15px] smallerPhone:px-1 smallerPhone:h-8`}
        >
          {text}
        </button>
      </a>
    </div>
  );
}

export default AboutButton;
