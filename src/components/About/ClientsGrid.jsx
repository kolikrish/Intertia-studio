"use client";
import React from "react";
import Link from "next/link";
import ArrowHover from "../Animation/ArrowHover";

// Client Logos dataset from public/assets/marquee-logo
const CLIENT_LOGOS = [
  "/assets/marquee-logo/1.svg",
  "/assets/marquee-logo/2.svg",
  "/assets/marquee-logo/3.svg",
  "/assets/marquee-logo/4.svg",
  "/assets/marquee-logo/5.svg",
  "/assets/marquee-logo/6.svg",
  "/assets/marquee-logo/7.svg",
  "/assets/marquee-logo/8.svg",
  "/assets/marquee-logo/9.svg",
  "/assets/marquee-logo/10.svg",
  "/assets/marquee-logo/11.svg",
  "/assets/marquee-logo/12.svg",
  "/assets/marquee-logo/11.svg",
  "/assets/marquee-logo/10.svg",
  "/assets/marquee-logo/9.svg",
  "/assets/marquee-logo/8.svg",
  "/assets/marquee-logo/7.svg",
  "/assets/marquee-logo/6.svg",
  "/assets/marquee-logo/5.svg",
  "/assets/marquee-logo/4.svg",
  "/assets/marquee-logo/3.svg",
  "/assets/marquee-logo/2.svg",
  "/assets/marquee-logo/1.svg",
  "/assets/marquee-logo/12.svg",
];

export default function ClientsGrid() {
  return (
    <section className="w-full bg-white text-black pt-[10vw] md:pt-[12vw] pb-[8vw] md:pb-[10vw]">
      {/* Top Header: Title & Link */}
      <div className="flex items-center justify-between px-[2.8vw] max-sm:px-[6vw] max-md:px-[5vw] mb-[4vw] md:mb-[5vw]">
        <h2 className="text-[6.5vw] sm:text-[5.5vw] md:text-[4.5vw] lg:text-[4vw] font-medium tracking-tight uppercase leading-none flex items-center">
          <span>( OUR</span>
          <span className="ml-[6vw] md:ml-[9vw]">CLIENTS )</span>
        </h2>

        <Link href="/work" className="inline-block">
          <ArrowHover text="All our work" />
        </Link>
      </div>

      {/* Grid of Client Logos */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 pr-10 pl-10">
        {CLIENT_LOGOS.map((logo, index) => (
          <div
            key={index}
            className="aspect-square border border-neutral-300 flex items-center justify-center p-6 sm:p-8 lg:p-12 group hover:bg-neutral-50 transition-colors duration-200 cursor-pointer"
          >
            <img
              src={logo}
              alt={`Client logo ${index + 1}`}
              loading="lazy"
              className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-120"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

