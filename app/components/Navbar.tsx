"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';
import { usePathname } from "next/navigation";

const KachingButton = dynamic(() => import('./KachingButton'), { ssr: false });

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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-[100] py-[20px]"
      >
        <div className="mx-auto widescreenConstraint">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className={`flex-shrink-0 relative ${isOpen ? 'pointer-events-none' : ''}`}
            >
              <motion.div
                animate={{
                  backgroundColor: (isScrolled && !isOpen) ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
                  opacity: isOpen ? 0 : (isScrollingDown ? 0 : 1),
                  y: isScrollingDown && !isOpen ? -60 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-2 -m-2"
                style={{ borderRadius: '6px' }}
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
                  backgroundColor: (isScrolled && !isOpen) ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
                  opacity: isOpen ? 0 : (isScrollingDown ? 0 : 1),
                  y: isScrollingDown && !isOpen ? -60 : 0,
                  pointerEvents: isOpen ? 'none' : 'auto'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-2 -m-2"
                style={{ borderRadius: '6px' }}
              >
                <KachingButton />
              </motion.div>

              {/* Menu Button - Transforms in place */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative inline-flex items-center justify-center w-10 h-10 text-gray-800 hover:text-gray-600 transition-colors z-[100]"
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundColor: (isScrolled && !isOpen) ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)"
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ borderRadius: '6px' }}
              >
                <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-6 h-0.5 bg-gray-800 transform origin-center"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-6 h-0.5 bg-gray-800"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-6 h-0.5 bg-gray-800 transform origin-center"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Overlay Background - Above everything except panel and hamburger */}
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
            className="fixed top-0 right-0 h-full z-50 bg-white shadow-2xl w-full md:w-[70%] lg:w-1/2"
          >
            <div className="flex flex-col h-full py-6 md:py-8 lg:py-12 xl:py-16 pt-20 md:pt-24 widescreenConstraint">
              {/* Top Section - Two Columns */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-24 mt-12 md:mt-16">
                  {/* Left Column - Social Media */}
                  <div>
                    <motion.div
                      custom={0}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <h3 className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">Social media</h3>
                      <div className="space-y-2 md:space-y-3">
                        {[
                          { name: "LinkedIn", url: "https://www.linkedin.com/in/satyaprakash-ray-9308aa1a1/" },
                          { name: "Behance", url: "https://www.behance.net/satyaprakashray" },
                          { name: "Dribbble", url: "https://dribbble.com/satyaprakash_ray" },
                          { name: "Instagram", url: "https://www.instagram.com/pixraydesigns" }
                        ].map((social, i) => (
                          <motion.div
                            key={social.name}
                            custom={i + 1}
                            variants={itemVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                          >
                            <Link
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block text-slate-800 hover:text-slate-600 active:text-[#0019FF] transition-colors text-xs md:text-sm relative group"
                              onClick={() => setIsOpen(false)}
                            >
                              {social.name}
                              <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-400 group-hover:bg-slate-400 group-active:bg-[#0019FF] transition-all duration-300 ease-out group-hover:w-full group-active:w-full"></span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column - Main Navigation */}
                  <div>
                    <motion.div
                      custom={5}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <h3 className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">Menu</h3>
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
                            className={`inline-block text-2xl md:text-3xl lg:text-4xl font-normal transition-colors duration-300 relative group ${pathname === '/projects'
                              ? 'text-[#0019FF]'
                              : 'text-slate-800 hover:text-slate-600 active:text-[#0019FF]'
                              }`}
                          >
                            Projects
                            <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${pathname === '/projects'
                              ? 'w-full bg-[#0019FF]'
                              : 'w-0 bg-slate-400 group-hover:bg-slate-400 group-active:bg-[#0019FF] group-hover:w-full group-active:w-full'
                              }`}></span>
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
                            href="/Satya-Resume.pdf"
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
                              className={`inline-block text-2xl md:text-3xl lg:text-4xl font-normal transition-colors duration-300 relative group ${pathname === '/about'
                                ? 'text-[#0019FF]'
                                : 'text-slate-800 hover:text-slate-600 active:text-[#0019FF]'
                                }`}
                            >
                              About me
                              <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${pathname === '/about'
                                ? 'w-full bg-[#0019FF]'
                                : 'w-0 bg-slate-400 group-hover:bg-slate-400 group-active:bg-[#0019FF] group-hover:w-full group-active:w-full'
                                }`}></span>
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
                                className={`inline-block font-medium transition-colors duration-300 relative group ${pathname === '/mentoring'
                                  ? 'text-[#0019FF]'
                                  : 'text-slate-600 hover:text-slate-800 active:text-[#0019FF]'
                                  }`}
                                style={{ fontSize: '16px' }}
                              >
                                Mentoring
                                <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${pathname === '/mentoring'
                                  ? 'w-full bg-[#0019FF]'
                                  : 'w-0 bg-slate-300 group-hover:bg-slate-300 group-active:bg-[#0019FF] group-hover:w-full group-active:w-full'
                                  }`}></span>
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
                                className={`inline-block font-medium transition-colors duration-300 relative group ${pathname === '/scribbling'
                                  ? 'text-[#0019FF]'
                                  : 'text-slate-600 hover:text-slate-800 active:text-[#0019FF]'
                                  }`}
                                style={{ fontSize: '16px' }}
                              >
                                Scribbling
                                <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${pathname === '/scribbling'
                                  ? 'w-full bg-[#0019FF]'
                                  : 'w-0 bg-slate-300 group-hover:bg-slate-300 group-active:bg-[#0019FF] group-hover:w-full group-active:w-full'
                                  }`}></span>
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
                                href="/design-disciplines"
                                onClick={() => setIsOpen(false)}
                                className={`inline-block font-medium transition-colors duration-300 relative group ${pathname === '/design-disciplines'
                                  ? 'text-[#0019FF]'
                                  : 'text-slate-600 hover:text-slate-800 active:text-[#0019FF]'
                                  }`}
                                style={{ fontSize: '16px' }}
                              >
                                Design disciplines
                                <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${pathname === '/design-disciplines'
                                  ? 'w-full bg-[#0019FF]'
                                  : 'w-0 bg-slate-300 group-hover:bg-slate-300 group-active:bg-[#0019FF] group-hover:w-full group-active:w-full'
                                  }`}></span>
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Contact Info */}
              <div className="mt-6 md:mt-8 border-t border-gray-200 pt-6 md:pt-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
                  <motion.div
                    custom={12}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="space-y-1 md:space-y-2"
                  >
                    <h3 className="text-gray-400 text-xs md:text-sm">Get in touch</h3>
                    <p className="text-base md:text-lg lg:text-xl text-slate-800">satyaprakashray999@gmail.com</p>
                  </motion.div>

                  <motion.div
                    custom={13}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <KachingButton />
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
