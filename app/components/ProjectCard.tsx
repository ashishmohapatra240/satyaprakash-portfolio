import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import clsx from "clsx";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  href = "#",
}: ProjectCardProps) {
  const isSecureProject =
    description === "Marathon Digital Holdings" || description === "anonymous";
  const controls = useAnimation();

  const shakeAnimation = {
    shake: {
      x: [0, -200, 200, -160, 160, -120, 120, -80, 80, -40, 40, 0],
      rotate: [0, -14, 14, -10, 10, -6, 6, -4, 4, -2, 2, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const handleClick = async () => {
    if (isSecureProject) {
      await controls.start("shake");
    }
  };

  const CardContent = () => (
    <motion.div
      className="group bg-white rounded-lg p-6 transition-all duration-300 cursor-pointer"
      variants={shakeAnimation}
      animate={controls}
      onClick={handleClick}
    >
      <div className="relative w-full h-96 mb-4 overflow-hidden rounded-lg">
        {isSecureProject && (
          <div className="absolute top-4 left-4 z-10">
            <Image
              src="/icons/lock.png"
              alt="Secure Project"
              width={72}
              height={40}
              className="opacity-80 scale-75"
            />
          </div>
        )}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3
        className={clsx(
          "text-lg font-medium text-dark mb-2 transition-colors font-sans",
          isSecureProject
            ? "group-hover:text-red-700"
            : "group-hover:text-primary"
        )}
      >
        {title}
      </h3>
      <p className="text-gray">{description}</p>
    </motion.div>
  );

  return isSecureProject ? (
    <CardContent />
  ) : (
    <Link href={href}>
      <CardContent />
    </Link>
  );
}
