import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services, doctors } from '@/lib/data';
import { Clock, Users, House } from 'lucide-react';
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

      {/* Key Highlights */}
      <section className="bg-background py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold">{t.availability}</h3>
            <p className="text-muted-foreground mt-2">
              {t.availabilityDesc}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold">{t.professionals}</h3>
            <p className="text-muted-foreground mt-2">
              {t.professionalsDesc}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <House className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold">{t.homecareServices}</h3>
            <p className="text-muted-foreground mt-2">
              {t.homecareServicesDesc}
            </p>
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
      
      {/* Trust Elements */}
      <section className="bg-background py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{t.trusted}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              {t.trustedDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.meetDoctors}</h3>
              <div className="space-y-6">
                {doctors.slice(0, 2).map(doctor => {
                   const doctorImage = PlaceHolderImages.find(p => p.id === doctor.imageId);
                  return (
                    <div key={doctor.name} className="flex items-center gap-4">
                      {doctorImage && (
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={doctorImage.imageUrl} alt={doctor.name} data-ai-hint={doctorImage.imageHint}/>
                          <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <h4 className="font-bold">{doctor.name}</h4>
                        <p className="text-primary">{doctor.role}</p>
                        <p className="text-sm text-muted-foreground mt-1">{doctor.bio}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
               <Button asChild variant="outline" className="mt-8">
                  <Link href={`/${lang}/about`}>{t.seeAllStaff}</Link>
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {clinicImage1 && <Image src={clinicImage1.imageUrl} alt={clinicImage1.description} data-ai-hint={clinicImage1.imageHint} width={400} height={300} className="rounded-lg shadow-md object-cover aspect-video"/>}
              {clinicImage2 && <Image src={clinicImage2.imageUrl} alt={clinicImage2.description} data-ai-hint={clinicImage2.imageHint} width={400} height={300} className="rounded-lg shadow-md object-cover aspect-video"/>}
              {licenseImage && <Image src={licenseImage.imageUrl} alt={licenseImage.description} data-ai-hint={licenseImage.imageHint} width={400} height={300} className="rounded-lg shadow-md object-cover col-span-2 aspect-video"/>}
            </div>
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
