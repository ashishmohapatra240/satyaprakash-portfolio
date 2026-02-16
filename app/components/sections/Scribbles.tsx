"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SCRIBBLE_CARDS = [
  {
    title: "Shoot & hoop",
    image: "/satyaprakash-portfolio/images/design/mentor.png",
    href: "/scribbling",
    color: "bg-[#FF6B6B]",
  },
  {
    title: "Color theory",
    image: "/satyaprakash-portfolio/images/design/motion.png",
    href: "/scribbling",
    color: "bg-[#4ECDC4]",
  },
  {
    title: "Wild strokes",
    image: "/satyaprakash-portfolio/images/design/sketch.png",
    href: "/scribbling",
    color: "bg-[#FFE66D]",
  },
  {
    title: "Perspective",
    image: "/satyaprakash-portfolio/images/design/mentor.png",
    href: "/scribbling",
    color: "bg-[#A78BFA]",
  },
  {
    title: "Urban sketch",
    image: "/satyaprakash-portfolio/images/design/motion.png",
    href: "/scribbling",
    color: "bg-[#F97316]",
  },
  {
    title: "Abstract play",
    image: "/satyaprakash-portfolio/images/design/sketch.png",
    href: "/scribbling",
    color: "bg-[#6366F1]",
  },
];

export default function Scribbles() {
  return (
    <section className="px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark">
            Don&apos;t have work? I just do
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCRIBBLE_CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={card.href}>
                <motion.div
                  className={`${card.color} rounded-2xl overflow-hidden h-[240px] relative cursor-pointer group`}
                  whileHover={{ scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent">
                    <h3 className="text-xl font-bold text-white">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
