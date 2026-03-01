"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCard02Props {
  title: string;
  company: string;
  image: string;
  imageDesktop?: string;
  href: string;
  bgColor: string;
  height?: string;
}

export default function ProjectCard02({
  title,
  company,
  href,
  bgColor,
  height = "60vh",
  imageDesktop,
}: ProjectCard02Props) {
  return (
    <Link href={href} className="block w-full group">
      <motion.div
        className="relative w-full overflow-hidden"
        style={{
          height,
          backgroundColor: bgColor,
          borderRadius: "28px",
          backgroundImage: imageDesktop ? `url(${imageDesktop})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow:
            "inset 0 3.8px 45.55px 0 rgba(255, 255, 255, 0.7), 0 8px 32px rgba(0, 0, 0, 0.25)",
        }}
        whileHover={{
          scale: 1.02,
          boxShadow:
            "inset 0 3.8px 45.55px 0 rgba(255, 255, 255, 0.7), 0 16px 48px rgba(0, 0, 0, 0.30)",
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Text — top left */}
        <div className="absolute top-0 left-0 p-7 z-10 max-w-[58%]">
          <p className="text-white/60 text-sm font-medium tracking-wide mb-1 transition-colors duration-300 group-hover:text-white/80">
            {company}
          </p>
          <h3 className="text-white text-[18px] font-normal leading-snug transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
            {title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}
