import { motion } from "framer-motion";
import { Sparkles, Theater, Users } from "lucide-react";
import BrickWall from "./brick-wall";

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
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with brick wall texture - same as du-rire */}
      <div className="fixed inset-0 w-full h-screen bg-gradient-to-br from-burgundy-900 via-black to-burgundy-800 z-0">
        <BrickWall />
      </div>
      {/* Curtain Effect */}
      {showCurtain && (
        <>
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.5, delay: 0.75, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-burgundy-500 z-[9999] transform-origin-left"
          />
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.5, delay: 0.75, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-1/2 h-full bg-burgundy-500 z-[9999] transform-origin-right"
          />
        </>
      )}
      <div className="relative z-50 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="mb-12 relative">
            <img
              src={logoPath}
              alt="Social - Par Attelier Archibald"
              className="h-64 md:h-80 lg:h-96 xl:h-[28rem] w-auto mx-auto filter brightness-0 invert relative z-10"
            />
          </div>

          <p 
            className="text-xl md:text-2xl mb-8 font-light leading-relaxed"
            style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
          >
            Un lieu d'exception, pensé pour s'accorder à chaque occasion, chaque
            style, chaque histoire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-[#ffffff]">
            <button
              onClick={() => scrollToSection("#spectacles")}
              className="bg-burgundy-500 px-8 py-4 rounded-full font-medium flex items-center justify-center"
              style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
            >
              <Theater className="w-5 h-5 mr-2" />
              Découvrir nos spectacles
            </button>

            <button
              onClick={() => scrollToSection("#evenements")}
              className="border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-full font-medium flex items-center justify-center"
              style={{opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
            >
              <Users className="w-5 h-5 mr-2" />
              Événements privés
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
