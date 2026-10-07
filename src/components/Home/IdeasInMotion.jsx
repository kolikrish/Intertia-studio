"use client";
import ArrowSvg from "@/Utils/arrowSvg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ParallaxImage from "../Animation/ParallexImage";
import ArrowHover from "../Animation/ArrowHover";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import UseMobile from "../Responsive/UseMobile";
import UseTablet from "../Responsive/UseTablet";

export default function IdeasInMotion() {
  const isTablet = UseTablet();
  useEffect(() => {
    if(isTablet) return;
    gsap.to(".in-motion-heading", {
      x: "30%",
      ease: "linear",
      scrollTrigger: {
        trigger: ".in-motion-div",
        start: "-40% top",
        end: "top top",
        scrub: 1,
      },
    });
  }, []);

  const [active, setActive] = useState(0);
  const [activeImageHover, setActiveImageHover] = useState(0);
  return (
    <section className="h-fit in-motion-div max-sm:min-h-[20vh] max-md:min-h-[20vh] min-h-screen px-[2.8vw] max-sm:px-[5vw] max-md:px-[5vw] max-sm:py-[15vw] max-md:py-[15vw] py-[5vw] w-full">
      <div className="flex items-center justify-between">
        <div className="flex max-sm:items-center max-md:items-center max-sm:w-full max-md:w-full max-sm:justify-start max-md:justify-start">
          <p className="text-[4vw] max-sm:text-[8vw] max-md:text-[8vw] font-medium uppercase tracking-tight">
            ( IDEAS
          </p>
          <p className="text-[4vw] max-sm:ml-[6vw] max-md:ml-[6vw] max-sm:text-[8vw] max-md:text-[8vw] in-motion-heading font-medium uppercase tracking-tight">
            &nbsp;IN MOTION )
          </p>
        </div>
        <p className="text-[.9vw] max-sm:hidden max-md:hidden font-medium -mt-[2vw] uppercase tracking-tight">
          ( STUDIO INSIGHTS )
        </p>
      </div>
      <p className="text-[1.8vw] max-sm:w-full max-md:w-full max-sm:text-[4vw] max-md:text-[4vw] font-medium leading-[1.2] w-[30%]">
        Explore our latest research, creative experiments, and studio news.
      </p>

      <div className="h-fit mt-[4vw] max-sm:mt-[10vw] max-md:mt-[10vw] max-sm:flex-col max-md:flex-col max-sm:items-center max-md:items-center max-sm:justify-center max-md:justify-center w-full flex items-center justify-between">
        <div className="h-full w-[60%] max-sm:w-full max-md:w-full">
          <div className="w-full pb-[1vw] flex items-center justify-between h-fit">
            <p className="text-[.9vw] max-sm:text-[4vw] max-md:text-[4vw] font-medium uppercase tracking-tight">
              ( AWARDS )
            </p>
            <p className="text-[.9vw] max-sm:text-[4vw] max-md:text-[4vw] font-medium uppercase tracking-tight">
              7 april 25.
            </p>
          </div>
          <div className="h-[80vh] max-sm:h-[30vh] max-md:h-[30vh] relative w-full">
            <div
              className={`h-full duration-500 ease-in-out transition-all  w-full ${
                activeImageHover === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <ParallaxImage
                src="/assets/images/blog_image.avif"
                alt="awards"
                width={1000}
                height={1000}
              />
            </div>
            <div
              className={`origin-bottom  h-full duration-500 ease-in-out transition-all z-[1] absolute inset-0 w-full ${
                activeImageHover === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <ParallaxImage
                src="/assets/images/1.avif"
                alt="awards"
                width={1000}
                height={1000}
              />
            </div>
            <div
              className={`origin-bottom h-full duration-500 ease-in-out transition-all z-[2] absolute inset-0 w-full ${
                activeImageHover === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <ParallaxImage
                src="/assets/images/2.avif"
                alt="awards"
                width={1000}
                height={1000}
              />
            </div>

            <div className="absolute w-[8vw] flex items-center justify-center h-[8vw] bg-white bottom-0 max-sm:bottom-[-2%] max-md:bottom-[-2%] max-sm:h-[12vw] max-md:h-[12vw] max-sm:w-[12vw] max-md:w-[12vw] max-sm:left-[88%] max-md:left-[88%] left-0">
              <div className="h-[60%] max-sm:w-[80%] max-md:w-[80%] max-sm:h-[80%] max-md:h-[80%] w-[60%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Calque_1"
                  data-name="Calque 1"
                  viewBox="0 0 27 28"
                  className="h-full w-full"
                >
                  <defs>
                    <style>{`.cls-1{fill:none;stroke:black;stroke-width:0.3;}`}</style>
                  </defs>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    className="cls-1"
                    d="M1,7V1H7"
                    transform="translate(-0.5 -0.5)"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    className="cls-1"
                    d="M27,22v6H21"
                    transform="translate(-0.5 -0.5)"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    className="cls-1"
                    d="M7,28H1V22"
                    transform="translate(-0.5 -0.5)"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    className="cls-1"
                    d="M21,1h6V7"
                    transform="translate(-0.5 -0.5)"
                  />
                </svg>
              </div>

              <div className="h-[30%] -rotate-45 w-[30%] absolute ">
                <ArrowSvg />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[85vh] max-sm:min-h-0 max-md:min-h-0 flex flex-col max-sm:w-full max-md:w-full justify-evenly max-sm:justify-start max-md:justify-start max-sm:py-[5vw] max-md:py-[5vw] max-sm:gap-[8vw] max-md:gap-[8vw] w-[32%]">
          {[1, 2, 3].map((_, i) => (
            <div
              onClick={() => setActive(i)}
              onMouseEnter={() => setActiveImageHover(i)}
              onMouseLeave={() => setActiveImageHover(0)}
              key={i}
              className={`flex group cursor-pointer w-full flex-col items-start gap-[1vw] ${
                i > 0 ? 'max-sm:hidden max-md:hidden' : ''
              }`}
            >
              <p className="text-[.9vw] max-sm:hidden max-md:hidden max-sm:text-[4vw] max-md:text-[4vw] font-medium uppercase tracking-tight">
                ( AWARDS )
              </p>
              <p className="text-[1.2vw] max-sm:text-[6vw] max-md:text-[6vw] font-medium leading-[1.2] w-[95%]">
                Toblerone (Platinum Award) - A New Dimension of Storytelling
              </p>
              <div
                className={`h-[1px] mt-[1vw] max-sm:hidden max-md:hidden w-0 bg-black group-hover:w-full transition-all duration-500 ${
                  active === i ? "w-full" : ""
                }`}
              />
            </div>
          ))}
          <ArrowHover text="see all insights" />
        </div>
      </div>
    </section>
  );
}
