"use client";
import React, { useEffect } from "react";
import { setupHeroAnimation } from "../Animation/Animations";
import UseTablet from "../Responsive/UseTablet";

export default function Hero() {
  const isTablet = UseTablet();
  useEffect(() => {
    if (isTablet) return;
    setupHeroAnimation();
  }, []);

  return (
    <section className="h-screen hero-div w-full max-sm:flex max-md:flex max-sm:items-center max-md:items-center max-sm:justify-center max-md:justify-center max-sm:flex-col max-md:flex-col relative max-sm:py-[10vw] max-md:py-[15vw] py-[5vw]">
      <div className="h-[25%] max-sm:h-fit max-md:h-fit flex items-center justify-start w-full">
        <p className="text-[12vw] max-sm:text-[22vw] max-md:text-[22vw] max-sm:text-center max-md:text-center max-sm:ml-0 max-md:ml-0 max-sm:w-full max-md:w-full hero-heading ml-[6vw] tracking-tight font-medium leading-none">
          INERTIA
        </p>
      </div>
      <div className="h-[50%] relative flex items-center justify-center w-full max-sm:h-[30%] max-md:h-[40%]">
        <div className="h-[90%] z-[10] hero-video-container w-[35vw] max-sm:w-[90vw] max-md:w-[90vw]">
          <video
            src={"./assets/video/hero_video.mp4"}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
        <p className="uppercase absolute max-md:hidden px-[2.8vw] inset-1/2  -translate-y-1/2 w-full -translate-x-1/2 text-[.9vw] font-medium">
          A creative <span className="font-bold">cgi studio</span>
        </p>
        <p className="uppercase absolute max-md:hidden px-[2.8vw] inset-1/2  text-right -translate-y-1/2 w-full -translate-x-1/2 text-[.9vw] font-medium">
          Setting Brands <span className="font-bold">in motion</span>
        </p>
      </div>
      <div className="h-[25%] max-sm:h-fit max-md:h-fit w-full hero-heading2 flex items-center max-sm:justify-center max-md:justify-center justify-end">
        <p className="text-[12vw] max-sm:text-[22vw] max-md:text-[22vw] max-sm:text-center max-md:text-center max-sm:mr-0 max-md:mr-0 mr-[6vw] text-right tracking-tight font-medium leading-none">
          STUDIOS
        </p>
      </div>
      {isTablet && <div className="flex h-[30%] flex-col items-center justify-end">
        <p className="uppercase px-[2.8vw] text-center w-full leading-none text-[4vw] font-medium">
          A creative <span className="font-bold">cgi studio</span>
        </p>
        <p className="uppercase px-[2.8vw] text-center leading-none w-full text-[4vw] font-medium">
          Setting Brands <span className="font-bold">in motion</span>
        </p>
      </div>}
    </section>
  );
}
