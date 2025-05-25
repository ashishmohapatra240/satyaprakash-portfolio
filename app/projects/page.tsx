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
    year: "2023",
  },
  {
    title: "Creating a better interactive homepage",
    description: "Redesigning ESPN's homepage to create a more engaging and personalized sports experience.",
    company: "ESPN",
    image: "/images/new-projects/thumbnails/ESPN.png",
    href: "#",
    year: "2023",
  },
  {
    title: "Optimising the design system and home page experience for DreamPay",
    description: "Creating an intuitive and engaging interface for DreamX that makes dream interpretation accessible while maintaining a sense of wonder and personal connection.",
    company: "DreamX",
    image: "/images/new-projects/thumbnails/DreamX.png",
    href: "/projects/dreamx",
    year: "2024",
  },
  {
    title: "Building a royalty system for a global pizza brand",
    description: "Redesigning the loyalty program experience for Pizza Hut Indonesia's customers.",
    company: "Pizza Hut Indonesia",
    image: "/images/new-projects/thumbnails/PH.png",
    href: "/projects/pizza-hut",
    year: "2022",
  },
  {
    title: "Spring Design system",
    description: "Creating a scalable and consistent design system that powers multiple products.",
    company: "Internal",
    image: "/images/new-projects/thumbnails/SD.png",
    href: "/projects/spring-design",
    year: "2021",
  },
  {
    title: "DreamX",
    description: "Creating a scalable and consistent design system that powers multiple products.",
    company: "Internal",
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
      staggerChildren: 0.1,
    },
  },
};

export default function Projects() {
  return (
    <main className="pt-16 pb-16 mx-auto max-w-7xl px-5 lg:px-20 md:px-8">
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
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-slate-800 leading-tight">
              Crafting experience<br />
              Creating Impact <span className="text-gray-400">that<br />
                fuels me</span> 🥏
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
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
