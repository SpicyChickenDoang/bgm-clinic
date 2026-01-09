import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionary';
import { HeroSection } from '@/components/home/hero-section';
import { WhyBGMSection } from '@/components/home/why-bgm-section';
import { ServicesOverviewSection } from '@/components/home/services-overview-section';
import { InsuranceSection } from '@/components/home/insurance-section';
import { MedicalServicesSection } from '@/components/home/medical-services-section';
import { AboutUsSection } from '@/components/home/about-us-section';
import { ContactSection } from '@/components/home/contact-section';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.home;

  return (
    <div className="flex flex-col">
      <HeroSection lang={lang} dictionary={t} />
      <WhyBGMSection dictionary={t.whyBGM} />
      <ServicesOverviewSection lang={lang} dictionary={t} />
      <InsuranceSection dictionary={t.insurance} />
      <MedicalServicesSection dictionary={t.medicalServices} />
      <AboutUsSection dictionary={t.aboutUs} />
      <ContactSection lang={lang} dictionary={t.contact} />
    </div>
  );
}
