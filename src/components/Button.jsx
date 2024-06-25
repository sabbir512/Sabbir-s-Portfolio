import React from "react";

function Button(props) {
  return (
    <div className="pl-1 pt-4">
      <a href={props.githubLink} target="_blank">
        <button
          onClick={props.onclick}
          type="submit"
          className="bg-blue-500 ease-in duration-500 h-11 w-36 rounded 
      text-[20px] hover:bg-orange-500  hover:text-white"
        >
          {props.text}
        </button>
      </a>
    </div>
  );
}

export default Button;
