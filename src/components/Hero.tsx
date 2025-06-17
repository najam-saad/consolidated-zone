'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Create matrix rain effect
    const createMatrixRain = () => {
      const container = document.querySelector('.matrix-rain');
      if (!container) return;
      
      for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.classList.add('matrix-drop');
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDelay = `${Math.random() * 5}s`;
        drop.style.height = `${Math.random() * 20 + 10}px`;
        container.appendChild(drop);
      }
    };
    
    createMatrixRain();
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden matrix-container">
      {/* Matrix Rain Effect */}
      <div className="matrix-rain absolute inset-0 -z-10 opacity-30"></div>
      
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-violet-700/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-blue-700/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5"></div>
      
      {/* Glitter effects */}
      <div className="glitter glitter-1"></div>
      <div className="glitter glitter-2"></div>
      <div className="glitter glitter-3"></div>
      <div className="glitter glitter-4"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className={`md:w-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
              <span className="gradient-text neon-glow">Elevate</span> Your Business
              <br />With Cutting-Edge
              <br /><span className="gradient-text neon-glow">IT Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl typing-text">
              Empower your business with an integrated range of services designed to transform
              your digital presence, optimize operations, and accelerate your digital growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="btn-cyberpunk inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium text-center ripple"
              >
                Explore Our Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="btn-glass inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Tech illustration with animated elements */}
              <div className="relative bg-black/20 backdrop-blur-lg rounded-full p-16 border border-violet-900/30 card-3d">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
                </div>
                
                {/* Scanline effect */}
                <div className="scanline"></div>
                
                {/* Animated tech elements */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Cloud icon */}
                  <div className="absolute top-4 right-8 text-white/70 floating" style={{ animationDelay: '0.5s' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                      <path d="M4.5 10.5C3.12 10.5 2 9.38 2 8s1.12-2.5 2.5-2.5c.28 0 .55.05.8.14C5.55 4.64 6.64 4 8 4c2.08 0 3.8 1.54 4.12 3.53.33-.03.66-.03 1 0C13.8 5.54 15.52 4 17.6 4c1.36 0 2.45.64 2.7 1.64.25-.09.52-.14.8-.14 1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H19c-.55 0-1 .45-1 1v.01c0 1.09-.89 1.99-1.98 1.99H15c-.55 0-1-.45-1-1s.45-1 1-1h1.02c.54 0 .98-.44.98-.98V10.5h1.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5c-.18 0-.35.03-.51.09C17.95 6.67 17.85 6 17.6 6c-1.53 0-2.8 1.15-2.97 2.66-.64.15-1.21.42-1.73.79-.53-.37-1.11-.64-1.75-.79-.16-1.51-1.44-2.66-2.97-2.66-.26 0-.35.67-.4 1.58-.16-.05-.33-.08-.51-.08-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1.5v.01c0 .54.44.99.99.99H10c.55 0 1 .45 1 1s-.45 1-1 1H8.98C7.89 13 7 12.1 7 11.01V11c0-.55-.45-1-1-1H4.5z"/>
                    </svg>
                  </div>
                  
                  {/* Central circle */}
                  <div className="relative w-24 h-24 rounded-full bg-blue-950/50 border border-blue-500/30 flex items-center justify-center glow-element">
                    <div className="absolute w-full h-full rounded-full border-2 border-blue-500/30 animate-pulse"></div>
                    <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center shimmer">
                      <div className="w-8 h-8 rounded-full bg-blue-500/80"></div>
                    </div>
                  </div>
                  
                  {/* Server icon */}
                  <div className="absolute bottom-4 left-8 text-white/70 floating" style={{ animationDelay: '1s' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                      <path d="M4 5h16v4H4V5zm0 10h16v4H4v-4zm16-14H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 6H4v2h16V7zm0 4H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H4v2h16v-2z"/>
                    </svg>
                  </div>
                  
                  {/* Security icon */}
                  <div className="absolute bottom-10 right-4 text-white/70 floating" style={{ animationDelay: '1.5s' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <StatsCard number="13500+" label="Projects Delivered" />
          <StatsCard number="720+" label="Happy Clients" />
          <StatsCard number="490+" label="Team Members" />
          <StatsCard number="120+" label="Global Awards" />
        </div>
      </div>
    </section>
  );
}

interface StatsCardProps {
  number: string;
  label: string;
}

function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="text-center p-6 border border-violet-900/30 rounded-xl bg-black/30 backdrop-blur-sm transition-all hover:border-violet-700/50 hover:bg-black/40 spotlight hover-card hover:scale-105 hover:shadow-lg">
      <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{number}</p>
      <p className="text-gray-400 text-base">{label}</p>
    </div>
  );
} 