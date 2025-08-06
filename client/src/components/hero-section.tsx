import { motion } from "framer-motion";
import { Sparkles, Theater, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import BrickWall from "./brick-wall";

import logoPath from "@assets/483588457_1211262284332726_4514405450123834326_n_1754398185701.png";

export default function HeroSection() {
  const [spotlightActive, setSpotlightActive] = useState(true);
  const [spotlightIntensity, setSpotlightIntensity] = useState(1);
  const logoRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calcul progressif de l'intensité basé sur le scroll
      if (scrollY <= windowHeight * 0.1) {
        // Dans les premiers 10% de scroll, garde l'effet complet
        setSpotlightIntensity(1);
        setSpotlightActive(true);
      } else if (scrollY <= windowHeight * 0.8) {
        // Entre 10% et 80%, dissipe progressivement
        const progress = (scrollY - windowHeight * 0.1) / (windowHeight * 0.7);
        setSpotlightIntensity(1 - progress);
        setSpotlightActive(true);
      } else {
        // Au-delà de 80%, éteint complètement
        setSpotlightIntensity(0);
        setSpotlightActive(false);
      }
    };

    // Intersection Observer pour détecter quand le logo rentre dans la vue
    const observerOptions = {
      threshold: [0, 0.1, 0.5, 1],
      rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === logoRef.current) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            // Le logo est visible, réactive le spotlight
            setSpotlightActive(true);
            setSpotlightIntensity(Math.min(entry.intersectionRatio * 1.5, 1));
          }
        }
      });
    }, observerOptions);

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

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

      {/* Spotlight effect overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: spotlightActive ? spotlightIntensity : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
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
        transition={{ duration: 0.3, ease: "easeOut" }}
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
      
      <motion.div 
        className="relative z-40 text-center max-w-5xl mx-auto px-4"
        animate={{
          filter: spotlightActive && spotlightIntensity > 0 
            ? `brightness(${1 + 0.15 * spotlightIntensity}) contrast(${1 + 0.1 * spotlightIntensity})`
            : 'brightness(1) contrast(1)'
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div ref={logoRef} className="mb-8 relative">
            {/* Logo avec effet de lumière supplémentaire */}
            <motion.div
              animate={{ 
                filter: spotlightActive && spotlightIntensity > 0
                  ? `brightness(0) invert(1) drop-shadow(0 0 ${60 * spotlightIntensity}px rgba(255, 255, 255, ${0.4 * spotlightIntensity})) drop-shadow(0 0 ${100 * spotlightIntensity}px rgba(255, 255, 255, ${0.2 * spotlightIntensity}))`
                  : "brightness(0) invert(1)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10"
            >
              <img
                src={logoPath}
                alt="Social - Par Attelier Archibald"
                className="h-80 md:h-96 lg:h-[32rem] xl:h-[36rem] w-auto mx-auto"
              />
            </motion.div>
            
            {/* Cercle de lumière derrière le logo */}
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
                className="w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-gradient-radial blur-sm" 
                style={{
                  background: `radial-gradient(circle, rgba(255,255,255,${0.1 * spotlightIntensity}) 0%, rgba(255,255,255,${0.05 * spotlightIntensity}) 50%, transparent 100%)`
                }}
              />
            </motion.div>
          </div>

          <motion.p 
            className="text-xl md:text-2xl mb-8 font-light leading-relaxed"
            style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
            animate={{
              textShadow: spotlightActive && spotlightIntensity > 0
                ? `2px 2px 4px rgba(0,0,0,0.8), 0 0 ${20 * spotlightIntensity}px rgba(255,255,255,${0.1 * spotlightIntensity})`
                : '2px 2px 4px rgba(0,0,0,0.8)'
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Un lieu d'exception, pensé pour s'accorder à chaque occasion, chaque
            style, chaque histoire.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-[#ffffff]">
            <motion.button
              onClick={() => scrollToSection("#spectacles")}
              className="bg-burgundy-500 px-8 py-4 rounded-full font-medium flex items-center justify-center transition-all duration-150"
              style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: '#7c2d12',
                boxShadow: spotlightActive 
                  ? '0 8px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.1)'
                  : '0 8px 25px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Theater className="w-5 h-5 mr-2" />
              Découvrir nos spectacles
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#evenements")}
              className="border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-full font-medium flex items-center justify-center transition-all duration-150"
              style={{opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              whileHover={{ 
                scale: 1.05, 
                borderColor: '#fbbf24', 
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                boxShadow: spotlightActive
                  ? '0 8px 25px rgba(251, 191, 36, 0.3), 0 0 15px rgba(251, 191, 36, 0.2)'
                  : '0 8px 25px rgba(251, 191, 36, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Users className="w-5 h-5 mr-2" />
              Événements privés
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
