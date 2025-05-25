import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  company: string;
  image: string;
  href?: string;
  year?: string;
  isLast?: boolean;
}

export default function ProjectCard({
  title,
  description,
  company,
  image,
  href = "#",
  year,
  isLast = false,
}: ProjectCardProps) {
  const isSecureProject =
    company === "Marathon Digital Holdings" || company === "anonymous";
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Global mouse move handler to track position and detect when mouse leaves card area
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isHovered && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const isInsideCard =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (!isInsideCard) {
          setIsHovered(false);
        } else {
          setMousePosition({
            x: e.clientX,
            y: e.clientY,
          });
        }
      }
    };

    if (isHovered) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isHovered]);

  // Function to get company color
  const getCompanyColor = (companyName: string) => {
    switch (companyName) {
      case "DreamX":
      case "Pizza Hut Indonesia":
        return "text-[#DF193B]";
      case "Team X":
        return "text-[#6A40C0]";
      case "Internal":
        return "text-gray-400";
      default:
        return "text-blue-600"; // fallback color
    }
  };

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

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseEnter = () => {
    if (!isSecureProject) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const ListItem = () => (
    <motion.div
      ref={cardRef}
      className="relative py-12"
      variants={shakeAnimation}
      animate={controls}
      onClick={handleClick}
    >
      <div className="flex flex-col space-y-2">
        {/* Company/Year */}
        <div className="flex items-center justify-between">
          <span className={`text-sm ${getCompanyColor(company)} font-medium`}>{company}</span>
          {year && <span className="text-sm text-gray-500">{year}</span>}
        </div>

        {/* Project Title */}
        <h3 className={`text-2xl md:text-3xl lg:text-4xl font-normal transition-colors duration-300 ${isHovered ? 'text-[#0019FF]' : 'text-slate-800'
          }`}>
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Floating Thumbnail */}
      {isHovered && !isSecureProject && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        >
          <div className="relative w-64 h-40 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="256px"
            />
          </div>
        </div>
      )}
    </motion.div>
  );

  return isSecureProject ? (
    <div
      className={`${!isLast ? "border-b-2 border-slate-200 hover:border-slate-300" : ""
        } transition-all duration-300 ${isHovered ? 'bg-gray-100' : 'bg-transparent'}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ListItem />
    </div>
  ) : (
    <Link
      href={href}
      className={`block ${!isLast ? "border-b-2 border-slate-200 hover:border-slate-300" : ""
        } transition-all duration-300 ${isHovered ? 'bg-gray-100' : 'bg-transparent'}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ListItem />
    </Link>
  );
}
