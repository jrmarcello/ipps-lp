import React, { useState } from 'react';
import { Sparkles, Send, Loader2, BookOpen, RefreshCw } from 'lucide-react';
import { generateEncouragement } from '../services/geminiService';

const suggestions = [
  'Ansiedade',
  'Gratidão', 
  'Família',
  'Trabalho',
  'Futuro',
  'Perdão',
];

export const HopeMessage: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setMessage('');
    setShowResult(true);

    const result = await generateEncouragement(topic);
    setMessage(result);
    setLoading(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setTopic(suggestion);
  };

  const handleReset = () => {
    setTopic('');
    setMessage('');
    setShowResult(false);
  };

  return (
    <section id="palavra" className="min-h-screen py-24 relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 via-transparent to-brand-900/80"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl"></div>
       
      <div className="container mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-brand-100 text-sm font-medium mb-6 border border-white/10">
            <Sparkles size={16} className="text-brand-400" />
            <span>Alimentado por IA</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Precisa de uma palavra de <span className="text-brand-400">ânimo?</span>
          </h2>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Receba uma mensagem de esperança baseada na Bíblia, personalizada para o que você está vivendo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
            {/* Input Side */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10">
              {/* Verse */}
              <div className="flex items-start gap-3 mb-8 pb-6 border-b border-white/10">
                <BookOpen size={24} className="text-brand-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-brand-50 italic leading-relaxed">
                    "Elevo os meus olhos para os montes: de onde me virá o socorro? 
                    O meu socorro vem do Senhor, que fez o céu e a terra."
                  </p>
                  <cite className="text-brand-400 text-sm font-semibold mt-2 block not-italic">— Salmos 121:1-2</cite>
                </div>
              </div>

              {/* Form */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Sobre o que você gostaria de receber um encorajamento bíblico?
                </label>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="Ex: Ansiedade, Futuro, Família..."
                      className="w-full bg-white text-brand-900 placeholder-gray-400 rounded-2xl px-5 py-4 pr-14 focus:outline-none focus:ring-2 focus:ring-brand-400 text-lg"
                    />
                    <button 
                      type="submit"
                      disabled={loading || !topic.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-500 hover:bg-brand-600 disabled:bg-gray-400 text-white p-3 rounded-xl transition-all duration-200 disabled:cursor-not-allowed"
                    >
                      {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                    </button>
                  </div>

                  {/* Suggestions */}
                  <div>
                    <p className="text-brand-200 text-sm mb-2">Sugestões:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => handleSuggestionClick(suggestion)}
                          className={`
                            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                            ${topic === suggestion 
                              ? 'bg-brand-500 text-white' 
                              : 'bg-white/10 text-brand-100 hover:bg-white/20'
                            }
                          `}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Result Side */}
            <div className="h-[450px] lg:h-[500px]">
              {showResult ? (
                <div className="bg-white text-brand-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-fade-in h-full flex flex-col">
                  {/* Sparkle badge */}
                  <div className="absolute -top-4 -left-4 bg-brand-500 text-white p-3 rounded-2xl shadow-lg">
                    <Sparkles size={24} />
                  </div>
                  
                  {loading ? (
                    <div className="flex flex-col items-center justify-center flex-1 text-gray-400">
                      <div className="relative">
                        <Loader2 size={56} className="animate-spin text-brand-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen size={24} className="text-brand-300" />
                        </div>
                      </div>
                      <p className="mt-6 text-gray-500 font-medium">Buscando inspiração na Palavra...</p>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4 flex-shrink-0">
                        <h3 className="text-sm font-bold text-brand-500 uppercase tracking-wider">
                          Para você, sobre "{topic}"
                        </h3>
                        <button 
                          onClick={handleReset}
                          className="text-gray-400 hover:text-brand-500 transition-colors p-2 hover:bg-brand-50 rounded-lg"
                          title="Nova mensagem"
                        >
                          <RefreshCw size={18} />
                        </button>
                      </div>
                      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        <p className="text-base sm:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                          {message}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 text-center flex-shrink-0">
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Igreja Presbiteriana Portal do Sol</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden lg:flex items-center justify-center h-full">
                  <div className="text-center opacity-60">
                    <div className="w-32 h-32 border-4 border-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles size={48} className="text-brand-300" />
                    </div>
                    <p className="text-brand-100 max-w-xs mx-auto">
                      Digite um tema ao lado para receber uma mensagem de esperança personalizada.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};