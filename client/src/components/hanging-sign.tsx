import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import logoAnimated from "@assets/Untitled-design-unscreen_1754780840848.gif";

export default function HangingSign() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-20 left-4 sm:top-24 sm:left-6 md:top-28 md:left-8 z-[100]">
      <Link href="/du-rire">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isScrolled ? 0.7 : 1,
            opacity: 1,
            y: [0, -5, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            opacity: { duration: 0.5 },
            scale: { duration: 0.3, ease: "easeOut" },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          whileHover={{ 
            scale: isScrolled ? 0.8 : 1.1, 
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer group"
        >
          {/* Floating animated logo button */}
          <div className="relative">
            <img
              src={logoAnimated}
              alt="La Soirée du Rire de Granby - Logo néon animé"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain 
                         drop-shadow-2xl hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]
                         transition-all duration-300"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-white/10 rounded-full blur-lg -z-10 group-hover:bg-white/20 transition-all duration-300"></div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}