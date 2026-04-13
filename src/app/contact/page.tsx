"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { blurFade, elegantFade } from "@/lib/motion";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-24 pb-12">
      <Section>
        <Container>
          <div className="max-w-[700px] mx-auto">
            <motion.div {...blurFade} className="mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4 block max-w-[600px]">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl mb-6 text-primary max-w-[800px]">Start a conversation.</h1>
              <p className="text-lg text-secondary max-w-[600px]">
                Discussing a current project or exploring a new strategy. We respond to all inquiries within 24 hours.
              </p>
            </motion.div>

            <motion.div {...elegantFade} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
              {formState === 'success' ? (
                <div className="bg-neutral-100 p-12 text-center rounded-sm border border-neutral-200">
                  <h2 className="text-2xl mb-4 text-primary">Message Received.</h2>
                  <p className="text-secondary mb-8">Thank you for reaching out. A partner from SRM Global Corp will contact you shortly.</p>
                  <Button variant="outline" onClick={() => setFormState('idle')}>Send another message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-secondary font-bold">Full Name</label>
                       <input 
                         required
                         type="text" 
                         placeholder="John Doe"
                         className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-accent focus:outline-none transition-colors text-primary" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-secondary font-bold">Email Address</label>
                       <input 
                         required
                         type="email" 
                         placeholder="john@company.com"
                         className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-accent focus:outline-none transition-colors text-primary" 
                       />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-secondary font-bold">Company</label>
                       <input 
                         type="text" 
                         placeholder="Hospitality Group"
                         className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-accent focus:outline-none transition-colors text-primary" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-secondary font-bold">Requirement</label>
                       <select className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-accent focus:outline-none transition-colors text-primary appearance-none cursor-pointer">
                          <option>Hospitality Audit</option>
                          <option>Franchise Strategy</option>
                          <option>Turnaround Consulting</option>
                          <option>Other Advisory</option>
                       </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-secondary font-bold">Message</label>
                     <textarea 
                       rows={4}
                       placeholder="How can we help?"
                       className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-accent focus:outline-none transition-colors text-primary resize-none" 
                     />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
