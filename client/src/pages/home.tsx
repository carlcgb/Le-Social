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
      {/* Main Spotlight Overlay - creates dramatic focus on center logo area */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 0.9 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className="fixed inset-0 pointer-events-none z-35"
        style={{
          background: `radial-gradient(ellipse 400px 500px at 50% 45vh, 
            rgba(0,0,0,0) 0%, 
            rgba(0,0,0,0.1) 25%, 
            rgba(0,0,0,0.5) 45%, 
            rgba(0,0,0,0.8) 65%, 
            rgba(0,0,0,0.92) 80%, 
            rgba(0,0,0,0.96) 100%)`
        }}
      />
      
      {/* Golden glow enhancement for logo area */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 0.4 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed inset-0 pointer-events-none z-34"
        style={{
          background: `radial-gradient(ellipse 600px 700px at 50% 45vh, 
            rgba(192,132,47,0.12) 0%, 
            rgba(192,132,47,0.06) 35%, 
            rgba(0,0,0,0) 55%)`
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
