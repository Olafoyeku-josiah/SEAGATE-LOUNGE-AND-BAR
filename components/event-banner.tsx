"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactDialog } from "@/components/contact-dialog";
import { Calendar, Trophy, Sparkles, MapPin, PhoneCall, Gift, BookOpen, Smile } from "lucide-react";

export function EventBanner() {
  return (
    <section id="fiesta" className="py-16 relative overflow-hidden bg-slate-100/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <Card className="border-slate-200 bg-white p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="destructive" className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-rose-600 text-white animate-pulse border-0">
                  🔥 Special Upcoming Fiesta
                </Badge>
                <Badge variant="outline" className="text-slate-800 border-slate-300 bg-slate-50">
                  <Calendar className="mr-1 h-3.5 w-3.5 text-slate-600" /> Saturday 5th September 2026
                </Badge>
              </div>

              <div>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest block">
                  SEAGATE LOUNGE & BAR PRESENTS
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight mt-1 font-sans">
                  BACK TO SCHOOL <span className="text-slate-700">FIESTA</span> 🎉
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                A day of fun, creativity, knowledge and unforgettable experiences for kids and teens!
                Competitions, games, and amazing prizes for everyone.
              </p>

              {/* Sections / Competitions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <div className="h-8 w-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center mx-auto">
                    <Smile className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Nursery Section</h4>
                  <p className="text-[11px] text-slate-500">Fun Games & Play</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <div className="h-8 w-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center mx-auto">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Primary Section</h4>
                  <p className="text-[11px] text-slate-500">Creative Challenges</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <div className="h-8 w-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center mx-auto">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">JSS 1-3 Section</h4>
                  <p className="text-[11px] text-slate-500">Knowledge Competitions</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1 text-slate-800">
                  <Gift className="h-4 w-4 text-slate-600" /> Win Amazing Prizes!
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-800">
                  <Sparkles className="h-4 w-4 text-slate-600" /> Everyone is a Winner!
                </span>
              </div>
            </div>

            {/* Right Gate Fee & CTA Badge Box */}
            <div className="lg:col-span-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center space-y-5 shadow-xl text-white">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">GATE FEE</span>
                <p className="text-4xl font-extrabold text-white">₦500</p>
                <p className="text-xs text-slate-400">Per Head</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 text-left text-xs space-y-1.5 border border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span>Adebowale, Ondo Road, Akure</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <PhoneCall className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span>+234 704 778 4064</span>
                </div>
              </div>

              <ContactDialog>
                <Button variant="outline" size="lg" className="w-full bg-white text-slate-900 border-white hover:bg-slate-100">
                  Register / Enquire Now
                </Button>
              </ContactDialog>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
