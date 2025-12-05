import React from 'react';
import { BookOpen, Heart, Users, Church } from 'lucide-react';

const values = [
  {
    icon: BookOpen,
    title: 'Bíblica',
    description: 'O ensino e a pregação expositiva da Bíblia são o centro de nossos cultos e reuniões.',
  },
  {
    icon: Heart,
    title: 'Acolhedora',
    description: 'Um ambiente familiar onde você e sua família serão recebidos com amor e cuidado.',
  },
  {
    icon: Users,
    title: 'Comunhão',
    description: 'Valorizamos o relacionamento e o discipulado, crescendo juntos na caminhada cristã.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-100 px-4 py-1.5 rounded-full text-brand-600 text-sm font-medium mb-6">
            <Church size={16} />
            <span>Conheça a IPPS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6">
            Quem Somos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A <strong className="text-brand-800">Igreja Presbiteriana Portal do Sol</strong> é uma comunidade de fé recente, 
            vibrante e acolhedora. Nosso compromisso inegociável é com as Escrituras Sagradas. 
            Acreditamos que a igreja é o lugar onde vidas são transformadas pelo poder do Evangelho, 
            onde a comunhão é real e onde crescemos juntos na graça e no conhecimento de Jesus Cristo.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group relative bg-gradient-to-br from-white to-brand-50 rounded-3xl p-8 border border-brand-100 hover:border-brand-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                {index + 1}
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-brand-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <value.icon size={36} />
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-brand-800 italic leading-relaxed">
            "Porque onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles."
          </blockquote>
          <cite className="block mt-4 text-brand-500 font-semibold not-italic">— Mateus 18:20</cite>
        </div>
      </div>
    </section>
  );
};