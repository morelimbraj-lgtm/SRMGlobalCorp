"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { blurFade, staggerContainer } from "@/lib/motion";

export const FinalCTA = () => {
  return (
    <Section background="accent" className="py-24 md:py-32">
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <motion.h2 variants={blurFade} className="text-3xl md:text-5xl lg:text-6xl mb-8 leading-[1.1] text-white font-medium max-w-[900px]">
             Secure the commercial <br />
             yield your asset deserves.
          </motion.h2>
          <motion.p variants={blurFade} className="text-white/80 text-lg md:text-xl mb-12 max-w-[600px] leading-relaxed mx-auto">
             We install the systems that protect your margins and scale your brand. Let's build a sharper hospitality business.
          </motion.p>
          <motion.div variants={blurFade} className="flex flex-col items-center gap-6">
            <Button 
              size="lg" 
              href="/contact" 
              className="bg-white text-accent hover:bg-neutral-100 px-12 text-lg shadow-xl"
            >
              Secure a Strategy Audit
            </Button>
            <span className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold">
              Join 40+ hospitality leaders | $XXXM Revenue Optimized
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
