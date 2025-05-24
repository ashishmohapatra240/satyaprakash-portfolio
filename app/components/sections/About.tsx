"use client";

import { useRef } from "react";
import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";

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
      {/* White section */}
      <div className="bg-white relative" ref={projectsRef}>
        {/* Top Content - Constrained */}
        {/* <div className="pt-16 sm:pt-24 pb-32 ">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-responsive-2xl lg:text-responsive-3xl 2xl:text-responsive-4xl font-medium text-[#0E0F16] mt-8 sm:mt-16 leading-tight">
            <h2 className="text-responsive-2xl lg:text-responsive-3xl 2xl:text-responsive-4xl font-medium text-[#0E0F16] mt-8 sm:mt-16 leading-tight">
              Crafting experience
              <br className="hidden sm:block" />
              Creating Impact
            </h2>
            <p className="text-gray text-responsive-base lg:text-responsive-lg">
              that matters...
            </p>
          </motion.div>
        </div> */}

        {/* Marquee - Full Width
        <div className="w-full pb-32">
          <Marquee />
        </div> */}

        {/* Projects Grid - Constrained */}
        <div className=" pb-24">
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
