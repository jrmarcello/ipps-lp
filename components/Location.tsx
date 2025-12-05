import React from 'react';
import { MapPin, Phone, Mail, Navigation, Clock, ExternalLink } from 'lucide-react';
import { churchConfig, getFullAddress, getGoogleMapsUrl, getWhatsAppUrl } from '../config/church';

export const Location: React.FC = () => {
  const address = getFullAddress();

  return (
    <section id="localizacao" className="py-24 bg-gradient-to-b from-white to-brand-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-100 px-4 py-1.5 rounded-full text-brand-600 text-sm font-medium mb-6">
            <MapPin size={16} />
            <span>Localização</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">
            Onde Estamos
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Venha nos fazer uma visita! Será uma alegria recebê-lo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Info Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-brand-100 order-2 lg:order-1">
            {/* Venue */}
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-brand-100 p-4 rounded-2xl text-brand-600 flex-shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-brand-900 mb-2">{churchConfig.address.venue}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {churchConfig.address.street}<br/>
                  {churchConfig.address.neighborhood}, {churchConfig.address.city} - {churchConfig.address.state}<br/>
                  CEP: {churchConfig.address.zipCode}
                </p>
                <a 
                  href={getGoogleMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-600 font-semibold mt-4 hover:text-brand-700 transition-colors group"
                >
                  <Navigation size={18} className="group-hover:translate-x-1 transition-transform" />
                  Traçar rota no Google Maps
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="border-t border-gray-100 my-8"></div>

            {/* Service Time Reminder */}
            <div className="flex items-start gap-4 mb-8 bg-brand-50 p-5 rounded-2xl">
              <div className="bg-brand-500 p-3 rounded-xl text-white flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-900 mb-1">Culto aos Domingos</h4>
                <p className="text-2xl font-bold text-brand-600">17:00h</p>
              </div>
            </div>

            <div className="border-t border-gray-100 my-8"></div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-brand-900 mb-4">Entre em contato</h4>
              <div className="space-y-3">
                <a 
                  href={`mailto:${churchConfig.contact.email}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-brand-600 transition-colors"
                >
                  <Mail size={20} className="text-brand-500" />
                  <span>{churchConfig.contact.email}</span>
                </a>
                <a 
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-brand-600 transition-colors"
                >
                  <Phone size={20} className="text-brand-500" />
                  <span>{churchConfig.contact.phone}</span>
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href={getWhatsAppUrl('Olá! Gostaria de saber mais sobre a Igreja Presbiteriana Portal do Sol.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale conosco pelo WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="h-[300px] sm:h-[400px] lg:h-full min-h-[300px] lg:min-h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-xl relative order-1 lg:order-2">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Igreja"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};