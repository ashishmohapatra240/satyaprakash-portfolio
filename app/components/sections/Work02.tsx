"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import ProjectCard02 from "../ProjectCard02";
import { playMechanicalClick } from "@/app/utils/mechanicalClick";

const WORK_PROJECTS = [
  {
    title: "Designing the next-gen fraud detection system",
    company: "TeamX",
    bgColor: "#6A40C0",
    href: "/projects/team-x",
    image: "/images/new-projects/thumbnails/TeamX.png",
    imageDesktop: "/images/new-projects/thumbnails/TeamX-D.png",
  },
  {
    title: "From Chaos to Consistency: A Scalable Design System",
    company: "DreamX",
    bgColor: "#DF193B",
    href: "/projects/dreamx",
    image: "/images/new-projects/thumbnails/DreamX.png",
    imageDesktop: "/images/new-projects/thumbnails/DreamX-D.png",
  },
  {
    title: "Building a royalty system for a global pizza brand",
    company: "Pizza Hut Indonesia",
    bgColor: "#C8102E",
    href: "/projects/pizza-hut",
    image: "/images/new-projects/thumbnails/PH.png",
    imageDesktop: "/images/new-projects/thumbnails/PH-D.png",
  },
  {
    title: "Spring Design System",
    company: "Internal",
    bgColor: "#1C1C2E",
    href: "/projects/spring-design",
    image: "/images/new-projects/thumbnails/SD.png",
    imageDesktop: "/images/new-projects/thumbnails/SD-D.png",
  },
];

// Desktop values
const CARD_W_VW = 50;
const MAX_CARD_W = 820;
// Tablet values (< 1024px)
const CARD_W_VW_TAB = 72;
const MAX_CARD_W_TAB = 700;

const GAP_VW = 3;
const CENTER_LEFT_VW = 10;
const KNOB_CSS = "clamp(120px, 16vw, 200px)";
const ENTRY_END = 0.14;

