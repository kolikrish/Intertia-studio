import ArrowSvg from "@/Utils/arrowSvg";
import React from "react";

export default function ArrowHover({
  text = "Discover more work",
  color = "#000000",
}) {
  return (
    <div className="group  cursor-pointer flex items-center max-sm:gap-[2.5vw] max-md:gap-[2.5vw] gap-[1vw]">
      <div className="h-[1.5vw] max-sm:h-[8vw] max-md:h-[8vw] max-sm:w-[8vw] max-md:w-[8vw] overflow-hidden w-[1.5vw] relative">
        <div className="h-1/2 w-1/2  duration-500 transition-all group-hover:-translate-x-1/2 absolute top-1/2 left-1/2 -translate-x-[210%] -translate-y-1/2">
          <ArrowSvg color={color} />
        </div>
        <div className="h-1/2 group-hover:translate-x-[210%] duration-500 transition-all w-1/2 group- absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ArrowSvg color={color} />
        </div>
        <div className="absolute group-hover:scale-90  max-md:scale-80 scale-100 transition-all duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full z-[10]">
          <div className="absolute top-0 left-0 w-[.4vw] max-sm:w-[1vw] max-md:w-[1vw] h-[.4vw] max-sm:h-[1vw] max-md:h-[1vw] border-l-2 border-t-2 border-black"></div>
          <div className="absolute top-0 right-0 w-[.4vw] max-sm:w-[1vw] max-md:w-[1vw] h-[.4vw] max-sm:h-[1vw] max-md:h-[1vw] border-r-2 border-t-2 border-black"></div>
          <div className="absolute bottom-0 left-0 w-[.4vw] max-sm:w-[1vw] max-md:w-[1vw] h-[.4vw] max-sm:h-[1vw] max-md:h-[1vw] border-l-2 border-b-2 border-black"></div>
          <div className="absolute bottom-0 right-0 w-[.4vw] max-sm:w-[1vw] max-md:w-[1vw] h-[.4vw] max-sm:h-[1vw] max-md:h-[1vw] border-r-2 border-b-2 border-black"></div>
        </div>
      </div>
      <p
        style={{
          color: color,
        }}
        className="uppercase text-[.9vw] max-sm:text-[4vw] max-md:text-[4vw] group-hover:translate-x-[.2vw] transition-all duration-500 translate-x-[-.2vw] font-semibold"
      >
        {text}
      </p>
    </div>
  );
}
