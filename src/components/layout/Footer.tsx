import Link from "next/link";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 py-12">
      <Container className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-[400px]">
          <Link href="/" className="text-lg font-bold tracking-tight text-primary block mb-4">
            SRM <span className="font-light text-secondary">Global Corp</span>
          </Link>
          <p className="text-xs text-secondary leading-relaxed max-w-[300px]">
            Premium hospitality consulting and advisory for owners, investors, and operators.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 font-medium">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">Links</span>
            <Link href="/services" className="text-sm hover:text-accent transition-colors">Services</Link>
            <Link href="/research" className="text-sm hover:text-accent transition-colors">Research</Link>
            <Link href="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">Social</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">LinkedIn</a>
            <a href="mailto:info@srmglobalcorp.com" className="text-sm hover:text-accent transition-colors">Email</a>
          </div>
        </div>
      </Container>
      <Container className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-[10px] uppercase tracking-widest text-secondary">
          © {new Date().getFullYear()} SRM Global Corp. All rights reserved.
        </p>
        <p className="text-[10px] uppercase tracking-widest text-secondary">
          Made by <a href="https://glitchaisolutions.framer.ai" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Glitch AI Solution</a>
        </p>
      </Container>
    </footer>
  );
};
