"use client";
import React, { useEffect } from "react";
import { SplitTextAnimation } from "../Animation/Animations";

export default function Manifesto() {
  useEffect(() => {
    SplitTextAnimation(".split-text-manifesto", 0.06, 1);
    SplitTextAnimation(".split-text-manifesto-2", 0.02, 0.9);
  }, []);

  return (
    <section className="w-full px-[2.8vw] max-sm:px-[6vw] max-md:px-[5vw] py-[6vw]">
      <p className="text-[.9vw] max-sm:text-[4vw] max-md:text-[3.5vw] font-medium uppercase mb-[2vw]">
        Driven by curiosity, defined by craft
      </p>

      <h2 className="split-text-manifesto text-[3.2vw] max-md:text-[7vw] max-sm:text-[8vw] font-medium leading-[1.15] tracking-tight uppercase w-[85%] max-sm:w-full max-md:w-full">
        We are creative thinkers, rule breakers, collaborators, perfectionists,
        problem-solvers, boundary pushers and visual storytellers.
      </h2>

      <div className="mt-[4vw] grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 gap-[3vw] w-[85%] max-sm:w-full max-md:w-full ml-auto">
        <p className="split-text-manifesto-2 text-[1.1vw] max-sm:text-[4.5vw] max-md:text-[3.5vw] font-medium leading-[1.5]">
          At Inertia, we don&apos;t just play by the rules — we rewrite them.
          Driven by curiosity, we work at the edge of impossible – pushing the
          boundaries of CGI, design, and future aesthetics. We&apos;re not here
          to make pretty pictures. We&apos;re here to craft visual experiences
          that grab you by the gut and don&apos;t let go. That&apos;s why
          we&apos;ve nailed 70+ global campaigns, rendered over 3 billion
          pixels, and partnered with 50+ clients across industries that
          shouldn&apos;t even be in the same sentence — luxury to lifestyle.
          Haircare to eyewear. We&apos;ve done it all.
        </p>
        <p className="split-text-manifesto-2 text-[1.1vw] max-sm:text-[4.5vw] max-md:text-[3.5vw] font-medium leading-[1.5]">
          Inertia Studios is where bold doesn&apos;t even begin to cover it.
          We&apos;re talking boundary-pushing, rule-breaking, no-limits
          creativity. We don&apos;t just create the mould, we shatter it —
          every. single. time. We&apos;re dragging craftsmanship into the
          digital age, kicking and screaming. Every pixel, every frame,
          meticulously crafted, because mediocre won&apos;t cut it. We&apos;re
          here to make people stop, think, and feel something real. At Inertia
          Studios, we don&apos;t just move people and brands. We&apos;re
          crafting the future. That&apos;s what we do.
        </p>
      </div>
    </section>
  );
}
