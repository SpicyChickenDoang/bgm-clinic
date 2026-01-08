import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import type { Locale } from '@/i18n-config';

export function ContactSection({ lang, dictionary }: { lang: Locale, dictionary: any }) {
    const t = dictionary;
    return (
        <section className="bg-card py-20">
            <div className="container mx-auto">
            <Card className="max-w-4xl mx-auto p-8 text-center">
                <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">{t.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-5 h-5"/>
                        <span>{t.open24Hours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-5 h-5"/>
                        <span>{t.location}</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 text-lg mt-4">
                        <a href="https://wa.me/62xxxxxxxxxx" className="flex items-center gap-2 hover:text-primary"><Phone className="w-5 h-5"/> {t.whatsapp}</a>
                        <a href="mailto:info@baligeneralmedical.com" className="flex items-center gap-2 hover:text-primary"><Mail className="w-5 h-5"/> {t.email}</a>
                    </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={`/${lang}/homecare`}>{t.bookAppointment}</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                    <a href="https://wa.me/62xxxxxxxxxx" target="_blank" rel="noopener noreferrer">{t.whatsappUs}</a>
                    </Button>
                </div>
                </CardContent>
            </Card>
            </div>
        </section>
    );
}
