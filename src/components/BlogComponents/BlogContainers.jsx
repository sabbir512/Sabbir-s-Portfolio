import React from "react";
import { Link } from "react-router-dom";

function BlogContainer({ image, headText }) {
  return (
    <div className="mt-6 cursor-pointer w-full h-full duration-300 hover:shadow-2xl hover:-translate-y-3 hover:bg-white rounded-b-2xl">
      <div id="container">
        <img src={image} alt="Blog Image" className="object-contain" />
        <h1
          className="text-center hover:underline pt-2"
          style={{ fontFamily: "Josefin Sans" }}
        >
          {headText}
        </h1>
      </div>
    </div>
  );
}

export default BlogContainer;
