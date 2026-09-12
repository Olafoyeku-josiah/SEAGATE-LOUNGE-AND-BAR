import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://seagatelounge.com'),
  title: {
    default: "Seagate Lounge & Bar | Premier Hangout in Akure",
    template: "%s | Seagate Lounge & Bar"
  },
  description: "Your premier hangout spot and event venue in Akure, Ondo State. Experience good vibes, cold drinks, great music, and beautiful memories.",
  keywords: ["Seagate Lounge", "Akure", "Ondo State", "Bar", "Club", "Lounge", "Event Venue", "Nightlife", "Hangout spot", "Party"],
  openGraph: {
    title: "Seagate Lounge & Bar — Akure",
    description: "Your premier hangout spot and event venue in Akure. Good vibes, cold drinks, great times!",
    url: "https://seagatelounge.com",
    siteName: "Seagate Lounge & Bar",
    images: [
      {
        url: "/images/bar-display.jpg",
        width: 1200,
        height: 630,
        alt: "Seagate Lounge & Bar Interior",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seagate Lounge & Bar | Akure",
    description: "Your premier hangout spot and event venue in Akure. Good vibes, cold drinks, great times!",
    images: ["/images/bar-display.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "name": "Seagate Lounge & Bar",
  "image": "https://seagatelounge.com/images/bar-display.jpg",
  "url": "https://seagatelounge.com",
  "telephone": "+2347047784064", // Based on previous contact form phone number placeholder
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Adebowale, Ondo Road",
    "addressLocality": "Akure",
    "addressRegion": "Ondo State",
    "addressCountry": "NG"
  },
  "description": "Your premier hangout spot and event venue in Akure. Good vibes, cold drinks, great times!",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "23:59"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
