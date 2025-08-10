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
  const [componentsRevealed, setComponentsRevealed] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
      
      // Hide scroll indicator when user starts scrolling
      if (scrollY > 50 && showScrollIndicator) {
        setShowScrollIndicator(false);
      }
    };

    // Lock scroll initially and unlock after components are revealed
    if (scrollLocked) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove('scroll-locked');
    };
  }, [scrollLocked, showScrollIndicator]);

  // Handle component reveal completion
  const handleComponentsReveal = () => {
    setComponentsRevealed(true);
    // Add a small delay for smooth transition
    setTimeout(() => {
      setScrollLocked(false);
      // Show scroll indicator after another delay
      setTimeout(() => {
        setShowScrollIndicator(true);
      }, 500);
    }, 200);
  };

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
      
      {/* Scroll indicator - appears when scrolling is enabled */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/60 text-center"
          >
            <div className="text-xs mb-2 font-light">Faire défiler</div>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [2, 14, 2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-white/40 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
      
      <main>
        {/* Hero section with snap-top behavior */}
        <div className="snap-top">
          <HeroSection onComponentsReveal={handleComponentsReveal} />
        </div>
        
        {/* Rest of sections with normal snap behavior */}
        <div className="snap-start">
          <ServicesSummary />
        </div>
        <div className="snap-start">
          <SpectaclesSection />
        </div>
        <div className="snap-start">
          <EvenementsSection />
        </div>
        <div className="snap-start">
          <CorporatifSection />
        </div>
        <div className="snap-start">
          <GallerySection />
        </div>
        <div className="snap-start">
          <TestimonialsSection />
        </div>
        <div className="snap-start">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
