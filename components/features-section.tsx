"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Cpu,
  Globe2,
  Lock,
  BarChart3,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise Grade Security",
    description:
      "Bank-level end-to-end encryption with real-time threat monitoring and automated backup protocols designed for absolute compliance.",
    badge: "Core Feature",
    accent: "from-blue-500/20 to-indigo-500/20 text-blue-400",
  },
  {
    icon: Cpu,
    title: "High Performance Computing",
    description:
      "Engineered on ultra-low latency infrastructure to power complex computational workloads, heavy data streams, and instant scaling.",
    badge: "Velocity",
    accent: "from-purple-500/20 to-pink-500/20 text-purple-400",
  },
  {
    icon: Globe2,
    title: "Global Distribution Network",
    description:
      "Seamless edge caching and global deployment capabilities ensuring sub-50ms response times for users anywhere in the world.",
    badge: "Global Edge",
    accent: "from-cyan-500/20 to-teal-500/20 text-cyan-400",
  },
  {
    icon: Lock,
    title: "Access Control & Governance",
    description:
      "Granular role-based permissions, multi-factor authentication, and audit log generation to keep complete administrative oversight.",
    badge: "Governance",
    accent: "from-amber-500/20 to-orange-500/20 text-amber-400",
  },
  {
    icon: BarChart3,
    title: "Advanced Business Analytics",
    description:
      "Comprehensive telemetry dashboards giving real-time clarity into operations, user engagement, and revenue performance indicators.",
    badge: "Analytics",
    accent: "from-emerald-500/20 to-green-500/20 text-emerald-400",
  },
  {
    icon: Sparkles,
    title: "Bespoke Lounge Integration",
    description:
      "Dedicated consulting and custom development tailored to match your specific brand design, workflows, and operational requirements.",
    badge: "Customization",
    accent: "from-indigo-500/20 to-blue-500/20 text-indigo-400",
  },
];

export function FeaturesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="px-3 py-1 text-xs text-blue-400 border-blue-500/30">
            What We Deliver
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tailored Capabilities Built for <span className="gradient-primary-heading">Modern Growth</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Discover how Seagate Lounge elevates business potential through cutting-edge technology, enterprise reliability, and stunning design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="glass-card hover:border-slate-700/90 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  <Badge variant="secondary" className="text-[11px]">
                    {feature.badge}
                  </Badge>
                </div>
                <CardHeader className="space-y-4 pt-6">
                  <div
                    className={`h-12 w-12 rounded-xl bg-linear-to-br ${feature.accent} flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
