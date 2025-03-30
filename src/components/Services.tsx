'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  cta?: string;
  ctaLink?: string;
}

const services: Service[] = [
  {
    id: '1',
    title: 'Web App Development',
    description: 'We create responsive, elegant web applications using cutting-edge technologies and frameworks that deliver exceptional user experiences.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
      </svg>
    ),
    cta: 'Learn More',
    ctaLink: '/services/web-development'
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Our team builds native and cross-platform mobile applications that provide seamless experiences across all devices and platforms.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
      </svg>
    ),
    cta: 'Learn More',
    ctaLink: '/services/mobile-development'
  },
  {
    id: '3',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing services to enhance your online presence, improve brand visibility, and drive qualified traffic to your platforms.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z" />
      </svg>
    ),
    cta: 'Learn More',
    ctaLink: '/services/digital-marketing'
  },
  {
    id: '4',
    title: 'SEO & Content Ranking',
    description: 'Optimize your digital content to rank higher in search engines with our comprehensive SEO strategies and content enhancement techniques.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    ),
    cta: 'Learn More',
    ctaLink: '/services/seo'
  },
  {
    id: '5',
    title: 'Project Management',
    description: 'Our certified project managers ensure your projects are delivered on time, within budget, and according to the highest quality standards.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    cta: 'Learn More',
    ctaLink: '/services/project-management'
  },
  {
    id: '6',
    title: 'IT Consultation',
    description: 'Get expert IT consultation for your business operations, infrastructure planning, security, and technology adoption from our specialized team.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
    cta: 'Learn More',
    ctaLink: '/services/consultation'
  },
];

export function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-20 relative" id="services">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-950/30 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500/10 text-violet-300 border border-violet-500/20 mb-3 inline-block">Our Services</span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-white">
            Comprehensive IT Solutions For<br />Your Business Needs
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            We offer a comprehensive range of cutting-edge digital services, tailored to meet your business needs and drive technological innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative group bg-glass rounded-xl overflow-hidden transition-all duration-300 border border-violet-900/20 hover:border-violet-500/40 ${
                hoveredService === service.id ? 'scale-[1.02] shadow-lg shadow-violet-900/20' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500/0 via-violet-500 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-violet-900/30 flex items-center justify-center text-secondary mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                {service.cta && service.ctaLink && (
                  <Link 
                    href={service.ctaLink}
                    className="inline-flex items-center text-secondary font-medium transition-all hover:text-secondary-light group"
                  >
                    {service.cta}
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-6">Need a custom solution for your business?</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-white font-medium transition-all hover:bg-secondary/90 text-center"
          >
            Get a Free Consultation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 