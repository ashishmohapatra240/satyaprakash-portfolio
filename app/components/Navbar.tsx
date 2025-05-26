"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Phone, Linkedin, Instagram, Dribbble } from "react-feather";
import KachingButton from "./KachingButton";

// Add animation variants
const menuVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
  closed: {
    opacity: 0,
    y: 20,
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if scrolled past threshold
      setIsScrolled(scrollPosition > 50);

      // Check scroll direction
      if (scrollPosition > lastScrollY && scrollPosition > 100) {
        // Scrolling down
        setIsScrollingDown(true);
      } else {
        // Scrolling up
        setIsScrollingDown(false);
      }

      setLastScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-[100] py-[20px]"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-20 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className={`flex-shrink-0 relative ${isOpen ? "pointer-events-none" : ""
                }`}
            >
              <motion.div
                animate={{
                  backgroundColor:
                    isScrolled && !isOpen
                      ? "rgba(255, 255, 255, 0)"
                      : "rgba(255, 255, 255, 0)",
                  opacity: isOpen ? 0 : isScrollingDown ? 0 : 1,
                  y: isScrollingDown && !isOpen ? -60 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ borderRadius: "6px" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </motion.div>
            </Link>

            {/* Right Side - Button and Hamburger */}
            <div className="flex items-center gap-8">
              {/* KachingButton - visible when panel is closed */}
              <motion.div
                animate={{
                  backgroundColor:
                    isScrolled && !isOpen
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(255, 255, 255, 0)",
                  opacity: isOpen ? 0 : isScrollingDown ? 0 : 1,
                  y: isScrollingDown && !isOpen ? -60 : 0,
                  pointerEvents: isOpen ? "none" : "auto",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ borderRadius: "6px" }}
                className="hidden md:block"
              >
                <KachingButton href="mailto:satyaprakashray999@gmail.com">
                  <Phone size={16} />
                  Let&apos;s talk
                </KachingButton>
              </motion.div>

              {/* Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative inline-flex items-center justify-center w-10 h-10 text-gray-800 hover:text-gray-600 transition-colors z-[100]"
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundColor:
                    isScrolled && !isOpen
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(255, 255, 255, 0)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ borderRadius: "6px" }}
              >
                <span className="sr-only">
                  {isOpen ? "Close menu" : "Open menu"}
                </span>
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <motion.span
                    animate={
                      isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }
                    }
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-6 h-0.5 bg-black transform origin-center"
                  />
                  <motion.span
                    animate={
                      isOpen
                        ? { opacity: 0, scale: 0 }
                        : { opacity: 1, scale: 1 }
                    }
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-6 h-0.5 bg-black"
                  />
                  <motion.span
                    animate={
                      isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }
                    }
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-6 h-0.5 bg-black transform origin-center"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Overlay Background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Right Sliding Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 h-full z-50 bg-white shadow-2xl w-full md:w-[70%] lg:w-1/2 px-8 lg:px-12 md:px-11"
          >
            <div className="flex flex-col h-full py-4 md:py-10 lg:py-10 xl:py-10 pt-10 md:pt-10">
              {/* Top Section - Main Navigation */}
              <div className="flex-1 md:flex-1">
                <div className="mt-0 md:mt-16">
                  {/* Main Navigation */}
                  <div className="h-fit md:h-auto">
                    <motion.div
                      custom={5}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <h3 className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
                        Menu
                      </h3>
                      <div className="space-y-3 md:space-y-4">
                        {/* Projects */}
                        <motion.div
                          custom={6}
                          variants={itemVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          <Link
                            href="/projects"
                            onClick={() => setIsOpen(false)}
                            className={`inline-block text-2xl md:text-3xl lg:text-4xl font-normal transition-colors duration-300 relative group ${pathname === "/projects"
                              ? "text-[#0019FF]"
                              : "text-slate-800 hover:text-slate-600 active:text-[#0019FF]"
                              }`}
                          >
                            Projects
                            <span
                              className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${pathname === "/projects"
                                ? "w-full bg-[#0019FF]"
                                : "w-0 bg-slate-400 group-hover:bg-slate-400 group-active:bg-[#0019FF] group-hover:w-full group-active:w-full"
                                }`}
                            ></span>
                          </Link>
                        </motion.div>

                        {/* Resume */}
                        <motion.div
                          custom={7}
                          variants={itemVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          <Link
                            href="/Satyaprakash_Ray_Product_Designer.pdf"
                            target="_blank"
                            onClick={() => setIsOpen(false)}
                            className="inline-block text-2xl md:text-3xl lg:text-4xl font-normal text-slate-800 hover:text-slate-600 active:text-[#0019FF] transition-colors duration-300 relative group"
                          >
                            Resume
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-400 group-hover:bg-slate-400 group-active:bg-[#0019FF] transition-all duration-300 ease-out group-hover:w-full group-active:w-full"></span>
                          </Link>
                        </motion.div>

                        {/* About Me with Sub-items */}
                        <div>
                          <motion.div
                            custom={8}
                            variants={itemVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                          >
                            <Link
                              href="/about"
                              onClick={() => setIsOpen(false)}
                              className={`inline-block text-2xl md:text-3xl lg:text-4xl font-normal transition-colors duration-300 relative group ${pathname === "/about"
                                ? "text-[#0019FF]"
                                : "text-slate-800 hover:text-slate-600 active:text-[#0019FF]"
                                }`}
                            >
                              About me
                              <span
                                className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${pathname === "/about"
                                  ? "w-full bg-[#0019FF]"
                                  : "w-0 bg-slate-400 group-hover:bg-slate-400 group-active:bg-[#0019FF] group-hover:w-full group-active:w-full"
                                  }`}
                              ></span>
                            </Link>
                          </motion.div>

                          {/* Sub-navigation items */}
                          <div className="mt-2 md:mt-3 space-y-1 md:space-y-2">
                            <motion.div
                              custom={9}
                              variants={itemVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                            >
                              <Link
                                href="/mentoring"
                                onClick={() => setIsOpen(false)}
                                className={`inline-block font-medium transition-colors duration-300 relative group ${pathname === "/mentoring"
                                  ? "text-[#0019FF]"
                                  : "text-slate-600 hover:text-slate-800 active:text-[#0019FF]"
                                  }`}
                                style={{ fontSize: "16px" }}
                              >
                                Mentoring
                                <span
                                  className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${pathname === "/mentoring"
                                    ? "w-full bg-[#0019FF]"
                                    : "w-0 bg-slate-300 group-hover:bg-slate-300 group-active:bg-[#0019FF] group-hover:w-full group-active:w-full"
                                    }`}
                                ></span>
                              </Link>
                            </motion.div>
                            <motion.div
                              custom={10}
                              variants={itemVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                            >
                              <Link
                                href="/scribbling"
                                onClick={() => setIsOpen(false)}
                                className={`inline-block font-medium transition-colors duration-300 relative group ${pathname === "/scribbling"
                                  ? "text-[#0019FF]"
                                  : "text-slate-600 hover:text-slate-800 active:text-[#0019FF]"
                                  }`}
                                style={{ fontSize: "16px" }}
                              >
                                Scribbling
                                <span
                                  className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${pathname === "/scribbling"
                                    ? "w-full bg-[#0019FF]"
                                    : "w-0 bg-slate-300 group-hover:bg-slate-300 group-active:bg-[#0019FF] group-hover:w-full group-active:w-full"
                                    }`}
                                ></span>
                              </Link>
                            </motion.div>
                            <motion.div
                              custom={11}
                              variants={itemVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                            >
                              <Link
                                href="/3d-motion-more"
                                onClick={() => setIsOpen(false)}
                                className={`inline-block font-medium transition-colors duration-300 relative group ${pathname === "/3d-motion-more"
                                  ? "text-[#0019FF]"
                                  : "text-slate-600 hover:text-slate-800 active:text-[#0019FF]"
                                  }`}
                                style={{ fontSize: "16px" }}
                              >
                                3D, Motion & more
                                <span
                                  className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${pathname === "/3d-motion-more"
                                    ? "w-full bg-[#0019FF]"
                                    : "w-0 bg-slate-300 group-hover:bg-slate-300 group-active:bg-[#0019FF] group-hover:w-full group-active:w-full"
                                    }`}
                                ></span>
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Mobile: Gap between sections */}
              <div className="block md:hidden h-3"></div>

              {/* Bottom Section - Social Media and Contact Info */}
              <div className="mt-0 md:mt-6 lg:mt-8 border-t border-gray-200 pt-6 md:pt-8 pb-4">
                {/* Contact Info and Button */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
                  {/* Social Media Icons */}
                  <motion.div
                    custom={12}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <h3 className="text-gray-400 text-xs md:text-sm mb-3">
                      Social media
                    </h3>
                    <div className="flex gap-4">
                      {[
                        {
                          name: "LinkedIn",
                          url: "https://www.linkedin.com/in/satyaprakash-ray-9308aa1a1/",
                          icon: <Linkedin size={20} />,
                        },
                        {
                          name: "Behance",
                          url: "https://www.behance.net/satyaprakashray",
                          icon: (
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                            </svg>
                          ),
                        },
                        {
                          name: "Dribbble",
                          url: "https://dribbble.com/satyaprakash_ray",
                          icon: <Dribbble size={20} />,
                        },
                        {
                          name: "Instagram",
                          url: "https://www.instagram.com/pixraydesigns",
                          icon: <Instagram size={20} />,
                        },
                      ].map((social) => (
                        <Link
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-slate-800 active:text-[#0019FF] transition-colors p-2 rounded-lg hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                          title={social.name}
                        >
                          {social.icon}
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    custom={13}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <KachingButton href="mailto:satyaprakashray999@gmail.com">
                      <Phone size={16} />
                      Let&apos;s talk
                    </KachingButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
