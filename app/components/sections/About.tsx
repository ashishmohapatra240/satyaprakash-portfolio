"use client";

import { useRef } from "react";
import ProjectCard from "../ProjectCard";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PROJECTS = [
  {
    title: "Designing the next-gen fraud detection system",
    description:
      "A comprehensive fraud detection system for TeamX that helps protect millions of transactions.",
    company: "Team X",
    image: "/images/new-projects/thumbnails/TeamX.png",
    href: "/projects/team-x",
    year: "2024",
  },
  {
    title: "From chaos to clarity: DreamX's payment experience",
    description:
      "Crafting a delightful and intuitive experience for DreamX that brings everyday payments to life—seamless, personal, and built with clarity in every click.",
    company: "DreamX",
    image: "/images/new-projects/thumbnails/DreamX.png",
    href: "/projects/dreamx",
    year: "2023",
  },
  {
    title: "Building a royalty system for a global pizza brand",
    description:
      "Redesigning the loyalty program experience for Pizza Hut Indonesia's customers.",
    company: "Pizza Hut Indonesia",
    image: "/images/new-projects/thumbnails/PH.png",
    href: "/projects/pizza-hut",
    year: "2023",
  },
  {
    title: "Spring Design System",
    description:
      "Creating a scalable and consistent design system that powers multiple products.",
    company: "Internal",
    image: "/images/new-projects/thumbnails/SD.png",
    href: "/projects/spring-design",
    year: "2023",
  },
];

function ScrollRevealCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Slide up: 80px below → 0 as card enters; stays at 0 once in view
  const rawY = useTransform(scrollYProgress, [0, 0.4, 1], [80, 0, 0]);
  // Fade in: invisible → fully visible as card enters; stays visible
  const rawOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 1, 1]);

  // Spring smoothing for fluid, non-mechanical feel
  const y = useSpring(rawY, { stiffness: 80, damping: 25 });
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 25 });

  return (
    <div ref={ref}>
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden" ref={sectionRef}>
      <div className="bg-white relative">
        {/* Projects Grid */}
        <div className="pb-24 pt-20 max-w-7xl px-5 lg:px-20 md:px-6">
          {/* Heading — keeps whileInView (fires once, correct for a heading) */}
          <motion.div
            className="text-left mb-6 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-7xl font-normal text-dark">
              Featured work
            </h2>
          </motion.div>

          {/* Cards — scroll-linked slide-up */}
          <div className="max-w-7xl mx-auto divide-y-2 divide-slate-200">
            <div className="space-y-0">
              {PROJECTS.map((project, index) => (
                <ScrollRevealCard key={index}>
                  <ProjectCard
                    {...project}
                    isLast={index === PROJECTS.length - 1}
                  />
                </ScrollRevealCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
