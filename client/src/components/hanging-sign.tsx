import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import logoAnimated from "@assets/Logo-LOOP-Videobolt-unscreen_1754505801632.gif";
import backboardImage from "@assets/Untitled design_1754780053930.png";

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
    <div className="fixed top-12 left-2 md:top-16 md:left-6 z-[100]">
      <Link href="/du-rire">
        <motion.div
          initial={{ rotate: -3, y: -20, opacity: 0 }}
          animate={{ 
            rotate: [-3, -5, -1, -3], 
            y: [0, 3, -1, 0],
            opacity: 1,
            scale: isScrolled ? 0.5 : 0.75
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            opacity: { duration: 1, delay: 2 },
            scale: { duration: 0.3, ease: "easeOut" }
          }}
          whileHover={{ scale: 1, rotate: -2 }}
          className="cursor-pointer group"
        >
          {/* Hanging cables */}
          <div className="flex justify-center mb-3 space-x-2">
            <div className="w-0.5 h-6 bg-gradient-to-b from-gray-600 to-gray-800"></div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-gray-800"></div>
            <div className="w-0.5 h-6 bg-gradient-to-b from-gray-600 to-gray-800"></div>
          </div>
          
          {/* Circular backboard with animated logo */}
          <div className="relative">
            {/* Circular backboard background */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 shadow-2xl">
              <img 
                src={backboardImage} 
                alt="Circular marquee frame"
                className="w-full h-full object-contain"
              />
              
              {/* Animated logo overlay - positioned in the black center area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.img
                  src={logoAnimated}
                  alt="La Soirée du Rire - Logo animé"
                  className="w-30 h-30 md:w-50 md:h-50 object-contain"
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}