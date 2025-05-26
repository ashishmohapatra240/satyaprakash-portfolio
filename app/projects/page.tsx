"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Designing the next-gen fraud detection system",
    description: "A comprehensive fraud detection system for TeamX that helps protect millions of transactions.",
    company: "Team X",
    image: "/images/new-projects/thumbnails/TeamX.png",
    href: "/projects/team-x",
    year: "2024",
  },
  {
    title: "From Chaos to Consistency: A Scalable Design System",
    description: "Crafting a delightful and intuitive experience for DreamX that brings everyday payments to life—seamless, personal, and built with clarity in every click.",
    company: "DreamX",
    image: "/images/new-projects/thumbnails/DreamX.png",
    href: "/projects/dreamx",
    year: "2023",
  },
  {
    title: "Building a royalty system for a global pizza brand",
    description: "Redesigning the loyalty program experience for Pizza Hut Indonesia's customers.",
    company: "Pizza Hut Indonesia",
    image: "/images/new-projects/thumbnails/PH.png",
    href: "/projects/pizza-hut",
    year: "2023",
  },
  {
    title: "Spring Design system",
    description: "Creating a scalable and consistent design system that powers multiple products.",
    company: "Internal",
    image: "/images/new-projects/thumbnails/SD.png",
    href: "/projects/spring-design",
    year: "2023",
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
      staggerChildren: 0.1,
    },
  },
};

export default function Projects() {
  return (
    <main className="pt-16 pb-32 mx-auto max-w-7xl px-5 lg:px-20 md:px-8">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mx-auto pt-16 pb-8"
      >
        <div className="w-full">
          <motion.div variants={fadeInUp} className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-dark leading-tight">
              Featured work
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects List */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mx-auto"
      >
        <div className="max-w-4xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                company={project.company}
                image={project.image}
                href={project.href}
                year={project.year}
                isLast={index === projects.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
