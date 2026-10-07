"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VideoSection() {
  const logoArray = [
    "/assets/marquee-logo/1.svg",
    "/assets/marquee-logo/2.svg", 
    "/assets/marquee-logo/3.svg",
    "/assets/marquee-logo/4.svg",
    "/assets/marquee-logo/5.svg",
    "/assets/marquee-logo/6.svg",
    "/assets/marquee-logo/7.svg",
    "/assets/marquee-logo/8.svg",
    "/assets/marquee-logo/9.svg",
    "/assets/marquee-logo/10.svg",
    "/assets/marquee-logo/11.svg",
    "/assets/marquee-logo/12.svg",
  ];

  const marqueeRef = useRef(null);
  const logoTrackRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const track = logoTrackRef.current;

    if (!marquee || !track) return;

    const trackWidth = track.scrollWidth;

    const clone = track.cloneNode(true);
    marquee.appendChild(clone);

    gsap.to(marquee.children, {
      x: `-${trackWidth}px`,
      duration: 25,
      ease: "none", 
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % trackWidth),
      },
    });

    // Pause on hover
    marquee.addEventListener('mouseenter', () => {
      gsap.to(marquee.children, {duration: 0.5, timeScale: 0});
    });

    marquee.addEventListener('mouseleave', () => {
      gsap.to(marquee.children, {duration: 0.5, timeScale: 1});
    });

  }, []);

  return (
    <>
      <section className="h-[15vh] w-full overflow-hidden relative">
        <div 
          ref={marqueeRef}
          className="flex whitespace-nowrap absolute left-0 top-1/2 -translate-y-1/2"
        >
          <div
            ref={logoTrackRef} 
            className="flex items-center gap-[5vw]"
          >
            {logoArray.map((logo, index) => (
              <Image
                key={`logo-${index}`}
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={100}
                height={100}
                className="min-w-[6vw] max-sm:min-w-[20vw] max-md:min-w-[20vw] transition-transform duration-300 hover:scale-110"
                draggable={false}
                priority={true}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="h-screen max-sm:h-[65vh] max-md:h-[65vh] w-full relative">
        <video
          src="/assets/video/second_video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </section>
    </>
  );
}
