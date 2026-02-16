"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CASE_STUDIES = [
  {
    company: "TeamX",
    title: "Slashing Fraud Case Resolution by 60%",
    image: "/satyaprakash-portfolio/images/new-projects/thumbnails/TeamX.png",
    href: "/projects/team-x",
  },
  {
    company: "Bestosys",
    title: "Improving workflow of Dentists",
    image: "/satyaprakash-portfolio/images/new-projects/thumbnails/PH.png",
    href: "/projects/pizza-hut",
  },
];

export default function DesignWork() {
  return (
    <section className="px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-3">
            Design Work
          </h2>
          <p className="text-gray text-lg max-w-xl">
            Building systems and crafting experiences that solve real problems
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={study.href}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden h-[400px] md:h-[450px] cursor-pointer group"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background:
                      "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                  }}
                >
                  {/* Screenshot overlay */}
                  <div className="absolute top-8 left-8 right-8 bottom-[120px] rounded-lg overflow-hidden opacity-70 group-hover:opacity-90 transition-opacity">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full mb-3 border border-white/10">
                      {study.company}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {study.title}
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
