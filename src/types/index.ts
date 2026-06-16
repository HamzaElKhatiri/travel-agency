export type Destination = {
  id: number;
  city: string;
  tag: string;
  price: string;
  duration: string;
  description: string;
  image: string;
  mood: 'Solaire' | 'Aventure' | 'Urbain';
};

export type Stat = {
  value: string;
  label: string;
};

export type ExperienceStep = {
  number: string;
  title: string;
  text: string;
};

export type ContactFormValues = {
  fullName: string;
  email: string;
  destination: string;
  budget: string;
  message: string;
};

export type AsyncState = 'idle' | 'loading' | 'success' | 'error';
