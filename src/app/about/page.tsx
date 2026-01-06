import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { doctors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutUsPage() {
  const licenseImage = PlaceHolderImages.find(p => p.id === 'license-1');

  return (
    <div className="bg-background">
      <section className="container mx-auto py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About BaliMedCare</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Your health is our priority. Learn about our commitment to providing exceptional medical care in Bali.
        </p>
      </section>

      <section className="pb-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-3xl font-bold">Our Story & Mission</h2>
            <p>
              BaliMedCare was founded with a simple yet powerful mission: to provide accessible, high-quality, and compassionate healthcare to both the residents and visitors of Bali. We saw a need for a reliable medical service that combines international standards with a deep understanding of local needs.
            </p>
            <p>
              Our values are rooted in trust, professionalism, and patient-centered care. We strive to create a welcoming and safe environment where patients feel heard, respected, and confident in the treatment they receive. Whether in our clinic or through our homecare services, our goal is to be your dependable health partner on the Island of the Gods.
            </p>
            <Button asChild className="mt-4">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Clinic Licenses & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We are a fully licensed and regulated medical clinic, adhering to the highest standards of safety and care set by the Indonesian Ministry of Health.
                </p>
                {licenseImage && (
                  <Image
                    src={licenseImage.imageUrl}
                    alt={licenseImage.description}
                    data-ai-hint={licenseImage.imageHint}
                    width={500}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Professional Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Our dedicated team of doctors and medical staff are here to provide you with the best possible care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => {
              const doctorImage = PlaceHolderImages.find(p => p.id === doctor.imageId);
              return (
                <Card key={doctor.name} className="text-center flex flex-col items-center p-8">
                  {doctorImage && (
                    <Avatar className="w-32 h-32 mb-4 border-4 border-primary/20">
                      <AvatarImage src={doctorImage.imageUrl} alt={doctor.name} data-ai-hint={doctorImage.imageHint} />
                      <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  )}
                  <h3 className="text-xl font-bold">{doctor.name}</h3>
                  <p className="text-primary font-medium">{doctor.role}</p>
                  <p className="text-muted-foreground mt-4 text-sm">{doctor.bio}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
