"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";
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
  return (
    <section id="venue" className="py-20 bg-slate-100/60 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" className="px-3.5 py-1 text-xs bg-white text-slate-800 border-slate-300 shadow-sm">
            Event Venue Hosting
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Your Perfect Venue for <span className="text-slate-700">Every Occasion</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether it’s under the open sky or in our elegant interiors, <strong>Seagate Lounge & Bar</strong> provides the perfect setting for your special moments and unforgettable events.
          </p>
        </div>

        {/* Outdoor vs Indoor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Outdoor Events Card */}
          <Card className="border-slate-200 bg-white shadow-md overflow-hidden group">
            <div className="relative h-64 w-full">
              <Image
                src="/images/rooftop-gazebo.jpg"
                alt="Outdoor Events at Seagate Lounge"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge variant="default" className="text-xs uppercase tracking-wider bg-white text-slate-900 border-0 font-bold shadow-md">
                  <Sun className="mr-1 h-3.5 w-3.5 text-slate-700" /> Outdoor Events
                </Badge>
              </div>
            </div>
            <CardContent className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-slate-900">Open Sky & Poolside Atmosphere</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enjoy open-air party vibes, poolside canopies, evening gazebos, and fresh ambient lighting perfect for birthdays, receptions, and sunset hangouts.
              </p>
            </CardContent>
          </Card>

          {/* Indoor Events Card */}
          <Card className="border-slate-200 bg-white shadow-md overflow-hidden group">
            <div className="relative h-64 w-full">
              <Image
                src="/images/bar-display-2.jpg"
                alt="Indoor Events at Seagate Lounge"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge variant="default" className="text-xs uppercase tracking-wider bg-white text-slate-900 border-0 font-bold shadow-md">
                  <Building2 className="mr-1 h-3.5 w-3.5 text-slate-700" /> Indoor Events
                </Badge>
              </div>
            </div>
            <CardContent className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-slate-900">Elegant Interiors & Executive Hall</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sophisticated air-conditioned interior setting, executive meeting tables, mood lighting, and private dining space suited for corporate & VIP functions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Ideal For Grid */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-8 shadow-sm">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-slate-900 font-serif">Ideal For Every Celebration</h3>
            <p className="text-xs text-slate-500">We host and customize for all event types</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:border-slate-400 transition-colors"
                >
                  <Icon className="h-6 w-6 text-slate-700 mx-auto" />
                  <p className="text-xs font-semibold text-slate-900">{item.title}</p>
                </div>
              );
            })}
          </div>

          {/* Highlights bar */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 border border-slate-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{h.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <ContactDialog>
              <Button variant="default" size="lg">
                Book Your Date, Create Beautiful Memories! <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ContactDialog>
          </div>
        </div>
      </div>
    </section>
  );
}
