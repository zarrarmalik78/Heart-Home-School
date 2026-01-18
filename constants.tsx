import React from 'react';
import { Program, Teacher, Testimony } from './types';

export const COLORS = {
  navy: '#0B172A',
  cream: '#FDFCF8',
  red: '#FF4D4D',
  yellow: '#FFD93D',
  green: '#6BCB77',
  blue: '#4D96FF',
};

/**
 * PRODUCTION IMAGE PATHS
 * 1. Use leading slashes (e.g., '/images/...') to resolve from the site root.
 * 2. Ensure filenames match your actual files (case-sensitive on Netlify).
 * 3. Don't include 'public/' in the path if 'public' is your root deployment folder.
 */
export const IMAGES = {
  // Hero and About Sections
  hero: './images/general/hero.png',
  whyUs: './images/general/about.jpg',
  parentSaima: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100',
  
  // Programs
  progToddler: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600&h=400',
  progPreschool: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600&h=400',
  progKinder: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600&h=400',
  progArts: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600&h=400',
  
  // Teachers
  teacherFatima: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
  teacherUsman: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
  teacherZainab: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400',
};

export const PROGRAMS: Program[] = [
  {
    id: 'toddler',
    title: 'Toddler Care',
    ageRange: '1.5 - 3 Years',
    description: 'A nurturing environment where toddlers explore the world through sensory play and early social interaction, following local cultural values.',
    image: IMAGES.progToddler,
    color: 'bg-[#FFF8F0]',
    accentColor: '#FFD93D',
  },
  {
    id: 'preschool',
    title: 'Preschool Core',
    ageRange: '3 - 4 Years',
    description: 'Fostering independence and curiosity through structured play, creative arts, and early Urdu & English literacy.',
    image: IMAGES.progPreschool,
    color: 'bg-[#F0F7FF]',
    accentColor: '#4D96FF',
  },
  {
    id: 'kindergarten',
    title: 'Kindergarten',
    ageRange: '4 - 5 Years',
    description: 'Preparing children for primary school with a focus on cognitive skills, math logic, and emotional maturity following the Oxford curriculum standards.',
    image: IMAGES.progKinder,
    color: 'bg-[#F0FFF4]',
    accentColor: '#6BCB77',
  },
  {
    id: 'after-school',
    title: 'Creative Arts',
    ageRange: '3 - 5 Years',
    description: 'Specialized afternoon programs focusing on Calligraphy, Naat recitation, and movement to unleash creative potential.',
    image: IMAGES.progArts,
    color: 'bg-[#FFF0F0]',
    accentColor: '#FF4D4D',
  },
];

export const TEACHERS: Teacher[] = [
  {
    name: 'Ms. Fatima Ahmed',
    role: 'Lead Educator',
    image: IMAGES.teacherFatima,
    description: '10+ years experience in early childhood development with a passion for bilingual storytelling in Urdu and English.',
  },
  {
    name: 'Mr. Usman Malik',
    role: 'Physical Education',
    image: IMAGES.teacherUsman,
    description: 'Encouraging healthy lifestyles through traditional games and modern movement exercises.',
  },
  {
    name: 'Ms. Zainab Khan',
    role: 'Art & Calligraphy',
    image: IMAGES.teacherZainab,
    description: 'Helping children express themselves through vibrant colors and the beautiful art of creative writing.',
  },
];
