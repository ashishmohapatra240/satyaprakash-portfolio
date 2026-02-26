"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
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
  },
  {
    title: "From Chaos to Consistency: A Scalable Design System",
    company: "DreamX",
    bgColor: "#DF193B",
    href: "/projects/dreamx",
    image: "/images/new-projects/thumbnails/DreamX.png",
  },
  {
    title: "Building a royalty system for a global pizza brand",
    company: "Pizza Hut Indonesia",
    bgColor: "#C8102E",
    href: "/projects/pizza-hut",
    image: "/images/new-projects/thumbnails/PH.png",
  },
  {
    title: "Spring Design System",
    company: "Internal",
    bgColor: "#1C1C2E",
    href: "/projects/spring-design",
    image: "/images/new-projects/thumbnails/SD.png",
  },
];

const CARD_W_VW = 50;
const MAX_CARD_W = 820;
const CARD_H = `calc(min(${CARD_W_VW}vw, ${MAX_CARD_W}px) * 678 / 1200)`;
const GAP_VW = 3;
const CENTER_LEFT_VW = 10;
// Knob scales with viewport width; clamp keeps it reasonable on very small/large screens
const KNOB_CSS = "clamp(120px, 16vw, 200px)";
// Fraction of scrollYProgress reserved for the knob/heading entry animation
// before the ticker starts moving (≈ 0.14 × 400vh ≈ 56vh of scroll)
const ENTRY_END = 0.14;

export default function Work02() {
  const sectionRef = useRef<HTMLElement>(null);
  const n = WORK_PROJECTS.length;

  const [xEndPx, setXEndPx] = useState(0);
  const clickThresholdsRef = useRef<number[]>([]);

  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      const cardW = Math.min((CARD_W_VW / 100) * vw, MAX_CARD_W);
      const gap = (GAP_VW / 100) * vw;
      const paddingLeft = vw;
      const centerLeft = (CENTER_LEFT_VW / 100) * vw;
      const xEnd = centerLeft - paddingLeft - (n - 1) * (cardW + gap);
      setXEndPx(xEnd);

      const thresholds: number[] = [];

      for (let i = 0; i < n; i++) {
        const entryX = -i * (cardW + gap);
        const landX = centerLeft - paddingLeft - i * (cardW + gap);
        // Raw values in [0,1] relative to the ticker's own motion range
        const entryP_raw = Math.max(0, entryX / xEnd);
        const landP_raw = Math.min(1, landX / xEnd);
        // Remap to actual scrollYProgress range [ENTRY_END, 1]
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

  // Phase 1 — entry (knob appears, then heading appears)
  const knobOpacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
  const knobScale = useTransform(scrollYProgress, [0, 0.06], [0.78, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0.04, 0.11], [0, 1]);
  // Phase 2 — main (ticker slides + knob rotates), starts after entry
  const tickerX = useTransform(scrollYProgress, [ENTRY_END, 1], [0, xEndPx]);
  const knobRotate = useTransform(scrollYProgress, [ENTRY_END, 1], [0, 270]);

  const prevProgressRef = useRef(0);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const prev = prevProgressRef.current;
    for (const t of clickThresholdsRef.current) {
      if ((prev < t && p >= t) || (prev > t && p <= t)) {
        playMechanicalClick();
      }
    }
    prevProgressRef.current = p;
  });


  return (
    <section
      ref={sectionRef}
      style={{ height: `${(n + 1) * 100}vh`, position: "relative" }}
    >
      {/* Sticky 100vh viewport — flex column, whole content centered */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowX: "clip" as any,
          overflowY: "visible",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left edge fade — smoothstep eased */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "120vh",
            width: "18%",
            zIndex: 20,
            pointerEvents: "none",
            background:
              "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 8%, rgba(255,255,255,0.85) 18%, rgba(255,255,255,0.65) 32%, rgba(255,255,255,0.42) 48%, rgba(255,255,255,0.20) 64%, rgba(255,255,255,0.07) 80%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Right edge fade — smoothstep eased */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "120vh",
            width: "18%",
            zIndex: 20,
            pointerEvents: "none",
            background:
              "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 8%, rgba(255,255,255,0.85) 18%, rgba(255,255,255,0.65) 32%, rgba(255,255,255,0.42) 48%, rgba(255,255,255,0.20) 64%, rgba(255,255,255,0.07) 80%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Knob + heading */}
        <motion.div
          style={{
            position: "relative",
            width: KNOB_CSS,
            height: KNOB_CSS,
            flexShrink: 0,
            filter: "drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.12))",
            opacity: knobOpacity,
            scale: knobScale,
          }}
        >
          {/* Knob: only bottom half visible, fading toward center, rotates on scroll */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              maskImage:
                "linear-gradient(to top, black 0%, black 25%, transparent 50%)",
              WebkitMaskImage:
                "linear-gradient(to top, black 0%, black 25%, transparent 50%)",
            }}
          >
            <motion.div style={{ rotate: knobRotate, width: "100%", height: "100%" }}>
              <Image
                src="/images/Me/Knob.svg"
                alt=""
                width={280}
                height={280}
                priority
                style={{ display: "block", width: "100%", height: "100%" }}
              />
            </motion.div>
          </div>

          {/* Heading — fades in after the knob appears */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
              opacity: headingOpacity,
            }}
          >
            <h2
              className="text-[12px] font-medium uppercase tracking-widest text-dark text-center"
              aria-label="Selected Work"
            >
              Selected<br />Work
            </h2>
          </motion.div>
        </motion.div>

        {/* 15vh gap between knob and cards */}
        <div style={{ height: "15vh", flexShrink: 0 }} />

        {/* Scroll-driven card ticker */}
        <div style={{ width: "100%", flexShrink: 0 }}>
          <motion.div
            style={{
              x: tickerX,
              display: "flex",
              gap: `${GAP_VW}vw`,
              paddingLeft: "100vw",
              width: "max-content",
            }}
          >
            {WORK_PROJECTS.map((project) => (
              <div
                key={project.href}
                style={{ width: `min(${CARD_W_VW}vw, ${MAX_CARD_W}px)`, flexShrink: 0 }}
              >
                <ProjectCard02 {...project} height={CARD_H} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
