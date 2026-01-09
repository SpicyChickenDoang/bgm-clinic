import Link from 'next/link';
import { HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Locale } from '@/i18n-config';

export function Logo({ className, lang = 'en' }: { className?: string, lang: Locale }) {
  return (
    <Link href={`/${lang}`} className={cn("flex items-center gap-2 text-xl font-bold text-primary", className)}>
      <HeartPulse className="h-6 w-6" />
      <span>BGM</span>
    </Link>
  );
}
