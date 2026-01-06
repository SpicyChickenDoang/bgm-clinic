import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import type { Locale } from '@/i18n-config';

export function Footer({ lang, dictionary }: { lang: Locale, dictionary: any }) {
  if (!dictionary) return null;
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4 md:col-span-2">
            <Logo lang={lang} />
            <p className="max-w-md text-muted-foreground">
              {dictionary.tagline}
            </p>
            <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5"/></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="h-5 w-5"/></a>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5"/></a>
                </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{dictionary.quickLinks}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${lang}/about`} className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href={`/${lang}/services`} className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href={`/${lang}/homecare`} className="text-muted-foreground hover:text-primary">Homecare</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{dictionary.contactUs}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>contact@balimedcare.com</li>
              <li>+62 123 456 7890</li>
              <li>Kuta, Bali, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} BaliMedCare. {dictionary.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
