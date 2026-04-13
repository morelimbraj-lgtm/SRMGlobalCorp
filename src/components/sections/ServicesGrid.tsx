"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { staggerContainer, blurFade, scaleIn } from "@/lib/motion";
import { ClipboardCheck, Target, Layers, TrendingUp, Compass, Anchor } from "lucide-react";

const services = [
  {
    title: "Hospitality Audits",
    description: "Deep-dive diagnostic of financial and operational performance.",
    icon: ClipboardCheck,
  },
  {
    title: "Franchise Strategy",
    description: "Scaling brands through robust, legally-sound franchise models.",
    icon: Target,
  },
  {
    title: "Operating Systems",
    description: "Repeatable playbooks for front-of-house and back-of-house excellence.",
    icon: Layers,
  },
  {
    title: "F&B Growth Strategy",
    description: "Engineering menus and concepts for maximum commercial yield.",
    icon: TrendingUp,
  },
  {
    title: "Turnaround Consulting",
    description: "Stabilizing distressed assets and returning them to profitability.",
    icon: Anchor,
  },
  {
    title: "Expansion Planning",
    description: "Strategic roadmap for entering new markets and countries.",
    icon: Compass,
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
          className="mb-16"
        >
          <motion.h2 variants={blurFade} className="text-3xl mb-4 max-w-[800px]">Precision Services</motion.h2>
          <motion.p variants={blurFade} className="text-secondary max-w-[600px]">
            We provide structured thinking for hospitality brands seeking commercial outcomes and process discipline.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card variant="bordered" className="h-full group hover:border-accent transition-colors duration-300">
                <service.icon strokeWidth={1.5} className="w-6 h-6 text-accent mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-lg mb-3 tracking-normal text-primary">{service.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};
