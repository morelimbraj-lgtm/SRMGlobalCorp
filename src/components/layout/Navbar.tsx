"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "/services" },
    { label: "Research", href: "/research" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-md py-3" : "bg-transparent py-6"
    )}>
      <Container className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          SRM <span className="font-light text-secondary">Global Corp</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" href="/contact">Book Consultation</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-neutral-200 p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-base font-medium text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button className="w-full" href="/contact">Book Consultation</Button>
        </div>
      )}
    </nav>
  );
};
