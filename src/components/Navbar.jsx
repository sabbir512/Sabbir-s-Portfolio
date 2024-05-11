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
      className={`lg:h-[12vh] md:h-[12vh] sm:h-[10vh] max-w-full ease-in duration-500 ${bgColor}  flex justify-between items-center lg:px-12 md:px-12 sm:px-6 sticky top-0 max-w-[358px] px-2 h-[7vh] mediumPhone:px-6  mediumPhone:h-[9vh]`}
    >
      <NavLogo />
      <div
        id="options"
        style={{ fontFamily: "Inria Sans", fontWeight: "400", color: color }}
      >
        <ul className="flex cursor-pointer  lg:gap-16 lg:text-[32px] md:text-[28px] sm:text-[20px] md:gap-12 sm:gap-8 max-w-[640px] gap-4 text-[16px]">
          <li className="hover:text-orange-400">Home</li>
          <li className="hover:text-orange-400">Projects</li>
          <li className="hover:text-orange-400">Blogs</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
