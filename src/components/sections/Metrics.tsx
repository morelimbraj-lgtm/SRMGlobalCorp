"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { scaleIn, staggerContainer, blurFade } from "@/lib/motion";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const totalMiliseconds = duration * 1000;
      const increment = end / (totalMiliseconds / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const metrics = [
  { value: "14+", label: "Years Scaling Hospitality Brands" },
  { value: "40+", label: "Profit Turnarounds Delivered" },
  { value: "4+", label: "Global Markets Mastered" },
  { value: "100+", label: "Strategic Assignments" },
];

const logos = [
  "Global Luxury Group",
  "Urban Stay Co",
  "Heritage Resorts",
  "Metro Dining Corp",
  "Alpine Hospitality"
];

export const Metrics = () => {
  return (
    <Section background="dark" className="relative overflow-hidden">
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} variants={scaleIn} className="text-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold block mb-4 text-accent">
                <Counter value={metric.value} />
              </span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-bold max-w-[150px] mx-auto block leading-relaxed">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logo Strip */}
        <motion.div 
          variants={blurFade}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="pt-12 border-t border-neutral-800 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-10 font-medium">Trusted by industry leaders</span>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale contrast-125">
             {logos.map((logo, i) => (
               <span key={i} className="text-sm md:text-base font-semibold tracking-tighter italic font-serif">{logo}</span>
             ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
