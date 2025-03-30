'use client';

import { useState } from 'react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
}

interface PartnerCardProps {
  partner: Partner;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative bg-glass rounded-xl p-6 border border-violet-900/30 transition-all duration-300 ${
        isHovered ? 'neon-border transform scale-[1.03]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <img src={partner.logo} alt={partner.name} className="h-10 mr-3" />
        <h3 className="text-lg font-bold text-white">{partner.name}</h3>
      </div>
      
      <p className="text-gray-400 text-sm mb-4">{partner.description}</p>
      
      <div className="flex mt-4 space-x-3">
        <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </button>
        <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </button>
        <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </button>
      </div>
    </div>
  );
} 