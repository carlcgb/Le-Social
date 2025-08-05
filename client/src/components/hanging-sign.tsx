import { motion } from "framer-motion";
import { Link } from "wouter";

export default function HangingSign() {
  return (
    <div className="fixed top-16 right-6 z-30">
      <Link href="/du-rire">
        <motion.div
          initial={{ rotate: -3, y: -20, opacity: 0 }}
          animate={{ 
            rotate: [-3, -5, -1, -3], 
            y: [0, 3, -1, 0],
            opacity: 1
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            opacity: { duration: 1, delay: 2 }
          }}
          whileHover={{ scale: 1.02, rotate: -2 }}
          className="cursor-pointer group"
        >
          {/* Hanging cables */}
          <div className="flex justify-center mb-3 space-x-2">
            <div className="w-0.5 h-6 bg-gradient-to-b from-gray-600 to-gray-800"></div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-gray-800"></div>
            <div className="w-0.5 h-6 bg-gradient-to-b from-gray-600 to-gray-800"></div>
          </div>
          
          <div className="relative space-y-4">
            {/* Top "OPEN" style neon sign */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff',
                  '0 0 15px #00e6e6, 0 0 30px #00e6e6, 0 0 45px #00e6e6',
                  '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-black border-4 border-cyan-400 rounded-lg px-6 py-3 relative overflow-hidden"
            >
              {/* Neon glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-400/10 rounded-lg"></div>
              
              <div className="relative text-center">
                <div className="text-cyan-300 font-bold text-lg tracking-wider" style={{ textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff' }}>
                  LIVE SHOW
                </div>
              </div>
              
              {/* Neon tube effect lines */}
              <div className="absolute top-1 left-1 right-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-60"></div>
              <div className="absolute bottom-1 left-1 right-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-60"></div>
            </motion.div>

            {/* Main red marquee sign */}
            <div className="relative">
              {/* Main red panel */}
              <div className="bg-gradient-to-br from-red-800 via-red-900 to-red-950 border-4 border-red-700 rounded-lg px-8 py-6 relative overflow-hidden shadow-2xl min-w-[220px]">
                {/* Background texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-700/20 to-transparent"></div>
                
                {/* Text content */}
                <div className="relative text-center space-y-1">
                  <div className="text-yellow-200 font-bold text-lg leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                    La Soirée du Rire
                  </div>
                  <div className="text-yellow-100 font-extrabold text-xl leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
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

            {/* Bottom cyan neon arrow */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 15px #00ffff, 0 0 30px #00ffff',
                  '0 0 10px #00e6e6, 0 0 20px #00e6e6',
                  '0 0 15px #00ffff, 0 0 30px #00ffff'
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Arrow shape using CSS borders */}
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[30px] border-l-cyan-400 border-b-[15px] border-b-transparent"
                     style={{ filter: 'drop-shadow(0 0 8px #00ffff)' }}>
                </div>
                {/* Inner glow */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-cyan-300 border-b-[12px] border-b-transparent transform translate-x-1.5 translate-y-0.5"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}