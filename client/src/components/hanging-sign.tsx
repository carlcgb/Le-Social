import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import logoAnimated from "@assets/Untitled-design-unscreen_1754780840848.gif";

export default function HangingSign() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Get the position of the hanging sign (fixed at top-20/24/28 left-4/6/8)
      const hangingSignY = window.innerWidth >= 1024 ? 112 : // lg: top-28 (7rem = 112px)
                          window.innerWidth >= 640 ? 96 :   // sm: top-24 (6rem = 96px)
                          80; // top-20 (5rem = 80px)
      
      // Check which section the hanging sign is overlapping
      const sections = ['spectacles', 'evenements', 'corporatif'];
      let currentActiveSection = null;
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if hanging sign is vertically aligned with this section
          if (rect.top <= hangingSignY + 50 && rect.bottom >= hangingSignY - 50) {
            currentActiveSection = sectionId;
            break;
          }
        }
      }
      
      setActiveSection(currentActiveSection);
    };

    // Initial call to set active section on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply black shadow effects to sections
  useEffect(() => {
    const sections = ['spectacles', 'evenements', 'corporatif'];
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        // Find the main content div that contains bg-burgundy-900/30 class or similar backdrop
        const sectionDiv = section.querySelector('[class*="bg-burgundy-900"], [class*="backdrop-blur"]');
        if (sectionDiv) {
          if (activeSection === sectionId) {
            // Add black shadow effect when hanging sign is over this section
            sectionDiv.classList.add('shadow-hanging-sign-black');
          } else {
            // Remove shadow effect
            sectionDiv.classList.remove('shadow-hanging-sign-black');
          }
        }
      }
    });
  }, [activeSection]);

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
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
          y: [0, -5, 0],
          rotateY: isFlipping ? 360 : 0
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          opacity: { duration: 0.5 },
          scale: { duration: 0.3, ease: "easeOut" },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 0.6, ease: "easeInOut", repeat: 0 }
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