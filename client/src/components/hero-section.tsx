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
      
      // Fast fade out: spotlight stays full until 60% scroll, then quickly fades
      if (scrollY <= windowHeight * 0.6) {
        // Keep spotlight full until 60% scroll
        if (!spotlightActive || spotlightIntensity !== 1) {
          setSpotlightActive(true);
          setSpotlightIntensity(1);
        }
      } else if (scrollY <= windowHeight * 0.75) {
        // Between 60% and 75%, quickly fade out (shorter zone = faster fade)
        const fadeProgress = (scrollY - windowHeight * 0.6) / (windowHeight * 0.15);
        const newIntensity = Math.max(0, 1 - fadeProgress);
        setSpotlightActive(true);
        setSpotlightIntensity(newIntensity);
      } else {
        // After 75%, turn off completely
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
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 z-30 pointer-events-none"
            style={{
              background: spotlightActive && spotlightIntensity > 0
                ? `radial-gradient(circle at center, 
                    transparent 0%, 
                    transparent 20%, 
                    rgba(0, 0, 0, ${0.4 * spotlightIntensity}) 35%, 
                    rgba(0, 0, 0, ${0.7 * spotlightIntensity}) 50%, 
                    rgba(0, 0, 0, ${0.9 * spotlightIntensity}) 70%, 
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
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 z-20 pointer-events-none"
            style={{
              background: spotlightActive && spotlightIntensity > 0
                ? `radial-gradient(ellipse 600px 800px at center, 
                    rgba(255, 255, 255, ${0.12 * spotlightIntensity}) 0%, 
                    rgba(255, 255, 255, ${0.06 * spotlightIntensity}) 20%, 
                    rgba(255, 255, 255, ${0.02 * spotlightIntensity}) 40%, 
                    transparent 60%)`
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
          <motion.div 
            ref={logoRef} 
            className={logoPositioned ? "mb-6 md:mb-8 relative" : "fixed inset-0 flex items-center justify-center z-50"}
            animate={{
              position: logoPositioned ? "relative" : "fixed"
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Logo avec effet de lumière supplémentaire */}
            <motion.div
              animate={{ 
                filter: "brightness(0) invert(1)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.img
                src={logoPath}
                alt="Social - Par Attelier Archibald"
                animate={{
                  height: logoPositioned ? "auto" : "100vh"
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className={logoPositioned 
                  ? "h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[36rem] 2xl:h-[42rem] w-auto mx-auto" 
                  : "w-auto max-w-[90vw] max-h-[90vh] object-contain mx-auto"
                }
                style={!logoPositioned ? { height: "100vh", maxHeight: "90vh" } : {}}
              />
            </motion.div>
            
            {/* Cercle de lumière derrière le logo - hidden on mobile */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 1, scale: 0.8 }}
                animate={{ 
                  opacity: spotlightActive ? 0.6 * spotlightIntensity : 0,
                  scale: spotlightActive ? 1.2 : 0.8
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
              >
                <div 
                  className="w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-gradient-radial blur-sm" 
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,${0.1 * spotlightIntensity}) 0%, rgba(255,255,255,${0.05 * spotlightIntensity}) 50%, transparent 100%)`
                  }}
                />
              </motion.div>
            )}
          </motion.div>

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
