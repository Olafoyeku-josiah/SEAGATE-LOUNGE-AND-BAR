"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";
import {
  CheckCircle2,
  Sliders,
  Layers,
  Sparkles,
  Zap,
  ArrowRight,
  Shield,
  FileText,
} from "lucide-react";

export function ShowcaseTabs() {
  return (
    <section id="showcase" className="py-20 bg-slate-950/60 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <Badge variant="glow" className="px-3 py-1 text-xs">
            Interactive Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Explore <span className="gradient-primary-heading">Seagate Lounge</span> Solutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Toggle between our business tiers and customized showcase models to see how we help put your enterprise out there.
          </p>
        </div>

        <Tabs defaultValue="enterprise" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="enterprise" className="text-xs sm:text-sm">
                Enterprise
              </TabsTrigger>
              <TabsTrigger value="business" className="text-xs sm:text-sm">
                Growth Business
              </TabsTrigger>
              <TabsTrigger value="custom" className="text-xs sm:text-sm">
                Custom Lounge
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Enterprise Tab */}
          <TabsContent value="enterprise" className="animate-in fade-in-50 duration-300">
            <Card className="glass-card border-slate-800 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-5">
                  <Badge variant="gradient">Flagship Package</Badge>
                  <h3 className="text-2xl font-bold text-white">
                    Full Scale Enterprise Digital Presence
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Designed for established brands and organizations seeking maximum market impact, high-throughput backend infrastructure, and 24/7 dedicated account management.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Dedicated Cloud Architecture",
                      "Custom Brand Styling & Layouts",
                      "Sub-second Load Speeds",
                      "Full Analytics Suite",
                      "Priority 24/7 SLA Support",
                      "Automated Compliance Checks",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                        <span className="text-xs font-medium text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <ContactDialog>
                      <Button variant="gradient" size="default">
                        Request Enterprise Demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </ContactDialog>
                  </div>
                </div>

                <div className="md:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-semibold text-slate-300">Performance Index</span>
                    <Badge variant="outline" className="text-emerald-400 border-emerald-500/30">
                      Tier 1 Active
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Security Score</span>
                      <span className="font-bold text-white">99/100</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">SEO Readiness</span>
                      <span className="font-bold text-blue-400">A+ Optimized</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Scalability Rating</span>
                      <span className="font-bold text-purple-400">Unlimited</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Growth Business Tab */}
          <TabsContent value="business" className="animate-in fade-in-50 duration-300">
            <Card className="glass-card border-slate-800 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-5">
                  <Badge variant="glow">Accelerated Launch</Badge>
                  <h3 className="text-2xl font-bold text-white">
                    Growth Business Visibility Suite
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Ideal for expanding businesses wanting a high-converting digital storefront with interactive customer touchpoints, lead generation tools, and sleek presentation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "High-Converting Landing Pages",
                      "Interactive Inquiry Forms",
                      "Mobile First Responsive Design",
                      "Integrated Social Proof Cards",
                      "Fast Deployment Timeline",
                      "Custom Domain Setup",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                        <span className="text-xs font-medium text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <ContactDialog>
                      <Button variant="default" size="default">
                        Launch Your Business <Zap className="ml-2 h-4 w-4 text-yellow-400" />
                      </Button>
                    </ContactDialog>
                  </div>
                </div>

                <div className="md:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4 text-center">
                  <div className="h-12 w-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/30">
                    <Sliders className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-semibold text-white">Turnkey Solution</h4>
                  <p className="text-xs text-slate-400">
                    Get your brand online in days with pre-built Shadcn UI blocks fine-tuned for high engagement.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Custom Lounge Tab */}
          <TabsContent value="custom" className="animate-in fade-in-50 duration-300">
            <Card className="glass-card border-slate-800 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-5">
                  <Badge variant="secondary">Bespoke Design</Badge>
                  <h3 className="text-2xl font-bold text-white">
                    Tailored Lounge Experience & Modifications
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Have a specific design vision, custom layout tweaks, or specialized features in mind? We customize every aspect of the site to match your exact specifications.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Pixel-Perfect Design Adjustments",
                      "Custom Image & Asset Embedding",
                      "Flexible Feature Blocks",
                      "Interactive Modals & Workflows",
                      "Tailored Color Themes",
                      "Continuous Iteration Support",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                        <span className="text-xs font-medium text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <ContactDialog>
                      <Button variant="outline" size="default">
                        Discuss Custom Tweaks <Sparkles className="ml-2 h-4 w-4 text-purple-400" />
                      </Button>
                    </ContactDialog>
                  </div>
                </div>

                <div className="md:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <Layers className="h-5 w-5 text-indigo-400" />
                    <span className="text-sm font-semibold text-white">Modular Tweaks Ready</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Once you provide design references or images, we will seamlessly weave them into the layout for a cohesive brand narrative.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
