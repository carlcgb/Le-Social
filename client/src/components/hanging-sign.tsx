import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import logoAnimated from "@assets/Untitled-design-unscreen_1754780840848.gif";

export default function HangingSign() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
      
      // Show hanging sign with delay after navbar appears
      if (scrolled && !showSign) {
        setTimeout(() => {
          setShowSign(true);
        }, 300); // 300ms delay after navbar appears
      } else if (!scrolled) {
        setShowSign(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showSign]);

  const handleClick = () => {
    setIsFlipping(true);
    // Navigate after flip animation completes
    setTimeout(() => {
      setLocation('/du-rire');
    }, 600); // 600ms to allow flip to complete
  };

  return (
    <div className="fixed top-20 left-4 sm:top-24 sm:left-6 md:top-28 md:left-8 z-[100]">
      <motion.div
        initial={{ 
          y: -200, 
          opacity: 0, 
          scale: 0.8,
          rotate: -10 
        }}
        animate={showSign ? { 
          y: [0, -5, 0],
          opacity: 1,
          scale: 1,
          rotate: 0,
          rotateY: isFlipping ? 360 : 0
        } : {
          y: -200,
          opacity: 0,
          scale: 0.8,
          rotate: -10
        }}
        transition={showSign ? { 
          y: { 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94], // Falling ease curve
            times: [0, 0.7, 1],
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          },
          opacity: { duration: 0.3, ease: "easeOut" },
          scale: { duration: 0.6, ease: "easeOut" },
          rotate: { duration: 0.6, ease: "easeOut" },
          rotateY: { duration: 0.6, ease: "easeInOut", repeat: 0 }
        } : {
          duration: 0.1
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="cursor-pointer group"
      >
        {/* Floating animated logo button */}
        <div className="relative">
          <img
            src={logoAnimated}
            alt="La Soirée du Rire de Granby - Logo néon animé"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain 
                       drop-shadow-2xl hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]
                       transition-all duration-300"
          />
          {/* Shadow underneath */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-16 h-4 sm:w-20 sm:h-5 md:w-24 md:h-6 lg:w-28 lg:h-7 xl:w-32 xl:h-8 
                          bg-black/30 rounded-full blur-md opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-white/10 rounded-full blur-lg -z-10 group-hover:bg-white/20 transition-all duration-300"></div>
        </div>
      </motion.div>
    </div>
  );
}