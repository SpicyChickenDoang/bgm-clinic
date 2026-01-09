'use client';

import { useState, useEffect, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomecareForm } from "@/components/homecare-form";
import { getSummary } from '@/app/homecare/actions';
import { User, ShieldCheck, MapPin, BrainCircuit, Bot, Droplets } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

export type HomecareRequest = {
  name: string;
  phone: string;
  address: string;
  medicalCondition: string;
};

// This would typically come from a database
const initialRequests = [
  { address: 'Ubud, Bali', medicalCondition: 'Food poisoning' },
  { address: 'Seminyak, Bali', medicalCondition: 'Dehydration, needs IV' },
];

export function HomecareClientPage({ dictionary }: { dictionary: any }) {
  const [requests, setRequests] = useState<Array<{address: string, medicalCondition: string}>>(initialRequests);
  const [summary, setSummary] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const t = dictionary;

  const fetchSummary = () => {
    if (!t) return;
    startTransition(async () => {
      const result = await getSummary({ requests });
      if (result.error && requests.length > 0) {
        toast({
          variant: "destructive",
          title: t.summaryError,
          description: t.summaryErrorDesc,
        });
      } else {
        setSummary(result.summary || t.noRequests);
      }
    });
  };

  useEffect(() => {
    fetchSummary();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  const handleFormSubmit = (data: HomecareRequest) => {
    const newRequest = { address: data.address, medicalCondition: data.medicalCondition };
    const updatedRequests = [...requests, newRequest];
    setRequests(updatedRequests);
    
    startTransition(async () => {
      const result = await getSummary({ requests: updatedRequests });
      if (result.error) {
         toast({
          variant: "destructive",
          title: t.summaryError,
          description: t.summaryErrorDesc,
        });
      } else {
        setSummary(result.summary);
        toast({
          title: t.form.successTitle,
          description: t.form.successDesc,
        });
      }
    });
  };

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

          <div className="lg:col-span-2">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>{t.requestAVisit}</CardTitle>
                <CardDescription>{t.requestAVisitDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <HomecareForm onSubmit={handleFormSubmit} isLoading={isPending} dictionary={t.form} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       <section className="bg-card py-24">
        <div className="container mx-auto max-w-4xl text-center">
            <BrainCircuit className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold">{t.aiSummaryTitle}</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                {t.aiSummaryDesc}
            </p>
            <Card className="text-left bg-background">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Bot /> {t.generatedSummary}</CardTitle>
                </CardHeader>
                <CardContent>
                    {isPending && !summary ? (
                      <div className="space-y-2">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-5/6" />
                      </div>
                    ) : (
                        <p className="text-foreground/90 whitespace-pre-wrap">{summary || t.loadingSummary}</p>
                    )}
                    {requests.length > 0 && (
                        <div className="mt-4 pt-4 border-t">
                            <h4 className="font-semibold text-sm mb-2">{t.recentRequests} ({requests.length}):</h4>
                            <div className="flex flex-wrap gap-2">
                                {requests.map((r, i) => (
                                    <span key={i} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{r.address.split(',')[0]}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
