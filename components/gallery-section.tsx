"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Camera, ArrowRight } from "lucide-react";

const previewPhotos = [
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
];

export function GallerySection() {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="gallery" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <Badge variant="outline" className="px-3 py-1 text-xs text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <Camera className="mr-1 h-3.5 w-3.5 text-slate-600 dark:text-slate-400" /> Venue Gallery
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Experience <span className="text-slate-700 dark:text-slate-300">Seagate Lounge</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Take a look inside our vibrant spaces, pristine pool, stocked bar, and outdoor gazebos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewPhotos.map((item, idx) => {
            const isLoaded = loadedImages[idx];
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden group relative h-72 rounded-2xl transition-all duration-300 hover:shadow-lg shadow-sm">
                  {!isLoaded && <Skeleton className="absolute inset-0 z-10" />}
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onLoad={() => handleImageLoad(idx)}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />

                  <div className="absolute bottom-4 left-4 right-4 space-y-1 z-20">
                    <Badge variant="default" className="text-[10px] uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800/80 font-bold shadow-sm backdrop-blur-xs">
                      {item.category}
                    </Badge>
                    <h3 className="text-base font-bold text-white group-hover:text-slate-200 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Link href="/gallery">
              <Button variant="default" size="lg">
                Explore Full Gallery & Videos (26) <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
