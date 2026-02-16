"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    text: "Satya brings a rare combination of strategic thinking and pixel-perfect execution. His work on our design system transformed how our entire team operates.",
    author: "Kirtana Krishnan",
    role: "Design Manager, Proximity",
    avatar: "/satyaprakash-portfolio/images/testimonials/jerome.png",
  },
  {
    text: "From concept to execution, everything was flawless. Our brand has never looked better!",
    author: "Jerome Bell",
    role: "Design Manager, Proximity",
    avatar: "/satyaprakash-portfolio/images/testimonials/jacob.png",
  },
  {
    text: "Brilliant creativity and attention to detail. Every project exceeded our expectations!",
    author: "Jacob Jones",
    role: "Lead Designer, Studio",
    avatar: "/satyaprakash-portfolio/images/testimonials/eleanor.png",
  },
];

export default function TestimonialsNew() {
  return (
    <section className="px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-gray mb-2">
            Trust me, I{" "}
            <span
              className="italic text-red-500"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              didn&apos;t
            </span>{" "}
            bribed them
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark leading-tight">
            People make the journey
            <br />
            worth walking
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0px_1px_3px_1px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-dark text-base leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-gray text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
