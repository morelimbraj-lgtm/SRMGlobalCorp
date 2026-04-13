"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { scaleIn, staggerContainer } from "@/lib/motion";

const metrics = [
  { value: "14+", label: "Years Experience" },
  { value: "40+", label: "Completed Projects" },
  { value: "4+", label: "Countries" },
  { value: "100+", label: "Assignments" },
];

export const Metrics = () => {
  return (
    <section className="py-24 bg-primary text-background">
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} variants={scaleIn} className="text-center">
              <span className="text-4xl md:text-5xl font-bold block mb-2 text-accent">
                {metric.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
