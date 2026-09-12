"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Copy, Check, MapPin, MessageSquare } from "lucide-react";

export function CallDialog({ children }: { children?: React.ReactNode }) {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const copyToClipboard = (num: string, setCopied: (v: boolean) => void) => {
    navigator.clipboard.writeText(num);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="lg">
            <Phone className="mr-2 h-5 w-5 text-slate-700" /> Call to Order
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white border-slate-200 text-slate-900">
        <DialogHeader>
          <DialogTitle className="text-xl font-black text-slate-900 font-serif flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-slate-900 p-1 flex items-center justify-center">
              <Image
                src="/letter-s.png"
                alt="Seagate Logo"
                width={20}
                height={20}
                className="h-5 w-5 object-contain grayscale contrast-125 brightness-125"
              />
            </div>
            Direct Order & Contact Lines
          </DialogTitle>
          <DialogDescription className="text-slate-600 text-xs">
            Tap a number to call on mobile, or click copy on your computer.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-3">
          {/* Primary Line */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Primary Line & WhatsApp</p>
              <p className="text-lg font-extrabold text-slate-900">+234 704 778 4064</p>
            </div>
            <div className="flex items-center gap-2">
              <a href="tel:+2347047784064">
                <Button size="sm" variant="default" title="Call directly">
                  <Phone className="h-4 w-4 mr-1" /> Call
                </Button>
              </a>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard("+2347047784064", setCopied1)}
              >
                {copied1 ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-slate-700" />}
              </Button>
            </div>
          </div>

          {/* Secondary Line */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Secondary Contact Line</p>
              <p className="text-lg font-extrabold text-slate-900">+234 706 128 0261</p>
            </div>
            <div className="flex items-center gap-2">
              <a href="tel:+2347061280261">
                <Button size="sm" variant="default" title="Call directly">
                  <Phone className="h-4 w-4 mr-1" /> Call
                </Button>
              </a>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard("+2347061280261", setCopied2)}
              >
                {copied2 ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-slate-700" />}
              </Button>
            </div>
          </div>

          <div className="pt-2 p-3 rounded-xl bg-slate-100 text-center text-xs text-slate-600 flex items-center justify-center gap-1.5">
            <MapPin className="h-4 w-4 text-slate-700 shrink-0" />
            <span>Adebowale, Ondo Road, Akure (Open Daily 12 PM Till Late)</span>
          </div>

          <a
            href="https://wa.me/2347047784064?text=Hello%20Seagate%20Lounge,%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="outline" className="w-full h-11 border-slate-300">
              <MessageSquare className="mr-2 h-4 w-4 text-slate-700" /> Chat & Order on WhatsApp
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
