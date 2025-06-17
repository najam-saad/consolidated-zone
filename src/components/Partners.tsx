'use client';

const partners = [
  {
    id: '1',
    name: 'Tech Partner One',
    description: 'Strategic technology partner providing cutting-edge cloud solutions.',
  },
  {
    id: '2',
    name: 'Digital Partner Two', 
    description: 'Leading digital transformation company specializing in AI and machine learning.',
  },
  {
    id: '3',
    name: 'Innovation Partner Three',
    description: 'Innovative business solutions provider focused on enterprise architecture.',
  },
  {
    id: '4',
    name: 'Tech Partner Four',
    description: 'Global IT consulting firm with expertise in secure infrastructure.',
  }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Affiliations
            </h2>
            <p className="max-w-2xl text-gray-400">
              We collaborate with industry-leading organizations to deliver comprehensive solutions for our clients.
            </p>
          </div>
          
          {/* Partner logo circles */}
          <div className="flex flex-wrap justify-center items-center gap-10 mb-16">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="w-16 h-16 rounded-full bg-black/30 border border-violet-700/50 flex items-center justify-center hover:border-violet-500/80 transition-all duration-300">
                <span className="text-2xl font-bold text-white">{num}</span>
              </div>
            ))}
          </div>
          
          {/* Partner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={partner.id} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/20 border border-violet-700/50 mb-4">
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-400 text-sm">{partner.description}</p>
                
                <div className="flex justify-center space-x-3 mt-4">
                  <a href="#" className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 