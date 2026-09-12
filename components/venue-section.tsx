"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ContactDialog } from "@/components/contact-dialog";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Users,
  PartyPopper,
  Briefcase,
  Heart,
  GlassWater,
  ShieldCheck,
  Volume2,
  Car,
  Award,
  ArrowRight,
  Sun,
  Building2,
} from "lucide-react";

const occasions = [
  { icon: Briefcase, title: "Meetings & Conferences" },
  { icon: PartyPopper, title: "Birthday Parties" },
  { icon: Heart, title: "Engagement Ceremonies" },
  { icon: Users, title: "Wedding Receptions" },
  { icon: GlassWater, title: "Get-Togethers & Parties" },
  { icon: Briefcase, title: "Corporate Events" },
];

const highlights = [
  { icon: ShieldCheck, title: "Spacious Environment", desc: "Generous layout for both intimate and grand gatherings." },
  { icon: GlassWater, title: "Excellent Food & Drinks", desc: "Custom catering menus & full bar service." },
  { icon: Volume2, title: "Quality Sound System", desc: "State-of-the-art audio setup for speeches and DJs." },
  { icon: Car, title: "Secure Parking", desc: "Ample guarded parking for all your guests." },
  { icon: Award, title: "Professional Service", desc: "Dedicated event staff to make your occasion seamless." },
];

export function VenueSection() {
  const [outdoorLoaded, setOutdoorLoaded] = useState(false);
  const [indoorLoaded, setIndoorLoaded] = useState(false);

  return (
    <section id="venue" className="py-20 bg-slate-100/60 dark:bg-slate-900/60 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="glow" className="px-3.5 py-1 text-xs bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-800 shadow-sm">
              Event Venue Hosting
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Your Perfect Venue for <span className="text-slate-700 dark:text-slate-300">Every Occasion</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              Whether it’s under the open sky or in our elegant interiors, <strong>Seagate Lounge & Bar</strong> provides the perfect setting for your special moments and unforgettable events.
            </p>
          </div>
        </ScrollReveal>

        {/* Outdoor vs Indoor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Outdoor Events Card */}
          <ScrollReveal delay={0.1}>
            <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md overflow-hidden group">
              <div className="relative h-64 w-full">
                {!outdoorLoaded && <Skeleton className="absolute inset-0 z-10" />}
                <Image
                  src="/images/rooftop-gazebo.jpg"
                  alt="Outdoor Events at Seagate Lounge"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onLoad={() => setOutdoorLoaded(true)}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20">
                  <Badge variant="default" className="text-xs uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800/80 font-bold shadow-md backdrop-blur-xs">
                    <Sun className="mr-1 h-3.5 w-3.5 text-slate-700 dark:text-slate-300" /> Outdoor Events
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Open Sky & Poolside Atmosphere</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Enjoy open-air party vibes, poolside canopies, evening gazebos, and fresh ambient lighting perfect for birthdays, receptions, and sunset hangouts.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Indoor Events Card */}
          <ScrollReveal delay={0.2}>
            <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md overflow-hidden group">
              <div className="relative h-64 w-full">
                {!indoorLoaded && <Skeleton className="absolute inset-0 z-10" />}
                <Image
                  src="/images/bar-display-2.jpg"
                  alt="Indoor Events at Seagate Lounge"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onLoad={() => setIndoorLoaded(true)}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20">
                  <Badge variant="default" className="text-xs uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800/80 font-bold shadow-md backdrop-blur-xs">
                    <Building2 className="mr-1 h-3.5 w-3.5 text-slate-700 dark:text-slate-300" /> Indoor Events
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Elegant Interiors & Executive Hall</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Sophisticated air-conditioned interior setting, executive meeting tables, mood lighting, and private dining space suited for corporate & VIP functions.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Ideal For Grid */}
        <ScrollReveal delay={0.3}>
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-8 shadow-sm">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-serif">Ideal For Every Celebration</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">We host and customize for all event types</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {occasions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-2 hover:border-slate-400 transition-colors"
                  >
                    <Icon className="h-6 w-6 text-slate-700 dark:text-slate-300 mx-auto" />
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                  </div>
                );
              })}
            </div>

            {/* Highlights bar */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{h.title}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-4 flex justify-center">
              <ContactDialog>
                <Button variant="default" size="lg" className="w-full sm:w-auto h-auto min-h-[48px] py-3.5 px-5 text-sm sm:text-base font-bold whitespace-normal leading-snug">
                  Book Your Date, Create Beautiful Memories! <ArrowRight className="ml-2 h-5 w-5 shrink-0 inline-block" />
                </Button>
              </ContactDialog>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
