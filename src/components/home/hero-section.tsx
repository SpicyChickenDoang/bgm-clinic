import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Locale } from '@/i18n-config';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');

export function HeroSection({ lang, dictionary }: { lang: Locale, dictionary: any }) {
  const t = dictionary;
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground p-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-md">
          {t.heroTitle}
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl font-light">
          {t.heroSubtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={`/${lang}/homecare`}>{t.bookAppointment}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <a href="https://wa.me/62xxxxxxxxxx" target="_blank" rel="noopener noreferrer">{t.whatsappNow}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
