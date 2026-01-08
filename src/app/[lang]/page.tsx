import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services, doctors } from '@/lib/data';
import { Clock, Users, House, FileText, ShieldCheck, Ambulance } from 'lucide-react';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionary';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');
const clinicImage1 = PlaceHolderImages.find(p => p.id === 'clinic-1');
const clinicImage2 = PlaceHolderImages.find(p => p.id === 'clinic-2');
const licenseImage = PlaceHolderImages.find(p => p.id === 'license-1');
const instagramImages = PlaceHolderImages.filter(p => p.id.startsWith('instagram-'));

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.home;

  const whyBGMItems = [
    {
      icon: Clock,
      title: t.whyBGM.open24Hours,
      description: t.whyBGM.open24HoursDesc,
    },
    {
      icon: Users,
      title: t.whyBGM.licensedStaff,
      description: t.whyBGM.licensedStaffDesc,
    },
    {
      icon: FileText,
      title: t.whyBGM.englishReport,
      description: t.whyBGM.englishReportDesc,
    },
    {
      icon: ShieldCheck,
      title: t.whyBGM.insurance,
      description: t.whyBGM.insuranceDesc,
    },
    {
      icon: House,
      title: t.whyBGM.homeVisit,
      description: t.whyBGM.homeVisitDesc,
    },
    {
      icon: Ambulance,
      title: t.whyBGM.ambulance,
      description: t.whyBGM.ambulanceDesc,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">{t.whatsappNow}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why BGM Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{t.whyBGM.title}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">{t.whyBGM.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBGMItems.map((item, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
      
      {/* Instagram Feed */}
      <section className="bg-card py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold">{t.followJourney}</h2>
             <p className="text-muted-foreground mt-2">{t.instagramHandle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramImages.map(img => (
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" key={img.id} className="block overflow-hidden rounded-lg aspect-square">
                <Image src={img.imageUrl} alt={img.description} data-ai-hint={img.imageHint} width={300} height={300} className="w-full h-full object-cover transition-transform hover:scale-105"/>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Summary */}
      <section className="bg-background py-20">
         <div className="container mx-auto">
           <Card className="max-w-4xl mx-auto p-8 text-center">
             <CardHeader>
               <CardTitle className="text-2xl md:text-3xl">{t.getInTouch}</CardTitle>
             </CardHeader>
             <CardContent>
              <p className="text-muted-foreground mb-6">
                {t.contactDesc}
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
                <p><strong>{t.phone}:</strong> +62 123 456 7890</p>
                <p><strong>{t.email}:</strong> contact@balimedcare.com</p>
              </div>
              <Button asChild className="mt-8">
                <Link href={`/${lang}/homecare`}>{t.requestHomecare}</Link>
              </Button>
             </CardContent>
           </Card>
         </div>
       </section>
    </div>
  );
}
