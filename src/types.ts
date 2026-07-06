export interface Service {
  id: number;
  title: string;
  description: string;
  detail: string;
  iconName: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'limpeza' | 'tratamento' | 'manutencao';
  image: string;
  caption: string;
}

export interface BeforeAfterItem {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface Differentiator {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  certification: string;
}
