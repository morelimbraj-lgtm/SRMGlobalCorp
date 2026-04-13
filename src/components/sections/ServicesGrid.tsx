"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { staggerContainer, blurFade, scaleIn } from "@/lib/motion";
import { ClipboardCheck, Target, Layers, TrendingUp, Compass, Anchor } from "lucide-react";

const services = [
  {
    title: "Diagnostic Asset Audits",
    benefit: "Uncover and reclaim 15-20% operative leakage.",
    impact: "Avg. ROI: 4.5x within 90 days",
    icon: ClipboardCheck,
    tag: "Most Requested",
  },
  {
    title: "Franchise Scale Strategy",
    benefit: "Build bulletproof frameworks for global rapid rollout.",
    impact: "0 to 12 units in < 24 months",
    icon: Target,
  },
  {
    title: "F&B Yield Engineering",
    benefit: "Re-engineer high-volume menus for maximum margin.",
    impact: "25% average lift in F&B EBITDA",
    icon: TrendingUp,
    tag: "High Impact",
  },
  {
    title: "Turnaround Advisory",
    benefit: "Stabilize distressed portfolios and restore cash flow.",
    impact: "Profitable in < 6 months",
    icon: Anchor,
  },
];

export const ServicesGrid = () => {
  return (
    <Section background="subtle">
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.span variants={blurFade} className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4 block">Our Core Offers</motion.span>
          <motion.h2 variants={blurFade} className="text-3xl md:text-4xl mb-6 max-w-[800px] mx-auto text-primary">Focused on measurable returns.</motion.h2>
          <motion.p variants={blurFade} className="text-secondary max-w-[600px] mx-auto">
            We don't offer general advice. We provide structured systems designed for commercial dominance and operational discipline.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={scaleIn} className="h-full">
              <Card 
                variant="bordered" 
                className="h-full group hover:border-accent/40 transition-all duration-500 overflow-hidden relative bg-background/50 backdrop-blur-sm"
              >
                {service.tag && (
                  <div className="absolute top-4 right-4 bg-accent/10 text-accent text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-accent/20">
                    {service.tag}
                  </div>
                )}
                
                <div className="p-8">
                  <div className="mb-8 relative">
                     <div className="absolute inset-0 bg-accent/5 blur-xl group-hover:bg-accent/10 transition-colors duration-500 rounded-full w-12 h-12" />
                     <service.icon strokeWidth={1.5} className="w-8 h-8 text-accent relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                  </div>
                  
                  <h3 className="text-xl mb-4 tracking-tight text-primary font-medium">{service.title}</h3>
                  <p className="text-secondary leading-relaxed mb-10 text-sm">
                    {service.benefit}
                  </p>
                  
                  {/* Hover Interaction Overlay / Result Metrics */}
                  <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                     <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold mb-1">Target Result</span>
                        <span className="text-sm font-bold text-accent">{service.impact}</span>
                     </div>
                     <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-accent group-hover:translate-x-2 transition-transform duration-300"
                     >
                        <TrendingUp className="w-4 h-4" />
                     </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};
