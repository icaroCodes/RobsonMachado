export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  location: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period?: string;
}