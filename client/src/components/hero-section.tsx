import { motion } from "framer-motion";
import { Sparkles, Theater, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import BrickWall from "./brick-wall";

import logoPath from "@assets/483588457_1211262284332726_4514405450123834326_n_1754398185701.png";

export default function HeroSection() {
  const [spotlightActive, setSpotlightActive] = useState(false);
  const [spotlightIntensity, setSpotlightIntensity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [logoPositioned, setLogoPositioned] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    // Sequence d'animation: logo viewport -> contenu -> spotlight
    const animationSequence = setTimeout(() => {
      setShowContent(true);
      setLogoPositioned(true);
      if (!isMobile) {
        setSpotlightActive(true);
        setSpotlightIntensity(1);
      }
    }, 2000); // 2 secondes après le chargement

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Désactive le spotlight sur mobile
      if (isMobile) {
        if (spotlightActive) {
          setSpotlightActive(false);
          setSpotlightIntensity(0);
        }
        return;
      }
      
      // Spotlight only at the very top - disappears after 20% scroll
      if (scrollY <= windowHeight * 0.2) {
        // Keep spotlight full until 20% scroll
        if (!spotlightActive || spotlightIntensity !== 1) {
          setSpotlightActive(true);
          setSpotlightIntensity(1);
        }
      } else {
        // After 20%, turn off completely and don't come back
        if (spotlightActive) {
          setSpotlightActive(false);
          setSpotlightIntensity(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      clearTimeout(animationSequence);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [isMobile]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with brick wall texture */}
      <div className="fixed inset-0 w-full h-screen bg-gradient-to-br from-burgundy-900 via-black to-burgundy-800 z-0">
        <BrickWall />
      </div>

      {/* Spotlight effect overlay - hidden on mobile */}
      {!isMobile && (
        <>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: spotlightActive ? spotlightIntensity : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-30 pointer-events-none"
            style={{
              background: spotlightActive && spotlightIntensity > 0
                ? `radial-gradient(circle at center, 
                    transparent 0%, 
                    transparent 15%, 
                    rgba(0, 0, 0, ${0.3 * spotlightIntensity}) 25%, 
                    rgba(0, 0, 0, ${0.5 * spotlightIntensity}) 40%, 
                    rgba(0, 0, 0, ${0.7 * spotlightIntensity}) 60%, 
                    rgba(0, 0, 0, ${0.85 * spotlightIntensity}) 80%, 
                    rgba(0, 0, 0, ${0.95 * spotlightIntensity}) 100%)`
                : 'transparent',
            }}
          />

          {/* Bright spotlight center */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ 
              opacity: spotlightActive ? spotlightIntensity : 0,
              scale: spotlightActive ? 1 : 0.8 
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-20 pointer-events-none"
            style={{
              background: spotlightActive && spotlightIntensity > 0
                ? `radial-gradient(ellipse 800px 1000px at center, 
                    rgba(255, 255, 255, ${0.15 * spotlightIntensity}) 0%, 
                    rgba(255, 255, 255, ${0.08 * spotlightIntensity}) 15%, 
                    rgba(255, 255, 255, ${0.04 * spotlightIntensity}) 30%, 
                    rgba(255, 255, 255, ${0.02 * spotlightIntensity}) 50%, 
                    transparent 70%)`
                : 'transparent',
            }}
          />
        </>
      )}
      
      <div className="relative z-40 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 md:mb-8 relative">
            {/* Static logo without animations */}
            <div className="relative z-10">
              <img
                src={logoPath}
                alt="Social - Par Attelier Archibald"
                className="h-80 sm:h-96 md:h-[32rem] lg:h-[40rem] xl:h-[48rem] 2xl:h-[56rem] 3xl:h-[64rem] w-auto mx-auto max-w-[95vw]"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            
            {/* Cercle de lumière derrière le logo - hidden on mobile */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 1, scale: 0.8 }}
                animate={{ 
                  opacity: spotlightActive ? 0.6 * spotlightIntensity : 0,
                  scale: spotlightActive ? 1.2 : 0.8
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
              >
                <div 
                  className="w-[28rem] h-[28rem] md:w-[40rem] md:h-[40rem] lg:w-[48rem] lg:h-[48rem] xl:w-[56rem] xl:h-[56rem] rounded-full bg-gradient-radial blur-sm" 
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,${0.12 * spotlightIntensity}) 0%, rgba(255,255,255,${0.06 * spotlightIntensity}) 40%, rgba(255,255,255,${0.03 * spotlightIntensity}) 70%, transparent 100%)`
                  }}
                />
              </motion.div>
            )}
          </div>

{showContent && (
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-responsive-lg mb-6 md:mb-8 font-light leading-relaxed px-2 sm:px-0"
              style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
            >
              Un lieu d'exception, pensé pour s'accorder à chaque occasion, chaque
              style, chaque histoire.
            </motion.p>
          )}

{showContent && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center text-[#ffffff] px-4 sm:px-0"
            >
            <motion.button
              onClick={() => scrollToSection("#spectacles")}
              className="bg-burgundy-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center transition-all duration-150 btn-text-responsive"
              style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)', boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'}}
              whileHover={{ 
                scale: isMobile ? 1 : 1.05, 
                backgroundColor: '#7c2d12'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Theater className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Découvrir nos spectacles
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#evenements")}
              className="border-2 border-gold-500 text-gold-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center transition-all duration-150 btn-text-responsive"
              style={{opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)', boxShadow: '0 8px 25px rgba(251, 191, 36, 0.3)'}}
              whileHover={{ 
                scale: isMobile ? 1 : 1.05, 
                borderColor: '#fbbf24', 
                backgroundColor: 'rgba(251, 191, 36, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Événements privés
            </motion.button>
          </motion.div>
        )}
        </motion.div>
      </div>
    </section>
  );
}
