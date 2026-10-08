"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Home/Footer";
import FooterMobile from "@/components/Home/FooterMobile";
import UseTablet from "@/components/Responsive/UseTablet";
import ArrowSvg from "@/Utils/arrowSvg";
import { WORK_PROJECTS, CATEGORIES } from "@/data/workProjects";

export default function WorkPage() {
  const isTablet = UseTablet();
  const [selectedCategory, setSelectedCategory] = useState("All works");
  const containerRef = useRef(null);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All works") return WORK_PROJECTS;
    return WORK_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Animate cards on category filter change
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
  }, [selectedCategory]);

  return (
    <div className="bg-white text-black min-h-screen selection:bg-black selection:text-white">
      <NavBar />

      <main ref={containerRef} className="pt-[14vw] md:pt-[9vw] px-[2.8vw] pb-[6vw] w-full">
        {/* Top Control Bar: Category Filters & Title */}
        <div className="flex flex-col items-center justify-center text-center mb-[6vw] md:mb-[5vw] gap-5">
          {/* Header Title with Dynamic Project Count */}
          <div className="flex flex-col items-center gap-2">
            <div>
              <h1 className="text-sm md:text-[1vw] font-semibold tracking-wider uppercase">
                All works
              </h1>

            <span className="text-xs md:text-[.85vw] text-neutral-400 font-mono">
              / ({filteredProjects.length})
            </span>
            </div>

            <div className="text-3xl">
              <h2>/Products & Brand</h2>
              <h2>/3D Billboard</h2>
              <h2>/Immersive</h2>
            </div>
          </div>
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-16">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {isTablet ? <FooterMobile /> : <Footer />}
    </div>
  );
}

// ----------------------------------------------------
// Project Card Component
// ----------------------------------------------------
function ProjectCard({ project }) {
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
      className="work-item-anim flex flex-col group cursor-pointer"
    >
      {/* Media Box */}
      <div className="relative aspect-[3/3] w-full bg-neutral-100 overflow-hidden mb-4">
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
      <div className="flex flex-col gap-1">
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