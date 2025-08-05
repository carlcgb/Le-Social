import { motion } from "framer-motion";
import { Sparkles, Theater, Users } from "lucide-react";
import BrickWall from "./brick-wall";
import Chandelier from "./chandelier";
import logoPath from "@assets/483588457_1211262284332726_4514405450123834326_n_1754398185701.png";

interface HeroSectionProps {
  showCurtain: boolean;
}

export default function HeroSection({ showCurtain }: HeroSectionProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with brick wall texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900 via-black to-burgundy-800">
        <BrickWall />
      </div>
      
      {/* Additional atmospheric lighting */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-burgundy-900/20 to-black/60" />
      
      {/* Chandeliers */}
      <Chandelier className="top-10 left-20 hidden lg:block" size="large" />
      <Chandelier className="top-16 right-24 hidden lg:block" size="medium" />
      <Chandelier className="top-32 left-1/2 transform -translate-x-1/2 hidden md:block" size="small" />
      
      {/* Curtain Effect */}
      {showCurtain && (
        <>
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-burgundy-500 z-10 transform-origin-left"
          />
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-1/2 h-full bg-burgundy-500 z-10 transform-origin-right"
          />
        </>
      )}
      
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          
          
          <div className="mb-12">
            <img 
              src={logoPath} 
              alt="Social - Par Attelier Archibald" 
              className="h-48 md:h-56 lg:h-64 w-auto mx-auto filter brightness-0 invert"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-cream/90 mb-8 font-light leading-relaxed">
            Un lieu d'exception, pensé pour s'accorder à chaque occasion, chaque style, chaque histoire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#spectacles")}
              className="bg-burgundy-500 text-cream px-8 py-4 rounded-full hover:bg-burgundy-600 transition-all duration-300 font-medium flex items-center justify-center"
            >
              <Theater className="w-5 h-5 mr-2" />
              Découvrir nos spectacles
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#evenements")}
              className="border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-full hover:bg-gold-500 hover:text-black transition-all duration-300 font-medium flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Événements privés
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
