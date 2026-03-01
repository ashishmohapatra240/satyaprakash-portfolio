"use client";

import { useRef, useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 55%", "start 15%"],
  });

  // Heading — blur-to-sharp + scale + fade
  const headingOpacity = useTransform(scrollYProgress, [0, 0.22], [0, 1]);
  const headingY       = useTransform(scrollYProgress, [0, 0.22], [20, 0]);
  const headingScale   = useTransform(scrollYProgress, [0, 0.22], [0.92, 1]);
  const headingBlur    = useTransform(scrollYProgress, [0, 0.22], [6, 0]);
  const headingFilter  = useTransform(headingBlur, (v) => `blur(${v}px)`);

  // Row 1 — scale-up + fade + slide
  const row1Opacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);
  const row1Y       = useTransform(scrollYProgress, [0.15, 0.5], [48, 0]);
  const row1Scale   = useTransform(scrollYProgress, [0.15, 0.5], [0.96, 1]);
  const row1Rotate  = useTransform(scrollYProgress, [0.15, 0.5], [0.8, 0]);

  // Row 2 — staggered after row 1, slight counter-rotation
  const row2Opacity = useTransform(scrollYProgress, [0.3, 0.65], [0, 1]);
  const row2Y       = useTransform(scrollYProgress, [0.3, 0.65], [48, 0]);
  const row2Scale   = useTransform(scrollYProgress, [0.3, 0.65], [0.96, 1]);
  const row2Rotate  = useTransform(scrollYProgress, [0.3, 0.65], [-0.6, 0]);

  const CARD_W = isMobile ? 180 : 320;
  const CARD_H = isMobile ? 135 : 240;

  /* ── Mobile layout: no scroll-driven fade-ins ────────────────────── */
  if (isMobile) {
    return (
      <section
        className="flex flex-col items-center justify-center gap-4 -mx-5 w-screen"
        style={{ paddingTop: "80px", paddingBottom: "80px", overflowX: "clip" }}
      >
        <p className="text-xs font-sans font-medium uppercase tracking-[0.18em] text-dark text-center mb-4">
          More Than Work
        </p>

        {/* Row 1 */}
        <div className="w-full relative">
          <div style={{ overflowX: "clip", overflowY: "clip" }}>
            <div
              className="absolute left-0 top-0 h-full z-10 pointer-events-none"
              style={{ width: "10%", background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)" }}
            />
            <div
              className="absolute right-0 top-0 h-full z-10 pointer-events-none"
              style={{ width: "10%", background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)" }}
            />
            <div className="flex gap-3" style={{ animation: "gallery-ticker 60s linear infinite", width: "max-content" }}>
              {[...ROW1, ...ROW1].map((mock, i) => (
                <GalleryMock key={i} {...mock} width={CARD_W} height={CARD_H} borderRadius={12} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full relative">
          <div style={{ overflowX: "clip", overflowY: "clip" }}>
            <div
              className="absolute left-0 top-0 h-full z-10 pointer-events-none"
              style={{ width: "10%", background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)" }}
            />
            <div
              className="absolute right-0 top-0 h-full z-10 pointer-events-none"
              style={{ width: "10%", background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)" }}
            />
            <div className="flex gap-3" style={{ animation: "gallery-ticker-reverse 60s linear infinite", width: "max-content", marginLeft: "-50%" }}>
              {[...ROW2, ...ROW2].map((mock, i) => (
                <GalleryMock key={i} {...mock} width={CARD_W} height={CARD_H} borderRadius={12} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── Desktop layout ──────────────────────────────────────────────── */
  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-4 max-w-7xl mx-auto w-full px-3 md:px-6 lg:px-20 min-h-screen lg:min-h-[150vh] pt-[120px] pb-[120px] lg:pt-[160px] lg:pb-[160px]"
    >
      {/* Heading */}
      <motion.h2
        style={{
          opacity: headingOpacity,
          y: headingY,
          scale: headingScale,
          filter: headingFilter,
        }}
        className="text-xs font-sans font-medium uppercase tracking-[0.18em] text-dark text-center"
        aria-label="More Than Work"
      >
        More Than Work
      </motion.h2>

      {/* Ticker row 1 — scrolls left */}
      <motion.div
        style={{
          opacity: row1Opacity,
          y: row1Y,
          scale: row1Scale,
          rotate: row1Rotate,
        }}
        className="w-full relative mt-8"
      >
        <div style={{ overflowX: "clip", overflowY: "clip" }}>
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
        style={{
          opacity: row2Opacity,
          y: row2Y,
          scale: row2Scale,
          rotate: row2Rotate,
        }}
        className="w-full relative"
      >
        <div style={{ overflowX: "clip", overflowY: "clip" }}>
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
