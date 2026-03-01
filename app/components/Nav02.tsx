"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Phone, Linkedin } from "react-feather";
import { Equal, X, Mail, ArrowUpRight } from "lucide-react";
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
  {
    name: "X",
    url: "https://x.com/thepixray",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    name: "Behance",
    url: "https://www.behance.net/satyaprakashray",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
      </svg>
    ),
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/satyaprakash_ray",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
      </svg>
    ),
  },
  { name: "Phone", url: "tel:+918249266742", icon: <Phone size={17} /> },
  { name: "Mail", url: "mailto:satyaprakashray999@gmail.com", icon: <Mail size={17} /> },
];

/** Slide-reveal text: default slides up on hover, blue copy slides in from below */
function SlideText({ children, active }: { children: string; active?: boolean }) {
  return (
    <span className="relative overflow-hidden inline-flex flex-col" style={{ lineHeight: 1.2 }}>
      <span
        className={`block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%] ${
          active ? "text-[#0019FF]" : "text-[#1a1a2e]"
        }`}
      >
        {children}
      </span>
      <span
        className="absolute inset-0 text-[#0019FF] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[120%] group-hover:translate-y-0"
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
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "";
      document.documentElement.style.setProperty("--scrollbar-width", "0px");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "";
      document.documentElement.style.setProperty("--scrollbar-width", "0px");
    };
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
      <nav className={`fixed top-0 left-0 right-0 py-[20px] ${isOpen ? "z-[45]" : "z-[100]"}`}>
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
      </nav>

      {/* Toggle button */}
      <div className="fixed top-0 left-0 right-0 z-[200] py-[20px] pointer-events-none" style={{ paddingRight: "var(--scrollbar-width, 0px)" }}>
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
