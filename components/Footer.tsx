import React from 'react';
import { Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { churchConfig, getWhatsAppUrl } from '../config/church';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-brand-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-800 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-800 rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo size="lg" variant="light" />
            <p className="text-brand-200 mt-6 leading-relaxed">
              {churchConfig.slogan}
            </p>
            <div className="flex gap-3 mt-6">
              {churchConfig.social.instagram && (
                <a 
                  href={churchConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-brand-500 p-3 rounded-xl transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              )}
              {churchConfig.social.youtube && (
                <a 
                  href={churchConfig.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-brand-500 p-3 rounded-xl transition-all duration-300 group"
                  aria-label="YouTube"
                >
                  <Youtube size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Navegação</h3>
            <ul className="space-y-3">
              {[
                { name: 'Início', href: '#hero' },
                { name: 'Quem Somos', href: '#sobre' },
                { name: 'Horários', href: '#cultos' },
                { name: 'Palavra de Esperança', href: '#palavra' },
                { name: 'Localização', href: '#localizacao' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-brand-200 hover:text-brand-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`mailto:${churchConfig.contact.email}`}
                  className="text-brand-200 hover:text-brand-400 transition-colors flex items-start gap-3"
                >
                  <Mail size={18} className="mt-1 text-brand-500 flex-shrink-0" />
                  <span>{churchConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-200 hover:text-brand-400 transition-colors flex items-start gap-3"
                >
                  <Phone size={18} className="mt-1 text-brand-500 flex-shrink-0" />
                  <span>{churchConfig.contact.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Endereço</h3>
            <div className="flex items-start gap-3 text-brand-200">
              <MapPin size={18} className="mt-1 text-brand-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">{churchConfig.address.venue}</p>
                <p className="mt-1">
                  {churchConfig.address.street}<br />
                  {churchConfig.address.neighborhood}<br />
                  {churchConfig.address.city} - {churchConfig.address.state}
                </p>
              </div>
            </div>
            <a 
              href="#localizacao"
              className="mt-4 inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium transition-colors"
            >
              Ver no mapa →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-400 text-sm text-center md:text-left">
              © {currentYear} {churchConfig.name}. Todos os direitos reservados.
            </p>
            <p className="text-brand-400 text-sm flex items-center gap-1">
              Feito com <Heart size={14} className="text-brand-500 fill-current" /> em {churchConfig.address.city}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};