"use client";
import React, { useEffect, useRef } from "react";
import ArrowSvg from "@/Utils/arrowSvg";
import ArrowHover from "../Animation/ArrowHover";
import gsap from "gsap";
import { SplitTextAnimation } from "../Animation/Animations";

export const WorkMarquee = () => {
  const marqueeRef = useRef(null);
  const marqueeTrackRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const track = marqueeTrackRef.current;

    if (!marquee || !track) return;

    const trackWidth = track.scrollWidth;

    const clone = track.cloneNode(true);
    marquee.appendChild(clone);

    // Animate continuously
    gsap.to(marquee.children, {
      x: `-${trackWidth}px`,
      duration: 10, 
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % trackWidth), 
      },
    });
    SplitTextAnimation(".split-text", 0.02);
  }, []);
  const texts = ["CASE STUDIES", "FEATURED PROJECTS"];

  return (
    <div className="w-full border-t border-black/60 h-full flex flex-col justify-between overflow-hidden">
      <div
        ref={marqueeRef}
        className="relative flex w-full overflow-hidden whitespace-nowrap"
      >
        <div ref={marqueeTrackRef} className="flex  pr-[5vw] gap-[5vw]">
          {texts.map((text, i) => (
            <p
              key={i}
              className="text-[5vw] max-md:text-[12vw] max-sm:text-[10vw] tracking-tight font-medium uppercase"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <>
      <section className="h-[50vh] w-full pt-[3vw] flex items-start justify-between px-[2.8vw]">
        <div className="w-[35%] h-full">
          <p className="text-[2.2vw] split-text w-full tracking-tight font-medium leading-none text-left uppercase">
            WHY leading brands
          </p>
          <p className="text-[2.2vw]  split-text  w-full leading-none tracking-tight font-medium text-right uppercase">
            partner with inertia.
          </p>
          <div className="h-[1.2vw] w-[1.2vw] mt-[1vw] rotate-90">
            <ArrowSvg />
          </div>
        </div>
        <div className="w-[25%] gap-[2vw] flex flex-col h-full">
          <p className="text-[1.2vw] w-full leading-[1.2] font-medium text-left">
            From CGI product films to viral 3D billboards, we are pioneering 3D
            Imagery & Motion Design that redefines visual storytelling. See how
            we help brands make a mark.
          </p>
          <ArrowHover />
        </div>
      </section>
      <WorkMarquee />
    </>
  );
}
