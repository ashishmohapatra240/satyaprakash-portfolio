"use client";

import { useRef } from "react";
import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Designing the next-gen fraud detection system",
    description:
      "A comprehensive fraud detection system for TeamX that helps protect millions of transactions.",
    company: "TeamX",
    image: "/images/projects/team-x.png",
    href: "/projects/team-x",
    year: "2024",
  },
  {
    title: "Branding and royalty system for global pizza brand",
    description:
      "Redesigning the loyalty program experience for Pizza Hut Indonesia's customers.",
    company: "Pizza Hut Indonesia",
    image: "/images/projects/hut-rewards.png",
    href: "/projects/pizza-hut",
    year: "2023",
  },
  // {
  //   title: "Mara design system",
  //   description: "Marathon Digital Holdings",
  //   image: "/images/projects/meta-design.png",
  // },
  {
    title: "Spring Design System",
    description:
      "Creating a scalable and consistent design system that powers multiple products.",
    company: "Team",
    image: "/images/projects/spring.png",
    href: "/projects/spring-design",
    year: "2023",
  },
  {
    title: "DeamX",
    description: "From Chaos to Consistency: A Scalable Design System",
    company: "Team",
    image: "/images/projects/spring.png",
    href: "/projects/spring-design",
    year: "2023",
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
        <div className="pb-24 pt-20 max-w-7xl px-5 lg:px-20 md:px-6">
          {/* Projects Heading */}
          <motion.div
            className="text-left mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-7xl font-medium text-dark">
              Crafting experience
              <br />
              Creating Impact{" "}
              <span className="text-gray-400">
                that
                <br />
                fuels me
              </span>{" "}
              🥏
            </h2>
          </motion.div>

          <motion.div
            className="max-w-7xl mx-auto divide-y-2 divide-slate-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Single Column - All Projects Stacked */}
            <div className="space-y-0">
              {PROJECTS.map((project, index) => (
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
                >
                  <ProjectCard
                    {...project}
                    isLast={index === PROJECTS.length - 1}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
