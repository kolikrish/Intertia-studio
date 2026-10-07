'use client'
import Image from "next/image";
import React from "react";
import ParallaxImage from "./ParallexImage";
import UseTablet from "../Responsive/UseTablet";

export default function WorkVideo({ 
  videoSrc = "/assets/video/shoes_Video.mp4",
  imageSrc = "/assets/images/4.avif",
  imageScale = "120",
  className = ""
}) {
  const isTablet = UseTablet();

  return (
    <div className={`h-full cursor-pointer w-full overflow-hidden group relative ${className}`}>
      <div className="absolute max-md:hidden scale-[1.2] top-0 left-0 z-[5] w-full h-full">
        <video
          muted
          autoPlay
          loop
          playsInline
          className="h-full w-full object-cover"
          src={videoSrc}
          onMouseEnter={(e) => e.target.play()}
          onMouseLeave={(e) => e.target.pause()}
        />
      </div>
      <div className="absolute inset-0 h-full group-hover:opacity-0 opacity-100 transition-all duration-300 z-[10] w-full">
        {
          !isTablet ? (
            <ParallaxImage scale={imageScale} src={imageSrc} />
          ) : (
            <Image src={imageSrc} alt="work" fill className="h-full w-full object-cover" />
          )
        }
      </div>
    </div>
  );
}
