import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Explore our full collection of high-definition venue photos and video highlights of Seagate Lounge & Bar's pools, gazebos, and VIP lounges.",
  openGraph: {
    title: "Media Gallery | Seagate Lounge & Bar",
    description: "Explore our full collection of high-definition venue photos and video highlights.",
    images: ["/images/rooftop-gazebo.jpg"],
  }
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