export default function Work02() {
  const sectionRef = useRef<HTMLElement>(null);
  const n = WORK_PROJECTS.length;

  const [xEndPx, setXEndPx] = useState(0);
  const [cardDims, setCardDims] = useState({ w: `min(${CARD_W_VW}vw, ${MAX_CARD_W}px)`, h: `calc(min(${CARD_W_VW}vw, ${MAX_CARD_W}px) * 678 / 1200)` });
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const clickThresholdsRef = useRef<number[]>([]);

  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      setIsMobile(vw < 768);
      const tab = vw < 1024;
      setIsTablet(tab);
      const cardWVw = tab ? CARD_W_VW_TAB : CARD_W_VW;
      const maxCardW = tab ? MAX_CARD_W_TAB : MAX_CARD_W;
      setCardDims({
        w: `min(${cardWVw}vw, ${maxCardW}px)`,
        h: `calc(min(${cardWVw}vw, ${maxCardW}px) * 678 / 1200)`,
      });
      const cardW = Math.min((cardWVw / 100) * vw, maxCardW);
      const gap = (GAP_VW / 100) * vw;
      const paddingLeft = vw;
      const centerLeft = (CENTER_LEFT_VW / 100) * vw;
      const xEnd = centerLeft - paddingLeft - (n - 1) * (cardW + gap);
      setXEndPx(xEnd);

      const thresholds: number[] = [];
      for (let i = 0; i < n; i++) {
        const entryX = -i * (cardW + gap);
        const landX = centerLeft - paddingLeft - i * (cardW + gap);
        const entryP_raw = Math.max(0, entryX / xEnd);
        const landP_raw = Math.min(1, landX / xEnd);
        const entryP = ENTRY_END + entryP_raw * (1 - ENTRY_END);
        const landP = ENTRY_END + landP_raw * (1 - ENTRY_END);
        for (let k = 0; k < 8; k++) {
          thresholds.push(entryP + (k / 7) * (landP - entryP));
        }
      }
      clickThresholdsRef.current = thresholds.sort((a, b) => a - b);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [n]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const knobOpacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
  const knobScale = useTransform(scrollYProgress, [0, 0.06], [0.78, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0.04, 0.11], [0, 1]);
  const tickerX = useTransform(scrollYProgress, [ENTRY_END, 1], [0, xEndPx]);
  const knobRotate = useTransform(scrollYProgress, [ENTRY_END, 1], [0, 270]);

  const prevProgressRef = useRef(0);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (isMobile) return;
    const prev = prevProgressRef.current;
    for (const t of clickThresholdsRef.current) {
      if ((prev < t && p >= t) || (prev > t && p <= t)) {
        playMechanicalClick();
      }
    }
    prevProgressRef.current = p;
  });

  /* ── Mobile layout ─────────────────────────────────────────────────── */
  if (isMobile) {
    return (
      <section className="w-full py-16 px-0">
        {/* Header */}
        <p className="text-xs font-sans font-medium uppercase tracking-[0.18em] text-dark text-center mb-8">
          Selected Work
        </p>

        {/* Stacked 1:1 cards */}
        <div className="flex flex-col gap-4 px-5">
          {WORK_PROJECTS.map((project) => (
            <Link key={project.href} href={project.href} className="block w-full">
              <div
                className="w-full rounded-[12px] overflow-hidden"
                style={{
                  backgroundColor: project.bgColor,
                  aspectRatio: "1 / 1",
                  backgroundImage: project.image ? `url(${project.image})` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "inset 0 3.8px 45.55px 0 rgba(255,255,255,0.7), 0 8px 32px rgba(0,0,0,0.2)",
                  position: "relative",
                }}
              >
                <div className="absolute top-0 left-0 p-5 z-10 max-w-[70%]">
                  <p className="text-white/60 text-xs font-medium tracking-wide mb-1">
                    {project.company}
                  </p>
                  <h3 className="text-white text-[15px] font-normal leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  /* ── Desktop / tablet layout ───────────────────────────────────────── */
  return (
    <section
      ref={sectionRef}
      style={{ height: `${(n + 1) * 100}vh`, position: "relative" }}
    >
      {/* Sticky 100vh viewport — flex column */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: isTablet ? "-8vh" : 0,
        }}
      >
        {/* Left edge fade */}
        <div
          style={{
            position: "absolute", left: 0, top: 0, height: "120vh", width: "18%",
            zIndex: 20, pointerEvents: "none",
            background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 8%, rgba(255,255,255,0.85) 18%, rgba(255,255,255,0.65) 32%, rgba(255,255,255,0.42) 48%, rgba(255,255,255,0.20) 64%, rgba(255,255,255,0.07) 80%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Right edge fade */}
        <div
          style={{
            position: "absolute", right: 0, top: 0, height: "120vh", width: "18%",
            zIndex: 20, pointerEvents: "none",
            background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 8%, rgba(255,255,255,0.85) 18%, rgba(255,255,255,0.65) 32%, rgba(255,255,255,0.42) 48%, rgba(255,255,255,0.20) 64%, rgba(255,255,255,0.07) 80%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Knob + heading */}
        <motion.div
          style={{
            position: "relative", width: KNOB_CSS, height: KNOB_CSS, flexShrink: 0,
            filter: "drop-shadow(0px 6px 10px rgba(0,0,0,0.12))",
            opacity: knobOpacity, scale: knobScale,
          }}
        >
          <div
            style={{
              position: "absolute", inset: 0,
              maskImage: "linear-gradient(to top, black 0%, black 25%, transparent 50%)",
              WebkitMaskImage: "linear-gradient(to top, black 0%, black 25%, transparent 50%)",
            }}
          >
            <motion.div style={{ rotate: knobRotate, width: "100%", height: "100%" }}>
              <Image src="/images/Me/Knob.svg" alt="" width={280} height={280} priority
                style={{ display: "block", width: "100%", height: "100%" }} />
            </motion.div>
          </div>

          <motion.div
            style={{
              position: "absolute", inset: 0, display: "flex",
              alignItems: "center", justifyContent: "center", zIndex: 1,
              opacity: headingOpacity,
            }}
          >
            <h2 className="text-xs font-sans font-medium uppercase tracking-[0.18em] text-dark text-center" aria-label="Selected Work">
              Selected<br />Work
            </h2>
          </motion.div>
        </motion.div>

        {/* Gap between knob and cards */}
        <div style={{ height: isTablet ? "6vh" : "15vh", flexShrink: 0 }} />

        {/* Scroll-driven card ticker */}
        <div style={{ width: "100%", flexShrink: 0 }}>
          <motion.div
            style={{
              x: tickerX, display: "flex",
              gap: `${GAP_VW}vw`, paddingLeft: "100vw", width: "max-content",
            }}
          >
            {WORK_PROJECTS.map((project) => (
              <div key={project.href} style={{ width: cardDims.w, flexShrink: 0 }}>
                <ProjectCard02 {...project} imageDesktop={project.imageDesktop} height={cardDims.h} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
