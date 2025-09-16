export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Statistic {
  icon: string;
  number: string;
  label: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: string;
  location: string;
  type: string;
  units: number;
  floors: number;
  area: string;
  stats: {
    units: number;
    sqFt: number;
    completion: string;
  };
  features: string[];
}

export interface ProjectStats {
  units: number;
  sqFt: number;
  completion: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  interest: string;
  message: string;
}