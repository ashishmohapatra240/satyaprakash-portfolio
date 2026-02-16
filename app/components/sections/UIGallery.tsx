"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function UIGallery() {
  return (
    <section className="px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          style={{
            background:
              "linear-gradient(135deg, #6366f1 0%, #8b5cf6 30%, #a78bfa 60%, #7c3aed 100%)",
          }}
        >
          {/* 3D-style gradient shape overlay */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(99,102,241,0.8) 0%, transparent 70%), radial-gradient(ellipse at 70% 30%, rgba(139,92,246,0.6) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              UI Gallery
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white text-dark px-8 py-3.5 rounded-full text-base font-medium hover:bg-gray-100 transition-colors"
              >
                Explore UIs
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
