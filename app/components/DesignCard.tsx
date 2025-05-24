"use client";

import Image from "next/image";
import { DesignCardProps } from "./sections/Design";

const DesignCard = ({
  title,
  description,
  image,
  bgColor,
}: DesignCardProps) => {
  return (
    <div
      className={`${bgColor} rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-between h-80 max-w-80 w-full cursor-pointer transform transition-transform duration-300 hover:scale-97`}
    >
      <div className="absolute inset-0">
        <div className="h-full w-full transform transition-transform duration-400 hover:scale-110">
          <Image src={image} fill className="object-cover" alt={title} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-4xl font-bold mb-3 font-sans tracking-wide">
          {title}
        </h3>
        <p className="text-xl text-white/90 font-sans font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DesignCard;
