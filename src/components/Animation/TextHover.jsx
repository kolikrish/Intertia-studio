"use client";
import React from "react";
import Link from "next/link";

export default function TextAnimation({
  text = "Learn More",
  size = "text-[2vw]",
  font = "font-normal",
  blend = false,
  className = ""
}) {
  return (
    <Link
      scroll={false}
      href="#"
      className={`relative  inline-block h-fit group cursor-pointer ${className}`}
    >
      <div className="relative flex flex-col items-end">
        <span
          className={`${size} ${blend ? "text-white mix-blend-difference" : "text-black"} text-left w-full ${font} block translate-y-[10px] rotate-x-90 group-hover:translate-y-0 group-hover:rotate-x-0 transition-all duration-500`}
        >
          {text}
        </span>

        <span
          className={`absolute top-0  left-0 pointer-events-none ${size} ${blend ? "text-white mix-blend-difference" : "text-black"}  ${font} block group-hover:-translate-y-[10px] group-hover:-rotate-x-90 transition-all duration-500`}
        >
          {text}
        </span>
      </div>
    </Link>
  );
}
