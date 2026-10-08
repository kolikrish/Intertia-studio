"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TextAnimation from "./Animation/TextHover";
import Logosvg from "@/Utils/logosvg";
import ArrowSvg from "@/Utils/arrowSvg";
import gsap from "gsap";
import UseMobile from "./Responsive/UseMobile";
import { SplitTextAnimation } from "./Animation/Animations";
import UseTablet from "./Responsive/UseTablet";

export default function NavBar() {
  const isTablet = UseTablet();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isTablet) return;
  
    if (isOpen) {
      gsap.to(".hamburger-menu", {
        xPercent: 0,
        duration: 0.8,
        ease: "power4.inOut"
      });
      SplitTextAnimation(".menu-text", 0.015);
    } else {
      gsap.to(".hamburger-menu", {
        xPercent: 100,
        duration: 0.8,
        ease: "power4.inOut"
      });
    }
  }, [isOpen, isTablet]);
  
  useEffect(() => {
    if (isTablet) {
      gsap.set(".hamburger-menu", { xPercent: 100 });
    }
  }, [isTablet]);
  
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="w-full relative">
        <nav className="fixed z-[500] mix-blend-difference inset-x-0 top-0 left-0 w-full px-[2.8vw] max-sm:px-[6vw] max-md:px-[4vw] max-md:pt-[8vw] max-sm:pt-[8vw] pt-[2vw] flex items-center justify-between pointer-events-none">
          <Link href="/" className="flex relative z-[800] h-auto max-sm:w-[30vw] max-md:w-[25vw] text-white w-[12vw] items-center pointer-events-auto">
            <Logosvg />
          </Link>

          {/* Desktop Menu */}
          <div className="flex h-full max-sm:hidden max-md:hidden items-end justify-between w-[35%] pointer-events-auto">
            <div className="flex items-end gap-[1.2vw] text-[.9vw] font-semibold tracking-tight uppercase">
              {["Work", "About", "Capabilities", "Projects"].map((item) => (
                <TextAnimation
                  key={item}
                  blend={true}
                  font="font-thin"
                  text={item}
                  size="text-[1vw] font-light"
                  href={`/${item.toLowerCase()}`}
                />
              ))}
            </div>
            <div className="w-fit group">
              <div className="flex items-center gap-[.5vw]">
                <div className="w-[.7vw] rotate-45 group-hover:rotate-0 transition-all duration-500 text-white h-[.7vw]">
                  <ArrowSvg color="#ffffff" />
                </div>
                <TextAnimation
                  blend={true}
                  text="Contact"
                  font="font-bold"
                  size="text-[1.2vw] font-light uppercase"
                  href="mailto:hello@weareinertia.com"
                />
              </div>
              <div className="h-[1px] -mt-[.2vw] w-[80%] ml-[20%] bg-white" />
            </div>
          </div>
        </nav>
        <div
          onClick={toggleMenu}
          className="w-[6vw] mix-blend-difference  fixed top-[8vw] right-[6vw] lg:hidden pointer-events-auto flex flex-col h-[5vw] gap-[1.5vw] !z-[800] justify-center items-center  cursor-pointer"
        >
          <span
            className={`block w-full h-[.4vw] bg-white transform transition-all duration-500 ${
              isOpen ? "rotate-45 translate-y-[1vw]" : ""
            }`}
          />
          <span
            className={`block w-full h-[.4vw] bg-white transform transition-all duration-500 ${
              isOpen ? "-rotate-45 -translate-y-[1vw]" : ""
            }`}
          />
          <div
            className={`w-full absolute inset-0 duration-300 delay-75 transition-all ${
              isOpen ? "scale-200" : "scale-0"
            } h-full`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Calque_1"
              data-name="Calque 1"
              viewBox="0 0 27 28"
              className="h-full w-full"
            >
              <defs>
                <style>{`.cls-1{fill:none;stroke:#ffffff ;}`}</style>
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
        </div>

        {isTablet && (
          <div className="hamburger-menu w-screen flex-col h-screen bg-[#E7E7E7] flex items-center justify-center  px-[5vw] fixed z-[500] top-0 left-0">
            {["WORK", "ABOUT", "CAPABILITIES", "PROJECTS", "CONTACT"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "CONTACT" ? "mailto:hello@weareinertia.com" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="w-full mb-[5vw] block"
                >
                  <p className="text-[10vw] font-medium max-md:text-[5vw] menu-text uppercase">
                    {item}
                  </p>
                  <div className="h-[1px] w-full bg-black" />
                </Link>
              )
            )}
            <div className="text-[4vw] flex items-start gap-[2vw] flex-col absolute bottom-[10vw] left-[5vw] ">
              <p>hello@weareinertia.com</p>
              <div>
                <p className="uppercase font-medium">17 Willow Street,</p>
                <p className="uppercase font-medium">London, EC2A 4BH</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
