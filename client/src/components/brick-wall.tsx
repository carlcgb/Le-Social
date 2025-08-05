import { motion } from "framer-motion";

export default function BrickWall() {
  // Create varied brick colors for realism
  const brickColors = [
    "#c71724", // Main red
    "#b01520", // Darker red
    "#d4192a", // Lighter red
    "#a31218", // Much darker
    "#8B0E15", // Very dark
    "#cc1a26", // Slightly orange red
    "#b8151f"  // Medium dark
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen opacity-25 overflow-hidden z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Multiple brick patterns for variation */}
          <pattern
            id="brickPattern"
            x="0"
            y="0"
            width="240"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Row 1 - Full bricks */}
            <rect x="2" y="2" width="116" height="26" fill="#c71724" stroke="#5A0C12" strokeWidth="1" />
            <rect x="122" y="2" width="114" height="26" fill="#b01520" stroke="#5A0C12" strokeWidth="1" />
            
            {/* Row 2 - Offset pattern */}
            <rect x="-58" y="32" width="116" height="26" fill="#d4192a" stroke="#5A0C12" strokeWidth="1" />
            <rect x="62" y="32" width="114" height="26" fill="#a31218" stroke="#5A0C12" strokeWidth="1" />
            <rect x="180" y="32" width="116" height="26" fill="#c71724" stroke="#5A0C12" strokeWidth="1" />
            
            {/* Row 3 - Full bricks again */}
            <rect x="2" y="62" width="116" height="26" fill="#8B0E15" stroke="#5A0C12" strokeWidth="1" />
            <rect x="122" y="62" width="114" height="26" fill="#cc1a26" stroke="#5A0C12" strokeWidth="1" />
            
            {/* Row 4 - Offset */}
            <rect x="-58" y="92" width="116" height="26" fill="#b8151f" stroke="#5A0C12" strokeWidth="1" />
            <rect x="62" y="92" width="114" height="26" fill="#c71724" stroke="#5A0C12" strokeWidth="1" />
            <rect x="180" y="92" width="116" height="26" fill="#a31218" stroke="#5A0C12" strokeWidth="1" />
            
            {/* Mortar lines for depth */}
            <rect x="0" y="0" width="240" height="2" fill="#3D0A0F" opacity="0.8" />
            <rect x="0" y="30" width="240" height="2" fill="#3D0A0F" opacity="0.8" />
            <rect x="0" y="60" width="240" height="2" fill="#3D0A0F" opacity="0.8" />
            <rect x="0" y="90" width="240" height="2" fill="#3D0A0F" opacity="0.8" />
            <rect x="0" y="120" width="240" height="2" fill="#3D0A0F" opacity="0.8" />
            
            {/* Vertical mortar lines */}
            <rect x="120" y="0" width="2" height="30" fill="#3D0A0F" opacity="0.6" />
            <rect x="60" y="30" width="2" height="30" fill="#3D0A0F" opacity="0.6" />
            <rect x="178" y="30" width="2" height="30" fill="#3D0A0F" opacity="0.6" />
            <rect x="120" y="60" width="2" height="30" fill="#3D0A0F" opacity="0.6" />
            <rect x="60" y="90" width="2" height="30" fill="#3D0A0F" opacity="0.6" />
            <rect x="178" y="90" width="2" height="30" fill="#3D0A0F" opacity="0.6" />
          </pattern>

          {/* Texture pattern for aging effects */}
          <pattern
            id="ageTexture"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="15" r="1" fill="#2D0608" opacity="0.3" />
            <circle cx="35" cy="8" r="0.5" fill="#2D0608" opacity="0.4" />
            <circle cx="25" cy="30" r="1.5" fill="#2D0608" opacity="0.2" />
            <circle cx="5" cy="40" r="0.8" fill="#2D0608" opacity="0.3" />
            <circle cx="45" cy="35" r="1" fill="#2D0608" opacity="0.25" />
          </pattern>
        </defs>
        
        {/* Main brick pattern */}
        <rect width="100%" height="100%" fill="url(#brickPattern)" />
        
        {/* Age texture overlay */}
        <rect width="100%" height="100%" fill="url(#ageTexture)" opacity="0.4" />
        
        {/* Random weathering spots */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.ellipse
            key={i}
            cx={Math.random() * 1200}
            cy={Math.random() * 800}
            rx={2 + Math.random() * 4}
            ry={1 + Math.random() * 2}
            fill="#2D0608"
            opacity={0.2 + Math.random() * 0.3}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 + Math.random() * 0.3 }}
            transition={{ delay: Math.random() * 2, duration: 1 }}
          />
        ))}
        
        {/* Subtle highlighting on some bricks */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.rect
            key={`highlight-${i}`}
            x={Math.random() * 1100}
            y={Math.random() * 700}
            width="116"
            height="26"
            fill="url(#brickHighlight)"
            opacity={0.1 + Math.random() * 0.2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 + Math.random() * 0.2 }}
            transition={{ delay: Math.random() * 2, duration: 1.5 }}
          />
        ))}
        
        <defs>
          <linearGradient id="brickHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4444" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#cc1a26" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}