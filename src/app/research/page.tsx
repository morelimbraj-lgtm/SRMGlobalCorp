"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { blurFade, staggerContainer, scaleIn } from "@/lib/motion";
import { FileText, Download, ShieldCheck } from "lucide-react";

export default function ResearchPage() {
  const reports = [
    {
      title: "The 2024 Hospitality Yield Report",
      description: "A comprehensive look at franchise efficiency across 4 global markets.",
      category: "Market Analysis",
    },
    {
      title: "Commercial Operational Audits",
      description: "How structured systems correlate with a 12% increase in EBITDA.",
      category: "White Paper",
    },
  ];

  return (
    <div className="pt-24 pb-12">
      <Section>
        <Container>
          <div className="max-w-[800px]">
            <motion.div {...blurFade} className="mb-20">
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4 block max-w-[600px]">
                Research
              </span>
              <h1 className="text-4xl md:text-5xl mb-6 text-primary max-w-[800px]">Commercial Thought Leadership.</h1>
              <p className="text-lg text-secondary max-w-[600px]">
                We believe in structured thinking backed by proprietary data. Access our latest white papers and methodology notes.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {reports.map((report, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card variant="bordered" padding="lg" className="hover:border-accent transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group">
                    <div className="max-w-[500px]">
                      <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">{report.category}</span>
                      <h3 className="text-xl mb-3 text-primary">{report.title}</h3>
                      <p className="text-sm text-secondary">{report.description}</p>
                    </div>
                    <Button variant="outline">
                      <Download size={16} strokeWidth={1.5} className="mr-2" />
                      Request PDF
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...blurFade} className="mt-24 p-12 bg-neutral-100 rounded-sm border border-neutral-200">
              <ShieldCheck className="text-accent mb-6" size={32} strokeWidth={1.5} />
              <h2 className="text-2xl mb-4 text-primary max-w-[600px]">Methodology Note</h2>
              <p className="text-sm text-secondary leading-relaxed max-w-[700px]">
                Our research is driven by 14 years of advisory data, focusing on commercial resilience and operational scalability. Every report follows a strict peer-review process within the SRM Global group.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
