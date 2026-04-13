"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Container } from "../layout/Container";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 py-4 bg-background/80 backdrop-blur-md border-t border-neutral-200"
        >
          <Container>
            <div className="flex items-center justify-between gap-4">
              <div className="hidden sm:flex flex-col">
                <span className="text-sm font-semibold text-primary">Secure a strategy audit</span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Join 40+ hospitality leaders</span>
              </div>
              <div className="flex-1 sm:flex-initial flex justify-end">
                 <Button size="md" href="/contact" className="w-full sm:w-auto px-8 shadow-sm">
                   Book Consultation
                 </Button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
