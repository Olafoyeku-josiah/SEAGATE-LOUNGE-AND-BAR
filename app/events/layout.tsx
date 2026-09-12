import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Archives",
  description: "Browse video recaps, photo collections, and event highlights from past parties, fiestas, and gatherings at Seagate Lounge & Bar.",
  openGraph: {
    title: "Past Events Gallery | Seagate Lounge & Bar",
    description: "Browse video recaps, photo collections, and event highlights from Seagate Lounge.",
    images: ["/images/events/fiesta-photo-1.jpg"],
  }
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
