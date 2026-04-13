"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { elegantFade } from "@/lib/motion";

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-neutral-200">
      <Container>
        <motion.div 
          {...elegantFade}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl mb-8 leading-tight text-primary max-w-[800px]">
            Let’s build a stronger <br className="hidden md:block" />
            hospitality business.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" href="/contact">Request Access</Button>
            <Button variant="ghost" size="lg" href="/contact">Start a conversation</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
