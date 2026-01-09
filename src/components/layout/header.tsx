'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { i18n, type Locale } from '@/i18n-config';

function getCurrentLang(pathname: string): Locale {
  const langFromPath = pathname.split('/')[1] as Locale;
  if (i18n.locales.includes(langFromPath)) {
    return langFromPath;
  }
  return i18n.defaultLocale;
}

function LanguageToggle() {
  const pathname = usePathname();
  const currentLang = getCurrentLang(pathname);
  const otherLang = i18n.locales.find(l => l !== currentLang) || i18n.defaultLocale;

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <Button variant="outline" size="icon" asChild>
      <Link href={redirectedPathName(otherLang)} prefetch={false}>
        <span className="text-sm font-bold uppercase">{otherLang}</span>
        <span className="sr-only">Toggle language</span>
      </Link>
    </Button>
  );
}

export function Header({ lang, dictionary }: { lang: Locale; dictionary: any }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = getCurrentLang(pathname);

  if (!dictionary) return null;

  const navLinks = [
    { href: `/${currentLang}`, label: dictionary.home },
    { href: `/${currentLang}/about`, label: dictionary.about },
    { href: `/${currentLang}/services`, label: dictionary.services },
    // { href: `/${currentLang}/homecare`, label: dictionary.homecare },
  ];

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => {
    const isActive = href === `/${currentLang}` ? pathname === href : pathname.startsWith(href);
    return (
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          'transition-colors hover:text-primary',
          isActive ? 'text-primary font-semibold' : 'text-muted-foreground',
          className
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo lang={currentLang} />
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
             <LanguageToggle />
            <Button asChild>
              <Link href={`/${currentLang}/homecare`}>{dictionary.bookNow}</Link>
            </Button>
          </div>
         
          <div className="md:hidden flex items-center gap-2">
             <LanguageToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <Logo lang={currentLang} />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4 mt-8 text-lg">
                    {navLinks.map(link => (
                      <NavLink key={link.href} {...link} className="py-2" />
                    ))}
                  </nav>
                  <div className="mt-auto">
                    <Button asChild className="w-full">
                      <Link
                        href={`/${currentLang}/homecare`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dictionary.bookNow}
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
