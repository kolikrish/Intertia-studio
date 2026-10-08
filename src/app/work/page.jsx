"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Home/Footer";
import FooterMobile from "@/components/Home/FooterMobile";
import UseTablet from "@/components/Responsive/UseTablet";
import { WORK_PROJECTS } from "@/data/workProjects";

export default function WorkPage() {
  const isTablet = UseTablet();
  const containerRef = useRef(null);

  // Animate cards on initial load
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-item-anim",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.03,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white text-black min-h-screen selection:bg-black selection:text-white">
      <NavBar />

      <main ref={containerRef} className="pt-[22vw] sm:pt-[16vw] md:pt-[9vw] px-[4vw] sm:px-[3.5vw] md:px-[2.8vw] pb-[8vw] md:pb-[6vw] w-full">
        {/* Top Header: Title & Project Count */}
        <div className="flex flex-col items-center justify-center text-center mb-[8vw] sm:mb-[6vw] md:mb-[5vw]">
          <div className="flex items-center gap-1.5 uppercase">
            <h1 className="text-xs sm:text-sm md:text-[1vw] font-semibold tracking-wider">
              All works
            </h1>
            <span className="text-[11px] sm:text-xs md:text-[.85vw] text-neutral-400 font-mono">
              / ({WORK_PROJECTS.length})
            </span>
          </div>

          <div className="text-2xl sm:text-3xl md:text-4xl text-center mt-3 sm:mt-4 md:mt-[1.2vw] font-light">
            <h2>/Products & Brand</h2>
            <h2>/3D Billboard</h2>
            <h2>/Immersive</h2>
          </div>
        </div>

        {/* ================= CARDS GRID (3-cols, then 2-cols alternating) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-12 md:gap-y-16">
          {WORK_PROJECTS.map((project, index) => {
            // Pattern: 3 items (span 2 each), then 2 items (span 3 each), repeat
            const isLarge = index % 5 === 3 || index % 5 === 4;
            return (
              <ProjectCard
                key={project.id}
                project={project}
                isLarge={isLarge}
              />
            );
          })}
        </div>
      </main>

      {isTablet ? <FooterMobile /> : <Footer />}
    </div>
  );
}

// ----------------------------------------------------
// Project Card Component
// ----------------------------------------------------
function ProjectCard({ project, isLarge }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`work-item-anim flex flex-col group cursor-pointer ${
        isLarge
          ? "col-span-1 sm:col-span-1 md:col-span-3"
          : "col-span-1 sm:col-span-1 md:col-span-2"
      }`}
    >
      {/* Media Box */}
      <div
        className={`relative w-full bg-neutral-100 overflow-hidden mb-4 transition-all duration-300 ${
          isLarge
            ? "aspect-[1/1] md:aspect-[16/10.2]"
            : "aspect-[1/1] md:aspect-[25/24]"
        }`}
      >
        {/* Base Image */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => {
            // Fallback to local asset if external image is blocked
            e.currentTarget.src = project.fallbackImage;
          }}
        />

        {/* Video Overlay on Hover */}
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        )}
      </div>

      {/* Card Info */}
      <div className={`flex flex-col gap-1 ${isLarge ? "md:max-w-[70%]" : "w-full"}`}>
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-sm md:text-[1.1vw] font-medium tracking-tight uppercase leading-snug group-hover:text-neutral-500 transition-colors duration-300">
            <span className="font-mono text-xs md:text-[.85vw] text-neutral-400 mr-2">
              {project.nb}
            </span>
            {project.title}
          </h2>
        </div>
        <p className="text-xs md:text-[.85vw] text-neutral-500 line-clamp-2 leading-relaxed">
          {project.desc}
        </p>
      </div>
    </article>
  );
}