import React from 'react';
import { Sun } from 'lucide-react';
import { churchConfig } from '../config/church';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'light' | 'dark';
  className?: string;
}

const sizes = {
  sm: { icon: 24, text: 'text-lg', subtext: 'text-[10px]' },
  md: { icon: 32, text: 'text-xl', subtext: 'text-xs' },
  lg: { icon: 48, text: 'text-3xl', subtext: 'text-sm' },
};

/**
 * Componente de Logo da Igreja
 * 
 * Quando a logo real estiver disponível:
 * 1. Coloque o arquivo em /public/images/logo.png
 * 2. Atualize churchConfig.logo.src em /config/church.ts
 */
export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true, 
  variant = 'dark',
  className = '' 
}) => {
  const { icon, text, subtext } = sizes[size];
  const hasCustomLogo = churchConfig.logo.src !== null;
  
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-800';
  const subtextColor = variant === 'light' ? 'text-brand-100' : 'text-brand-600';
  const iconColor = variant === 'light' ? 'text-brand-400' : 'text-brand-500';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {hasCustomLogo ? (
        <img 
          src={churchConfig.logo.src!} 
          alt={churchConfig.logo.alt}
          className={`h-${icon === 24 ? '6' : icon === 32 ? '8' : '12'} w-auto`}
        />
      ) : (
        <div className={iconColor}>
          <Sun size={icon} strokeWidth={2.5} />
        </div>
      )}
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${text} leading-none ${textColor} tracking-tight`}>
            {churchConfig.shortName}
          </span>
          <span className={`${subtext} ${subtextColor} font-medium hidden sm:block`}>
            {churchConfig.name}
          </span>
        </div>
      )}
    </div>
  );
};
