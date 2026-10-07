"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function CusrorImageTrail() {
  // Configuration values that can be tweaked
  const config = {
    minDistance: 80, // Minimum mouse movement distance to trigger new image
    minTimeGap: 100, // Minimum time (ms) between image changes
    maxVelocity: 100, // Maximum velocity cap for scaling
    rotationRange: [-5, 5], // Random rotation range
    imageSize: {
      width: 200,
      height: 300,
    },
    animation: {
      fadeIn: {
        duration: 0.15,
        opacity: 1,
      },
      movement: {
        scale: 0.8, 
        velocityScale: 1 / 400, 
        duration: 0.9,
        ease: "expo.out",
      },
      fadeOut: {
        scale: 0.2,
        duration: 1.2,
        ease: "power2.out",
        delay: -0.4,
      },
    },
  };

  const images = [
    "/assets/images/1.avif",
    "/assets/images/2.avif",
    "/assets/images/3.avif",
    "/assets/images/4.avif",
    "/assets/images/5.avif",
  ];

  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const currentImageIndex = useRef(0);
  const zIndex = useRef(1);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const getDistance = () => {
      return Math.hypot(
        mousePos.current.x - lastMousePos.current.x,
        mousePos.current.y - lastMousePos.current.y
      );
    };

    const showNextImage = () => {
      const img = containerRef.current.children[currentImageIndex.current];
      gsap.killTweensOf(img);

      const dx = mousePos.current.x - lastMousePos.current.x;
      const dy = mousePos.current.y - lastMousePos.current.y;
      const velocity = Math.min(Math.hypot(dx, dy), config.maxVelocity);

      gsap.set(img, {
        opacity: 0,
        scale: 1,
        rotation: gsap.utils.random(...config.rotationRange),
        zIndex: zIndex.current,
        x: mousePos.current.x - img.offsetWidth / 2,
        y: mousePos.current.y - img.offsetHeight / 2,
      });

      gsap
        .timeline()
        .to(img, {
          opacity: config.animation.fadeIn.opacity,
          duration: config.animation.fadeIn.duration,
        })
        .to(
          img,
          {
            x: mousePos.current.x - img.offsetWidth / 2,
            y: mousePos.current.y - img.offsetHeight / 2,
            scale:
              config.animation.movement.scale +
              velocity * config.animation.movement.velocityScale,
            duration: config.animation.movement.duration,
            ease: config.animation.movement.ease,
          },
          "<"
        )
        .to(img, {
          opacity: 0,
          scale: config.animation.fadeOut.scale,
          duration: config.animation.fadeOut.duration,
          ease: config.animation.fadeOut.ease,
          delay: config.animation.fadeOut.delay,
        });

      zIndex.current++;
      currentImageIndex.current =
        (currentImageIndex.current + 1) % images.length;
      lastMousePos.current = { ...mousePos.current };
    };

    let lastTime = 0;
    const render = (time) => {
      const distance = getDistance();
      if (
        distance > config.minDistance &&
        time - lastTime > config.minTimeGap
      ) {
        showNextImage();
        lastTime = time;
      }
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="h-full w-full absolute inset-0  overflow-hidden"
      ref={containerRef}
    >
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Trail Image ${i + 1}`}
            width={config.imageSize.width}
            height={config.imageSize.height}
            className="absolute opacity-0 pointer-events-none will-change-transform h-[10vw] w-[18vw] object-cover "
            priority={i === 0}
          />
        ))}
    </div>
  );
}

