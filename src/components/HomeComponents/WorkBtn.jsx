import React from "react";

function WorkBtn({ url, btnText }) {
  return (
    <div>
      <a href={url} target="_blank">
        <button
          className="lg:text-[16px] border-[#113080] border-4 border-solid lg:px-3 lg:py-2 rounded hover:bg-blue-600  ease-in duration-500 md:text-[11px] md:px-1
                md:py-1 sm:px-1 sm:py-1 sm:text-[10px] mediumPhone:px-3 mediumPhone:py-2 mediumPhone:text-[15px] smallerPhone:text-[13px] smallerPhone:px-2 smallerPhone:py-1"
          style={{ fontFamily: "Istok Web" }}
        >
          {btnText}
        </button>
      </a>
    </div>
  );
}

export default WorkBtn;
