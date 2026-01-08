import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services } from '@/lib/data';
import type { Locale } from '@/i18n-config';

export function ServicesOverviewSection({ lang, dictionary }: { lang: Locale, dictionary: any }) {
    const t = dictionary;
    return (
        <section className="bg-card py-20">
            <div className="container mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">{t.ourServices}</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                {t.ourServicesDesc}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.slice(0, 6).map((service) => {
                const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
                return (
                    <Card key={service.title} className="overflow-hidden transition-shadow hover:shadow-lg">
                    {serviceImage && (
                        <div className="relative h-48 w-full">
                        <Image
                            src={serviceImage.imageUrl}
                            alt={serviceImage.description}
                            data-ai-hint={serviceImage.imageHint}
                            fill
                            className="object-cover"
                            />
                        </div>
                    )}
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                        <service.icon className="w-6 h-6 text-primary" />
                        {service.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <Button asChild variant="link" className="p-0 text-primary">
                        <Link href={`/${lang}/services#${service.title.toLowerCase().replace(/ /g, '-')}`}>{t.learnMore}</Link>
                        </Button>
                    </CardContent>
                    </Card>
                )
                })}
            </div>
            </div>
        </section>
    );
}
