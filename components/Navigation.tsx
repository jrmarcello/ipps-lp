import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta scroll para mudar estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Cultos', href: '#cultos' },
    { name: 'Palavra', href: '#palavra' },
    { name: 'Localização', href: '#localizacao' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-brand-100' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#hero" className="flex-shrink-0">
              <Logo 
                size="md" 
                variant={isScrolled ? 'dark' : 'light'} 
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm uppercase tracking-wide
                  ${isScrolled 
                    ? 'text-brand-900 hover:text-brand-500 hover:bg-brand-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#localizacao"
              className={`
                ml-4 px-6 py-2.5 rounded-full font-semibold transition-all duration-200 
                shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                ${isScrolled 
                  ? 'bg-brand-500 text-white hover:bg-brand-600' 
                  : 'bg-white text-brand-900 hover:bg-brand-50'
                }
              `}
            >
              Visite-nos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                p-2 rounded-lg transition-colors
                ${isScrolled 
                  ? 'text-brand-900 hover:bg-brand-50' 
                  : 'text-white hover:bg-white/10'
                }
              `}
              aria-label="Menu principal"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`
          md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-brand-100
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 text-brand-900 font-medium hover:bg-brand-50 hover:text-brand-600 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#localizacao"
              onClick={handleLinkClick}
              className="block px-4 py-3 bg-brand-500 text-white text-center font-semibold rounded-xl hover:bg-brand-600 transition-colors"
            >
              Visite-nos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};