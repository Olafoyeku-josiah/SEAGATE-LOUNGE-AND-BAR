"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MediaPlayer } from "@/components/media-player";
import { Calendar, Film, Image as ImageIcon, Sparkles, Trophy, Video, ChevronRight, Gift } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  date: string;
  badge: string;
  coverImage: string;
  summary: string;
  videoSrc?: string;
  photos: string[];
  highlights: string[];
}

const pastEvents: EventItem[] = [
  {
    id: "back-to-school-2026",
    title: "Back to School Fiesta 2026",
    date: "Saturday 5th September 2026",
    badge: "Community Event",
    coverImage: "/images/outdoor-courtyard.jpg",
    summary: "An exciting day of knowledge competitions, fun games, and prize giveaways for Nursery, Primary, and JSS 1-3 students.",
    videoSrc: "/WhatsApp Video 2026-08-27 at 04.42.39.mp4",
    photos: ["/images/outdoor-courtyard.jpg", "/images/snooker-games.jpg", "/images/poolside-2.jpg"],
    highlights: [
      "Prizes awarded across Nursery, Primary & JSS 1-3 categories",
      "Interactive games, educational quizzes, and creative play",
      "Complimentary refreshments and snacks for all attendees",
      "Over 150+ students and parents joined the celebration",
    ],
  },
  {
    id: "poolside-summer-jam",
    title: "Poolside Summer Jam & Nightlife",
    date: "August 2026",
    badge: "Poolside Party",
    coverImage: "/images/poolside-1.jpg",
    summary: "Chill vibes, poolside drinks, live DJ beats, and gazebo night relaxation under the open Akure sky.",
    videoSrc: "/WhatsApp Video 2026-08-27 at 04.42.36.mp4",
    photos: ["/images/poolside-1.jpg", "/images/rooftop-gazebo.jpg", "/images/outdoor-seating.jpg"],
    highlights: [
      "Crystal-clear swimming pool & poolside loungers",
      "Live DJ sets playing top Afrobeats and party tracks",
      "Signature ice-cold cocktails and grilled delicacies",
      "Gazebo nightlife setup with mood lighting",
    ],
  },
  {
    id: "exotic-spirits-vip-night",
    title: "Exotic Spirits & VIP Lounge Night",
    date: "July 2026",
    badge: "VIP Nightlife",
    coverImage: "/images/bar-display-2.jpg",
    summary: "Exclusive champagne tasting, fine cognac collection, and executive lounge hospitality.",
    photos: ["/images/bar-display-2.jpg", "/images/bar-display.jpg", "/images/rooftop-gazebo.jpg"],
    highlights: [
      "Showcase of vintage spirits, champagnes, and fine wines",
      "Hand-crafted signature house cocktails",
      "Air-conditioned executive interior dining hall",
      "Private VIP seating and personalized service",
    ],
  },
];

export function EventsGallery() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [activeTab, setActiveTab] = useState<"recap" | "video" | "photos">("recap");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="fiesta" className="py-20 relative bg-slate-100/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="px-3.5 py-1 text-xs text-slate-800 border-slate-300 bg-white shadow-sm">
            <Calendar className="mr-1.5 h-3.5 w-3.5 text-slate-600" /> Past Events & Highlights
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Unforgettable <span className="text-slate-700">Moments & Recaps</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore photos, video highlights, and memories from our past celebrations and community events at Seagate Lounge & Bar.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastEvents.map((event) => {
            const isLoaded = loadedImages[event.id];
            return (
              <Card
                key={event.id}
                onClick={() => {
                  setSelectedEvent(event);
                  setActiveTab("recap");
                }}
                className="border border-slate-200 bg-white overflow-hidden group cursor-pointer hover:shadow-xl hover:border-slate-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    {!isLoaded && <Skeleton className="absolute inset-0 z-10" />}
                    <Image
                      src={event.coverImage}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      onLoad={() => handleImageLoad(event.id)}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />

                    <div className="absolute top-3 left-3 z-20">
                      <Badge variant="default" className="text-[10px] bg-white text-slate-900 font-bold border-0 shadow-md">
                        {event.badge}
                      </Badge>
                    </div>

                    {event.videoSrc && (
                      <div className="absolute top-3 right-3 z-20">
                        <Badge variant="secondary" className="text-[10px] bg-slate-900/90 text-white font-bold border-0 shadow-md flex items-center gap-1">
                          <Film className="h-3 w-3 text-amber-400" /> Video
                        </Badge>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 text-white z-20">
                      <p className="text-[11px] font-semibold text-slate-300">{event.date}</p>
                      <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-5 space-y-3">
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {event.summary}
                    </p>
                  </CardContent>
                </div>

                <div className="px-5 pb-5 pt-0 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-slate-950">
                  <span className="flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 text-slate-600" /> View Photos & Video
                  </span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Event Detail Modal Viewer */}
      {selectedEvent && (
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="sm:max-w-2xl bg-white border-slate-200 text-slate-900 max-h-[90vh] overflow-y-auto">
            <DialogHeader className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="text-[10px] bg-slate-900 text-white">
                  {selectedEvent.badge}
                </Badge>
                <span className="text-xs font-semibold text-slate-500">{selectedEvent.date}</span>
              </div>
              <DialogTitle className="text-2xl font-black text-slate-900 font-serif">
                {selectedEvent.title}
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-600">
                {selectedEvent.summary}
              </DialogDescription>
            </DialogHeader>

            {/* Modal Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <Button
                size="sm"
                variant={activeTab === "recap" ? "default" : "ghost"}
                onClick={() => setActiveTab("recap")}
                className="text-xs"
              >
                <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Event Highlights
              </Button>

              {selectedEvent.videoSrc && (
                <Button
                  size="sm"
                  variant={activeTab === "video" ? "default" : "ghost"}
                  onClick={() => setActiveTab("video")}
                  className="text-xs"
                >
                  <Video className="mr-1.5 h-3.5 w-3.5" /> Video Recap
                </Button>
              )}

              <Button
                size="sm"
                variant={activeTab === "photos" ? "default" : "ghost"}
                onClick={() => setActiveTab("photos")}
                className="text-xs"
              >
                <ImageIcon className="mr-1.5 h-3.5 w-3.5" /> Event Gallery ({selectedEvent.photos.length})
              </Button>
            </div>

            {/* Tab 1: Event Highlights */}
            {activeTab === "recap" && (
              <div className="space-y-4 py-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Trophy className="h-4 w-4 text-slate-700" /> Event Summary & Highlights
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {selectedEvent.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800 shrink-0 mt-1.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedEvent.videoSrc && (
                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-900 mb-2">Watch Video Highlight</h4>
                    <MediaPlayer
                      src={selectedEvent.videoSrc}
                      poster={selectedEvent.coverImage}
                      title={selectedEvent.title}
                      className="h-56 w-full"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Video Player */}
            {activeTab === "video" && selectedEvent.videoSrc && (
              <div className="py-2 space-y-2">
                <MediaPlayer
                  src={selectedEvent.videoSrc}
                  poster={selectedEvent.coverImage}
                  title={selectedEvent.title}
                  className="h-72 w-full"
                />
              </div>
            )}

            {/* Tab 3: Photo Gallery */}
            {activeTab === "photos" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                {selectedEvent.photos.map((photo, i) => (
                  <div key={i} className="relative h-44 rounded-xl overflow-hidden border border-slate-200">
                    <Image
                      src={photo}
                      alt={`${selectedEvent.title} photo ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <Button variant="outline" size="sm" onClick={() => setSelectedEvent(null)}>
                Close Viewer
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
