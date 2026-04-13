"use client";

import { motion } from "framer-motion";
import { GlobeCdn } from "@/components/ui/GlobeCdn";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { blurFade, staggerContainer } from "@/lib/motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-12">
      {/* COBE Globe Background - Blurred for depth */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70 translate-y-4 lg:translate-y-8 blur-[2px]">
        <div className="w-[120%] max-w-[800px] lg:max-w-[900px] aspect-square">
          <GlobeCdn speed={0.002} />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.span variants={blurFade} className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6 block max-w-[600px]">
              Global Hospitality Advisory
            </motion.span>
            <motion.h1 variants={blurFade} className="text-4xl md:text-5xl lg:text-7xl mb-8 leading-[1.05] text-primary font-medium max-w-[1000px]">
              Turn hospitality complexity <br className="hidden md:block" />
              into scalable returns.
            </motion.h1>
            <motion.p variants={blurFade} className="text-lg md:text-xl text-secondary mb-12 max-w-[650px] mx-auto leading-relaxed">
              Outcome-driven audits, franchise systems, and growth advisory for owners and institutional investors.
            </motion.p>
            
            <motion.div variants={blurFade} className="flex flex-col items-center gap-8">
              <Button size="lg" href="/contact" className="px-12 shadow-lg shadow-accent/20">
                Secure a Strategy Audit
              </Button>
              
              {/* Trust Strip */}
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 pt-4 opacity-60">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-primary">14+ Years</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-secondary">Performance</span>
                </div>
                <div className="w-px h-8 bg-neutral-200 hidden sm:block" />
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-primary">40+ Brands</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-secondary">Optimized</span>
                </div>
                <div className="w-px h-8 bg-neutral-200 hidden sm:block" />
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-primary">4 Countries</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-secondary">Presence</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
