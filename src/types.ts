export interface City {
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  description: string;
}

export interface Country {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  universities: string[];
  requirements: string[];
  visaProcess: string[];
  capital: string;
  cities: City[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Study Abroad Tips' | 'Student Success Stories' | 'Visa Updates' | 'University News';
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  text: string;
  country: string;
  image: string;
}

export interface Office {
  name: string;
  address: string;
  contact: string;
  isMain?: boolean;
  mapLink?: string;
}
