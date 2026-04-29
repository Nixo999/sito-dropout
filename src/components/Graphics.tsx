import React from 'react';

export const LogoSVG = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 120" 
    className={`w-full h-full overflow-visible ${className}`}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur1" />
        <feGaussianBlur stdDeviation="6" result="blur2" />
        <feGaussianBlur stdDeviation="10" result="blur3" />
        <feColorMatrix in="blur3" type="matrix" values="
          1 0 0 0 0
          0 0.65 0 0 0
          0 0.01 0 0 0
          0 0 0 0.5 0
        " result="orangeGlow"/>
        <feColorMatrix in="blur2" type="matrix" values="
          1 0 0 0 0
          0 0.84 0 0 0
          0 0 0 0 0
          0 0 0 0.8 0
        " result="goldGlow"/>
        <feMerge>
          <feMergeNode in="orangeGlow" />
          <feMergeNode in="goldGlow" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Graduation Cap */}
    <g filter="url(#neon-glow)" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Cap Diamond */}
      <polygon points="50,15 80,25 50,35 20,25" fill="none" />
      {/* Cap Base */}
      <path d="M 30,30 L 30,50 Q 50,60 70,50 L 70,30" fill="none" />
      {/* Tassel swoop transforming into glass */}
      <path d="M 50,25 Q 50,40 35,55 C 20,70 40,85 50,85 C 60,85 80,70 65,55 Q 50,40 85,25" fill="none" strokeWidth="1.5" strokeDasharray="4 4" />
      
      {/* Glass Bowl Base outline */}
      <path d="M 35,65 L 50,80 L 65,65" fill="none" />
      
      {/* Magical swoop for the liquid/accent */}
      <path d="M 25,60 C 40,80 70,90 85,45" fill="none" strokeWidth="2" />
      
      {/* Stars/Sparkles */}
      <path d="M 80,10 L 82,15 L 87,17 L 82,19 L 80,24 L 78,19 L 73,17 L 78,15 Z" fill="#ffd700" stroke="none" />
      <path d="M 88,30 L 89,33 L 92,34 L 89,35 L 88,38 L 87,35 L 84,34 L 87,33 Z" fill="#ffd700" stroke="none" />
    </g>
  </svg>
);

export const DrinksSVG = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 120 60" 
    className={`w-full h-full overflow-visible ${className}`}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="neon-glow-small" x="-20%" y="-20%" width="140%" height="140%">
         <feGaussianBlur stdDeviation="2" result="blur1" />
         <feGaussianBlur stdDeviation="4" result="blur2" />
         <feColorMatrix in="blur2" type="matrix" values="
          1 0 0 0 0
          0 0.65 0 0 0
          0 0.01 0 0 0
          0 0 0 0.4 0
        " result="orangeGlow"/>
        <feMerge>
          <feMergeNode in="orangeGlow" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#neon-glow-small)" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Spritz 1 */}
      <path d="M 20,10 L 40,10 L 30,30 Z" />
      <line x1="30" y1="30" x2="30" y2="50" />
      <line x1="22" y1="50" x2="38" y2="50" />
      <line x1="28" y1="5" x2="32" y2="15" /> {/* Straw */}
      
      {/* Spritz 2 (round bowl) */}
      <path d="M 45,15 Q 60,35 75,15 Z" />
      <line x1="60" y1="26" x2="60" y2="50" />
      <line x1="52" y1="50" x2="68" y2="50" />
      {/* Lemon slice */}
      <circle cx="70" cy="10" r="5" fill="none" />
      <line x1="70" y1="5" x2="70" y2="15" />
      <line x1="65" y1="10" x2="75" y2="10" />

      {/* Shot glass */}
      <path d="M 90,25 L 88,48 C 88,49 89,50 90,50 L 100,50 C 101,50 102,49 102,48 L 100,25 Z" />
      {/* Shot liquid line */}
      <line x1="89" y1="35" x2="101" y2="35" />
    </g>
  </svg>
);
