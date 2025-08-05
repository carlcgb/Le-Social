import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";

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
          
          {/* Main red marquee sign */}
          <div className="relative">
            {/* Main red panel */}
            <div className="bg-gradient-to-br from-red-800 via-red-900 to-red-950 border-2 md:border-4 border-red-700 rounded-lg px-4 py-3 md:px-8 md:py-6 relative overflow-hidden shadow-2xl min-w-[160px] md:min-w-[220px]">
              {/* Background texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-700/20 to-transparent"></div>
              
              {/* Text content */}
              <div className="relative text-center space-y-1">
                <div className="text-yellow-200 font-bold text-sm md:text-lg leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                  La Soirée du Rire
                </div>
                <div className="text-yellow-100 font-extrabold text-base md:text-xl leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                  de GRANBY
                </div>
              </div>

              {/* Marquee bulbs around the border */}
              <div className="absolute -inset-1">
                {/* Top row of bulbs */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <motion.div
                    key={`top-${i}`}
                    className="absolute w-3 h-3 rounded-full border border-yellow-600"
                    style={{
                      left: `${8 + i * 10.5}%`,
                      top: '-6px',
                    }}
                    animate={{
                      backgroundColor: ['#FFD700', '#FFA500', '#FF6B35', '#FFD700'],
                      boxShadow: [
                        '0 0 6px #FFD700, 0 0 12px #FFD700',
                        '0 0 8px #FFA500, 0 0 16px #FFA500',
                        '0 0 6px #FF6B35, 0 0 12px #FF6B35',
                        '0 0 6px #FFD700, 0 0 12px #FFD700'
                      ]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
                
                {/* Bottom row of bulbs */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <motion.div
                    key={`bottom-${i}`}
                    className="absolute w-3 h-3 rounded-full border border-yellow-600"
                    style={{
                      left: `${8 + i * 10.5}%`,
                      bottom: '-6px',
                    }}
                    animate={{
                      backgroundColor: ['#FF6B35', '#FFD700', '#FFA500', '#FF6B35'],
                      boxShadow: [
                        '0 0 6px #FF6B35, 0 0 12px #FF6B35',
                        '0 0 8px #FFD700, 0 0 16px #FFD700',
                        '0 0 6px #FFA500, 0 0 12px #FFA500',
                        '0 0 6px #FF6B35, 0 0 12px #FF6B35'
                      ]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: i * 0.1 + 0.3
                    }}
                  />
                ))}
                
                {/* Left side bulbs */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={`left-${i}`}
                    className="absolute w-3 h-3 rounded-full border border-yellow-600"
                    style={{
                      left: '-6px',
                      top: `${20 + i * 20}%`,
                    }}
                    animate={{
                      backgroundColor: ['#FFA500', '#FF6B35', '#FFD700', '#FFA500'],
                      boxShadow: [
                        '0 0 6px #FFA500, 0 0 12px #FFA500',
                        '0 0 8px #FF6B35, 0 0 16px #FF6B35',
                        '0 0 6px #FFD700, 0 0 12px #FFD700',
                        '0 0 6px #FFA500, 0 0 12px #FFA500'
                      ]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: i * 0.15 + 0.6
                    }}
                  />
                ))}
                
                {/* Right side bulbs */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={`right-${i}`}
                    className="absolute w-3 h-3 rounded-full border border-yellow-600"
                    style={{
                      right: '-6px',
                      top: `${20 + i * 20}%`,
                    }}
                    animate={{
                      backgroundColor: ['#FFD700', '#FFA500', '#FF6B35', '#FFD700'],
                      boxShadow: [
                        '0 0 6px #FFD700, 0 0 12px #FFD700',
                        '0 0 8px #FFA500, 0 0 16px #FFA500',
                        '0 0 6px #FF6B35, 0 0 12px #FF6B35',
                        '0 0 6px #FFD700, 0 0 12px #FFD700'
                      ]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: i * 0.15 + 0.9
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}