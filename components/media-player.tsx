"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface MediaPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

export function MediaPlayer({ src, poster, title, className = "" }: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-200/80 shadow-md ${className}`}>
      {!isPlaying ? (
        <div
          className="relative h-full w-full group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {poster && (
            <>
              {!loaded && <Skeleton className="absolute inset-0 z-10" />}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={poster}
                alt={title || "Video thumbnail"}
                onLoad={() => setLoaded(true)}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </>
          )}
          <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Play className="h-8 w-8 fill-slate-900 ml-1" />
            </div>
          </div>
          {title && (
            <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 px-3 py-1.5 rounded-xl text-white text-xs font-bold backdrop-blur-md">
              ▶ {title}
            </div>
          )}
        </div>
      ) : (
        <video
          src={src}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          Your browser does not support HTML5 video playback.
        </video>
      )}
    </div>
  );
}
