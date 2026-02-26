"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GalleryMock from "../GalleryMock";

// 18 unique items split evenly — 9 per row, no repeats
const ROW1 = [
  { video: "/images/design/3D/1.mp4" },
  { image: "/images/design/Scribbling/1.png" },
  { image: "/images/design/casino.png" },
  { image: "/images/design/Scribbling/2.png" },
  { video: "/images/design/3D/2.mp4" },
  { image: "/images/design/Gem.png" },
  { image: "/images/design/Scribbling/3.png" },
  { image: "/images/design/Thread.png" },
  { image: "/images/design/3D/IMG.png" },
];

const ROW2 = [
  { image: "/images/design/Scribbling/4.png" },
  { video: "/images/design/3D/3.mp4" },
  { image: "/images/design/Love button.png" },
  { image: "/images/design/Scribbling/5.png" },
  { video: "/images/design/3D/4.mp4" },
  { image: "/images/design/stone toggle.png" },
  { image: "/images/design/Wallet.png" },
  { image: "/images/design/Web.png" },
  { image: "/images/design/Wooden phone.png" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  // progress=0 when section top hits 55% from viewport top (heading near center)
  // progress=1 when section top hits 15% from viewport top
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 55%", "start 15%"],
  });

  // Heading — appears immediately as section top reaches center-ish
  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const headingY       = useTransform(scrollYProgress, [0, 0.25], [16, 0]);
  const headingBlur    = useTransform(scrollYProgress, [0, 0.25], [4, 0]);
  const headingFilter  = useTransform(headingBlur, (v) => `blur(${v}px)`);

  // Row 1 — loads shortly after heading
  const row1Opacity = useTransform(scrollYProgress, [0.2, 0.55], [0, 1]);
  const row1Y       = useTransform(scrollYProgress, [0.2, 0.55], [40, 0]);

  // Row 2 — slightly staggered after row 1
  const row2Opacity = useTransform(scrollYProgress, [0.35, 0.7], [0, 1]);
  const row2Y       = useTransform(scrollYProgress, [0.35, 0.7], [40, 0]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-4 max-w-7xl mx-auto w-full px-3 md:px-6 lg:px-20"
      style={{ minHeight: "150vh", paddingTop: "240px", paddingBottom: "240px" }}
    >
      {/* Heading */}
      <motion.h2
        style={{ opacity: headingOpacity, y: headingY, filter: headingFilter }}
        className="text-base font-medium uppercase tracking-widest text-dark text-center"
        aria-label="More Than Work"
      >
        More Than Work
      </motion.h2>

      {/* Ticker row 1 — scrolls left */}
      <motion.div
        style={{ opacity: row1Opacity, y: row1Y }}
        className="w-full relative mt-8"
      >
        <div style={{ overflowX: "hidden", overflowY: "visible" }}>
          <div
            className="absolute left-0 top-0 h-full z-10 pointer-events-none"
            style={{
              width: "12%",
              background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 h-full z-10 pointer-events-none"
            style={{
              width: "12%",
              background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            className="flex gap-4"
            style={{ animation: "gallery-ticker 60s linear infinite", width: "max-content" }}
          >
            {[...ROW1, ...ROW1].map((mock, i) => (
              <GalleryMock key={i} {...mock} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Ticker row 2 — scrolls right */}
      <motion.div
        style={{ opacity: row2Opacity, y: row2Y }}
        className="w-full relative"
      >
        <div style={{ overflowX: "hidden", overflowY: "visible" }}>
          <div
            className="absolute left-0 top-0 h-full z-10 pointer-events-none"
            style={{
              width: "12%",
              background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 h-full z-10 pointer-events-none"
            style={{
              width: "12%",
              background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            className="flex gap-4"
            style={{
              animation: "gallery-ticker-reverse 60s linear infinite",
              width: "max-content",
              marginLeft: "-50%",
            }}
          >
            {[...ROW2, ...ROW2].map((mock, i) => (
              <GalleryMock key={i} {...mock} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
