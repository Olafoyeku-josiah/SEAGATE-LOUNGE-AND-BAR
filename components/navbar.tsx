"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { Phone, MapPin, Menu, X, Calendar, ShoppingBag } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm transition-colors duration-300">
      {/* Top Banner Bar */}
      <div className="bg-slate-100 dark:bg-slate-900 px-4 py-1.5 text-xs text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
              <MapPin className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400 shrink-0" />
              Adebowale, Ondo Road, Akure
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:inline-block font-medium text-slate-700 dark:text-slate-300">
              Open Daily: 12 PM Till Late
            </span>
          </div>

          <div className="flex items-center gap-4 font-bold">
            <a
              href="tel:+2347047784064"
              className="flex items-center gap-1 hover:text-slate-950 dark:hover:text-white transition-colors text-slate-800 dark:text-slate-200"
            >
              <Phone className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400" /> +234 704 778 4064
            </a>
            <span className="hidden sm:inline-block text-slate-400">/</span>
            <a
              href="tel:+2347061280261"
              className="hidden sm:flex items-center gap-1 hover:text-slate-950 dark:hover:text-white transition-colors text-slate-800 dark:text-slate-200"
            >
              +234 706 128 0261
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-2xl bg-slate-900 dark:bg-slate-800 p-2 shadow-md group-hover:bg-slate-800 dark:group-hover:bg-slate-700 transition-all duration-300 flex items-center justify-center border border-slate-800 dark:border-slate-700">
            <Image
              src="/letter-s.png"
              alt="Seagate Lounge Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain grayscale contrast-125 brightness-125"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white font-serif">
              SEAGATE
            </span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-slate-600 dark:text-slate-400 uppercase">
              LOUNGE & BAR
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <Link href="/#about" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/#amenities" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            Amenities & Bar
          </Link>
          <Link href="/#venue" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            Event Venue
          </Link>
          <Link href="/events" className="hover:text-slate-950 dark:hover:text-white transition-colors flex items-center gap-1">
            <Calendar className="h-4 w-4 text-slate-600 dark:text-slate-400" /> Past Events
          </Link>
          <Link href="/gallery" className="hover:text-slate-950 dark:hover:text-white transition-colors flex items-center gap-1">
            Gallery
          </Link>
          <Link href="/#delivery" className="hover:text-slate-950 dark:hover:text-white transition-colors flex items-center gap-1">
            <ShoppingBag className="h-4 w-4 text-slate-600 dark:text-slate-400" /> Delivery
          </Link>
        </nav>

        {/* Action CTAs & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <ContactDialog>
            <Button variant="default" size="default">
              Book Venue / Table
            </Button>
          </ContactDialog>
        </div>

        {/* Mobile menu toggle & Theme Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-950/98 px-6 py-6 space-y-4 animate-in slide-in-from-top-5 shadow-lg">
          <nav className="flex flex-col space-y-4 text-base font-semibold text-slate-800 dark:text-slate-200">
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-slate-950 dark:hover:text-white py-1"
            >
              About Us
            </Link>
            <Link
              href="/#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-slate-950 dark:hover:text-white py-1"
            >
              Amenities & Bar
            </Link>
            <Link
              href="/#venue"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-slate-950 dark:hover:text-white py-1"
            >
              Event Venue (Outdoor & Indoor)
            </Link>
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-slate-950 dark:hover:text-white py-1 font-bold"
            >
              Past Events Gallery
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-slate-950 dark:hover:text-white py-1 font-bold"
            >
              Photo & Video Gallery
            </Link>
            <Link
              href="/#delivery"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-slate-950 dark:hover:text-white py-1"
            >
              Home Delivery Available
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <ContactDialog>
              <Button variant="default" className="w-full">
                Book Venue / Table
              </Button>
            </ContactDialog>
            <a
              href="https://wa.me/2347047784064"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" className="w-full">
                Order via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
