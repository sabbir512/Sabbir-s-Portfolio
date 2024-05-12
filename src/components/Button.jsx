import React from "react";

function Button() {
  return (
    <div className="pl-1 pt-4">
      <button
        className="bg-blue-500 ease-in duration-500 h-11 w-36 rounded 
      text-[20px] hover:bg-orange-500  hover:text-white"
      >
        View Projects
      </button>
    </div>
  );
}

export default Button;
