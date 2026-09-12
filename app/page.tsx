import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AmenitiesSection } from "@/components/amenities-section";
import { VenueSection } from "@/components/venue-section";
import { GallerySection } from "@/components/gallery-section";
import { DeliverySection } from "@/components/delivery-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AmenitiesSection />
        <VenueSection />
        <GallerySection />
        <DeliverySection />
      </main>
      <Footer />
    </div>
  );
}
