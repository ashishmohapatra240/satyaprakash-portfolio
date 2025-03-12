"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      // Enhanced color transition effect with faster speed
      const section = sectionRef.current as HTMLElement | null;
      const hero = document.querySelector(
        "section:first-of-type"
      ) as HTMLElement;

      if (section && hero) {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Faster transition with narrower range for quicker completion
        const transitionStart = viewportHeight * 0.5;
        const transitionEnd = viewportHeight * 0.2;
        const transitionRange = transitionStart - transitionEnd;

        // Calculate progress with faster easing
        let progress = 0;
        if (sectionTop <= transitionStart) {
          progress = Math.max(
            0,
            Math.min(1, (transitionStart - sectionTop) / transitionRange)
          );

          // More aggressive easing curve for faster feel
          progress = Math.pow(progress, 1.2);
        }

        // Apply background color with enhanced RGB values - using will-change for better performance
        const r = Math.round(255 - (255 - 14) * progress);
        const g = Math.round(255 - (255 - 15) * progress);
        const b = Math.round(255 - (255 - 22) * progress);

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        document.body.style.willChange =
          progress > 0 && progress < 1 ? "background-color" : "auto";

        // Apply text color transitions to hero elements with faster animations
        const heroTexts = hero.querySelectorAll("p, h1");
        heroTexts.forEach((element) => {
          const el = element as HTMLElement;
          // Faster fade out
          el.style.opacity = `${1 - progress * 1.2}`;
          // More dramatic shift but completes faster
          el.style.transform = `translateY(${-progress * 40}px) scale(${
            1 - progress * 0.08
          })`;
          el.style.willChange =
            progress > 0 && progress < 1 ? "opacity, transform" : "auto";
          // Faster color transition
          el.style.color = `rgb(
            ${Math.round(32 + (0 - 32) * progress)},
            ${Math.round(35 + (255 - 35) * progress)},
            ${Math.round(61 + (255 - 61) * progress)}
          )`;
          // Add transition for smoother color changes
          el.style.transition = "color 0.2s ease-out";
        });

        // More dramatic hero image animation
        const heroImage = hero.querySelector("img") as HTMLElement;
        if (heroImage) {
          heroImage.style.transform = `translateY(${-progress * 100}px) scale(${
            1 - progress * 0.35
          }) rotate(${progress * -6}deg)`;
          heroImage.style.opacity = `${1 - progress * 1.2}`;
          heroImage.style.willChange =
            progress > 0 && progress < 1 ? "transform, opacity" : "auto";
        }

        // New animation for About section text - subtle reveal effect
        const aboutTexts = document.querySelectorAll(
          ".dark-section-content h2, .dark-section-content p"
        );
        aboutTexts.forEach((element, index) => {
          const el = element as HTMLElement;
          const delay = index * 0.03;
          const adjustedProgress = Math.max(
            0,
            (progress - delay) * (1 / (1 - delay))
          );

          // Subtle fade in with slight blur effect
          el.style.opacity = `${Math.min(1, adjustedProgress * 2.5)}`;
          // Subtle scale and rotation effect
          el.style.transform = `scale(${0.95 + adjustedProgress * 0.05}) 
                               rotate(${(1 - adjustedProgress) * 0.5}deg)`;
          // Add text shadow for depth effect that fades in
          el.style.textShadow = `0 ${(1 - adjustedProgress) * 8}px ${
            adjustedProgress * 12
          }px rgba(0,0,0,${adjustedProgress * 0.2})`;
          // Add filter for subtle blur effect that clears as scrolled
          el.style.filter = `blur(${(1 - adjustedProgress) * 3}px)`;
          el.style.willChange =
            adjustedProgress > 0 && adjustedProgress < 1
              ? "opacity, transform, filter"
              : "auto";
        });

        // Animate the scroll button in hero section
        const scrollButton = hero.querySelector("button") as HTMLElement;
        if (scrollButton) {
          scrollButton.style.opacity = `${1 - progress * 2}`;
          scrollButton.style.transform = `translateY(${progress * 25}px)`;
          scrollButton.style.willChange =
            progress > 0 && progress < 1 ? "opacity, transform" : "auto";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            solution which helps thousands of people
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
