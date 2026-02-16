"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const avatars = [
  "/satyaprakash-portfolio/images/testimonials/jerome.png",
  "/satyaprakash-portfolio/images/testimonials/jacob.png",
  "/satyaprakash-portfolio/images/testimonials/eleanor.png",
  "/satyaprakash-portfolio/images/testimonials/courtney.png",
];

export default function HeroNew() {
  return (
    <section className="pt-[50px] flex flex-col items-center text-center px-4">
      {/* Avatar Row */}
      <motion.div
        className="flex items-center gap-[-8px] mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex -space-x-3">
          {avatars.map((src, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative"
            >
              <Image
                src={src}
                alt={`Avatar ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        className="mb-8 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight">
          Trying to be{" "}
          <span className="relative inline-block">
            <span
              className="italic text-red-500 font-light"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              calm,
            </span>
            <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-red-500" />
          </span>
          <br />
          crafting chaos in design
        </h1>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href="mailto:satyaprakashray999@gmail.com"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-blue-700 transition-colors"
        >
          Let&apos;s work together
        </a>
      </motion.div>
    </section>
  );
}
