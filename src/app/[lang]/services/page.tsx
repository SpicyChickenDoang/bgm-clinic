import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Clock, UserCheck, PhoneCall } from "lucide-react";
import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

export default async function ServicesPage({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.services;
  return (
    <div className="bg-background">
      <section className="container mx-auto py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t.title}</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </section>

      <div className="container mx-auto pb-24 space-y-16">
        {services.map((service, index) => {
          const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
          return (
            <section key={service.title} id={service.title.toLowerCase().replace(/ /g, '-')} className="scroll-mt-20">
              <Card className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">{service.longDescription}</p>
                  
                  <div className="space-y-4 my-6">
                    <div className="flex items-start gap-3">
                      <UserCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">{t.whoIsItFor}</h4>
                        <p className="text-muted-foreground">{service.whoIsItFor}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">{t.availability}</h4>
                        <p className="text-muted-foreground">{service.availability}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                     <Button asChild>
                      <Link href={`/${lang}/homecare`}>{t.bookOrRequest}</Link>
                    </Button>
                    <Button asChild variant="outline">
                       <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                         <PhoneCall className="w-4 h-4 mr-2" />
                         WhatsApp
                       </a>
                    </Button>
                  </div>
                </div>

                {serviceImage && (
                  <div className="relative h-64 lg:h-full w-full">
                    <Image
                      src={serviceImage.imageUrl}
                      alt={serviceImage.description}
                      data-ai-hint={serviceImage.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </Card>
            </section>
          );
        })}
      </div>
    </div>
  );
}
