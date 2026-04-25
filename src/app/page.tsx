import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import TeamSection from '@/components/TeamSection';
import ContactForm from '@/components/ContactForm';
import { defaultKeywords, siteDescription } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Venkatesh CA - Chartered Accountant and Financial Services',
  description: siteDescription,
  keywords: [
    ...defaultKeywords,
    'Venkatesh CA Bangalore',
    'Venkatesh auditor',
    'CA for small business India',
  ],
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <TeamSection />
      <ContactForm />
    </>
  );
}
