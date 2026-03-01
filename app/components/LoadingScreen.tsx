"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onDismiss }: { onDismiss: () => void }) {
  const [active, setActive] = useState(true);

  // Lock body scroll while loader is visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence onExitComplete={onDismiss}>
      {active && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(36px)", scale: 1.06, y: -12 }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          onClick={() => setActive(false)}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center cursor-pointer bg-white select-none"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/Me/Logo-gradient.png"
              alt=""
              width={64}
              height={93}
              priority
              draggable={false}
            />
          </motion.div>

          {/* Heading — smoky blur reveal */}
          <motion.h1
            initial={{ opacity: 0, filter: "blur(28px)", y: 16 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="text-lg font-sans font-normal text-center text-[#1a1a2e] mt-8 leading-tight max-w-[640px] px-6"
          >
            This space is a personal<br />reflection, it evolves as i do
          </motion.h1>

          {/* Click hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
            className="text-xs text-[#1a1a2e] text-center mt-10 leading-relaxed"
          >
            click anywhere<br />to get started
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
