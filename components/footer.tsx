import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Globe, Share2, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-slate-900 p-2 shadow-md flex items-center justify-center">
                <Image
                  src="/letter-s.png"
                  alt="Seagate Lounge Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain grayscale contrast-125 brightness-125"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-900 font-serif">
                  SEAGATE
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase">
                  LOUNGE & BAR
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Your premier hangout spot and event venue in Akure. Good Vibes. Cold Drinks. Great Times! Come for the experience, stay for the memories.
            </p>

            <div className="flex items-center gap-4 text-slate-600 pt-2">
              <a
                href="https://wa.me/2347047784064"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-200 transition-colors shadow-sm"
                title="Contact WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-200 transition-colors shadow-sm"
                title="Global Network"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-200 transition-colors shadow-sm"
                title="Share Page"
              >
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#about" className="hover:text-slate-950 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-slate-950 transition-colors">
                  Amenities & Bar
                </a>
              </li>
              <li>
                <a href="#venue" className="hover:text-slate-950 transition-colors">
                  Event Venue Hosting
                </a>
              </li>
              <li>
                <a href="#fiesta" className="hover:text-slate-950 transition-colors text-slate-900 font-bold">
                  Back To School Fiesta
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-slate-950 transition-colors">
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Offerings */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Our Offerings
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Exotic Drinks & Cocktails</li>
              <li>Delicious Meals & Bites</li>
              <li>Swimming Pool Lounge</li>
              <li>Great Music & DJ Vibes</li>
              <li>Outdoor & Indoor Events</li>
              <li>Doorstep Home Delivery</li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-slate-700 shrink-0 mt-0.5" />
                <span>Adebowale, Ondo Road, Akure, Ondo State</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-700 shrink-0" />
                <a href="tel:+2347047784064" className="hover:text-slate-950">
                  +234 704 778 4064
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-700 shrink-0" />
                <a href="tel:+2347061280261" className="hover:text-slate-950">
                  +234 706 128 0261
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-700 shrink-0" />
                <span>Open Daily: 12 PM Till Late</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-slate-200" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Seagate Lounge & Bar. All rights reserved.</p>
          <p className="text-slate-800 font-serif italic font-semibold">
            GOOD AMBIENCE • GREAT PEOPLE • UNFORGETTABLE MOMENTS
          </p>
        </div>
      </div>
    </footer>
  );
}
