"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DesignCardProps } from "./sections/Design";

const DesignCard = ({
  title,
  description,
  image,
  bgColor,
  link,
}: DesignCardProps) => {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className={`${bgColor} rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-between h-80 w-80 md:h-[210px] md:w-[210px] lg:h-[260px] lg:w-[260px] xl:h-[360px] xl:w-[360px] cursor-pointer`}
      >
        <div className="absolute inset-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            <Image src={image} fill className="object-cover" alt={title} />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-3 font-sans tracking-wide">
            {title}
          </h3>
          <p className="text-xl text-white/90 font-sans font-light">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default DesignCard;
