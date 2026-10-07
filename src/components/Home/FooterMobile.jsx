'use client'
import React from "react";
import ArrowHover from "../Animation/ArrowHover";
import Logosvg from "@/Utils/logosvg";
import ArrowSvg from "@/Utils/arrowSvg";

export default function FooterMobile() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="min-h-screen w-full  bg-black gap-[14vw] flex-col flex py-[10vw] px-[6vw]">
      <p className="text-white text-[4vw] font-medium uppercase">( CONTACT )</p>
      <p className="text-white text-[8vw] leading-none font-medium uppercase">
        ready to discuss your next project?
      </p>

      <div className="h-[.1vw] w-full bg-white" />
      <ArrowHover color="#ffffff" text="work with us" />
      <div className="text-white text-[4vw] flex flex-col gap-[3vw]">
        <p className="uppercase font-semibold">HELLO</p>
        <div>
          <p className="">hello@weareintertia.com</p>
          <p className=" w-[70%]">17 WILLOW STREET, LONDON,ECA2A 48H</p>
        </div>
      </div>
      <div className="text-white text-[4vw] flex flex-col gap-[3vw]">
        <p className="uppercase font-semibold">OTHER</p>
        <div>
          <p className="">PRIVACY POLICY</p>
          <p className=" w-[70%]">SUPPLIER T&Cs</p>
          <p className=" w-[70%]">CARRERS</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-white text-[4vw] flex flex-col gap-[3vw]">
          <p className="uppercase font-semibold">SOCIAL</p>
          <div>
            <p className="">LINKEDIN</p>
            <p className=" w-[70%]">INSTAGRAM</p>
            <p className=" w-[70%]">FACEBOOK</p>
          </div>
        </div>
        <div className="text-white pr-[5vw] text-[4vw] flex flex-col gap-[3vw]">
          <p className="uppercase font-semibold">TIMINGS</p>
          <div>
            <p className="">MONDAY TO FRIDAY</p>
            <p className=" w-[70%]">9AM-8PM</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-[14vw] flex items-center justify-between text-white">
        <div  className="flex flex-col gap-[8vw]">
          <Logosvg />
          <div>
            <p>All content ©</p>
            <p>Inertia Studios Ltd 2025</p>
          </div>
        </div>
        <div onClick={handleScroll} className="w-[20vw] p-[5vw] -rotate-90 h-[20vw] bg-white">
          <ArrowSvg />
        </div>
      </div>
    </section>
  );
}
