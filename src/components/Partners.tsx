'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const partners: Partner[] = [
  {
    id: '1',
    name: 'Tech Partner One',
    logo: '/partners/partner1.svg',
    description: 'Strategic technology partner providing cutting-edge cloud solutions.',
  },
  {
    id: '2',
    name: 'Digital Partner Two',
    logo: '/partners/partner2.svg',
    description: 'Leading digital transformation company specializing in AI and machine learning.',
  },
  {
    id: '3',
    name: 'Innovation Partner Three',
    logo: '/partners/partner3.svg',
    description: 'Innovative business solutions provider focused on enterprise architecture.',
  },
  {
    id: '4',
    name: 'Tech Partner Four',
    logo: '/partners/partner4.svg',
    description: 'Global IT consulting firm with expertise in secure infrastructure.',
  },
];

export function Partners() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -z-10 inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-2/3 bg-violet-900/10 blur-3xl rounded-full opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block">
              <h2 className="inline-block text-3xl md:text-4xl font-bold relative mb-2 text-white neon-glow">
                Our Affiliations
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              </h2>
            </div>
            <p className="max-w-2xl mt-4 text-gray-400">
              We collaborate with industry-leading organizations to deliver comprehensive solutions for our clients.
            </p>
          </div>
          
          {/* Partners logo display */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            {partners.map((partner) => (
              <div 
                key={partner.id}
                className="bg-glass rounded-xl p-4 w-32 h-32 flex items-center justify-center transition-all hover:neon-border"
              >
                {/* In a real app, use actual logo images */}
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
                  {partner.name.split(' ').pop()?.charAt(0) || 'P'}
                </div>
              </div>
            ))}
          </div>
          
          {/* Partners cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface PartnerCardProps {
  partner: Partner;
}

function PartnerCard({ partner }: PartnerCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative bg-glass rounded-xl p-6 border border-violet-900/30 transition-all duration-300 ${
        isHovered ? 'neon-border transform scale-[1.03]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-black/30 rounded-lg p-3 w-14 h-14 flex items-center justify-center mb-4">
        <div className="text-secondary text-2xl font-bold">
          {partner.name.split(' ').pop()?.charAt(0) || 'P'}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
      <p className="text-gray-400 text-sm">{partner.description}</p>
      
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