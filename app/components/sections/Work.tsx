"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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

// Cards center in viewport (60vh card → top: 20vh centers it)
// Small per-card offset (8px) so the stack peeks slightly
const CARD_CENTER_TOP = "calc(20vh)";
const STACK_GAP = 8; // px

// Subtle random tilts — alternating left/right per card
const CARD_TILTS = [0, 1.8, -1.5, 2.2];

function StickyCardWrapper({
  project,
  index,
}: {
  project: (typeof WORK_PROJECTS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prevYRef = useRef(0);
  const thresholdsRef = useRef<number[]>([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Global scrollY for pixel-accurate click thresholds
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!ref.current) return;
    // Animation starts when the card's top edge hits the viewport bottom
    const startPx =
      ref.current.getBoundingClientRect().top + window.scrollY - window.innerHeight;
    thresholdsRef.current = [50, 100, 150, 200, 250, 300, 350, 400].map(
      (n) => startPx + n
    );
    prevYRef.current = window.scrollY;
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = prevYRef.current;
    for (const t of thresholdsRef.current) {
      if ((prev < t && y >= t) || (prev > t && y <= t)) {
        playMechanicalClick();
      }
    }
    prevYRef.current = y;
  });

  // Flip up from backward tilt → flat
  const rotateX = useTransform(scrollYProgress, [0, 0.75], [-60, 0]);
  // Settle into a subtle random tilt as card arrives
  const rotateZ = useTransform(
    scrollYProgress,
    [0.5, 0.75],
    [0, CARD_TILTS[index]]
  );

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        top: `calc(${CARD_CENTER_TOP} + ${index * STACK_GAP}px)`,
        zIndex: index + 1,
        perspective: "2500px",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateZ,
          transformOrigin: "bottom center",
        }}
      >
        <ProjectCard02 {...project} />
      </motion.div>
    </div>
  );
}

export default function Work() {
  // Container = 100vh (heading) + 50vh (spacer) + 100vh×(n-1) card travel + 20vh exit buffer
  // Last card only needs a small tail before the section ends
  const containerHeight = `${100 + 50 + (WORK_PROJECTS.length - 1) * 100 + 20}vh`;

  return (
    <section className="">
      <div
        className="relative max-w-[1200px] mx-auto px-5 md:px-6 lg:px-20"
        style={{ height: containerHeight }}
      >
        {/* Heading — sticky, centered in viewport, z-index 0 */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 0,
          }}
        >
          <h2 className="text-xl font-medium uppercase tracking-widest text-dark text-center">
            Selected Work
          </h2>
        </div>

        {/* 50vh spacer — heading stays centered before first card arrives */}
        <div style={{ height: "50vh" }} />

        {/* Cards — each stacks over the heading (z-index 1–4) */}
        {WORK_PROJECTS.map((project, index) => (
          <StickyCardWrapper key={project.href} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
