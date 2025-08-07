import { motion } from "framer-motion";

interface SocialLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function SocialLogo({ 
  className = "h-16 w-auto", 
  variant = "light" 
}: SocialLogoProps) {
  const textColor = variant === "light" ? "#ffffff" : "#000000";
  const glowColor = variant === "light" ? "rgba(192, 132, 47, 0.6)" : "rgba(199, 23, 36, 0.4)";

  return (
    <motion.svg
      className={className}
      viewBox="0 0 280 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <defs>
        {/* Gradient pour les effets de couleur */}
        <linearGradient id="socialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={textColor} stopOpacity="1" />
          <stop offset="50%" stopColor="#c0842f" stopOpacity="0.9" />
          <stop offset="100%" stopColor={textColor} stopOpacity="1" />
        </linearGradient>

        {/* Filtre pour l'effet de lueur */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Ombre portée */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.3)"/>
        </filter>
      </defs>

      {/* Texte "Social" en style cursif élégant */}
      <path
        d="M 20 45 Q 25 25 35 30 Q 45 35 40 45 Q 35 55 45 50 Q 55 45 50 35 Q 45 25 55 30"
        stroke={textColor}
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        opacity="0.3"
      />

      <text
        x="30"
        y="55"
        fontSize="42"
        fontFamily="Playfair Display, serif"
        fontStyle="italic"
        fontWeight="500"
        fill="url(#socialGradient)"
        filter="url(#shadow)"
        letterSpacing="2px"
        style={{
          textShadow: `0 0 12px ${glowColor}, 2px 2px 4px rgba(0,0,0,0.5)`
        }}
      >
        Social
      </text>

      {/* Ligne décorative sous le texte */}
      <motion.line
        x1="30"
        y1="65"
        x2="220"
        y2="65"
        stroke="#c0842f"
        strokeWidth="1.5"
        opacity="0.7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Points décoratifs */}
      <circle cx="15" cy="45" r="2" fill="#c0842f" opacity="0.7" />
      <circle cx="215" cy="45" r="2" fill="#c0842f" opacity="0.7" />

      {/* Ornements décoratifs */}
      <path
        d="M 10 40 Q 15 35 20 40 Q 15 45 10 40"
        fill="#c0842f"
        opacity="0.5"
      />
      <path
        d="M 220 40 Q 225 35 230 40 Q 225 45 220 40"
        fill="#c0842f"
        opacity="0.5"
      />
    </motion.svg>
  );
}