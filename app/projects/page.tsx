"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Building a revolutionary AI-powered dream interpretation platform",
    description:
      "Creating an intuitive and engaging interface for DreamX that makes dream interpretation accessible while maintaining a sense of wonder and personal connection.",
    company: "DreamX",
    image: "/images/new-projects/thumbnails/DreamX.png",
    href: "/projects/dreamx",
    year: "2024",
  },
  {
    title: "Designing the next-gen fraud detection system",
    description:
      "A comprehensive fraud detection system for TeamX that helps protect millions of transactions.",
    company: "TeamX",
    image: "/images/new-projects/thumbnails/TeamX.png",
    href: "/projects/team-x",
    year: "2023",
  },
  {
    title: "Branding and royalty system",
    description:
      "Redesigning the loyalty program experience for Pizza Hut Indonesia's customers.",
    company: "Pizza Hut Indonesia",
    image: "/images/new-projects/thumbnails/PH.png",
    href: "/projects/pizza-hut",
    year: "2022",
  },
  {
    title: "Spring Design System",
    description:
      "Creating a scalable and consistent design system that powers multiple products.",
    company: "Team",
    image: "/images/new-projects/thumbnails/SD.png",
    href: "/projects/spring-design",
    year: "2021",
  },
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Projects() {
  return (
    <main className="pt-16 pb-0 max-w-7xl px-5 lg:px-20 md:px-8">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mx-auto min-h-[80vh] flex items-center"
      >
        <div className="w-full ">
          <motion.div variants={fadeInUp} className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-slate-800 leading-tight mb-8">
              Selected Works
            </h1>
            <p className="text-2xl sm:text-3xl text-slate-600">
              A collection of projects I&apos;ve worked on, focusing on user
              experience, design systems, and product strategy.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mx-auto py-16 md:py-32"
      >
        <div className="">
          <div className="grid grid-cols-1 gap-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={project.href} className="block group">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <span className="text-sm text-slate-500">
                        {project.year}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-normal text-slate-800 mt-2 mb-4 group-hover:text-slate-600 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-lg text-slate-600 mb-4">
                        {project.description}
                      </p>
                      <span className="text-slate-500">{project.company}</span>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
