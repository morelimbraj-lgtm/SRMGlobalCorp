"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { blurFade, staggerContainer, slideRight, scaleIn } from "@/lib/motion";

const steps = [
  { title: "Diagnose", description: "Analyzing the delta between current performance and untapped potential." },
  { title: "Strategize", description: "Architecting a custom roadmap with clear, measurable commercial outcomes." },
  { title: "Implement", description: "Deploying systems and playbooks with disciplined project management." },
  { title: "Optimize", description: "Continuous refinement through data-driven audits and feedback loops." },
];

export const Method = () => {
  return (
    <Section>
      <Container>
        <div className="max-w-[700px] mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 variants={blurFade} className="text-3xl mb-4 max-w-[800px] mx-auto text-primary">The Methodology</motion.h2>
            <motion.p variants={blurFade} className="text-secondary max-w-[600px] mx-auto">A structured consulting playbook for repeatable success.</motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={slideRight} 
                className="flex flex-col md:flex-row gap-8 items-start border-l-2 border-neutral-200 pl-8 relative"
              >
                <motion.div 
                  variants={scaleIn}
                  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-background" 
                />
                <div className="md:w-1/3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2 block">
                    Step 0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-primary tracking-tight">{step.title}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-secondary leading-relaxed max-w-[600px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
