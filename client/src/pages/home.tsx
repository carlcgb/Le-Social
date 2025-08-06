import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSummary from "@/components/services-summary";
import SpectaclesSection from "@/components/spectacles-section";
import EvenementsSection from "@/components/evenements-section";
import CorporatifSection from "@/components/corporatif-section";
import GallerySection from "@/components/gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import LoadingCurtain from "@/components/loading-curtain";
import MobileMenu from "@/components/mobile-menu";
import HangingSign from "@/components/hanging-sign";

export default function Home() {
  const [showCurtain, setShowCurtain] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCurtain(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-cream font-inter">
      {showCurtain && <LoadingCurtain />}
      <Navigation 
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} 
      />
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      <HangingSign />
      
      <main>
        <HeroSection showCurtain={!showCurtain} />
        <ServicesSummary />
        <SpectaclesSection />
        <EvenementsSection />
        <CorporatifSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
