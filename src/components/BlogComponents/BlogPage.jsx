import React from "react";
import BlogContainer from "./BlogContainers";
import { realStateImage, tributePage } from "../projectContent";
function BlogPage() {
  return (
    <div>
      <h1
        className="text-center text-4xl pt-8 pb-2"
        style={{ fontFamily: "Inria Sans" }}
      >
        My Blogs
      </h1>
      <hr className="lg:w-[20%] m-auto border-1 border-black mb-6 md:w-[26%] extPhone:w-[34%] smallerPhone:w-[54%]" />
      {/*All the blog Container is here*/}
      <div id="allContainer" className="grid gap-6">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 px-4 extPhone:grid-cols-2 smallerPhone:grid-cols-1">
          <BlogContainer
            image={realStateImage}
            headText="Demo Header: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime illo repellendus dolorum."
          />
          <BlogContainer
            image={tributePage}
            headText="Demo Header: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime illo repellendus dolorum."
          />
          <BlogContainer
            image={tributePage}
            headText="Demo Header: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime illo repellendus dolorum."
          />

          <BlogContainer
            image={realStateImage}
            headText="Demo Header: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime illo repellendus dolorum."
          />
          <BlogContainer
            image={tributePage}
            headText="Demo Header: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime illo repellendus dolorum."
          />
          <BlogContainer
            image={tributePage}
            headText="Demo Header: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime illo repellendus dolorum."
          />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
