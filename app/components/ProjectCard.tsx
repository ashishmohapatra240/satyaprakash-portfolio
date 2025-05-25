import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  company: string;
  image: string;
  href?: string;
  year?: string;
}

export default function ProjectCard({
  title,
  description,
  company,
  href = "#",
  year,
}: ProjectCardProps) {
  const isSecureProject = company === "Marathon Digital Holdings" || company === "anonymous";
  const controls = useAnimation();

  const shakeAnimation = {
    shake: {
      x: [0, -10, 10, -8, 8, -6, 6, -4, 4, -2, 2, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const handleClick = async () => {
    if (isSecureProject) {
      await controls.start("shake");
    }
  };

  const ListItem = () => (
    <motion.div
      className="relative py-6 border-b border-gray-200 last:border-b-0 cursor-pointer"
      variants={shakeAnimation}
      animate={controls}
      onClick={handleClick}
    >
      <div className="flex flex-col space-y-2">
        {/* Company/Year */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-600 font-medium">{company}</span>
          {year && <span className="text-sm text-gray-500">{year}</span>}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-slate-800 transition-colors duration-300">
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );

  return isSecureProject ? (
    <ListItem />
  ) : (
    <Link href={href} className="block">
      <ListItem />
    </Link>
  );
}
