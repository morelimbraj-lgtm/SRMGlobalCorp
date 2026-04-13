"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { blurFade, staggerContainer, slideRight } from "@/lib/motion";
import { Check } from "lucide-react";

const serviceDetails = [
  {
    title: "Hospitality Audits",
    for: "Owners and Private Equity",
    outcomes: ["EBITDA leakage discovery", "Operational risk assessment", "Asset management roadmap"],
  },
  {
    title: "Franchise Strategy",
    title_sub: "Systems for Scale",
    for: "Emerging and Established Brands",
    outcomes: ["Standard Operating Procedures (SOPs)", "Commercial license frameworks", "Expansion playbooks"],
  },
  {
    title: "Turnaround Consulting",
    for: "Underperforming Assets",
    outcomes: ["Revenue engineering", "Cost stabilization", "Brand repositioning"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12">
      <Section>
        <Container>
          <div className="max-w-[1000px] mx-auto">
            <motion.div {...blurFade} className="mb-20">
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4 block max-w-[600px]">
                Services
              </span>
              <h1 className="text-4xl md:text-5xl mb-6 text-primary max-w-[800px]">Consulting for hospitality that performs.</h1>
              <p className="text-lg text-secondary max-w-[600px]">
                We align operational excellence with commercial success through disciplined advisory and systems building.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {serviceDetails.map((service, index) => (
                <motion.div key={index} variants={slideRight} className="grid md:grid-cols-3 gap-8 border-b border-neutral-200 pb-16">
                  <div className="md:col-span-1">
                    <h3 className="text-2xl mb-2 text-primary">{service.title}</h3>
                    <p className="text-xs uppercase tracking-widest text-secondary font-bold">For {service.for}</p>
                  </div>
                  <div className="md:col-span-2">
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {service.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-secondary">
                           <Check size={16} strokeWidth={1.5} className="text-accent mt-1 flex-shrink-0" />
                           {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...blurFade} className="mt-20 text-center">
               <Button size="lg" href="/contact">Inquire about a specific service</Button>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
