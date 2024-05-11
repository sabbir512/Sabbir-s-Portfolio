import React, { useEffect, useState } from "react";
import NavLogo from "./NavLogo";

function Navbar() {
  const [bgColor, setBgColor] = useState("bg-[#060D2D]");
  const [color, setColor] = useState("white");

  const scrollHandler = () => {
    if (window.scrollY >= 50) {
      setBgColor("bg-white");
      setColor("black");
    } else {
      setBgColor("bg-[#060D2D]");
      setColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      className={`h-[12vh] ease-in duration-500 ${bgColor}  flex justify-between items-center px-12 sticky top-0`}
    >
      <NavLogo />
      <div
        id="options"
        style={{ fontFamily: "Inria Sans", fontWeight: "300", color: color }}
      >
        <ul className="flex gap-16 text-[32px] md:text-[18px] sm:text-[10px]">
          <li>Home</li>
          <li>Projects</li>
          <li>Blogs</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
