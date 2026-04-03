import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { cn } from '../lib/utils';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Início', href: '/#' },
    { name: 'Programas', href: '/#programas' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Impacto', href: '/#impacto' },
  ];

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value based on your header height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav flex justify-between items-center px-8 py-4 max-w-full transition-all duration-300">
      <Link to="/" className="text-2xl font-bold tracking-tight text-white font-headline">
        Instituto Stemmer
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <HashLink
            smooth
            scroll={scrollWithOffset}
            key={link.name}
            to={link.href}
            className={cn(
              "text-sm font-medium transition-colors",
              (location.pathname + location.hash) === link.href 
                ? "text-secondary-container border-b-2 border-secondary-container pb-1" 
                : "text-slate-300 hover:text-white"
            )}
          >
            {link.name}
          </HashLink>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="text-white hover:opacity-80 transition-all font-medium text-sm">
          Login
        </button>
        <Link 
          to="/doacao"
          className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-bold hover:opacity-90 transition-all active:scale-95 text-sm"
        >
          Doar Agora
        </Link>
      </div>
    </nav>
  );
}
