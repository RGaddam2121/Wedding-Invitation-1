import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { couple } = weddingData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Couple', href: '#couple' },
    { label: 'Moments', href: '#moments' },
    { label: 'Celebrations', href: '#events' },
    { label: 'Countdown', href: '#countdown' },
    { label: 'Venue', href: '#venue' },
    { label: 'Family', href: '#family' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-md border-b border-gold/30 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo / Couple monogram */}
        <a href="#couple" className="flex items-center space-x-2 text-maroon font-serif font-bold text-lg sm:text-xl">
          <span>{couple.groom.name}</span>
          <Heart className="w-4 h-4 fill-gold text-gold" />
          <span>{couple.bride.name}</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-xs uppercase tracking-wider font-semibold text-maroon font-sans">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-gold transition-colors relative py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-maroon hover:text-gold transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-gold/40 shadow-xl px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-sm uppercase tracking-wider font-semibold text-maroon hover:text-gold py-2 border-b border-gold/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
