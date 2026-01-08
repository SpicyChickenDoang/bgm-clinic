import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { i18n, type Locale } from '@/i18n-config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getDictionary } from '@/lib/get-dictionary';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: 'BGM - Primary Care & 24/7 Homecare in Bali',
  description: 'Your trusted partner for professional medical services in Bali. We offer general consultations, primary care, 24/7 homecare, IV therapy, and more.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className="scroll-smooth">
      <body className={cn('min-h-screen bg-background font-body antialiased', ptSans.variable)}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header lang={params.lang} dictionary={dictionary.header} />
          <main className="flex-1">{children}</main>
          <Footer lang={params.lang} dictionary={dictionary.footer} />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
