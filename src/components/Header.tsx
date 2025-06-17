'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${scrolled ? 'py-3 bg-glass shadow-lg' : 'py-5 bg-transparent'} backdrop-blur-md border-b border-violet-900/20 sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center scale-hover">
            <h1 className="text-xl font-bold tracking-tighter gradient-text">
              CONSOLIDATED<span className="text-secondary neon-glow">ZONE</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/team">Team</NavLink>
            <NavLink href="/contact" highlighted>Contact</NavLink>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none ripple"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 mt-4 bg-glass rounded-xl border border-violet-800/20 backdrop-blur-md neon-border-primary">
            <nav className="flex flex-col divide-y divide-violet-800/20">
              <MobileNavLink href="/about">About Us</MobileNavLink>
              <MobileNavLink href="/services">Services</MobileNavLink>
              <MobileNavLink href="/portfolio">Portfolio</MobileNavLink>
              <MobileNavLink href="/team">Team</MobileNavLink>
              <div className="px-4 py-3">
                <Link
                  href="/contact"
                  className="block w-full btn-cyberpunk py-2.5 px-4 rounded-lg text-center font-medium ripple"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  highlighted?: boolean;
}

function NavLink({ href, children, highlighted = false }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className={`text-sm font-medium transition-all duration-200 hover:text-secondary relative group ${
        highlighted 
          ? 'btn-cyberpunk text-white px-5 py-2.5 rounded-full hover:bg-secondary/90 hover:text-white' 
          : 'text-gray-200 animated-underline'
      }`}
    >
      {children}
      {!highlighted && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
      )}
    </Link>
  );
}

function MobileNavLink({ href, children }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className="text-base font-medium transition-all duration-200 block text-gray-200 hover:text-secondary px-4 py-3 text-shadow-hover"
    >
      {children}
    </Link>
  );
}