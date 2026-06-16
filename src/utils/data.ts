import type { Destination, ExperienceStep, Stat } from '../types';

export const heroImage = '/generated/project_9bnhq2_mqgg8lnv-hero.webp';

export const destinations: Destination[] = [
  {
    id: 1,
    city: 'Bali',
    tag: 'Retraite privée',
    price: '2 490€',
    duration: '10 jours · villas · guide local',
    description: 'Un séjour solaire entre jungle, plages confidentielles, tables privées et rituels bien-être.',
    image: '/generated/project_9bnhq2_mqgg8lnv-supporting.webp',
    mood: 'Solaire'
  },
  {
    id: 2,
    city: 'Islande',
    tag: 'Road trip cinéma',
    price: '3 120€',
    duration: '8 jours · 4x4 · aurores boréales',
    description: 'Glaciers, sources chaudes et itinéraire spectaculaire pensé comme un film grandeur nature.',
    image: '/generated/project_9bnhq2_mqgg8lnv-feature.webp',
    mood: 'Aventure'
  },
  {
    id: 3,
    city: 'Tokyo',
    tag: 'Culture futuriste',
    price: '2 870€',
    duration: '9 jours · hôtels design · food tour',
    description: 'Une immersion ultra design entre gastronomie, quartiers iconiques et adresses cachées.',
    image: '/generated/project_9bnhq2_mqgg8lnv-hero.webp',
    mood: 'Urbain'
  }
];

export const stats: Stat[] = [
  { value: '97%', label: 'voyageurs recommandent NovaTrips après leur retour' },
  { value: '42', label: 'itinéraires exclusifs en édition limitée' },
  { value: '24/7', label: 'conciergerie humaine pendant le séjour' }
];

export const experienceSteps: ExperienceStep[] = [
  {
    number: '01',
    title: 'Brief ultra précis',
    text: 'On capte votre rythme, vos envies, vos limites et votre définition du voyage parfait.'
  },
  {
    number: '02',
    title: 'Design d’itinéraire',
    text: 'Nos experts assemblent hôtels, expériences, transferts et moments libres sans surcharge.'
  },
  {
    number: '03',
    title: 'Conciergerie live',
    text: 'Un humain reste disponible pendant le séjour pour ajuster, réserver ou résoudre.'
  }
];
