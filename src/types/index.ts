export type PageId = 'home' | 'about' | 'services' | 'industries' | 'projects' | 'hse' | 'contact';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'oil-gas' | 'power' | 'cement' | 'fabrication' | 'civil';
  categoryLabel: string;
  location: string;
  year: string;
  scope: string;
  tonnageOrScale: string;
  image: string;
  highlights: string[];
  status: 'Completed' | 'Ongoing';
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  capabilities: string[];
  standards: string[];
  equipment: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  applications: string[];
  keyClients: string[];
  keyCodes: string[];
}

export interface MachineryItem {
  name: string;
  category: string;
  capacity: string;
  quantity: number;
}

export interface LeadershipMember {
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  bio: string;
}
