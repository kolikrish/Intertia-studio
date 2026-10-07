"use client";
import ArrowSvg from "@/Utils/arrowSvg";
import React, { useEffect } from "react";
import ArrowHover from "../Animation/ArrowHover";
import TextAnimation from "../Animation/TextHover";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { SplitTextAnimation } from "../Animation/Animations";

export default function Footer() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-container",
        start: "top 10%",
        end: "bottom 10%",
      },
    });
    SplitTextAnimation(".split-text-footer", 0.2);
    tl.to(".footer-line", {
      width: "100%",
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="min-h-screen footer-container pt-[4vw] px-[2.8vw] pb-[2vw] w-full flex flex-col justify-between">
      <div className="w-full pb-[2vw] flex flex-col justify-between gap-[1.5vw]">
        <p className="w-full font-medium text-[.9vw]">(CONTACT)</p>
        <div className="flex w-full items-center justify-between">
          <div className="w-[75%]">
            <p className="text-[5.2vw] split-text-footer font-medium leading-[1.2] uppercase">
              Ready to discuss
            </p>
            <p className="text-[5.2vw] split-text-footer text-right -mt-[.8vw] font-medium leading-none uppercase">
              your next project?
            </p>
          </div>
          <div className="group w-[25%] flex items-center justify-end">
            <div className="w-[5vw] h-[5vw] cursor-pointer relative scale-100 group-hover:scale-90 transition-all duration-500 flex items-center justify-center">
              <div className="absolute top-0 left-0 w-[20px] h-[20px] border-l-2 border-t-2 border-black"></div>
              <div className="absolute top-0 right-0 w-[20px] h-[20px] border-r-2 border-t-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-l-2 border-b-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-r-2 border-b-2 border-black"></div>
              <div className="w-[1.2vw] h-[1.2vw] rotate-45 group-hover:rotate-0 transition-all duration-300 flex items-center justify-center">
                <ArrowSvg color="#000000" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-0 footer-line bg-black" />
      <div className="py-[2vw] w-full flex justify-between">
        <div className="w-1/2 h-full">
          <ArrowHover color="#000" text="work with us" />
        </div>
        <div className="w-1/2 h-full flex items-start justify-between">
          <div className="flex items-start gap-[6vw]">
            <div className="flex flex-col gap-[3vw]">
              <div className="flex flex-col gap-[.3vw]">
                <p className="text-[.9vw] font-semibold uppercase">Hello</p>
                <div className="relative w-full group">
                  <Link
                    href="mailto:hello@weareinertia.com"
                    className="text-[.9vw] relative font-medium"
                  >
                    hello@weareinertia.com
                  </Link>
                  <span className="h-[1px] w-0 group-hover:w-full transition-all duration-500 bg-black absolute bottom-0 left-0" />
                </div>
                <p className="text-[.9vw] font-medium">17 WILLOW STREET,</p>
                <p className="text-[.9vw] font-medium -mt-[.5vw]">
                  LONDON, EC2A 4BH
                </p>
              </div>
              <div className="flex flex-col gap-[.3vw]">
                <p className="text-[.9vw] font-semibold uppercase">
                  Opening Hours
                </p>
                <p className="text-[.9vw] font-medium">MONDAY TO FRIDAY</p>
                <p className="text-[.9vw] font-medium -mt-[.5vw]">9AM - 6PM</p>
              </div>
            </div>
            <div className="flex flex-col gap-[.3vw]">
              <p className="text-[.9vw] w-full font-semibold uppercase">
                Social
              </p>
              {["INSTAGRAM", "LINKEDIN", "BEHANCE"].map((item) => (
                <TextAnimation
                  key={item}
                  font="font-medium"
                  size="text-[.9vw]"
                  href="#"
                  text={item}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[.3vw]">
            <p className="text-[.9vw] font-semibold uppercase">Other</p>
            {["SUPPLIER T&C'S", "PRIVACY POLICY", "CAREERS"].map((item) => (
              <TextAnimation
                key={item}
                href="#"
                font="font-medium"
                size="text-[.9vw]"
                text={item}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-end justify-between pt-[2vw]">
        <div className="w-1/2 h-fit">
          <div className="flex h-auto w-[12vw] items-center">
            <Image
              src="/assets/images/logo.svg"
              alt="Inertia Studio"
              width={120}
              className="h-full w-full"
              height={24}
              priority
            />
          </div>
        </div>
        <div className="w-1/2 h-fit flex items-end justify-between">
          <div className="flex flex-col">
            <p className="font-medium text-[.9vw]">All content ©</p>
            <p className="font-medium text-[.9vw] -mt-[.5vw]">
              Inertia Studios Ltd 2025
            </p>
          </div>
          <div className="h-full flex items-end">
            <p className="font-medium text-[.9vw]">Website by Okey Studio</p>
          </div>
          <div onClick={handleScroll} className="h-full flex items-end">
            <TextAnimation
              text="BACK TO TOP ↑"
              size="text-[.9vw]"
              font="font-medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
