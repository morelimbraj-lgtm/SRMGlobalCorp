"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { blurFade, staggerContainer } from "@/lib/motion";
import { TrendingUp, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Luxury Coastal Resort Turnaround",
    target: "Operational Loss to Market Leader",
    result: "+40% EBITDA Growth in 12 Months",
    metric: "4.5x ROI",
    description: "Complete diagnostic audit and system implementation for a 120-key distressed asset.",
  },
  {
    title: "Global QSR Franchise Rollout",
    target: "0 to 12 Units Rapid Expansion",
    result: "Full Compliance & Profitability in All Units",
    metric: "24 Months",
    description: "Building a scalable infrastructure for a premium F&B brand entering the EMEA market.",
  }
];

export const CaseStudies = () => {
  return (
    <Section>
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.span variants={blurFade} className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4 block">Measurable Evidence</motion.span>
          <motion.h2 variants={blurFade} className="text-3xl md:text-5xl mb-6 text-primary tracking-tight">Structured thinking. <br />Tangible improvement.</motion.h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center border-b border-neutral-100 pb-12 group-hover:border-accent/30 transition-colors duration-500">
                <div className="lg:col-span-5">
                   <span className="text-accent font-bold text-sm mb-2 block">{study.metric}</span>
                   <h3 className="text-2xl md:text-3xl font-medium text-primary mb-4 group-hover:text-accent transition-colors duration-300">{study.title}</h3>
                   <p className="text-secondary leading-relaxed max-w-md">{study.description}</p>
                </div>
                
                <div className="lg:col-span-5 flex flex-col gap-4">
                   <div className="flex items-start gap-4 p-6 bg-neutral-50 group-hover:bg-accent/5 transition-colors duration-500 rounded-sm">
                      <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                         <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold block mb-1">Commercial Result</span>
                         <span className="text-lg font-semibold text-primary">{study.result}</span>
                      </div>
                   </div>
                </div>

                <div className="lg:col-span-2 flex justify-end">
                   <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
