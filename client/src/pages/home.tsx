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
  const [snapScrollActive, setSnapScrollActive] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      // If scroll is locked, prevent scrolling
      if (scrollLocked) {
        window.scrollTo(0, 0);
        return;
      }
      
      const scrollY = window.scrollY;
      const threshold = 100;
      const snapThreshold = 50; // Start snap effect earlier
      
      // If we're in snap scroll mode and user tries to scroll past snap threshold
      if (snapScrollActive && scrollY > snapThreshold && !isTransitioning) {
        setIsTransitioning(true);
        
        // Smooth scroll to exactly the threshold point
        window.scrollTo({
          top: threshold,
          behavior: 'smooth'
        });
        
        // Start the spotlight fade transition immediately
        setScrolled(true);
        
        // After transition completes, disable snap scrolling and allow free scroll
        timeoutId = setTimeout(() => {
          setSnapScrollActive(false);
          setIsTransitioning(false);
          // Allow continuing to scroll if user was scrolling down
          if (scrollY > threshold * 1.5) {
            window.scrollTo({
              top: scrollY,
              behavior: 'smooth'
            });
          }
        }, 1200); // Match the longest transition duration
        
        return;
      }
      
      // Normal scroll behavior when snap is disabled
      if (!snapScrollActive) {
        setScrolled(scrollY > threshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [snapScrollActive, isTransitioning, scrollLocked]);

  // Unlock scroll when text and buttons should be revealed
  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    
    // Timer to unlock scroll after logo animation completes
    const unlockTimer = setTimeout(() => {
      if (checkMobile()) {
        // On mobile, unlock immediately
        setScrollLocked(false);
      } else {
        // On desktop, unlock after initial animation
        setScrollLocked(false);
      }
    }, 2000); // Wait for initial animations to complete
    
    return () => clearTimeout(unlockTimer);
  }, []);

  // Prevent scrolling by setting body overflow when locked
  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [scrollLocked]);

  return (
    <div 
      className="min-h-screen bg-black text-cream font-inter"
      style={{
        scrollBehavior: snapScrollActive ? 'smooth' : 'auto'
      }}
    >
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
      
      {/* Scroll Hint - shows when spotlight is active */}
      {snapScrollActive && !isTransitioning && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="flex flex-col items-center gap-2 text-gold-500/70">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-sm font-light"
            >
              Faites défiler pour révéler
            </motion.div>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="w-6 h-10 border-2 border-gold-500/40 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [2, 6, 2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="w-1 h-2 bg-gold-500/60 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
      
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
