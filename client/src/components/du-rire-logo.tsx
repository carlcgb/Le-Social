export default function DuRireLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Neon glow effects */}
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer circle - pink/magenta */}
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="#FF1493"
        strokeWidth="4"
        filter="url(#neonGlow)"
      />
      
      {/* Inner circle - yellow */}
      <circle
        cx="100"
        cy="100"
        r="75"
        fill="none"
        stroke="#FFD700"
        strokeWidth="3"
        filter="url(#neonGlow)"
      />
      
      {/* Top text "LA SOIRÉE" */}
      <path
        d="M 50 60 Q 100 45 150 60"
        fill="none"
        stroke="none"
        id="topCurve"
      />
      <text
        fontSize="14"
        fontFamily="Arial, sans-serif"
        fill="#00FFFF"
        filter="url(#neonGlow)"
        fontWeight="bold"
      >
        <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
          LA SOIRÉE
        </textPath>
      </text>
      
      {/* Bottom text "DE GRANBY" */}
      <path
        d="M 50 140 Q 100 155 150 140"
        fill="none"
        stroke="none"
        id="bottomCurve"
      />
      <text
        fontSize="14"
        fontFamily="Arial, sans-serif"
        fill="#00FFFF"
        filter="url(#neonGlow)"
        fontWeight="bold"
      >
        <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle">
          DE GRANBY
        </textPath>
      </text>
      
      {/* Center "Du Rire" text */}
      <text
        x="55"
        y="95"
        fontSize="20"
        fontFamily="serif"
        fill="#FF1493"
        filter="url(#strongGlow)"
        fontStyle="italic"
        fontWeight="bold"
      >
        Du
      </text>
      <text
        x="130"
        y="115"
        fontSize="20"
        fontFamily="serif"
        fill="#FF1493"
        filter="url(#strongGlow)"
        fontStyle="italic"
        fontWeight="bold"
      >
        Rire
      </text>
      
      {/* Microphone */}
      <g transform="translate(100, 100)">
        {/* Mic body */}
        <rect
          x="-3"
          y="-25"
          width="6"
          height="20"
          rx="3"
          fill="#00FFFF"
          filter="url(#neonGlow)"
        />
        {/* Mic grille */}
        <circle
          cx="0"
          cy="-25"
          r="5"
          fill="#00FFFF"
          filter="url(#neonGlow)"
        />
        {/* Mic lines */}
        <line x1="-3" y1="-28" x2="3" y2="-28" stroke="#0088AA" strokeWidth="0.5"/>
        <line x1="-3" y1="-25" x2="3" y2="-25" stroke="#0088AA" strokeWidth="0.5"/>
        <line x1="-3" y1="-22" x2="3" y2="-22" stroke="#0088AA" strokeWidth="0.5"/>
        {/* Mic stand */}
        <line x1="0" y1="-5" x2="0" y2="10" stroke="#00FFFF" strokeWidth="2" filter="url(#neonGlow)"/>
      </g>
      
      {/* Smiley face */}
      <g transform="translate(145, 85)">
        <circle cx="0" cy="0" r="12" fill="#FFD700" filter="url(#neonGlow)"/>
        {/* Eyes */}
        <circle cx="-4" cy="-3" r="1.5" fill="#000"/>
        <circle cx="4" cy="-3" r="1.5" fill="#000"/>
        {/* Smile */}
        <path d="M -6 2 Q 0 8 6 2" stroke="#000" strokeWidth="1.5" fill="none"/>
      </g>
    </svg>
  );
}