import React from 'react';
import { ChevronDown, Play } from 'lucide-react';
import { churchConfig } from '../config/church';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" 
          alt="Comunhão na igreja" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient Overlay mais elegante */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-brand-900/60 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-brand-100 text-sm font-medium mb-8 border border-white/20">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
              <span>Bem-vindo à {churchConfig.shortName}</span>
            </div>

            {/* Headline Principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Não apenas um lugar
              <br className="hidden sm:block" />
              <span className="text-brand-500"> para ir</span>,
              <br />
              mas uma igreja
              <br className="hidden sm:block" />
              <span className="text-brand-500"> para crescer!</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Somos uma comunidade de fé centrada na Palavra de Deus e no Evangelho de Cristo. 
              Venha fazer parte dessa família.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <a 
                href="#cultos" 
                className="group w-full sm:w-auto bg-brand-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-600 transition-all duration-300 shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Nossos Horários</span>
                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a 
                href="#sobre" 
                className="group w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-brand-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play size={20} />
                <span>Conheça nossa história</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest">Role para baixo</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};