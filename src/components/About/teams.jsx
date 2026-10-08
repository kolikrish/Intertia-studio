"use client";
import React from "react";

// Team Members Dataset matching Inertia Studios reference
const MEMBERS = {
  tom: {
    name: "Tom Phipps",
    role: "Partner, Creative Director",
    image: "/assets/images/teams/1.jpg",
    size: "big",
  },
  jack: {
    name: "Jack Lietti",
    role: "Senior 3D Artist",
    image: "/assets/images/teams/2.jpg",
    size: "small",
  },
  thomas: {
    name: "Thomas Valente",
    role: "Founder, Executive Creative Director",
    image: "/assets/images/teams/3.jpg",
    size: "big",
  },
  gemma: {
    name: "Gemma Garman",
    role: "Senior Producer",
    image: "/assets/images/teams/4.jpg",
    size: "small",
  },
  henry: {
    name: "Henry Yeomans",
    role: "Partner, Art Director",
    image: "/assets/images/teams/5.jpg",
    size: "big",
  },
  jaime: {
    name: "Jaime Bravo",
    role: "Houdini Artist",
    image: "/assets/images/teams/6.jpg",
    size: "small",
  },
  elliot: {
    name: "Elliot Harris",
    role: "3D Artist",
    image: "/assets/images/teams/7.jpg",
    size: "small",
  },
};

const ALL_MEMBERS = [
  MEMBERS.tom,
  MEMBERS.jack,
  MEMBERS.thomas,
  MEMBERS.gemma,
  MEMBERS.henry,
  MEMBERS.jaime,
  MEMBERS.elliot,
];

function TeamCard({ member }) {
  return (
    <article className="group flex flex-col w-full cursor-pointer">
      {/* Member Info & Down Arrow */}
      <div className="flex items-start justify-between mb-2 md:mb-[0.8vw]">
        <div className="flex flex-col pr-2">
          <h3 className="text-sm md:text-[1.4vw] font-light tracking-tight uppercase leading-snug group-hover:text-neutral-500 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-xs md:text-[1vw] text-black font-normal leading-tight">
            {member.role}
          </p>
        </div>

        <span className="text-black text-sm md:text-[0.9vw] leading-none shrink-0 group-hover:translate-y-1 transition-transform duration-300">
          ↓
        </span>
      </div>

      {/* Member Photo */}
      <div
        className={`relative w-full overflow-hidden bg-neutral-100 ${
          member.size === "big"
            ? "aspect-[536/605]"
            : "aspect-[258/380]"
        }`}
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700"
        />
      </div>
    </article>
  );
}

export default function Teams() {
  return (
    <section className="w-full bg-white text-black pt-[8vw] md:pt-[5vw] pb-[10vw] md:pb-[2vw]">
      {/* Top Header matching Inertia Reference */}
      <div className="flex flex-col md:flex-row items-start justify-between px-[2.8vw] max-sm:px-[6vw] max-md:px-[5vw] mb-[8vw] md:mb-[6vw] gap-6">
        <span className="text-xs sm:text-sm md:text-[0.9vw] font-medium uppercase text-neutral-500">
          ( OUR TEAM )
        </span>

        <div className="w-full md:w-[60%] flex flex-col gap-3 md:gap-[1.2vw]">
          <h2 className="text-[6.5vw] sm:text-[5vw] md:text-[3.5vw] lg:text-[3vw] font-medium leading-[1.05] tracking-tight uppercase">
            Based in London,<br />moving the world
          </h2>
          <p className="text-[3.8vw] sm:text-[2.6vw] md:text-[1.1vw] font-normal leading-[1.5] text-neutral-600 max-w-[620px]">
            Work with a global 3D Imagery and Motion team, made up of creative directors, producers, art directors, designers and CG/VFX artists. Alongside our permanent team we have a vast global network of talent, giving us the ability to scale and tackle any project.
          </p>
        </div>
      </div>

      {/* Desktop Staggered 4-Column Layout (Matching Screenshots 1 & 2) */}
      <div className="hidden md:grid grid-cols-6 gap-x-[1.2vw] px-[2.8vw] max-md:px-[5vw] w-full">
        {/* Column 1 (2 cols wide): Tom Phipps -> Henry Yeomans */}
        <div className="col-span-2 flex flex-col gap-y-[5vw] md:gap-y-[6vw]">
          <TeamCard member={MEMBERS.tom} />
          <TeamCard member={MEMBERS.henry} />
        </div>

        {/* Column 2 (1 col wide): Jack Lietti -> Jaime Bravo */}
        <div className="col-span-1 flex flex-col gap-y-[5vw] md:gap-y-[6vw]">
          <TeamCard member={MEMBERS.jack} />
          <TeamCard member={MEMBERS.jaime} />
        </div>

        {/* Column 3 (2 cols wide, offset down): Thomas Valente */}
        <div className="col-span-2 flex flex-col gap-y-[5vw] md:gap-y-[6vw] mt-[8vw] lg:mt-[10vw]">
          <TeamCard member={MEMBERS.thomas} />
        </div>

        {/* Column 4 (1 col wide, offset down): Gemma Garman -> Elliot Harris */}
        <div className="col-span-1 flex flex-col gap-y-[5vw] md:gap-y-[6vw] mt-[8vw] lg:mt-[10vw]">
          <TeamCard member={MEMBERS.gemma} />
          <TeamCard member={MEMBERS.elliot} />
        </div>
      </div>

      {/* Mobile / Tablet Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-x-4 gap-y-10 px-[6vw] sm:px-[5vw]">
        {ALL_MEMBERS.map((member, i) => (
          <TeamCard key={i} member={member} />
        ))}
      </div>
    </section>
  );
}