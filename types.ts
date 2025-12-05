export interface ServiceTime {
  id: string;
  title: string;
  day: string;
  time: string;
  status: 'active' | 'coming_soon';
  description?: string;
}

export interface SocialLink {
  platform: 'instagram' | 'youtube';
  url: string;
  handle: string;
}