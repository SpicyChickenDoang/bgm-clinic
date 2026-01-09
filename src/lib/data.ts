import { Stethoscope, HeartPulse, Home, Droplets, ClipboardCheck, Activity, Shield, Zap, Flame, Dna, GlassWater, Bike, Sun, Atom, BrainCircuit } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  longDescription: string;
  whoIsItFor: string;
  availability: string;
  icon: LucideIcon;
  imageUrl: string;
};

export const services: Service[] = [
  {
    title: 'Basic Immune Booster',
    description: 'Strengthen your body\'s defenses. Available in Basic, Standard, and Super formulations.',
    longDescription: 'Our Immune Booster IV drips are packed with vitamins and antioxidants to help supercharge your immune system, protecting you from illness and helping you recover faster.',
    whoIsItFor: 'Travelers, or anyone feeling run-down or wanting to prevent sickness.',
    availability: 'Home Service / By Appointment',
    icon: Shield,
    imageUrl: '/assets/image/basic-immune-booster.webp',
  },
  {
    title: 'Standard Immune Booster',
    description: 'Strengthen your body\'s defenses. Available in Basic, Standard, and Super formulations.',
    longDescription: 'Our Immune Booster IV drips are packed with vitamins and antioxidants to help supercharge your immune system, protecting you from illness and helping you recover faster.',
    whoIsItFor: 'Travelers, or anyone feeling run-down or wanting to prevent sickness.',
    availability: 'Home Service / By Appointment',
    icon: Shield,
    imageUrl: '/assets/image/standard-immune-booster.webp',
  },
  {
    title: 'Super Immune Booster',
    description: 'Strengthen your body\'s defenses. Available in Basic, Standard, and Super formulations.',
    longDescription: 'Our Immune Booster IV drips are packed with vitamins and antioxidants to help supercharge your immune system, protecting you from illness and helping you recover faster.',
    whoIsItFor: 'Travelers, or anyone feeling run-down or wanting to prevent sickness.',
    availability: 'Home Service / By Appointment',
    icon: Shield,
    imageUrl: '/assets/image/super-immune-booster.webp',
  },
  {
    title: 'Bali Belly & Digestive Care',
    description: 'Fast relief from digestive distress and food poisoning symptoms.',
    longDescription: 'Specifically designed to combat the dreaded "Bali Belly," this infusion rehydrates your body, replenishes lost nutrients, and helps soothe your digestive system for quick recovery.',
    whoIsItFor: 'Anyone suffering from traveler\'s diarrhea, food poisoning, or digestive issues.',
    availability: '24/7 On-Call / Home Service',
    icon: Activity,
    imageUrl: '/assets/image/super-bali-belly-iv.webp',
  },
  {
    title: 'GERD / Gastritis Infusion',
    description: 'Soothe and manage symptoms of acid reflux and gastritis.',
    longDescription: 'This specialized IV treatment helps reduce inflammation and discomfort caused by GERD and gastritis, providing relief and supporting gastric healing.',
    whoIsItFor: 'Individuals experiencing chronic acid reflux, heartburn, or gastritis.',
    availability: 'Home Service / By Appointment',
    icon: Flame,
    imageUrl: '/assets/image/gerd-infusion.webp',
  },
  {
    title: 'Candida IV Treatment',
    description: 'Systemic treatment to help manage and control Candida overgrowth.',
    longDescription: 'An intravenous approach to support your body in fighting systemic Candida infections, helping to restore your internal microbial balance and alleviate related symptoms.',
    whoIsItFor: 'Patients diagnosed with or suspecting systemic Candida overgrowth.',
    availability: 'By Appointment',
    icon: Dna,
    imageUrl: '/assets/image/candida-iv-treatment.webp',
  },
  {
    title: 'Gym Power & Recovery Infusion',
    description: 'Enhance performance and accelerate muscle recovery post-workout.',
    longDescription: 'Packed with amino acids, electrolytes, and vitamins, this infusion helps you prepare for intense physical activity and significantly reduces muscle soreness and recovery time afterwards.',
    whoIsItFor: 'Athletes, fitness enthusiasts, and anyone looking to optimize their workouts.',
    availability: 'Home Service / By Appointment',
    icon: Bike,
    imageUrl: '/assets/image/gym-power-infusion.webp',
  },
  {
    title: 'Hangover & Jet Lag Infusion',
    description: 'Quickly recover from a long flight or a big night out.',
    longDescription: 'Rehydrate, detoxify, and replenish essential nutrients to combat the exhausting effects of jet lag or a hangover, helping you feel refreshed and energized in no time.',
    whoIsItFor: 'Travelers, party-goers, or anyone needing a fast-track to feeling normal again.',
    availability: '24/7 On-Call / Home Service',
    icon: Sun,
    imageUrl: '/assets/image/hangover-infusion.webp',
  },
  {
    title: 'Iron Infusion',
    description: 'Replenish your iron levels to combat fatigue and improve energy.',
    longDescription: 'An effective treatment for iron deficiency and anemia, our Iron Infusion directly delivers iron to your body, bypassing the gut for maximum absorption and quick results.',
    whoIsItFor: 'Individuals with diagnosed iron deficiency, anemia, or those who struggle with oral iron supplements.',
    availability: 'By Appointment',
    icon: Droplets,
    imageUrl: '/assets/image/iron-infusion.webp',
  },
  {
    title: 'Pure NAD+ & NAD+ Booster',
    description: 'Anti-aging and cellular energy enhancement for peak vitality.',
    longDescription: 'NAD+ is a crucial coenzyme for cellular energy and repair. This infusion supports brain function, boosts metabolism, and promotes healthy aging from the inside out.',
    whoIsItFor: 'Those seeking anti-aging benefits, improved cognitive function, and enhanced energy levels.',
    availability: 'By Appointment',
    icon: BrainCircuit,
    imageUrl: '/assets/image/Pure-NAD+.webp',
  }
];

export type Doctor = {
  name: string;
  role: string;
  bio: string;
  imageId: string;
};

export const doctors: Doctor[] = [
  {
    name: 'Dr. Ayu Lestari',
    role: 'General Practitioner',
    bio: 'Graduated from Udayana University, Dr. Ayu has over 10 years of experience in primary care and emergency medicine. She is passionate about holistic patient care.',
    imageId: 'doctor-1',
  },
  {
    name: 'Dr. Budi Santoso',
    role: 'Head of Homecare Services',
    bio: 'Dr. Budi specializes in geriatric and home-based medical care. He leads our homecare team, ensuring the highest standard of service across Bali.',
    imageId: 'doctor-2',
  },
  {
    name: 'Wayan Surya, S.Kep., Ns.',
    role: 'Senior Nurse',
    bio: 'Wayan is a certified nurse with extensive experience in IV therapy and critical care. He is known for his gentle approach and professionalism.',
    imageId: 'doctor-3',
  },
];
