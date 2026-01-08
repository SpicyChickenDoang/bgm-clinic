'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { i18n, type Locale } from '@/i18n-config';

function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] as Locale;

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map(locale => (
          <DropdownMenuItem key={locale} asChild>
            <Link href={redirectedPathName(locale)} className={cn(
              "flex items-center gap-2",
              currentLang === locale && "font-bold"
            )}>
              <span className="text-sm uppercase">{locale}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header({ lang, dictionary }: { lang: Locale; dictionary: any }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  if (!dictionary) return null;

  const navLinks = [
    { href: `/${lang}`, label: dictionary.home },
    { href: `/${lang}/about`, label: dictionary.about },
    { href: `/${lang}/services`, label: dictionary.services },
    { href: `/${lang}/homecare`, label: dictionary.homecare },
  ];

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => {
    const isActive = href === `/${lang}` ? pathname === href : pathname.startsWith(href);
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
        <Logo lang={lang} />
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
             <LanguageSwitcher />
            <Button asChild>
              <Link href={`/${lang}/homecare`}>{dictionary.bookNow}</Link>
            </Button>
          </div>
         
          <div className="md:hidden flex items-center gap-2">
             <LanguageSwitcher />
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
                    <Logo lang={lang} />
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
                        href={`/${lang}/homecare`}
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
