'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PartnerCard } from './PartnerCard';

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
    logo: '/images/partners/partner-1.svg',
    description: 'Strategic technology partner providing cutting-edge cloud solutions.',
  },
  {
    id: '2',
    name: 'Digital Partner Two',
    logo: '/images/partners/partner-2.svg',
    description: 'Leading digital transformation company specializing in AI and machine learning.',
  },
  {
    id: '3',
    name: 'Innovation Partner Three',
    logo: '/images/partners/partner-3.svg',
    description: 'Innovative business solutions provider focused on enterprise architecture.',
  },
  {
    id: '4',
    name: 'Tech Partner Four',
    logo: '/images/partners/partner-4.svg',
    description: 'Global IT consulting firm with expertise in secure infrastructure.',
  },
  {
    id: '5',
    name: 'Tech Partner Five',
    logo: '/images/partners/partner-5.svg',
    description: 'Advanced cybersecurity solutions provider for enterprise applications.',
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
          
          {/* Partner logo grid display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="w-full max-w-[280px] bg-[#0a0a14] rounded-xl overflow-hidden shadow-lg border border-violet-900/20">
                <div className="h-16 bg-[#111123] flex items-center justify-center p-4">
                  <img src={partner.logo} alt={partner.name} className="h-8" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-400 text-sm">{partner.description}</p>
                  
                  <div className="flex space-x-3 mt-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 