import Link from "next/link";
import { ShieldCheck, Globe, Share2, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5">
                <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-blue-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Seagate <span className="gradient-primary-heading">Lounge</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering business growth through modern web engineering, reliable cloud architecture, and sleek design experiences.
            </p>

            <div className="flex items-center gap-4 text-slate-400 pt-2">
              <a href="#" className="hover:text-white transition-colors" title="Global Network">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" title="Share">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" title="Community">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Enterprise Security
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Global Network Edge
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Business Analytics
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Custom Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <span>contact@seagatelounge.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>+1 (800) 555-SEAGATE</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Tech District, Innovation Hub</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-slate-800/80" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Seagate Lounge. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Security Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
