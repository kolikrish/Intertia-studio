"use client";
import React, { useEffect } from "react";
import ArrowHover from "../Animation/ArrowHover";
import CusrorImageTrail from "../Animation/ImageCursor";
import { SplitTextAnimation } from "../Animation/Animations";
import { stagger } from "framer-motion";
import UseMobile from "../Responsive/UseMobile";
import Image from "next/image";
import UseTablet from "../Responsive/UseTablet";

export default function HelpingBrand() {
  const isTablet = UseTablet();
  
  useEffect(() => {
    SplitTextAnimation(".split-text-helping", 0.02);
  }, []);
  return (
    <section className="h-[150vh] px-[2.8vw]  relative max-sm:flex-col max-md:flex-col max-sm:min-h-[100vh] max-md:min-h-[100vh] max-sm:justify-evenly max-md:justify-evenly max-sm:h-fit max-md:h-fit max-sm:py-[10vw] max-md:py-[10vw] flex items-center justify-center overflow-hidden w-full">
      {!isTablet && <CusrorImageTrail />}
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[10%] max-sm:hidden max-md:hidden h-full flex items-center justify-center">
          <p className="uppercase   w-full text-left text-[.9vw] font-bold">
            culture <span className="font-medium">in motion</span> )
          </p>
        </div>
        <div className="w-[80%] max-sm:w-full max-md:w-full  flex-col h-full flex items-center justify-center gap-[5vw]">
          <p className="uppercase text-center  w-full max-sm:text-[4vw] max-md:text-[4vw] text-[.9vw] font-medium">
            ( We are <span className="font-bold">Inertia</span> )
          </p>
          <p className="text-center max-sm:text-[10vw] max-md:text-[10vw] max-sm:w-full max-md:w-full split-text-helping text-[7.5vw] leading-none font-medium ">
            {" "}
            HELPING BRANDS MOVE THE WORLD FORWARD
          </p>
          {!isTablet && (
            <ArrowHover text="LET'S MAKE SOMETHING UNFORGETTABLE" />
          )}
        </div>
        <div className="w-[10%] max-sm:hidden max-md:hidden h-full flex items-center justify-center">
          <p className="uppercase text-right  w-full  text-[.9vw] font-bold">
            Impact <span className="font-medium">by design</span>
          </p>
        </div>
      </div>
      {isTablet && (
        <>
          <div className="w-full h-[30vh] flex items-center justify-center">
            <Image
              src={
                "/assets/images/helping.avif"
              }
              alt="helpingBrand"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full">
            <p className="uppercase   w-full text-center max-sm:text-[4vw] max-md:text-[4vw] text-[.9vw] font-bold">
              culture <span className="font-medium">in motion</span>
            </p>
            <p className="uppercase text-center  w-full max-sm:text-[4vw] max-md:text-[4vw] text-[.9vw] font-bold">
              Impact <span className="font-medium">by design</span>
            </p>
            <div className="flex items-center max-sm:mt-[8vw] max-md:mt-[8vw] justify-center">
              <ArrowHover text="MAKE IT REAL" />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
