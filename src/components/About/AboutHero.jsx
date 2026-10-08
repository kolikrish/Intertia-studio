"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import ArrowHover from "../Animation/ArrowHover";
import { SplitTextAnimation } from "../Animation/Animations";

export default function AboutHero() {
  useEffect(() => {
    SplitTextAnimation(".split-text-about-hero", 0.08, 1);
  }, []);

  return (
    <>
      <section className="w-full min-h-[100dvh] relative flex flex-col justify-between px-[2.8vw] max-sm:px-[6vw] max-md:px-[5vw] pt-[9vw] max-md:pt-[24vw] max-sm:pt-[28vw] pb-[2.5vw] max-md:pb-[6vw] bg-white text-black overflow-hidden selection:bg-black selection:text-white">
        {/* Top / Main Content Area */}
        <div className="relative z-10 flex flex-col">
          {/* Main Huge Headline matching reference */}
          <h1 className="split-text-about-hero text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7vw] font-light leading-[0.88] tracking-tight uppercase">
            <span className="block">Moving people,</span>
            <span className="block">brands &</span>
            <span className="block">visual culture</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-[3.8vw] sm:text-[2.6vw] md:text-[1.3vw] lg:text-[2.25vw] max-w-[430px] font-normal leading-[1.35] text-black normal-case mt-[4vw] md:mt-[2.2vw]">
            We are a creative studio pushing the boundaries of CGI, design and
            future aesthetics.
          </p>
        </div>

        {/* Mobile-Only Image Display */}
        <div className="md:hidden relative w-full aspect-[640/668] max-w-[420px] mx-auto my-[6vw] overflow-hidden">
          <img
            src="/assets/images/about.avif"
            alt="Moving people, brands & visual culture"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Absolute Image (Sitting on the right side) */}
        <div className="hidden md:block absolute right-[2vw] lg:right-[8vw] bottom-[0vw] top-[6vw] lg:w-[50vw] max-w-[90svh] h-auto pointer-events-none select-none z-0">
          <div className="relative w-full h-full flex items-end justify-end">
            <img
              src="/assets/images/about.avif"
              alt="Moving people, brands & visual culture"
              className="w-full h-auto max-h-[82vh] object-contain object-bottom"
            />
          </div>
        </div>
      </section>
    </>
  );
}
