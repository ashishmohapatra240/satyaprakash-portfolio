import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      const mediaQuery = window.matchMedia("(max-width: 767px)"); // Below md breakpoint
      setIsMobile(mediaQuery.matches);
    };

    checkMobile();

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    mediaQuery.addEventListener("change", checkMobile);

    return () => mediaQuery.removeEventListener("change", checkMobile);
  }, []);

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

  const handleMouseEnter = () => {
    if (isMounted && !isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isMounted && !isMobile) {
      setIsHovered(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMounted && !isMobile) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  return (
    <>
      {/* Floating Thumbnail - only show if not mobile */}
      <AnimatePresence>
        {isMounted && isHovered && !isMobile && (
          <motion.div
            className="fixed z-50 pointer-events-none"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
            initial={{
              x: 40,
              scale: 0.4,
              opacity: 0,
              rotate: -6,
            }}
            animate={{
              x: 0,
              scale: 1,
              opacity: 1,
              rotate: -6,
            }}
            exit={{
              x: 100,
              scale: 0.4,
              opacity: 0,
              rotate: -6,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
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
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        ref={cardRef}
        className={`${!isLast ? "border-b-2 border-slate-200" : ""
          }`}
        transition={{
          duration: 0.4,
          ease: "easeInOut"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Link href={href} className="block">
          <motion.div
            className="relative py-12"
            animate={
              isMounted && isHovered && !isMobile
                ? { scale: 1.01 }
                : { scale: 1 }
            }
            transition={{
              duration: 0.4,
              ease: "easeInOut"
            }}
          >
            <div className="flex flex-col space-y-2">
              {/* Company/Year */}
              <div className="flex items-center justify-between">
                <span className={`text-sm ${getCompanyColor(company)} font-medium`}>
                  {company}
                </span>
                {year && <span className="text-sm text-gray-500">{year}</span>}
              </div>

              {/* Project Title */}
              <motion.h3
                className="text-2xl md:text-3xl lg:text-4xl font-normal"
                animate={
                  isMounted && isHovered && !isMobile
                    ? { color: "#0019FF" }
                    : { color: "#1e293b" } // slate-800
                }
                transition={{
                  duration: 0.4,
                  ease: "easeInOut"
                }}
              >
                {title}
              </motion.h3>

              {/* Project Description */}
              <motion.p
                className="text-lg text-gray-600 max-w-3xl leading-relaxed"
                animate={
                  isMounted && isHovered && !isMobile
                    ? { color: "#374151" } // gray-700 - slightly darker on hover
                    : { color: "#4b5563" } // gray-600
                }
                transition={{
                  duration: 0.4,
                  ease: "easeInOut"
                }}
              >
                {description}
              </motion.p>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
}
