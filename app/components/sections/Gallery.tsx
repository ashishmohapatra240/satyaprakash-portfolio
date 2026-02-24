"use client";

import { useEffect, useRef, useState } from "react";
import GalleryMock from "../GalleryMock";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MOCKS = [
  { image: "/images/design/Scribbling/1.png" },
  { video: "/images/design/3D/1.mp4" },
  { image: "/images/design/Scribbling/4.png" },
  { video: "/images/design/3D/2.mp4" },
  { image: "/images/design/Scribbling/2.png" },
  { video: "/images/design/3D/3.mp4" },
  { image: "/images/design/Scribbling/5.png" },
  { video: "/images/design/3D/4.mp4" },
  { image: "/images/design/3D/IMG.png" },
  { image: "/images/design/Scribbling/3.png" },
];

export default function Gallery() {
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const tickerWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const tickerWrap = tickerWrapRef.current;
    if (!section || !heading || !tickerWrap) return;

    const tl = gsap.timeline({
      delay: 0.8,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power4.out" },
    });

    // Heading letters slide up
    const letters = heading.querySelectorAll("[data-letter]");
    tl.from(letters, {
      y: 20,
      opacity: 0,
      filter: "blur(4px)",
      stagger: 0.04,
      duration: 0.55,
    })

    // Ticker slides up from below + fades in
    .from(tickerWrap, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.2");

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-12 max-w-7xl mx-auto w-full px-3 md:px-6 lg:px-20"
      style={{ minHeight: "150vh", paddingBottom: "240px" }}
    >
      {/* Heading — letter by letter */}
      <h2
        ref={headingRef}
        className="text-xl font-medium uppercase tracking-widest text-dark text-center"
        aria-label="More Than Work"
      >
        {"More Than Work".split("").map((char, i) => (
          <span
            key={i}
            data-letter
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00a0" : char}
          </span>
        ))}
      </h2>

      {/* Ticker with edge fades */}
      <div ref={tickerWrapRef} className="w-full relative" style={{ overflowX: "hidden", overflowY: "visible" }}>
        {/* Left fade overlay */}
        <div
          className="absolute left-0 top-0 h-full z-10 pointer-events-none"
          style={{
            width: "12%",
            background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        {/* Right fade overlay */}
        <div
          className="absolute right-0 top-0 h-full z-10 pointer-events-none"
          style={{
            width: "12%",
            background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="flex gap-5"
          style={{
            animation: "gallery-ticker 60s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {[...MOCKS, ...MOCKS].map((mock, i) => (
            <GalleryMock
              key={i}
              {...mock}
              onHoverStart={() => setPaused(true)}
              onHoverEnd={() => setPaused(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
