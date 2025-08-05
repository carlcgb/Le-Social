import { motion } from "framer-motion";

export default function BrickWall() {
  // Create brick pattern
  const bricks = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    opacity: 0.1 + Math.random() * 0.3
  }));

  return (
    <div className="absolute inset-0 opacity-20 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="brickPattern"
            x="0"
            y="0"
            width="120"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* First row of bricks */}
            <rect x="0" y="0" width="58" height="28" fill="#c71724" opacity="0.3" stroke="#8B1018" strokeWidth="0.5" />
            <rect x="62" y="0" width="58" height="28" fill="#c71724" opacity="0.25" stroke="#8B1018" strokeWidth="0.5" />
            
            {/* Second row of bricks - offset */}
            <rect x="-29" y="30" width="58" height="28" fill="#c71724" opacity="0.2" stroke="#8B1018" strokeWidth="0.5" />
            <rect x="33" y="30" width="58" height="28" fill="#c71724" opacity="0.35" stroke="#8B1018" strokeWidth="0.5" />
            <rect x="95" y="30" width="58" height="28" fill="#c71724" opacity="0.3" stroke="#8B1018" strokeWidth="0.5" />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#brickPattern)" />
        
        {/* Add some individual highlighted bricks for depth */}
        {bricks.slice(0, 15).map((brick) => (
          <motion.rect
            key={brick.id}
            x={Math.random() * 700}
            y={Math.random() * 500}
            width="58"
            height="28"
            fill="#c71724"
            opacity={brick.opacity}
            initial={{ opacity: 0 }}
            animate={{ opacity: brick.opacity }}
            transition={{ delay: brick.delay, duration: 1 }}
          />
        ))}
      </svg>
    </div>
  );
}