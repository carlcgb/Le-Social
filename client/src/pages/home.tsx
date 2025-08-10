import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
import MobileMenu from "@/components/mobile-menu";
import HangingSign from "@/components/hanging-sign";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-cream font-inter">
      {/* Dark Overlay - shows initially, fades on scroll */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 0.7 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 bg-black pointer-events-none z-40"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(20,10,15,0.7) 30%, rgba(30,15,20,0.8) 70%, rgba(0,0,0,0.9) 100%)'
        }}
      />
      
      <Navigation 
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} 
      />
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      <HangingSign />
      
      <main>
        <HeroSection />
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
