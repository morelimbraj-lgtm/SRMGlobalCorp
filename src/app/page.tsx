import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Metrics } from "@/components/sections/Metrics";
import { Method } from "@/components/sections/Method";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyCTA } from "@/components/ui/StickyCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <ServicesGrid />
      <Method />
      <CaseStudies />
      <FinalCTA />
      <StickyCTA />
    </>
  );
}
