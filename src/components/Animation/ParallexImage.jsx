"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import UseMobile from "./Responsive/UseMobile";
gsap.registerPlugin(ScrollTrigger);

export default function ParallaxImage({ src, alt, className, scale = 160 }) {
  const imageRef = useRef(null);
  const triggerRef = useRef(null);
  // const isMobile = UseMobile();

  useEffect(() => {
    // if(isMobile) return;

    if (triggerRef.current) {
      triggerRef.current.kill();
    }

    triggerRef.current = ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(imageRef.current, {
          yPercent: 10 * self.progress,
          ease: "none",
          duration: 0,
        });
      },
    });

    // Cleanup function
    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
    };
  }, [src]); 

  return (
    <div className={`w-full h-full overflow-hidden relative ${className}`}>
      <div ref={imageRef} className="absolute inset-0 h-full w-full">
        <Image
          src={src}
          alt={"images"}
          height={500}
          width={500}
          style={{
            scale: `${scale}%`,
          }}
          className={`object-cover w-full h-full`}
          priority
        />
      </div>
    </div>
  );
}