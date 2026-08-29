"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactDialog({ children }: { children?: React.ReactNode }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <Dialog onOpenChange={(open) => !open && setSubmitted(false)}>
      <DialogTrigger asChild>
        {children || <Button variant="gradient">Get in Touch</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-heading">
            Connect with Seagate Lounge
          </DialogTitle>
          <DialogDescription>
            Reach out to our team to discover how our tailored solutions can elevate your business.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center gap-3 animate-in fade-in zoom-in-95">
            <div className="h-14 w-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="text-lg font-semibold text-white">Message Sent Successfully!</h4>
            <p className="text-sm text-slate-400 max-w-xs">
              Thank you for contacting us. One of our specialists will reach out to you shortly.
            </p>
            <Button
              className="mt-4"
              variant="outline"
              onClick={() => setSubmitted(false)}
            >
              Send Another Inquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-2">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Your Full Name</label>
              <Input placeholder="e.g. Sarah Jenkins" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Business Email</label>
              <Input type="email" placeholder="sarah@company.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Company / Organization</label>
              <Input placeholder="e.g. Apex Global Solutions" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">How can we help?</label>
              <textarea
                className="flex min-h-[90px] w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all resize-none"
                placeholder="Tell us about your business goals or inquiries..."
                required
              />
            </div>
            <Button
              type="submit"
              variant="gradient"
              className="w-full h-11 text-base font-semibold"
              disabled={loading}
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Submit Inquiry <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
