"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactDialog } from "@/components/contact-dialog";
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
  return (
    <section id="about" className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 bg-slate-50/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-slate-200/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <Badge variant="default" className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border-slate-300 shadow-sm">
                <Sparkles className="mr-1.5 h-3.5 w-3.5 text-slate-700" /> Premier Hangout & Event Spot in Akure
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs text-slate-700 border-slate-300 bg-white">
                <MapPin className="mr-1 h-3.5 w-3.5 text-slate-600" /> Adebowale, Ondo Road
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              RELAX. UNWIND.{" "}
              <span className="text-slate-800">ENJOY!</span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-slate-700 font-serif">
              Your Perfect Venue for Every Occasion & Hangout
            </p>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Good Vibes. Cold Drinks. Great Times! Whether under the open sky or in our elegant interiors, <strong>Seagate Lounge & Bar</strong> provides the perfect setting for your special moments, pool parties, and unforgettable events.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <ContactDialog>
                <Button variant="default" size="lg" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" /> Book Your Date / Venue
                </Button>
              </ContactDialog>

              <a href="tel:+2347047784064" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  <PhoneCall className="mr-2 h-5 w-5 text-slate-700" /> Order Home Delivery
                </Button>
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 max-w-2xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-base">
                  <GlassWater className="h-4 w-4 text-slate-700" /> Exotic Drinks
                </div>
                <p className="text-xs text-slate-500">Cold Cocktails & Beer</p>
              </div>

              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-base">
                  <Waves className="h-4 w-4 text-slate-700" /> Swimming Pool
                </div>
                <p className="text-xs text-slate-500">Chill Poolside Lounge</p>
              </div>

              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-base">
                  <Music className="h-4 w-4 text-slate-700" /> Great Music
                </div>
                <p className="text-xs text-slate-500">Top Sound & DJ Nights</p>
              </div>

              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-base">
                  <Truck className="h-4 w-4 text-slate-700" /> Fast Delivery
                </div>
                <p className="text-xs text-slate-500">We Deliver to You!</p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Cards */}
          <div className="lg:col-span-5 relative space-y-6">
            <Card className="border-slate-200 bg-white overflow-hidden shadow-lg group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="/images/rooftop-gazebo.jpg"
                  alt="Seagate Lounge Outdoor Nightlife"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
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

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <Image
                  src="/images/bar-display.jpg"
                  alt="Seagate Bar Stock"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-xs font-bold text-white">
                  🍸 Premium Spirits
                </div>
              </div>

              <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <Image
                  src="/images/poolside-1.jpg"
                  alt="Seagate Swimming Pool"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-xs font-bold text-white">
                  🏊 Swimming Pool
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
