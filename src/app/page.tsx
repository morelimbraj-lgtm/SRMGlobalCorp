import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Metrics } from "@/components/sections/Metrics";
import { Method } from "@/components/sections/Method";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ServicesGrid />
      <Metrics />
      <Method />
      <FinalCTA />
    </>
  );
}
