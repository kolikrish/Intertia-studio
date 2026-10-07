import React from "react";
import WorkVideo from "../Animation/WorkVideo";
import { WorkText } from "./Works";
import About, { WorkMarquee } from "./About";
import ArrowHover from "../Animation/ArrowHover";
import ArrowSvg from "@/Utils/arrowSvg";

const works = [
  {
    title: "PUMA RUNNING",
    subTitle: "FAST RB",
    number: "01",
    videoSrc: "/assets/video/4.mp4",
    imageSrc: "/assets/images/1.avif",
  },
  {
    title: "PUMA RUNNING",
    subTitle: "FAST RB",
    number: "02",
    videoSrc: "/assets/video/2.mp4",
    imageSrc: "/assets/images/2.avif",
  },
  {
    title: "JOHNNIE WALKER",
    subTitle: "LEVELS OF LIASON",
    number: "03",
    videoSrc: "/assets/video/3.mp4",
    imageSrc: "/assets/images/3.avif",
  },
  {
    title: "PUMA RUNNING",
    subTitle: "FAST RB",
    number: "04",
    videoSrc: "/assets/video/shoes_Video.mp4",
    imageSrc: "/assets/images/4.avif",
  },
];

export default function WorksMobile() {
  return (
    <>
      <WorkMarquee />
      <div className="h-fit w-full flex flex-col gap-[5vw]">
        {works.map((work, i) => (
          <div key={i} className="w-full h-fit">
            <div className="h-[30vh] max-md:h-[40vh] w-full">
              <WorkVideo videoSrc={work.videoSrc} imageSrc={work.imageSrc} />
            </div>
            <WorkText
              title={work.title}
              subTitle={work.subTitle}
              number={work.number}
            />
          </div>
        ))}
      </div>
      <div className="h-fit w-full pt-[3vw] border-b border-black/20 pb-[10vw] flex flex-col items-start justify-between px-[5vw]">
        <div className="w-full h-full">
          <p className="text-[7vw]  max-md:text-[6.5vw] split-text w-full tracking-tight font-medium leading-none text-left uppercase">
            WHY leading brands
          </p>
          <p className="text-[7vw] max-md:text-[6.5vw] split-text w-full leading-none tracking-tight font-medium text-right uppercase">
            partner with inertia.
          </p>
          
        </div>
        <div className="w-full gap-[5vw] mt-[5vw] flex flex-col h-full">
          <p className="text-[4.5vw] max-md:text-[3.5vw] w-full leading-[1.2] font-medium text-left">
            From CGI product films to viral 3D billboards, we are pioneering 3D
            Imagery & Motion Design that redefines visual storytelling. See how
            we help brands make a mark.
          </p>
          <ArrowHover />
        </div>
      </div>
    </>
  );
}
