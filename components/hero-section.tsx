"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ContactDialog } from "@/components/contact-dialog";
import { CallDialog } from "@/components/call-dialog";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Sparkles,
  MapPin,
  GlassWater,
  Waves,
  Music,
  Truck,
  PhoneCall,
  Calendar,
} from "lucide-react";

export function HeroSection() {
  const [mainImgLoaded, setMainImgLoaded] = useState(false);
  const [barImgLoaded, setBarImgLoaded] = useState(false);
  const [poolImgLoaded, setPoolImgLoaded] = useState(false);

  return (
    <section id="about" className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 bg-slate-50/60 dark:bg-slate-950/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-slate-200/40 dark:bg-slate-800/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <Badge variant="default" className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-800 shadow-sm">
                  <Sparkles className="mr-1.5 h-3.5 w-3.5 text-slate-700 dark:text-amber-400" /> Premier Hangout & Event Spot in Akure
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-xs text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <MapPin className="mr-1 h-3.5 w-3.5 text-slate-600 dark:text-slate-400" /> Adebowale, Ondo Road
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                RELAX. UNWIND.{" "}
                <span className="text-slate-800 dark:text-slate-200">ENJOY!</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 font-serif">
                Your Perfect Venue for Every Occasion & Hangout
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Good Vibes. Cold Drinks. Great Times! Whether under the open sky or in our elegant interiors, <strong>Seagate Lounge & Bar</strong> provides the perfect setting for your special moments, pool parties, and unforgettable events.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <ContactDialog>
                  <Button variant="default" size="lg" className="w-full sm:w-auto">
                    <Calendar className="mr-2 h-5 w-5" /> Book Your Date / Venue
                  </Button>
                </ContactDialog>

                <CallDialog>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <PhoneCall className="mr-2 h-5 w-5 text-slate-700 dark:text-slate-300" /> Order Home Delivery
                  </Button>
                </CallDialog>
              </div>
            </ScrollReveal>

            {/* Highlights Grid */}
            <ScrollReveal delay={0.6}>
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 dark:border-slate-800 max-w-2xl mx-auto lg:mx-0">
                <div className="flex flex-col items-center lg:items-start space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-base">
                    <GlassWater className="h-4 w-4 text-slate-700 dark:text-slate-300" /> Exotic Drinks
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Cold Cocktails & Beer</p>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-base">
                    <Waves className="h-4 w-4 text-slate-700 dark:text-slate-300" /> Swimming Pool
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Chill Poolside Lounge</p>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-base">
                    <Music className="h-4 w-4 text-slate-700 dark:text-slate-300" /> Great Music
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Top Sound & DJ Nights</p>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-base">
                    <Truck className="h-4 w-4 text-slate-700 dark:text-slate-300" /> Fast Delivery
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">We Deliver to You!</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Hero Visual Cards */}
          <div className="lg:col-span-5 relative space-y-6">
            <ScrollReveal delay={0.3} direction="left">
              <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-lg group relative">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  {!mainImgLoaded && <Skeleton className="absolute inset-0 z-10" />}
                  <Image
                    src="/images/rooftop-gazebo.jpg"
                    alt="Seagate Lounge Outdoor Nightlife"
                    fill
                    priority
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    onLoad={() => setMainImgLoaded(true)}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                    <div>
                      <Badge variant="default" className="mb-1 text-[10px] bg-slate-900 text-white border-0">
                        Outdoor Gazebo & Lounge
                      </Badge>
                      <h3 className="text-lg font-bold text-white">Under the Open Sky</h3>
                    </div>
                    <span className="text-xs font-semibold text-slate-900 bg-white/90 px-2.5 py-1 rounded-full shadow-sm">
                      Open Till Late
                    </span>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4">
              <ScrollReveal delay={0.4} direction="up">
                <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group">
                  {!barImgLoaded && <Skeleton className="absolute inset-0 z-10" />}
                  <Image
                    src="/images/bar-display.jpg"
                    alt="Seagate Bar Stock"
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    onLoad={() => setBarImgLoaded(true)}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-2.5 left-3 text-xs font-bold text-white z-20">
                    🍸 Premium Spirits
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5} direction="up">
                <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group">
                  {!poolImgLoaded && <Skeleton className="absolute inset-0 z-10" />}
                  <Image
                    src="/images/poolside-1.jpg"
                    alt="Seagate Swimming Pool"
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    onLoad={() => setPoolImgLoaded(true)}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-2.5 left-3 text-xs font-bold text-white z-20">
                    🏊 Swimming Pool
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
