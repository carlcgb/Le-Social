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
  const [scrollLocked, setScrollLocked] = useState(false); // Allow scroll immediately
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [spotlightActive, setSpotlightActive] = useState(true);
  const [landingPagePinned, setLandingPagePinned] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setScrolled(scrollY > 100);
      
      // Track spotlight state and pinning based on scroll position
      // Keep landing page pinned until spotlight is completely gone (70% of viewport height)
      if (scrollY <= windowHeight * 0.7) {
        setSpotlightActive(true);
        setLandingPagePinned(true);
      } else {
        setSpotlightActive(false);
        setLandingPagePinned(false);
      }
      
      // Hide scroll indicator when user starts scrolling
      if (scrollY > 50 && showScrollIndicator) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call immediately to set initial state
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showScrollIndicator]);

  // Handle component reveal completion
  const handleComponentsReveal = () => {
    setComponentsRevealed(true);
    // Show scroll indicator after components are revealed
    setTimeout(() => {
      setShowScrollIndicator(true);
    }, 500);
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
      
      <main className="relative">
        {/* Hero section that takes full viewport until spotlight fades */}
        <section className={`hero-container ${landingPagePinned ? 'fixed top-0 left-0 w-full' : 'relative'}`} style={{ zIndex: landingPagePinned ? 10 : 1 }}>
          <HeroSection onComponentsReveal={handleComponentsReveal} />
        </section>
        
        {/* Spacer to create scroll distance for spotlight effect when pinned */}
        {landingPagePinned && <div className="spotlight-scroll-spacer" />}
        
        {/* All content including footer - only show when hero is unpinned */}
        <div className={`content-sections ${landingPagePinned ? 'hidden' : 'block'}`}>
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
          <Footer />
        </div>
      </main>
    </div>
  );
}
