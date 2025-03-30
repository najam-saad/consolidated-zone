'use client';

import { useState } from 'react';
import Link from 'next/link';

export function About() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="relative py-20 overflow-hidden" id="about-us">
      {/* Background decoration */}
      <div className="absolute -z-10 top-0 right-0 w-1/2 h-full">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-violet-700/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500/10 text-violet-300 border border-violet-500/20 mb-3">About Us</span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-white">
              Why Choose <span className="text-secondary">Consolidated Zone</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              We are a premier IT solutions provider dedicated to helping businesses transform and thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-glass rounded-xl p-6 border border-violet-500/20 overflow-hidden relative">
                {/* Tab navigation */}
                <div className="flex mb-8 border-b border-violet-700/30 relative">
                  <button 
                    className={`px-4 py-3 text-sm font-medium relative ${activeTab === 'mission' ? 'text-secondary' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('mission')}
                  >
                    Our Mission
                    {activeTab === 'mission' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></span>
                    )}
                  </button>
                  <button 
                    className={`px-4 py-3 text-sm font-medium relative ${activeTab === 'vision' ? 'text-secondary' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('vision')}
                  >
                    Our Vision
                    {activeTab === 'vision' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></span>
                    )}
                  </button>
                  <button 
                    className={`px-4 py-3 text-sm font-medium relative ${activeTab === 'values' ? 'text-secondary' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('values')}
                  >
                    Our Values
                    {activeTab === 'values' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></span>
                    )}
                  </button>
                </div>
                
                {/* Tab content */}
                <div className="min-h-[240px]">
                  {activeTab === 'mission' && (
                    <div className="space-y-4 text-gray-300 animate-fadeIn">
                      <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                      <p>
                        At Consolidated Zone, our mission is to deliver high-quality IT solutions that drive business growth, improve operational efficiencies, and provide exceptional user experiences.
                      </p>
                      <p>
                        We strive to understand the unique needs of each client and deliver customized solutions that exceed expectations, helping them navigate the complex digital landscape with confidence.
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 'vision' && (
                    <div className="space-y-4 text-gray-300 animate-fadeIn">
                      <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                      <p>
                        To be the leading provider of innovative IT solutions, recognized globally for our expertise, reliability, and commitment to client success.
                      </p>
                      <p>
                        We envision a future where technology empowers businesses of all sizes to achieve their full potential, and we aim to be at the forefront of that transformation.
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 'values' && (
                    <div className="space-y-4 text-gray-300 animate-fadeIn">
                      <h3 className="text-xl font-bold text-white mb-4">Our Core Values</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span><strong>Excellence</strong> - We strive for excellence in every aspect of our work</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span><strong>Innovation</strong> - We embrace innovation and creative problem-solving</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span><strong>Integrity</strong> - We operate with honesty, transparency, and accountability</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span><strong>Collaboration</strong> - We believe in the power of teamwork and partnership</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-glass p-6 rounded-xl border border-violet-500/20">
                  <p className="text-4xl font-bold text-white mb-2">10+</p>
                  <p className="text-gray-400">Years of Experience</p>
                </div>
                <div className="bg-glass p-6 rounded-xl border border-violet-500/20">
                  <p className="text-4xl font-bold text-white mb-2">100%</p>
                  <p className="text-gray-400">Client Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-glass p-1 border border-violet-500/20 shadow-xl">
                  {/* Replace with actual image in production */}
                  <div className="rounded-xl overflow-hidden w-full h-full relative bg-gradient-to-br from-gray-900 to-violet-900">
                    <div className="absolute inset-0 opacity-20 bg-circuit-pattern"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto mb-6">
                          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-secondary" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" />
                            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor" />
                            <circle cx="12" cy="12" r="2" fill="currentColor" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Consolidated Zone</h3>
                        <p className="text-gray-300">Your Trusted IT Solutions Partner</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 blur-xl bg-secondary/30 rounded-full"></div>
                <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 blur-xl bg-primary/30 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-violet-700 text-white font-medium transition-all hover:bg-violet-700/20"
            >
              Learn More About Our Company
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}