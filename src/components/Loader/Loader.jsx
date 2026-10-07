"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function Loader() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let hasLoaded = false;

      const handleLoad = () => {
        if (hasLoaded) return;
        hasLoaded = true;

        const tl = gsap.timeline();

        // 1. Entrance: smoothly slide into exact centered alignment
        tl.fromTo(
          ".loader-text",
          {
            x: -30,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
          }
        );

        // 2. Exit: smoothly glide forward and fade
        tl.to(
          ".loader-text",
          {
            x: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.in",
          },
          "+=0.6"
        );

        // 3. Screen reveal: slide curtain down to reveal the site smoothly
        tl.to(
          ".loader-container",
          {
            yPercent: 100,
            duration: 1,
            ease: "expo.inOut",
            onComplete: () => {
              gsap.set(".loader-container", {
                visibility: "hidden",
                pointerEvents: "none",
              });
            },
          },
          "-=0.2"
        );
      };

      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
        const timeout = setTimeout(handleLoad, 2000);
        return () => {
          window.removeEventListener("load", handleLoad);
          clearTimeout(timeout);
        };
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 z-[999] h-screen w-full bg-black flex items-center justify-center px-6 md:px-16 loader-container overflow-hidden">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 text-white uppercase">
        <p className="loader-text font-medium text-lg md:text-[1.5vw] tracking-[0.2em] text-center md:text-left opacity-0">
          INERTIA STUDIO
        </p>
        <p className="loader-text text-xs md:text-[1.1vw] tracking-wider text-neutral-400 font-normal leading-relaxed text-center md:text-right max-w-xs md:max-w-sm opacity-0">
          Moving People, Brands and Visual Culture
        </p>
      </div>
    </div>
  );
}

