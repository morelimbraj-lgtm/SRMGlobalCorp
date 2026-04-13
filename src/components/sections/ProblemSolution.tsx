"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { slideLeft, slideRight, staggerContainer } from "@/lib/motion";

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-background border-y border-neutral-200">
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
        >
          <motion.div variants={slideLeft}>
            <h2 className="text-3xl mb-6 text-primary max-w-[600px]">
              Most hospitality businesses run on instinct.
            </h2>
            <p className="text-secondary mb-8 max-w-[600px]">
              Operational chaos and fragmented systems lead to stagnant revenue. Instinct is valuable, but systems are scalable.
            </p>
            <div className="h-1 bg-neutral-100 w-full overflow-hidden">
              <div className="h-full bg-neutral-200 w-1/3" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-secondary mt-2 block">Current State: Linear Growth</span>
          </motion.div>

          <motion.div variants={slideRight}>
            <h2 className="text-3xl mb-6 text-accent max-w-[600px]">
              We build systems that make growth repeatable.
            </h2>
            <p className="text-secondary mb-8 max-w-[600px]">
              SRM Global Corp turns operational complexity into clear, high-performing frameworks that protect margins and drive expansion.
            </p>
            <div className="h-1 bg-accent/20 w-full overflow-hidden">
               <motion.div 
                 className="h-full bg-accent w-2/3"
                 initial={{ width: 0 }}
                 whileInView={{ width: "66%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
               />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-accent mt-2 block">Future State: Compound Performance</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
