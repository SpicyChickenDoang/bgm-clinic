import { Stethoscope, HeartPulse, Home, Droplets, ClipboardCheck, Activity } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  longDescription: string;
  whoIsItFor: string;
  availability: string;
  icon: LucideIcon;
  imageId: string;
};

export const services: Service[] = [
  {
    title: 'General Consultation',
    description: 'Comprehensive health checks and medical advice from our experienced doctors.',
    longDescription: 'Our General Consultation service provides a thorough assessment of your health. Whether you have a specific concern or need a routine check-up, our doctors are here to offer expert medical advice and personalized treatment plans.',
    whoIsItFor: 'Anyone seeking general medical advice, health screenings, or treatment for non-emergency conditions.',
    availability: 'By Appointment',
    icon: Stethoscope,
    imageId: 'service-consultation',
  },
  {
    title: 'Primary Care',
    description: 'Long-term health management and preventive care for you and your family.',
    longDescription: 'As your primary care provider, we focus on long-term health, managing chronic conditions, and promoting a healthy lifestyle. We build lasting relationships with our patients to provide continuous and comprehensive care.',
    whoIsItFor: 'Individuals and families looking for a dedicated, long-term healthcare partner.',
    availability: 'By Appointment',
    icon: HeartPulse,
    imageId: 'service-primary-care',
  },
  {
    title: '24/7 Homecare',
    description: 'Professional medical care delivered to your home, hotel, or villa, anytime.',
    longDescription: 'Our 24/7 Homecare service brings professional medical care to you. From doctor visits and nursing care to emergency assistance, our team is equipped to handle your medical needs in the comfort of your own space.',
    whoIsItFor: 'Patients who are unable to visit the clinic, require urgent care at home, or prefer the convenience of home-based treatment.',
    availability: '24/7 On-Call',
    icon: Home,
    imageId: 'service-homecare',
  },
  {
    title: 'IV Therapy / Infusion',
    description: 'Rehydrate, replenish, and rejuvenate with our custom IV therapy treatments.',
    longDescription: 'Our IV Therapy services deliver essential vitamins, minerals, and hydration directly into your bloodstream for maximum absorption. Choose from a range of infusions to boost your energy, improve immunity, or recover from illness.',
    whoIsItFor: 'Individuals seeking a quick wellness boost, hydration, or recovery support.',
    availability: 'By Appointment / Home Service',
    icon: Droplets,
    imageId: 'service-iv',
  },
  {
    title: 'Medical Checkups',
    description: 'Tailored health screening packages for personal and corporate needs.',
    longDescription: 'We offer a variety of medical checkup packages, from basic screenings to comprehensive health evaluations. Our goal is to help you understand your health status and detect potential issues early.',
    whoIsItFor: 'Individuals for annual checkups, pre-employment screening, or visa requirements.',
    availability: 'By Appointment',
    icon: ClipboardCheck,
    imageId: 'service-checkup',
  },
  {
    title: 'Other Outpatient Services',
    description: 'Including minor wound care, vaccinations, and more.',
    longDescription: 'Our clinic provides a range of other outpatient services, including but not limited to minor surgical procedures, wound dressing, nebulization, and administering vaccinations. Contact us to inquire about specific services.',
    whoIsItFor: 'Patients needing specific treatments or procedures that do not require hospital admission.',
    availability: 'By Appointment',
    icon: Activity,
    imageId: 'service-outpatient',
  },
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
