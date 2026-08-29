"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  return (
    <section id="amenities" className="py-20 relative bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="px-3 py-1 text-xs text-slate-800 border-slate-300 bg-white shadow-sm">
            What We Offer
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Come for the Experience, <span className="text-slate-700">Stay for the Memories!</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Seagate Lounge & Bar brings you the perfect spot to chill, connect, and celebrate life with top-notch hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="text-[10px] bg-white/90 text-slate-900 border-slate-200 shadow-sm font-bold">
                        {item.badge}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="space-y-2 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-800">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
