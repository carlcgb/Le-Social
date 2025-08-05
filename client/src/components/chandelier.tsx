import { motion } from "framer-motion";

interface ChandelierProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

export default function Chandelier({ className = "", size = "medium" }: ChandelierProps) {
  const sizeClasses = {
    small: "w-16 h-20",
    medium: "w-24 h-28",
    large: "w-32 h-36"
  };

  const chainLength = {
    small: 15,
    medium: 20,
    large: 25
  };

  return (
    <div className={`absolute ${className}`}>
      {/* Chain */}
      <motion.div
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        {/* Chain links */}
        <div className="w-0.5 bg-gold-500" style={{ height: chainLength[size] }} />
        
        {/* Chandelier body */}
        <motion.div
          animate={{ 
            rotate: [-1, 1, -1],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
          className={`${sizeClasses[size]} relative`}
        >
          {/* Main chandelier structure */}
          <svg
            viewBox="0 0 100 120"
            className="w-full h-full drop-shadow-lg"
          >
            {/* Top crown */}
            <circle cx="50" cy="15" r="8" fill="url(#goldGradient)" />
            
            {/* Main body */}
            <ellipse cx="50" cy="45" rx="35" ry="25" fill="url(#goldGradient)" opacity="0.9" />
            
            {/* Crystal drops */}
            <motion.g
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ellipse cx="25" cy="65" rx="3" ry="8" fill="url(#crystalGradient)" />
              <ellipse cx="50" cy="70" rx="3" ry="10" fill="url(#crystalGradient)" />
              <ellipse cx="75" cy="65" rx="3" ry="8" fill="url(#crystalGradient)" />
              <ellipse cx="35" cy="75" rx="2" ry="6" fill="url(#crystalGradient)" />
              <ellipse cx="65" cy="75" rx="2" ry="6" fill="url(#crystalGradient)" />
            </motion.g>
            
            {/* Candles/lights */}
            <motion.g
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, staggerChildren: 0.2 }}
            >
              <circle cx="30" cy="40" r="2" fill="#FFA500" opacity="0.9" />
              <circle cx="50" cy="35" r="2" fill="#FFA500" opacity="0.9" />
              <circle cx="70" cy="40" r="2" fill="#FFA500" opacity="0.9" />
            </motion.g>
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#B8860B" />
                <stop offset="100%" stopColor="#DAA520" />
              </linearGradient>
              
              <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E6E6FA" />
                <stop offset="50%" stopColor="#DDA0DD" />
                <stop offset="100%" stopColor="#D8BFD8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}