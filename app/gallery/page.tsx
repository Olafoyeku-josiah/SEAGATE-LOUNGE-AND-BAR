"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { MediaPlayer } from "@/components/media-player";
import { Camera, Film, Image as ImageIcon, ArrowLeft } from "lucide-react";

interface MediaItem {
  id: string;
  type: "photo" | "video";
  title: string;
  category: "Bar" | "Pool" | "Outdoor" | "Recreation";
  src: string;
  poster?: string;
}

const mediaItems: MediaItem[] = [
  // Photos
  { id: "p1", type: "photo", title: "Luxury Bar Display & Spirits", category: "Bar", src: "/images/bar-display.jpg" },
  { id: "p2", type: "photo", title: "Exclusive Bar & Champagne Collection", category: "Bar", src: "/images/bar-display-2.jpg" },
  { id: "p3", type: "photo", title: "Rooftop Gazebo & Night Lounge", category: "Outdoor", src: "/images/rooftop-gazebo.jpg" },
  { id: "p4", type: "photo", title: "Swimming Pool Area & Loungers", category: "Pool", src: "/images/poolside-1.jpg" },
  { id: "p5", type: "photo", title: "Poolside Chill Zone", category: "Pool", src: "/images/poolside-2.jpg" },
  { id: "p6", type: "photo", title: "Outdoor Courtyard Hangout", category: "Outdoor", src: "/images/outdoor-courtyard.jpg" },
  { id: "p7", type: "photo", title: "Outdoor Nightlife Seating", category: "Outdoor", src: "/images/outdoor-seating.jpg" },
  { id: "p8", type: "photo", title: "Snooker & Games Area", category: "Recreation", src: "/images/snooker-games.jpg" },
  { id: "p9", type: "photo", title: "Event Grounds & Courtyard", category: "Outdoor", src: "/images/events/fiesta-photo-1.jpg" },
  { id: "p10", type: "photo", title: "Lounge Seating Group", category: "Bar", src: "/images/events/fiesta-photo-2.jpg" },
  { id: "p11", type: "photo", title: "Outdoor Recreation Zone", category: "Recreation", src: "/images/events/fiesta-photo-3.jpg" },
  { id: "p12", type: "photo", title: "VIP Seating Setup", category: "Outdoor", src: "/images/events/fiesta-photo-4.jpg" },
  { id: "p13", type: "photo", title: "Evening Courtyard Ambiance", category: "Outdoor", src: "/images/events/fiesta-photo-5.jpg" },
  { id: "p14", type: "photo", title: "Poolside Deck", category: "Pool", src: "/images/events/fiesta-photo-6.jpg" },
  { id: "p15", type: "photo", title: "Bar Lounge Atmosphere", category: "Bar", src: "/images/events/fiesta-photo-7.jpg" },

  // Videos
  { id: "v1", type: "video", title: "Pool Party & Nightlife Beats", category: "Pool", src: "/WhatsApp Video 2026-08-27 at 04.42.36.mp4", poster: "/images/poolside-1.jpg" },
  { id: "v2", type: "video", title: "Lounge Atmosphere & Sound", category: "Outdoor", src: "/WhatsApp Video 2026-08-27 at 04.42.39.mp4", poster: "/images/rooftop-gazebo.jpg" },
  { id: "v3", type: "video", title: "Event Highlights & Overview", category: "Outdoor", src: "/images/events/fiesta-video-1.mp4", poster: "/images/events/fiesta-photo-1.jpg" },
  { id: "v4", type: "video", title: "Lounge Night Activities", category: "Bar", src: "/images/events/fiesta-video-2.mp4", poster: "/images/events/fiesta-photo-2.jpg" },
  { id: "v5", type: "video", title: "Recreation & Play", category: "Recreation", src: "/images/events/fiesta-video-3.mp4", poster: "/images/events/fiesta-photo-3.jpg" },
  { id: "v6", type: "video", title: "Presentation & Vibes", category: "Outdoor", src: "/images/events/fiesta-video-4.mp4", poster: "/images/events/fiesta-photo-4.jpg" },
  { id: "v7", type: "video", title: "Outdoor Courtyard Night", category: "Outdoor", src: "/images/events/fiesta-video-5.mp4", poster: "/images/events/fiesta-photo-5.jpg" },
  { id: "v8", type: "video", title: "Dance & DJ Music", category: "Outdoor", src: "/images/events/fiesta-video-6.mp4", poster: "/images/events/fiesta-photo-6.jpg" },
  { id: "v9", type: "video", title: "Refreshment & Dining", category: "Bar", src: "/images/events/fiesta-video-7.mp4", poster: "/images/events/fiesta-photo-7.jpg" },
  { id: "v10", type: "video", title: "Party Atmosphere", category: "Pool", src: "/images/events/fiesta-video-8.mp4", poster: "/images/poolside-2.jpg" },
  { id: "v11", type: "video", title: "Evening Lounge Wrap-Up", category: "Outdoor", src: "/images/events/fiesta-video-9.mp4", poster: "/images/bar-display-2.jpg" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<"all" | "photos" | "videos" | "Bar" | "Pool" | "Outdoor" | "Recreation">("all");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const filteredItems = mediaItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "photos") return item.type === "photo";
    if (filter === "videos") return item.type === "video";
    return item.category === filter;
  });

  return (
    <div className="min-h-screen flex flex-col text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
          {/* Breadcrumb Back Link */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Home
            </Link>
          </div>

          {/* Minimalist Header */}
          <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-8">
            <Badge variant="outline" className="px-3 py-1 text-xs text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <Camera className="mr-1.5 h-3.5 w-3.5 text-slate-600 dark:text-slate-400" /> Full Media Gallery
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-sans">
              Venue Photos & Videos
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
              Explore our full collection of high-definition venue photos and video highlights of Seagate Lounge & Bar.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-4">
            <Button
              size="sm"
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="text-xs font-semibold"
            >
              All Media ({mediaItems.length})
            </Button>
            <Button
              size="sm"
              variant={filter === "photos" ? "default" : "outline"}
              onClick={() => setFilter("photos")}
              className="text-xs font-semibold"
            >
              <ImageIcon className="mr-1.5 h-3.5 w-3.5" /> Photos (15)
            </Button>
            <Button
              size="sm"
              variant={filter === "videos" ? "default" : "outline"}
              onClick={() => setFilter("videos")}
              className="text-xs font-semibold"
            >
              <Film className="mr-1.5 h-3.5 w-3.5" /> Videos (11)
            </Button>
            <Button
              size="sm"
              variant={filter === "Bar" ? "default" : "outline"}
              onClick={() => setFilter("Bar")}
              className="text-xs font-semibold"
            >
              Bar & Spirits
            </Button>
            <Button
              size="sm"
              variant={filter === "Pool" ? "default" : "outline"}
              onClick={() => setFilter("Pool")}
              className="text-xs font-semibold"
            >
              Poolside
            </Button>
            <Button
              size="sm"
              variant={filter === "Outdoor" ? "default" : "outline"}
              onClick={() => setFilter("Outdoor")}
              className="text-xs font-semibold"
            >
              Outdoor Gazebos
            </Button>
            <Button
              size="sm"
              variant={filter === "Recreation" ? "default" : "outline"}
              onClick={() => setFilter("Recreation")}
              className="text-xs font-semibold"
            >
              Snooker & Games
            </Button>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              if (item.type === "video") {
                return (
                  <div key={item.id} className="space-y-1.5">
                    <MediaPlayer
                      src={item.src}
                      poster={item.poster}
                      title={item.title}
                      className="h-64 w-full"
                    />
                    <div className="flex items-center justify-between text-xs px-1">
                      <span className="font-bold text-slate-900 dark:text-slate-100">{item.title}</span>
                      <Badge variant="secondary" className="text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-0">
                        Video
                      </Badge>
                    </div>
                  </div>
                );
              }

              const isLoaded = loadedImages[item.id];
              return (
                <Card
                  key={item.id}
                  className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden group relative h-64 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  {!isLoaded && <Skeleton className="absolute inset-0 z-10" />}
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onLoad={() => handleImageLoad(item.id)}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent z-10" />

                  <div className="absolute top-3 left-3 z-20">
                    <Badge variant="default" className="text-[10px] bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 font-bold border border-slate-200/80 dark:border-slate-800/80 shadow-sm backdrop-blur-xs">
                      {item.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white z-20">
                    <h3 className="text-sm font-bold text-white group-hover:text-slate-100 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
