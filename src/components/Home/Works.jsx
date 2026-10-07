import React from "react";
import WorkVideo from "../Animation/WorkVideo";
import ArrowHover from "../Animation/ArrowHover";

export const WorkText = ({ title, subTitle, number }) => {
  return (
    <div className="p-[2vw] max-md:p-[5vw] max-sm:p-[4vw]">
      <p className="font-semibold leading-[1.1] max-sm:text-[5vw] max-md:text-[4vw] text-[1.3vw] tracking-tight uppercase">
        {title}
        <sup className="font-normal max-sm:text-[3.5vw] max-md:text-[2.5vw]  ml-[.5vw]">{number}</sup>
      </p>
      <p className="text-[1vw] max-sm:text-[4vw] max-md:text-[3vw] font-normal">{subTitle}</p>
    </div>
  );
};

const works = [
  {
    title: "PUMA RUNNING",
    subTitle: "FAST RB",
    number: "01",
    videoSrc: "/assets/video/4.mp4",
    imageSrc: "/assets/images/1.avif"
  },
  {
    title: "PUMA RUNNING",
    subTitle: "FAST RB",
    number: "02", 
    videoSrc: "/assets/video/2.mp4",
    imageSrc: "/assets/images/2.avif"
  },
  {
    title: "JOHNNIE WALKER",
    subTitle: "LEVELS OF LIASON",
    number: "03",
    videoSrc: "/assets/video/3.mp4", 
    imageSrc: "/assets/images/3.avif"
  },
  {
    title: "PUMA RUNNING",
    subTitle: "FAST RB",
    number: "04",
    videoSrc: "/assets/video/shoes_Video.mp4",
    imageSrc: "/assets/images/4.avif"
  }
];

export default function Works() {
  return (
    <section className="h-fit min-h-screen w-full">
      <div className="h-[120vh] flex w-full">
        <div className="h-full w-[70%]">
          <div className="w-full h-1/2 bg-zinc-700">
            <WorkVideo
              videoSrc={works[0].videoSrc}
              imageSrc={works[0].imageSrc}
            />
          </div>
          <div className="w-full h-1/2 flex">
            <div className="w-[40%] h-full">
              <WorkText 
                title={works[0].title}
                subTitle={works[0].subTitle}
                number={works[0].number}
              />
            </div>
            <div className="w-[60%] h-full">
              <WorkVideo
                videoSrc={works[1].videoSrc}
                imageSrc={works[1].imageSrc}
              />
            </div>
          </div>
        </div>
        <div className="h-full w-[30%]">
          <div className="w-full h-[70%]">
            <WorkVideo
              videoSrc={works[2].videoSrc}
              imageSrc={works[2].imageSrc}
            />
          </div>
          <div className="w-full h-[30%]">
            <WorkText
              title={works[2].title}
              subTitle={works[2].subTitle}
              number={works[2].number}
            />
          </div>
        </div>
      </div>
      <div className="h-[60vh] flex">
        <div className="w-[28%] flex items-end justify-start px-[2.8vw] h-full">
          <ArrowHover text="Explore more" />
        </div>
        <div className="w-[72%] flex h-full">
          <div className="w-[40%] h-full">
            <div className="w-full h-full -ml-[2vw]">
              <WorkText
                title={works[3].title}
                subTitle={works[3].subTitle}
                number={works[3].number}
              />
            </div>
          </div>
          <div className="w-[60%] relative h-full">
            <WorkVideo
              videoSrc={works[3].videoSrc}
              imageSrc={works[3].imageSrc}
            />
            <div className="-ml-[2vw] w-full h-full">
              <WorkText
                title={works[3].title}
                subTitle={works[3].subTitle}
                number={works[3].number}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
