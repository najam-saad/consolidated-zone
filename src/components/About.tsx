'use client';

import { useState } from 'react';
import Link from 'next/link';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -z-10 top-0 right-0 w-1/2 h-full">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-violet-700/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block">
              <h2 className="inline-block text-3xl md:text-4xl font-bold relative mb-2 text-white neon-glow">
                About Us
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              </h2>
            </div>
          </div>
          
          <div className="bg-glass rounded-2xl p-6 md:p-10 backdrop-blur-md border border-violet-900/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                  Welcome To Consolidated Zone
                </h3>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    We are Consolidated Zone, a dynamic full-service technology and innovation solution provider. We pride ourselves in delivering cutting-edge digital solutions and exceptional professional services.
                  </p>
                  
                  <p className={`transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden'}`}>
                    Our multi-disciplinary team of highly-skilled digital strategists and software experts is devoted to tackling the most complex business challenges through our technology-led approach.
                  </p>
                  
                  <p className={`transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden'}`}>
                    We specialize in delivering comprehensive IT solutions that enhance efficiency, drive results and provide a solid foundation for future innovation.
                  </p>
                </div>
                
                <button 
                  className="mt-6 text-secondary flex items-center hover:text-secondary/80 transition-colors"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              
              <div className="relative">
                <div className="aspect-video relative rounded-xl overflow-hidden bg-glass p-1 shadow-xl">
                  {/* Video placeholder - in a real app, use an actual video */}
                  <div className="w-full h-full bg-gray-900 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                      <div className="text-white text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center cursor-pointer mb-4 relative group">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <div className="absolute inset-0 rounded-full animate-ping bg-secondary opacity-20"></div>
                        </div>
                        <h4 className="text-xl font-bold mb-2">Our Company Story</h4>
                        <p className="text-gray-400 text-sm">Watch our journey from a small startup to an industry leader</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 blur-xl bg-primary/30 rounded-full"></div>
              </div>
            </div>
            
            <div className="mt-12 pt-10 border-t border-violet-900/30">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">
                Our Mission
              </h3>
              
              <p className="text-gray-300 text-center max-w-3xl mx-auto">
                Our mission is to deliver high-quality Digital Products and Services that drive business growth, improve operational efficiencies, and provide exceptional user experiences. We strive to understand the unique needs of each client and deliver customized solutions that exceed expectations.
              </p>
              
              <div className="flex justify-center mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-violet-700 text-white font-medium transition-all hover:bg-violet-700/20"
                >
                  Learn More About Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 