import { motion } from "framer-motion";
import { Link } from "wouter";

export default function HangingSign() {
  return (
    <div className="fixed top-20 right-8 z-30">
      <Link href="/du-rire">
        <motion.div
          initial={{ rotate: -8, y: -20, opacity: 0 }}
          animate={{ 
            rotate: [-8, -12, -4, -8], 
            y: [0, 5, -2, 0],
            opacity: 1
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            opacity: { duration: 1, delay: 2 }
          }}
          whileHover={{ scale: 1.05, rotate: -5 }}
          className="cursor-pointer group"
        >
          {/* Hanging chain */}
          <div className="flex justify-center mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 shadow-lg rounded"></div>
          </div>
          
          {/* Vintage Arrow Sign */}
          <div className="relative">
            {/* Main arrow shape */}
            <div className="relative bg-gradient-to-br from-red-800 via-red-900 to-burgundy-900 shadow-2xl">
              {/* Arrow body */}
              <div className="flex items-center">
                {/* Left rectangle part */}
                <div className="bg-gradient-to-br from-red-800 via-red-900 to-burgundy-900 px-8 py-6 rounded-l-lg border-4 border-red-700 min-w-[180px]">
                  <div className="text-center">
                    <div className="text-white font-bold text-sm leading-tight mb-1 drop-shadow-lg">
                      La Soirée
                    </div>
                    <div className="text-white font-extrabold text-lg leading-tight mb-1 drop-shadow-lg">
                      Du Rire
                    </div>
                    <div className="text-white font-bold text-sm leading-tight drop-shadow-lg">
                      de Granby
                    </div>
                  </div>
                </div>
                
                {/* Arrow point */}
                <div className="relative">
                  <div className="w-0 h-0 border-t-[40px] border-t-transparent border-l-[40px] border-l-red-800 border-b-[40px] border-b-transparent drop-shadow-xl"></div>
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-[36px] border-t-transparent border-l-[36px] border-l-red-900 border-b-[36px] border-b-transparent transform translate-x-1 translate-y-1"></div>
                </div>
              </div>
              
              {/* Light bulbs around the border */}
              <div className="absolute -inset-2">
                {/* Top bulbs */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <motion.div
                    key={`top-${i}`}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      left: `${15 + i * 12}%`,
                      top: '-6px',
                    }}
                    animate={{
                      backgroundColor: ['#FFD700', '#FFA500', '#FFD700'],
                      boxShadow: [
                        '0 0 8px #FFD700, 0 0 16px #FFD700',
                        '0 0 12px #FFA500, 0 0 24px #FFA500',
                        '0 0 8px #FFD700, 0 0 16px #FFD700'
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
                
                {/* Bottom bulbs */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <motion.div
                    key={`bottom-${i}`}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      left: `${15 + i * 12}%`,
                      bottom: '-6px',
                    }}
                    animate={{
                      backgroundColor: ['#FFD700', '#FFA500', '#FFD700'],
                      boxShadow: [
                        '0 0 8px #FFD700, 0 0 16px #FFD700',
                        '0 0 12px #FFA500, 0 0 24px #FFA500',
                        '0 0 8px #FFD700, 0 0 16px #FFD700'
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1 + 0.5
                    }}
                  />
                ))}
                
                {/* Left side bulbs */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`left-${i}`}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      left: '-6px',
                      top: `${25 + i * 20}%`,
                    }}
                    animate={{
                      backgroundColor: ['#FFD700', '#FFA500', '#FFD700'],
                      boxShadow: [
                        '0 0 8px #FFD700, 0 0 16px #FFD700',
                        '0 0 12px #FFA500, 0 0 24px #FFA500',
                        '0 0 8px #FFD700, 0 0 16px #FFD700'
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.15
                    }}
                  />
                ))}
                
                {/* Arrow point bulbs */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`arrow-${i}`}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      right: `${-15 + i * 8}px`,
                      top: `${35 + i * 10}%`,
                    }}
                    animate={{
                      backgroundColor: ['#FFD700', '#FFA500', '#FFD700'],
                      boxShadow: [
                        '0 0 8px #FFD700, 0 0 16px #FFD700',
                        '0 0 12px #FFA500, 0 0 24px #FFA500',
                        '0 0 8px #FFD700, 0 0 16px #FFD700'
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2 + 0.3
                    }}
                  />
                ))}
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-l-lg pointer-events-none"></div>
            </div>
            
            {/* Shadow */}
            <div className="absolute inset-0 bg-black/30 transform translate-x-2 translate-y-2 rounded-l-lg -z-10"></div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}