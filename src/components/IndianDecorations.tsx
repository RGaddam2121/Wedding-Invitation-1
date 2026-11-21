import React from 'react';

// Ganesha Auspicious Icon SVG
export const GaneshaIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Stylized Indian Auspicious Ganesha Emblem */}
    <circle cx="50" cy="50" r="46" stroke="#C6A15B" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="50" cy="50" r="42" stroke="#781F35" strokeWidth="1.5" />
    <path
      d="M50 18C44 18 39 23 39 29C39 34 43 38 48 39V56C48 60 52 64 56 64C60 64 63 61 63 57C63 54 61 52 58 52"
      stroke="#C6A15B"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48 27H52M50 25V29"
      stroke="#781F35"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Tilak mark */}
    <path
      d="M42 22C46 22 50 19 50 15C50 19 54 22 58 22"
      stroke="#C6A15B"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="50" cy="23" r="2" fill="#781F35" />
    {/* Big Ear Right */}
    <path
      d="M56 32C64 30 70 34 71 42C72 49 66 54 60 53"
      stroke="#C6A15B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Big Ear Left */}
    <path
      d="M44 32C36 30 30 34 29 42C28 49 34 54 40 53"
      stroke="#C6A15B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Modak bowl touch */}
    <circle cx="68" cy="58" r="4" fill="#C6A15B" />
  </svg>
);

// Traditional Kalash / Purna Kumbham Icon
export const KalashIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Coconut */}
    <ellipse cx="50" cy="35" rx="14" ry="18" fill="#9E7E38" stroke="#C6A15B" strokeWidth="2" />
    {/* Mango Leaves */}
    <path d="M50 42C35 32 30 20 30 20C30 20 42 26 50 42Z" fill="#647A54" stroke="#4A5C3E" strokeWidth="1.5" />
    <path d="M50 42C65 32 70 20 70 20C70 20 58 26 50 42Z" fill="#647A54" stroke="#4A5C3E" strokeWidth="1.5" />
    {/* Pot (Kalash) */}
    <path
      d="M36 46H64L68 56C72 66 70 76 63 81C56 86 44 86 37 81C30 76 28 66 32 56L36 46Z"
      fill="#781F35"
      stroke="#C6A15B"
      strokeWidth="2.5"
    />
    {/* Pot Base */}
    <path d="M38 83H62V88H38V83Z" fill="#C6A15B" />
    {/* Swastika / Auspicious line on Kalash */}
    <path d="M50 58V72M43 65H57" stroke="#FFF8E9" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Traditional Ornate Gold Divider
export const GoldDivider: React.FC<{ className?: string }> = ({ className = "w-full my-6" }) => (
  <div className={`flex items-center justify-center space-x-3 ${className}`}>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent flex-1 max-w-[120px]"></div>
    <div className="flex items-center space-x-1.5 text-gold">
      <span className="text-xs">✦</span>
      <span className="text-base">❖</span>
      <span className="text-xs">✦</span>
    </div>
    <div className="h-[1px] bg-gradient-to-l from-transparent via-gold to-transparent flex-1 max-w-[120px]"></div>
  </div>
);

// Traditional Corner Floral Ornament
export const CornerOrnament: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({
  position,
  className = "w-16 h-16",
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left': return '';
      case 'top-right': return 'scale-x-[-1]';
      case 'bottom-left': return 'scale-y-[-1]';
      case 'bottom-right': return 'scale-x-[-1] scale-y-[-1]';
    }
  };

  return (
    <div className={`pointer-events-none select-none text-gold ${getTransform()} ${className}`}>
      <svg viewBox="0 0 100 100" fill="currentColor">
        <path d="M0,0 L40,0 C35,15 25,25 10,25 C10,40 0,40 0,40 Z" opacity="0.6" />
        <path d="M5,5 Q30,10 20,30 Q10,20 5,5" fill="#781F35" opacity="0.4" />
        <circle cx="15" cy="15" r="3" fill="#C6A15B" />
        <path d="M0,0 L80,0 Q60,5 50,20 Q30,10 20,40 Q10,60 0,80 Z" fill="none" stroke="#C6A15B" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

// Lotus Flower SVG
export const LotusIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Center petal */}
    <path d="M50 20C45 35 42 60 50 78C58 60 55 35 50 20Z" fill="#D9A6A6" stroke="#781F35" strokeWidth="2" />
    {/* Left petal */}
    <path d="M50 40C36 42 22 55 26 72C35 77 46 72 50 68Z" fill="#E8C5C5" stroke="#781F35" strokeWidth="2" />
    {/* Right petal */}
    <path d="M50 40C64 42 78 55 74 72C65 77 54 72 50 68Z" fill="#E8C5C5" stroke="#781F35" strokeWidth="2" />
    {/* Outer petals */}
    <path d="M50 50C30 54 15 65 18 78C28 82 42 76 50 72Z" fill="#FFF8E9" stroke="#C6A15B" strokeWidth="1.5" />
    <path d="M50 50C70 54 85 65 82 78C72 82 58 76 50 72Z" fill="#FFF8E9" stroke="#C6A15B" strokeWidth="1.5" />
    {/* Base stem */}
    <ellipse cx="50" cy="80" rx="16" ry="4" fill="#647A54" />
  </svg>
);
