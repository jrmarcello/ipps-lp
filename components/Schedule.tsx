import React from 'react';
import { Clock, Calendar, MapPin, Sparkles } from 'lucide-react';
import { ServiceTime } from '../types';

const services: ServiceTime[] = [
  {
    id: '1',
    title: 'Culto Solene',
    day: 'Domingo',
    time: '17:00h',
    status: 'active',
    description: 'Culto de adoração e pregação da Palavra'
  },
  {
    id: '2',
    title: 'Escola Bíblica Dominical',
    day: 'Domingo',
    time: '09:30h',
    status: 'coming_soon',
    description: 'Estudo bíblico para todas as idades'
  },
  {
    id: '3',
    title: 'Reunião de Oração',
    day: 'Quinta-feira',
    time: '19:30h',
    status: 'coming_soon',
    description: 'Oração e estudo doutrinário'
  }
];

export const Schedule: React.FC = () => {
  return (
    <section id="cultos" className="min-h-screen py-24 bg-gradient-to-b from-stone-100 to-white relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute -left-32 top-1/2 w-64 h-64 bg-brand-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 w-96 h-96 bg-brand-100 rounded-full opacity-40 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-100 px-4 py-1.5 rounded-full text-brand-600 text-sm font-medium mb-6">
            <Clock size={16} />
            <span>Programação</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">
            Nossos Horários
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Venha cultuar a Deus conosco. Será uma alegria recebê-lo!
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`
                relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2
                ${service.status === 'active' 
                  ? 'shadow-xl shadow-brand-500/10 ring-2 ring-brand-500' 
                  : 'shadow-lg hover:shadow-xl opacity-80 hover:opacity-100'
                }
              `}
            >
              {/* Top accent */}
              <div className={`h-2 ${service.status === 'active' ? 'bg-brand-500' : 'bg-gray-300'}`}></div>
              
              <div className="p-8">
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center
                    ${service.status === 'active' 
                      ? 'bg-brand-100 text-brand-600' 
                      : 'bg-gray-100 text-gray-400'
                    }
                  `}>
                    <Clock size={28} />
                  </div>
                  
                  {service.status === 'coming_soon' ? (
                    <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      Em Breve
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <Sparkles size={12} />
                      Ativo
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-brand-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{service.description}</p>
                
                {/* Time Info */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar size={18} className="text-brand-500" />
                    <span className="font-medium">{service.day}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-brand-500" />
                    <span className="text-2xl font-bold text-brand-600">{service.time}</span>
                  </div>
                </div>

                {/* CTA for active service */}
                {service.status === 'active' && (
                  <a 
                    href="#localizacao"
                    className="mt-6 w-full bg-brand-50 hover:bg-brand-100 text-brand-600 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <MapPin size={18} />
                    <span>Como chegar</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info Note */}
        <p className="text-center text-gray-500 mt-12 text-sm">
          * Novos horários serão divulgados em breve. Acompanhe nossas redes sociais.
        </p>
      </div>
    </section>
  );
};