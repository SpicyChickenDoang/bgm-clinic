'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, ShieldCheck, MapPin, BrainCircuit, Bot, Droplets } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

export type HomecareRequest = {
  name: string;
  phone: string;
  address: string;
  medicalCondition: string;
};

export function HomecareClientPage({ dictionary }: { dictionary: any }) {
  const { toast } = useToast();

  const t = dictionary;

  if (!t) {
    return (
      <div className="container mx-auto py-16 md:py-24">
        <div className="space-y-4">
          <Skeleton className="h-12 w-1/2 mx-auto" />
          <Skeleton className="h-6 w-3/4 mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <section className="container mx-auto py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t.title}</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </section>

      <section className="container mx-auto pb-24">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-8">{t.howItWorks}</h2>
            <div className="space-y-8 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border -z-10"></div>
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold ring-4 ring-background">1</div>
                    <div>
                        <h3 className="font-bold text-xl">{t.step1Title}</h3>
                        <p className="text-muted-foreground">{t.step1Desc}</p>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold ring-4 ring-background">2</div>
                    <div>
                        <h3 className="font-bold text-xl">{t.step2Title}</h3>
                        <p className="text-muted-foreground">{t.step2Desc}</p>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold ring-4 ring-background">3</div>
                    <div>
                        <h3 className="font-bold text-xl">{t.step3Title}</h3>
                        <p className="text-muted-foreground">{t.step3Desc}</p>
                    </div>
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-16 mb-8">{t.whatWeProvide}</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle className="flex gap-3 items-center"><User className="text-primary"/>{t.consultations}</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle className="flex gap-3 items-center"><Droplets className="text-primary"/>{t.ivTherapy}</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle className="flex gap-3 items-center"><ShieldCheck className="text-primary"/>{t.woundCare}</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle className="flex gap-3 items-center"><MapPin className="text-primary"/>{t.coverage}</CardTitle></CardHeader></Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
