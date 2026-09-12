"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CallDialog } from "@/components/call-dialog";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Truck,
  PhoneCall,
  MessageSquare,
  CheckCircle2,
  Clock,
} from "lucide-react";

export function DeliverySection() {
  return (
    <section id="delivery" className="py-20 bg-slate-100/80 dark:bg-slate-900/80 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-lg relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="px-4 py-1 text-xs uppercase tracking-wider bg-slate-900 dark:bg-slate-800 text-white border-0">
                    <Truck className="mr-1.5 h-4 w-4" /> Doorstep Delivery
                  </Badge>
                  <Badge variant="outline" className="text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900">
                    <Clock className="mr-1 h-3.5 w-3.5 text-slate-600 dark:text-slate-400" /> Fast & Reliable
                  </Badge>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                  HOME DELIVERY AVAILABLE <br />
                  <span className="text-slate-700 dark:text-slate-300">WE DELIVER TO YOU!</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Enjoy your favorite cold drinks, premium spirits, and delicious bites delivered fast and safe right to your location in Akure.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {[
                    "Premium Drinks",
                    "Delicious Bites",
                    "Cold Cocktails",
                    "Fast Dispatch",
                    "Safe Packaging",
                    "Top Notch Service",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-slate-700 dark:text-slate-300 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/2347047784064?text=Hello%20Seagate%20Lounge,%20I%20would%20like%20to%20place%20an%20order%20for%20home%20delivery."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="default" size="lg" className="w-full">
                      <MessageSquare className="mr-2 h-5 w-5" /> Order via WhatsApp
                    </Button>
                  </a>

                  <CallDialog>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      <PhoneCall className="mr-2 h-5 w-5 text-slate-700 dark:text-slate-300" /> Call to Order
                    </Button>
                  </CallDialog>
                </div>
              </div>

              {/* Right Contact Card */}
              <div className="lg:col-span-5 bg-slate-900 dark:bg-slate-950 rounded-3xl p-6 border border-slate-800 text-center space-y-6 shadow-xl text-white">
                <div className="h-16 w-16 rounded-2xl bg-slate-800 text-white flex items-center justify-center mx-auto border border-slate-700">
                  <Truck className="h-8 w-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Call / WhatsApp Orders</h3>
                  <p className="text-xs text-slate-400">Adebowale, Ondo Road, Akure</p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="tel:+2347047784064"
                    className="block p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors"
                  >
                    <p className="text-[11px] text-slate-400 uppercase font-semibold">Primary Order Line</p>
                    <p className="text-lg font-extrabold text-white">+234 704 778 4064</p>
                  </a>

                  <a
                    href="tel:+2347061280261"
                    className="block p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors"
                  >
                    <p className="text-[11px] text-slate-400 uppercase font-semibold">Secondary Line</p>
                    <p className="text-lg font-extrabold text-slate-200">+234 706 128 0261</p>
                  </a>
                </div>

                <p className="text-xs italic text-slate-300 font-serif">
                  "Seagate Lounge & Bar... where every moment is worth it!"
                </p>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
