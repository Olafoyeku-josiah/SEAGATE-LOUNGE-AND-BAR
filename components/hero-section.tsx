"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactDialog } from "@/components/contact-dialog";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  Server,
  Database,
  Layers,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <Badge variant="gradient" className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Zap className="mr-1.5 h-3.5 w-3.5 text-blue-400" /> Next-Gen Enterprise Ecosystem
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Empowering Businesses with{" "}
              <span className="gradient-primary-heading">Intelligence & Scale</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Welcome to <strong>Seagate Lounge</strong> — your premier hub for high-performance enterprise solutions, secure infrastructure management, and tailored digital strategy to accelerate your business presence.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <ContactDialog>
                <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactDialog>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  const el = document.getElementById("showcase");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Live Showcase
              </Button>
            </div>

            {/* Key stats */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-white">99.99%</p>
                <p className="text-xs text-slate-400 font-medium">Uptime Guarantee</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-blue-400">500+</p>
                <p className="text-xs text-slate-400 font-medium">Global Partners</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-purple-400">24/7</p>
                <p className="text-xs text-slate-400 font-medium">Dedicated Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <Card className="glass-card border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-60 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-6 relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                      <Server className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Lounge Core Architecture</p>
                      <p className="text-xs text-slate-400">Active High Performance Cluster</p>
                    </div>
                  </div>
                  <Badge variant="glow">Live Status</Badge>
                </div>

                {/* Dashboard Stats Preview */}
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Database className="h-4 w-4 text-cyan-400" />
                      <span className="text-xs text-slate-300 font-medium">Storage Velocity</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <TrendingUp className="h-3.5 w-3.5" /> +42% Peak Speed
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Layers className="h-4 w-4 text-indigo-400" />
                      <span className="text-xs text-slate-300 font-medium">Modular Services</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-300">12 Active Modules</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Award className="h-4 w-4 text-amber-400" />
                      <span className="text-xs text-slate-300 font-medium">Security Compliance</span>
                    </div>
                    <span className="text-xs font-semibold text-blue-400">ISO/IEC 27001</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full w-[85%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                    <span>Capacity Allocated</span>
                    <span className="font-semibold text-slate-200">85% Optimal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
