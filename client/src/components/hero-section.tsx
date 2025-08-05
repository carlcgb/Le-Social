import { motion } from "framer-motion";
import { Sparkles, Theater, Users } from "lucide-react";

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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1594736797933-d0c6f3de6bec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
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
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-8"
          >
            <Sparkles className="w-16 h-16 text-gold-500 mx-auto" />
          </motion.div>
          
          <h1 className="text-7xl md:text-8xl font-playfair font-bold text-cream mb-6 leading-tight">
            <span className="block text-gold-500">Social</span>
            <span className="text-2xl md:text-3xl font-inter font-light tracking-wider">
              Par Attelier Archibald
            </span>
          </h1>
          
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
