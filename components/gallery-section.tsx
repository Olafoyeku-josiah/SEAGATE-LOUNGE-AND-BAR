"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

const photos = [
  {
    src: "/images/bar-display.jpg",
    title: "Luxury Bar Display & Spirits",
    category: "Bar & Drinks",
  },
  {
    src: "/images/rooftop-gazebo.jpg",
    title: "Rooftop Gazebo & Night Lounge",
    category: "Nightlife",
  },
  {
    src: "/images/poolside-1.jpg",
    title: "Swimming Pool Area",
    category: "Poolside",
  },
  {
    src: "/images/outdoor-courtyard.jpg",
    title: "Outdoor Hangout Seating",
    category: "Courtyard",
  },
  {
    src: "/images/snooker-games.jpg",
    title: "Snooker & Games Zone",
    category: "Recreation",
  },
  {
    src: "/images/bar-display-2.jpg",
    title: "Exclusive Bar & Champagne Collection",
    category: "Bar & Lounge",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 relative bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <Badge variant="outline" className="px-3 py-1 text-xs text-slate-800 border-slate-300 bg-white shadow-sm">
            <Camera className="mr-1 h-3.5 w-3.5 text-slate-600" /> Venue Gallery
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Experience <span className="text-slate-700">Seagate Lounge</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Take a look inside our vibrant spaces, pristine pool, stocked bar, and outdoor gazebos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((item, idx) => (
            <Card
              key={idx}
              className="border border-slate-200 bg-white overflow-hidden group relative h-72 rounded-2xl transition-all duration-300 hover:shadow-lg shadow-sm"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <Badge variant="default" className="text-[10px] uppercase tracking-wider bg-white text-slate-900 border-0 font-bold">
                  {item.category}
                </Badge>
                <h3 className="text-base font-bold text-white group-hover:text-slate-200 transition-colors">
                  {item.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
