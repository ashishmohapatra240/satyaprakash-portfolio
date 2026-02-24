"use client";

import Link from "next/link";

interface ProjectCard02Props {
  title: string;
  company: string;
  image: string;
  href: string;
  bgColor: string;
}

export default function ProjectCard02({
  title,
  company,
  href,
  bgColor,
}: ProjectCard02Props) {
  return (
    <Link href={href} className="block w-full">
      <div
        className="relative w-full"
        style={{
          height: "60vh",
          backgroundColor: bgColor,
          borderRadius: "28px",
          boxShadow: "inset 0 3.8px 45.55px 0 rgba(255, 255, 255, 0.7), 0 8px 32px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Text — top left */}
        <div className="absolute top-0 left-0 p-7 z-10 max-w-[58%]">
          <p className="text-white/60 text-sm font-medium tracking-wide mb-1">
            {company}
          </p>
          <h3 className="text-white text-2xl md:text-3xl font-normal leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
