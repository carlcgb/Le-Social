import { motion } from "framer-motion";
import { Theater, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import BrickWall from "./brick-wall";

import logoPath from "@assets/483588457_1211262284332726_4514405450123834326_n_1754398185701.png";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
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
      
      <div className="relative z-40 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 md:mb-8 relative">
            {/* Static logo without animations */}
            <div className="relative z-10 block">
              <img
                src={logoPath}
                alt="Social - Par Attelier Archibald"
                className="h-80 sm:h-96 md:h-[32rem] lg:h-[40rem] xl:h-[48rem] 2xl:h-[56rem] 3xl:h-[64rem] w-auto mx-auto max-w-[95vw]"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>

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
        </motion.div>
      </div>
    </section>
  );
}
