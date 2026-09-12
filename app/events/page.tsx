"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
import { Calendar, Film, Image as ImageIcon, ArrowLeft, ChevronRight } from "lucide-react";

const videosList = [
  { id: 1, title: "Fiesta Overview & Welcome", src: "/images/events/fiesta-video-1.mp4", poster: "/images/events/fiesta-photo-1.jpg" },
  { id: 2, title: "Student Competitions & Quizzes", src: "/images/events/fiesta-video-2.mp4", poster: "/images/events/fiesta-photo-2.jpg" },
  { id: 3, title: "Games & Creative Play", src: "/images/events/fiesta-video-3.mp4", poster: "/images/events/fiesta-photo-3.jpg" },
  { id: 4, title: "Prize Presentations & Winners", src: "/images/events/fiesta-video-4.mp4", poster: "/images/events/fiesta-photo-4.jpg" },
  { id: 5, title: "Parents & Guests Gathering", src: "/images/events/fiesta-video-5.mp4", poster: "/images/events/fiesta-photo-5.jpg" },
  { id: 6, title: "Fun Activities & Dances", src: "/images/events/fiesta-video-6.mp4", poster: "/images/events/fiesta-photo-6.jpg" },
  { id: 7, title: "Refreshments & Snacks Time", src: "/images/events/fiesta-video-7.mp4", poster: "/images/events/fiesta-photo-7.jpg" },
  { id: 8, title: "Celebration Highlights", src: "/images/events/fiesta-video-8.mp4", poster: "/images/events/fiesta-photo-1.jpg" },
  { id: 9, title: "Closing Ceremony & Wrap-Up", src: "/images/events/fiesta-video-9.mp4", poster: "/images/events/fiesta-photo-2.jpg" },
];

const photosList = [
  "/images/events/fiesta-photo-1.jpg",
  "/images/events/fiesta-photo-2.jpg",
  "/images/events/fiesta-photo-3.jpg",
  "/images/events/fiesta-photo-4.jpg",
  "/images/events/fiesta-photo-5.jpg",
  "/images/events/fiesta-photo-6.jpg",
  "/images/events/fiesta-photo-7.jpg",
];

export default function EventsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"videos" | "photos" | "notes">("videos");
  const [coverLoaded, setCoverLoaded] = useState(false);

  return (
    <div className="min-h-screen flex flex-col text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-10">
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
              <Calendar className="mr-1.5 h-3.5 w-3.5 text-slate-600 dark:text-slate-400" /> Event Archives
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-sans">
              Past Events Gallery
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
              Browse video recaps, photo collections, and event highlights from Seagate Lounge & Bar.
            </p>
          </div>

          {/* Single Event Card: Back to School Fiesta */}
          <div className="max-w-xl">
            <Card
              onClick={() => {
                setModalOpen(true);
                setActiveTab("videos");
              }}
              className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden group cursor-pointer hover:shadow-lg hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden">
                  {!coverLoaded && <Skeleton className="absolute inset-0 z-10" />}
                  <Image
                    src="/images/events/fiesta-photo-1.jpg"
                    alt="Back to School Fiesta 2026"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onLoad={() => setCoverLoaded(true)}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />

                  <div className="absolute top-3 left-3 z-20">
                    <Badge variant="default" className="text-[10px] bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 font-bold border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs">
                      Community Event
                    </Badge>
                  </div>

                  <div className="absolute top-3 right-3 z-20">
                    <Badge variant="secondary" className="text-[10px] bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 font-bold border border-slate-200/80 dark:border-slate-800/80 shadow-md flex items-center gap-1 backdrop-blur-xs">
                      <Film className="h-3 w-3 text-slate-700 dark:text-slate-300" /> 9 Videos
                    </Badge>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white z-20 space-y-0.5">
                    <p className="text-[11px] font-medium text-slate-300">Saturday 5th September 2026</p>
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                      Back to School Fiesta 2026
                    </h3>
                  </div>
                </div>

                <CardContent className="p-5 space-y-2">
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    An exciting day of learning competitions, games, creative challenges, and prize distribution for Nursery, Primary, and JSS 1-3 students.
                  </p>
                </CardContent>
              </div>

              <div className="px-5 pb-5 pt-0 flex items-center justify-between text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-950 dark:group-hover:text-white border-t border-slate-100 dark:border-slate-800 pt-3 mt-2">
                <span>Explore 9 Videos & Photos</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Multi-Media Modal Viewer */}
      {modalOpen && (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="sm:max-w-3xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 max-h-[90vh] overflow-y-auto">
            <DialogHeader className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="text-[10px] bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold">
                  Community Event
                </Badge>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Saturday 5th September 2026</span>
              </div>
              <DialogTitle className="text-2xl font-black text-slate-900 dark:text-white font-serif">
                Back to School Fiesta 2026 — Media Recap
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-600 dark:text-slate-400">
                Browse through all 9 video clips and photo galleries from the event.
              </DialogDescription>
            </DialogHeader>

            {/* Minimal Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Button
                size="sm"
                variant={activeTab === "videos" ? "default" : "ghost"}
                onClick={() => setActiveTab("videos")}
                className="text-xs font-semibold"
              >
                <Film className="mr-1.5 h-3.5 w-3.5" /> Video Recaps (9)
              </Button>

              <Button
                size="sm"
                variant={activeTab === "photos" ? "default" : "ghost"}
                onClick={() => setActiveTab("photos")}
                className="text-xs font-semibold"
              >
                <ImageIcon className="mr-1.5 h-3.5 w-3.5" /> Photo Gallery (7)
              </Button>

              <Button
                size="sm"
                variant={activeTab === "notes" ? "default" : "ghost"}
                onClick={() => setActiveTab("notes")}
                className="text-xs font-semibold"
              >
                Event Notes
              </Button>
            </div>

            {/* Tab 1: Video Grid (All 9 Videos) */}
            {activeTab === "videos" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                {videosList.map((item) => (
                  <div key={item.id} className="space-y-1.5">
                    <MediaPlayer
                      src={item.src}
                      poster={item.poster}
                      title={item.title}
                      className="h-44 w-full"
                    />
                    <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 px-1">
                      {item.id}. {item.title}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Photo Grid (All 7 Photos) */}
            {activeTab === "photos" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-2">
                {photosList.map((photo, i) => (
                  <div key={i} className="relative h-40 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <Image
                      src={photo}
                      alt={`Back to School Fiesta photo ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Event Notes */}
            {activeTab === "notes" && (
              <div className="py-2 space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Event Summary</h4>
                  <p className="leading-relaxed">
                    The Back to School Fiesta was hosted at Seagate Lounge & Bar, Adebowale, Ondo Road, Akure on Saturday 5th September 2026. Gate fee was ₦500 per head.
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    <li>• Competitions held across Nursery, Primary, and JSS 1-3 categories.</li>
                    <li>• Quiz challenges, educational games, and creative play sessions.</li>
                    <li>• Gift prizes and giveaways presented to category winners.</li>
                    <li>• Food, cold drinks, and snacks provided for all children and parents.</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="pt-3 flex justify-end border-t border-slate-100 dark:border-slate-800">
              <Button variant="outline" size="sm" onClick={() => setModalOpen(false)}>
                Close Viewer
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  );
}
