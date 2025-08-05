import { useEffect, useState } from "react";
import {
  Navigation,
  HeroSection,
  ServicesSummary,
  SpectaclesSection,
  EvenementsSection,
  CorporatifSection,
  GallerySection,
  TestimonialsSection,
  ContactSection,
  Footer,
  LoadingCurtain,
  MobileMenu
} from "@/components";
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
