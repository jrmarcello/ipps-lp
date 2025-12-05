/**
 * Configurações da Igreja - Edite este arquivo para personalizar a LP
 */

export const churchConfig = {
  // Informações básicas
  name: 'Igreja Presbiteriana Portal do Sol',
  shortName: 'IPPS',
  slogan: 'Não apenas um lugar para ir, mas uma igreja para crescer!',
  
  // Logo - substitua pelo caminho real quando tiver
  // Coloque a logo em /public/images/logo.png
  logo: {
    // Quando tiver a logo, mude para: '/images/logo.png'
    src: null as string | null,
    alt: 'Logo IPPS',
  },
  
  // Contato
  contact: {
    email: 'contato@ippsjp.com.br',
    phone: '(83) 99999-9999',
    whatsapp: '5583999999999', // Número com código do país para link do WhatsApp
  },
  
  // Endereço
  address: {
    venue: 'Villa Vanna Hall',
    street: 'Av. Gov. Antonio da Silva Mariz, 1590',
    neighborhood: 'Portal do Sol',
    city: 'João Pessoa',
    state: 'PB',
    zipCode: '58046-517',
    country: 'Brasil',
    // Coordenadas para o mapa (opcional - melhora precisão)
    coordinates: {
      lat: -7.135,
      lng: -34.825,
    },
  },
  
  // Redes sociais
  social: {
    instagram: {
      url: 'https://www.instagram.com/ippsjp',
      handle: '@ippsjp',
    },
    youtube: {
      url: 'https://www.youtube.com/@ipportaldosol',
      handle: '@ipportaldosol',
    },
    // Adicione mais redes conforme necessário
    facebook: null,
    twitter: null,
  },
  
  // Cores da marca (referência - as cores principais estão no tailwind.config)
  colors: {
    primary: '#f97316', // Orange-500
    secondary: '#431407', // Brown-900
  },
};

// Função helper para obter endereço formatado
export const getFullAddress = () => {
  const { street, neighborhood, city, state, zipCode } = churchConfig.address;
  return `${street} - ${neighborhood}, ${city} - ${state}, ${zipCode}`;
};

// Função helper para URL do Google Maps
export const getGoogleMapsUrl = () => {
  const address = getFullAddress();
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
};

// Função helper para link do WhatsApp
export const getWhatsAppUrl = (message?: string) => {
  const { whatsapp } = churchConfig.contact;
  const defaultMessage = 'Olá! Gostaria de saber mais sobre a IPPS.';
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message || defaultMessage)}`;
};
