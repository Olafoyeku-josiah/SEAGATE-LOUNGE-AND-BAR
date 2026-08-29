"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactDialog } from "@/components/contact-dialog";
import { ShieldCheck, Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 glass">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
            <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-blue-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              Seagate <span className="gradient-primary-heading">Lounge</span>
            </span>
            <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">
              Enterprise Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#solutions" className="hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#showcase" className="hover:text-white transition-colors">
            Showcase
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            About Us
          </Link>
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Badge variant="glow" className="hidden lg:inline-flex gap-1.5 py-1">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" /> Executive Access
          </Badge>

          <ContactDialog>
            <Button variant="gradient" size="default">
              Get Started
            </Button>
          </ContactDialog>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-6 py-6 space-y-4 animate-in slide-in-from-top-5">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-300">
            <Link
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Solutions
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Services
            </Link>
            <Link
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Showcase
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              About Us
            </Link>
          </nav>
          <div className="pt-2">
            <ContactDialog>
              <Button variant="gradient" className="w-full">
                Get Started
              </Button>
            </ContactDialog>
          </div>
        </div>
      )}
    </header>
  );
}
