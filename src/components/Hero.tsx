'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-violet-700/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-blue-700/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-glow-strong">Elevate</span> Your Business<br />
              With Cutting-Edge<br />
              <span className="text-secondary neon-glow">IT Solutions</span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Explore our comprehensive range of services designed to transform your business with innovative technology and strategic digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-white font-medium transition-all neon-border hover:bg-secondary/90 text-center"
              >
                Explore Our Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-violet-700 text-white font-medium transition-all hover:bg-violet-700/20 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-xl overflow-hidden aspect-video bg-glass p-1 shadow-xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              
              {/* Video placeholder - in a real app, use an actual video */}
              <div className="rounded-lg overflow-hidden relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative group">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center cursor-pointer transition-transform group-hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-full animate-ping bg-secondary opacity-20"></div>
                  </div>
                </div>
                
                {/* Replace with next/image in a real implementation */}
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 bg-circuit-pattern"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 blur-xl bg-primary/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 blur-xl bg-secondary/30 rounded-full"></div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <StatCard value="13500+" label="Projects Completed" />
          <StatCard value="720+" label="Satisfied Clients" />
          <StatCard value="490+" label="Expert Team Members" />
          <StatCard value="120+" label="Awards Received" />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center p-4 rounded-xl bg-glass">
      <p className="text-2xl md:text-3xl font-bold text-white neon-glow">{value}</p>
      <p className="text-gray-400 text-sm mt-1">{label}</p>
    </div>
  );
} 