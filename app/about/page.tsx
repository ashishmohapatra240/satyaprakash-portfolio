"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function About() {
  return (
    <main className="pt-16 pb-0">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mx-auto min-h-screen flex items-center"
      >
        <div className="w-full widescreenConstraint">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <motion.div variants={fadeInUp} className="w-full">
              <h1
                className="font-normal text-slate-800 leading-tight mb-6"
                style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
              >
                Design, sports <br className="hidden sm:block" />
                and motorcycle
              </h1>
              <p className="text-2xl sm:text-3xl text-slate-800">
                Cherishing every small milestones...
              </p>
            </motion.div>

            {/* Image Grid */}
            <motion.div variants={fadeInUp} className="">
              <div className="relative w-[300px] sm:w-[400px] xl:w-[500px] h-[600px] sm:h-[500px] mx-auto lg:mx-0">
                {/* Largest image */}
                <div className="absolute top-0 -right-2.5 sm:right-0 xl:right-24 w-[258px] h-[266px] z-30">
                  <Image
                    src="/images/about/about-1.jpeg"
                    alt="Profile 1"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                {/* Medium image */}
                <div className="absolute top-[100px] left-0 w-[258px] h-[266px] z-20">
                  <Image
                    src="/images/about/about-2.jpg"
                    alt="Profile 2"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                {/* Smallest image */}
                <div className="absolute bottom-0 right-4 w-[258px] h-[266px] z-10">
                  <Image
                    src="/images/about/about-3.jpg"
                    alt="Profile 3"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mx-auto py-16"
      >
        <div className="mx-auto widescreenConstraint">
          <motion.div variants={fadeInUp} className="mb-20">
            <p
              className="text-3xl sm:text-4xl md:text-6xl text-slate-800 font-normal text-left w-[90%]"
              style={{ lineHeight: "1.25" }}
            >
              Design isn&apos;t just what I do—it&apos;s what I keep falling
              for, again and again. Solving problems, pushing boundaries, and
              discovering new perspectives is what keeps the spark alive.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-12 md:gap-20 mb-20 mt-48 max-w-full xl:max-w-[90%] mr-auto"
          >
            <div className="md:w-3/5">
              <p
                className="text-xl md:text-2xl lg:text-3xl text-slate-800"
                style={{ lineHeight: "1.5" }}
              >
                Hey, I&apos;m Satyaprakash Ray! But you can call me Satya.
                I&apos;m a design enthusiast with 4+ years of experience shaping
                products, tackling diverse challenges, and crafting design
                systems. From refining user experiences to building scalable
                solutions, I thrive on turning ideas into something meaningful.
              </p>
            </div>
            <div className="md:w-2/5">
              <div className="relative w-full h-96 md:aspect-square overflow-hidden">
                <motion.div className="w-full h-full">
                  <Image
                    src="/images/with-dog.png"
                    alt="With pet"
                    fill
                    className="object-cover rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20"
          >
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/about/about-5.jpg"
                alt="About 5"
                fill
                className="object-cover object-center sm:object-top rounded-xl"
              />
            </div>
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/about/about-6.jpg"
                alt="About 6"
                fill
                className="object-cover object-center sm:object-top rounded-xl"
              />
            </div>
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/about/about-7.jpg"
                alt="About 7"
                fill
                className="object-cover object-center sm:object-top rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-20">
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-800 leading-relaxed mb-12 w-2/3">
              I&apos;ve been lucky to work across multiple industries—Fintech,
              Edtech, Productivity, Cryptocurrency, and beyond. But there&apos;s
              still so much more I want to explore and solve. I believe in
              learning, collaborating, failing fast, and iterating until I win.
            </p>

            <p className="text-xl md:text-2xl lg:text-3xl text-slate-800 leading-relaxed w-2/3">
              Design fuels my weekdays, but my weekends belong to the thrill of
              riding and the joy of playing. Whether it&apos;s hitting the road
              or getting lost in a game, that&apos;s where I find my balance.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Connect Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-gray-100 py-28"
      >
        <div className="mx-auto">
          <motion.div variants={fadeInUp} className="widescreenConstraint">
            <p
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 font-normal"
              style={{ lineHeight: "1.1" }}
            >
              If any of this sounds even a little interesting, just drop a
              hello!
              <br className="hidden md:block" />
              I&apos;d love to connect, brainstorm wild ideas, and see where
              creativity takes us.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
