"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  GlassWater,
  UtensilsCrossed,
  Music,
  Waves,
  Dumbbell,
  Truck,
} from "lucide-react";

const amenities = [
  {
    icon: GlassWater,
    title: "Exotic Drinks & Cocktails",
    description:
      "Cold beers, fine wines, premium spirits, and signature house-crafted cocktails served ice-cold at our luxury bar.",
    badge: "Bar & Lounge",
    image: "/images/bar-display.jpg",
  },
  {
    icon: UtensilsCrossed,
    title: "Delicious Meals & Gourmet Bites",
    description:
      "Flavorful grilled dishes, African delicacies, crisp fries, and mouth-watering snacks prepared daily by top chefs.",
    badge: "Kitchen",
    image: "/images/bar-display-2.jpg",
  },
  {
    icon: Waves,
    title: "Swimming Pool Area",
    description:
      "Relax poolside with refreshing drinks under the sun or enjoy night pool parties in a clean, pristine swimming environment.",
    badge: "Poolside",
    image: "/images/poolside-1.jpg",
  },
  {
    icon: Music,
    title: "Great Music & DJ Vibes",
    description:
      "Immerse yourself in top-tier acoustic sound systems, live DJ sets, and vibrant rhythms for an unforgettable night out.",
    badge: "Nightlife",
    image: "/images/rooftop-gazebo.jpg",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Games Area",
    description:
      "Outdoor snooker table, outdoor fitness gear, swing seats, and chill zones designed for fun recreation.",
    badge: "Recreation",
    image: "/images/snooker-games.jpg",
  },
  {
    icon: Truck,
    title: "Home Delivery Available",
    description:
      "Craving your favorite cold drinks or meals at home? We deliver fast, safe, and reliable right to your doorstep in Akure.",
    badge: "Delivery",
    image: "/images/outdoor-courtyard.jpg",
  },
];

export function AmenitiesSection() {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="amenities" className="py-20 relative bg-slate-50/70 dark:bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 text-xs text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              What We Offer
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Come for the Experience, <span className="text-slate-700 dark:text-slate-300">Stay for the Memories!</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Seagate Lounge & Bar brings you the perfect spot to chill, connect, and celebrate life with top-notch hospitality.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            const isLoaded = loadedImages[idx];
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group overflow-hidden flex flex-col justify-between h-full">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      {!isLoaded && <Skeleton className="absolute inset-0 z-10" />}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoad={() => handleImageLoad(idx)}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent z-10" />
                      <div className="absolute top-3 right-3 z-20">
                        <Badge variant="secondary" className="text-[10px] bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800/80 shadow-sm font-bold backdrop-blur-xs">
                          {item.badge}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="space-y-2 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
