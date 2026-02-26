"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Phone, Linkedin } from "react-feather";
import { Equal, X, Globe, Mail, ArrowUpRight } from "lucide-react";
import GradientButtonBlue from "./GradientButtonBlue";

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  closed: {
    opacity: 0,
    y: 16,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

const itemVariants = {
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  }),
  closed: { opacity: 0, y: 20 },
};

const projectLinks = [
  { label: "TeamX",     href: "/projects/team-x",      num: "01" },
  { label: "Pizza Hut", href: "/projects/pizza-hut",    num: "02" },
  { label: "DreamX",    href: "/projects/dreamx",       num: "03" },
  { label: "Spring",    href: "/projects/spring-design", num: "04" },
];

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/satyaprakash-ray-9308aa1a1/", icon: <Linkedin size={17} /> },
  { name: "Portfolio", url: "https://satyaprakashray.com", icon: <Globe size={17} /> },
  { name: "Phone", url: "tel:+919090909090", icon: <Phone size={17} /> },
  { name: "Mail", url: "mailto:satyaprakashray999@gmail.com", icon: <Mail size={17} /> },
];

/** Slide-reveal text: default slides up on hover, blue copy slides in from below */
function SlideText({ children, active }: { children: string; active?: boolean }) {
  return (
    <span className="relative overflow-hidden inline-flex flex-col" style={{ lineHeight: 1.05 }}>
      <span
        className={`block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full ${
          active ? "text-[#0019FF]" : "text-[#1a1a2e]"
        }`}
      >
        {children}
      </span>
      <span
        className="absolute inset-0 text-[#0019FF] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0"
        aria-hidden
      >
        {children}
      </span>
    </span>
  );
}

/** Full-width row item used for every nav link */
function NavRow({
  href,
  children,
  target,
  onClick,
  custom,
  showBorderBottom,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  onClick?: () => void;
  custom: number;
  showBorderBottom?: boolean;
}) {
  return (
    <motion.div
      custom={custom}
      variants={itemVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <div className="border-t border-slate-100">
        <Link
          href={href}
          target={target}
          onClick={onClick}
          className="group flex items-center justify-between py-4 md:py-5"
        >
          {children}
          <ArrowUpRight
            size={18}
            className="text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-[#0019FF] transition-all duration-300 -translate-x-1 group-hover:translate-x-0 shrink-0 ml-4"
          />
        </Link>
      </div>
      {showBorderBottom && <div className="border-t border-slate-100" />}
    </motion.div>
  );
}

const Nav02 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPageDark, setIsPageDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setIsScrollingDown(scrollPosition > lastScrollY && scrollPosition > 100);
      setLastScrollY(scrollPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsPageDark(document.documentElement.classList.contains("page-dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Navbar bar */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 py-[20px] ${isOpen ? "z-[45]" : "z-[100]"}`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-20 md:px-8">
          <div className="flex items-center h-16">
            <div className="flex-1 flex items-center">
              <Link href="/" className={isOpen ? "pointer-events-none" : ""}>
                <motion.div
                  animate={{
                    opacity: isOpen ? 0 : isScrollingDown ? 0 : 1,
                    y: isScrollingDown && !isOpen ? -20 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col leading-snug"
                >
                  <span className="text-xs font-medium text-slate-800 leading-tight">Satyaprakash Ray</span>
                  <span className="text-[10px] text-slate-500 leading-tight">Product Designer</span>
                </motion.div>
              </Link>
            </div>
            <div className="flex-1" />
            <div className="flex-1" />
          </div>
        </div>
      </motion.nav>

      {/* Toggle button */}
      <div className="fixed top-0 left-0 right-0 z-[200] py-[20px] pointer-events-none">
        <div className="mx-auto max-w-7xl px-5 lg:px-20 md:px-8">
          <div className="flex items-center justify-end h-16">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`pointer-events-auto inline-flex items-center justify-center w-10 h-10 transition-colors ${
                isPageDark && !isOpen ? "text-white hover:text-white/70" : "text-slate-800 hover:text-slate-600"
              }`}
              whileTap={{ scale: 0.92 }}
              animate={{
                backgroundColor: isScrolled && !isOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)",
                backdropFilter: isScrolled && !isOpen ? "blur(24px) saturate(180%)" : "blur(0px) saturate(100%)",
                WebkitBackdropFilter: isScrolled && !isOpen ? "blur(24px) saturate(180%)" : "blur(0px) saturate(100%)",
                borderColor: isScrolled && !isOpen ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0)",
                boxShadow: isScrolled && !isOpen
                  ? "0 4px 24px rgba(0,0,0,0.08), inset 0 1.5px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.06)"
                  : "0 0px 0px rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ borderRadius: "12px", borderWidth: "1px", borderStyle: "solid" }}
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <motion.div
                    key="equal"
                    initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Equal size={22} strokeWidth={1.75} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="x"
                    initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <X size={22} strokeWidth={1.75} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 w-full h-full z-[50] bg-white"
          >
            <div className="max-w-7xl mx-auto w-full px-5 md:px-8 lg:px-20 flex flex-col h-full pt-28 pb-8">

              {/* Nav links — centered vertically */}
              <div className="flex-1 flex flex-col justify-center">

                {/* PROJECTS label */}
                <motion.p
                  custom={0}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 mb-3 ml-9"
                >
                  Projects
                </motion.p>

                {/* Project rows */}
                {projectLinks.map((link, i) => (
                  <NavRow
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    custom={i + 1}
                    showBorderBottom={i === projectLinks.length - 1}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[10px] font-mono text-slate-300 w-5 shrink-0 tabular-nums">
                        {link.num}
                      </span>
                      <span className="text-[1.75rem] md:text-[2.2rem] lg:text-[2.6rem] font-light tracking-tight">
                        <SlideText active={pathname === link.href}>{link.label}</SlideText>
                      </span>
                    </div>
                  </NavRow>
                ))}

                {/* About Me */}
                <NavRow href="/about" onClick={close} custom={5} showBorderBottom>
                  <span className="text-[1.75rem] md:text-[2.2rem] lg:text-[2.6rem] font-light tracking-tight">
                    <SlideText active={pathname === "/about"}>About Me</SlideText>
                  </span>
                </NavRow>

                {/* Resume */}
                <NavRow
                  href="/Satyaprakash_Ray_Product_Designer.pdf"
                  target="_blank"
                  onClick={close}
                  custom={6}
                >
                  <span className="text-[1.75rem] md:text-[2.2rem] lg:text-[2.6rem] font-light tracking-tight">
                    <SlideText>Resume</SlideText>
                  </span>
                </NavRow>
                <div className="border-t border-slate-100" />

              </div>

              {/* Bottom bar: social icons left · CTA right */}
              <motion.div
                custom={7}
                variants={itemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex items-center justify-between pt-6"
              >
                <div className="flex gap-1">
                  {socialLinks.map((s) => (
                    <Link
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.name}
                      onClick={close}
                      className="text-slate-400 hover:text-[#0019FF] transition-colors duration-300 p-2 rounded-lg hover:bg-slate-50"
                    >
                      {s.icon}
                    </Link>
                  ))}
                </div>

                <GradientButtonBlue href="mailto:satyaprakashray999@gmail.com">
                  <Phone size={15} />
                  Let&apos;s talk
                </GradientButtonBlue>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav02;
