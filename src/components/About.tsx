'use client';

import Link from 'next/link';

export function About() {
  return (
    <section className="relative py-20 overflow-hidden" id="about-us">
      {/* Background decoration */}
      <div className="absolute -z-10 top-0 right-0 w-1/2 h-full">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-violet-700/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-white">
              About Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Welcome Card */}
            <div className="bg-glass rounded-xl p-8 border border-violet-500/20 overflow-hidden relative hover:border-violet-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Welcome To Consolidated Zone</h3>
              <p className="text-gray-300 mb-6">
                We are a Consolidated Zone, a dynamic IT service marketplace and consulting company 
                specializing in modern technologies, strategic business solutions, and innovative 
                digital transformations to enhance your business capabilities.
              </p>
              <p className="text-gray-300 mb-6">
                With years of experience serving clients across various sectors, we have established 
                ourselves as a trusted partner for businesses seeking reliable, scalable, and efficient 
                IT solutions.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-secondary hover:underline"
              >
                Read More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            
            {/* Company Story Card */}
            <div className="bg-glass rounded-xl p-8 border border-violet-500/20 overflow-hidden relative hover:border-violet-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Our Company Story</h3>
              <p className="text-gray-300 mb-6">
                What started as a small team of passionate technologists has evolved into a 
                comprehensive IT solutions provider with a global footprint. Our journey has 
                been marked by consistent growth, innovative approaches, and an unwavering 
                commitment to our clients&apos; success.
              </p>
              <p className="text-gray-300 mb-6">
                We pride ourselves on staying at the forefront of technological advancements 
                while maintaining the agility to adapt to the ever-changing digital landscape.
              </p>
            </div>
          </div>
          
          {/* Our Mission */}
          <div className="bg-glass rounded-xl p-8 border border-violet-500/20 mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Mission</h3>
            <p className="text-gray-300 text-center max-w-4xl mx-auto">
              Our mission is to deliver high-quality IT solutions that drive business growth, 
              improve operational efficiencies, and create exceptional user experiences. We strive 
              to understand the unique needs of each client and deliver customized solutions that 
              exceed expectations, helping them navigate the complex digital landscape with confidence.
            </p>
            <div className="text-center mt-8">
            <Link
                href="/about#mission"
                className="inline-flex items-center text-secondary hover:underline"
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
    </section>
  );
}