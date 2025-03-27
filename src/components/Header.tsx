'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-glass py-4 backdrop-blur-md border-b border-violet-900/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tighter text-white neon-glow">
              CONSOLIDATED<span className="text-secondary neon-glow-strong">ZONE</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/team">Team</NavLink>
            <NavLink href="/apps">Apps</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/contact" highlighted>Contact</NavLink>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none"
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
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <MobileNavLink href="/about">About Us</MobileNavLink>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/portfolio">Portfolio</MobileNavLink>
            <MobileNavLink href="/team">Team</MobileNavLink>
            <MobileNavLink href="/apps">Apps</MobileNavLink>
            <MobileNavLink href="/products">Products</MobileNavLink>
            <MobileNavLink href="/contact" highlighted>Contact</MobileNavLink>
          </nav>
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
      className={`text-sm font-medium transition-all duration-200 hover:text-secondary hover:neon-glow ${
        highlighted 
          ? 'bg-secondary text-white px-4 py-2 rounded-full neon-border hover:bg-secondary/90 hover:text-white' 
          : 'text-gray-300'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, highlighted = false }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className={`text-base font-medium transition-all duration-200 block ${
        highlighted 
          ? 'bg-secondary text-white px-4 py-2 rounded-full neon-border text-center' 
          : 'text-gray-300 hover:text-secondary'
      }`}
    >
      {children}
    </Link>
  );
} 