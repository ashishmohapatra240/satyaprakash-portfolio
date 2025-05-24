"use client";

import { useRef } from "react";
import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";
import Interactive3DImage from "../Interactive3DImage";
import Marquee from "./Marquee";

const PROJECTS = [
  {
    title: "Designing the next-gen fraud detection system",
    description: "TeamX",
    image: "/images/projects/team-x.png",
    href: "/projects/team-x",
  },
  {
    title: "Branding and royalty system for global pizza brand",
    description: "Pizza Hut Indonesia",
    image: "/images/projects/hut-rewards.png",
    href: "/projects/pizza-hut",
  },
  // {
  //   title: "Mara design system",
  //   description: "Marathon Digital Holdings",
  //   image: "/images/projects/meta-design.png",
  // },
  {
    title: "Spring Design System",
    description: "Team",
    image: "/images/projects/spring.png",
    href: "/projects/spring-design",
  },

  // {
  //   title: "Crafting better note taking experience",
  //   description: "anonymous",
  //   image: "/images/projects/note-up.png",
  // },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.08, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function About() {
  const projectsRef = useRef(null);
  const sectionRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden" ref={sectionRef}>
      {/* Dark section */}
      <div className="min-h-screen bg-transparent relative flex flex-col justify-center items-center text-center pt-20 pb-32 widescreenConstraint">
        <motion.div
          className="mx-auto px-4 sm:px-6 lg:px-36 space-y-16 sm:space-y-24 dark-section-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* First text block */}
          <motion.h2
            className="text-white text-3xl sm:text-5xl max-w-2xl mx-auto font-medium leading-tight"
            variants={fadeIn}
          >
            I love challenges may it be
            <br className="hidden sm:block" />a sport or Design
          </motion.h2>

          {/* Add animated helmet image here */}
          <motion.div className="w-full">
            <Interactive3DImage
              src="/images/playstation.png"
              width={400}
              height={400}
              alt="playstation"
            />
          </motion.div>

          {/* Second text block */}
          <motion.p
            className="text-white/80 text-xl sm:text-3xl max-w-2xl mx-auto leading-relaxed"
            variants={fadeIn}
          >
            It&apos;s the adrenaline that keeps me up. May it be{" "}
            <br className="hidden sm:block" />
            riding my bike, cherishing basketball or creating{" "}
            <br className="hidden sm:block" />
            solution which can help thousands of people
          </motion.p>
        </motion.div>

        {/* Enhanced gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0E0F16]/30" />
      </div>

      {/* White section */}
      <div className="bg-white relative" ref={projectsRef}>
        {/* Top Content - Constrained */}
        <div className="pt-16 sm:pt-24 pb-32 widescreenConstraint">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-5xl font-medium text-[#0E0F16] mt-8 sm:mt-16 leading-tight">
              Crafting experience
              <br className="hidden sm:block" />
              Creating Impact
            </h2>
            <p className="text-gray text-lg sm:text-xl">that matters...</p>
          </motion.div>
        </div>

        {/* Marquee - Full Width */}
        <div className="w-full pb-32">
          <Marquee />
        </div>

        {/* Projects Grid - Constrained */}
        <div className="widescreenConstraint pb-24">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              {PROJECTS.slice(0, 2).map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1,
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-16 lg:mt-32">
              {PROJECTS.slice(2, 3).map((project, index) => (
                <motion.div
                  key={index + 2}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: (index + 2) * 0.1,
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
