'use client';

import { useState, useEffect, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomecareForm } from "@/components/homecare-form";
import { getSummary } from './actions';
import { Contact, ShieldCheck, User, MapPin, BrainCircuit, Bot } from "lucide-react";
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

export default function HomecarePage() {
  const [requests, setRequests] = useState<Array<{address: string, medicalCondition: string}>>(initialRequests);
  const [summary, setSummary] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const fetchSummary = () => {
    startTransition(async () => {
      const result = await getSummary({ requests });
      if (result.error && requests.length > 0) {
        toast({
          variant: "destructive",
          title: "AI Summary Error",
          description: result.error,
        });
      } else {
        setSummary(result.summary);
      }
    });
  };

  useEffect(() => {
    fetchSummary();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run on initial load

  const handleFormSubmit = (data: HomecareRequest) => {
    const newRequest = { address: data.address, medicalCondition: data.medicalCondition };
    const updatedRequests = [...requests, newRequest];
    setRequests(updatedRequests);
    
    startTransition(async () => {
      const result = await getSummary({ requests: updatedRequests });
      if (result.error) {
         toast({
          variant: "destructive",
          title: "AI Summary Error",
          description: result.error,
        });
      } else {
        setSummary(result.summary);
        toast({
          title: "Request Submitted!",
          description: "We will contact you shortly. The AI summary has been updated.",
        });
      }
    });
  };

  return (
    <div className="bg-background">
      <section className="container mx-auto py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">24/7 Homecare Services</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Receive professional medical care in the comfort of your home, hotel, or villa anywhere in Bali.
        </p>
      </section>

      <section className="container mx-auto pb-24">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="space-y-8 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border -z-10"></div>
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold ring-4 ring-background">1</div>
                    <div>
                        <h3 className="font-bold text-xl">Contact Clinic</h3>
                        <p className="text-muted-foreground">Submit the form on this page or call us directly. Provide your location and a brief description of your medical needs.</p>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold ring-4 ring-background">2</div>
                    <div>
                        <h3 className="font-bold text-xl">Assessment</h3>
                        <p className="text-muted-foreground">Our on-call doctor will assess your situation over the phone to determine the best course of action.</p>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold ring-4 ring-background">3</div>
                    <div>
                        <h3 className="font-bold text-xl">Doctor/Nurse Visit</h3>
                        <p className="text-muted-foreground">A qualified doctor or nurse will be dispatched to your location for consultation, diagnosis, and treatment.</p>
                    </div>
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-16 mb-8">What We Provide</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle className="flex gap-3 items-center"><User className="text-primary"/>Doctor Consultations</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle className="flex gap-3 items-center"><Droplets className="text-primary"/>IV Therapy</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle className="flex gap-3 items-center"><ShieldCheck className="text-primary"/>Wound Care</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle className="flex gap-3 items-center"><MapPin className="text-primary"/>Coverage across Bali</CardTitle></CardHeader></Card>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Request a Home Visit</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you promptly.</CardDescription>
              </CardHeader>
              <CardContent>
                <HomecareForm onSubmit={handleFormSubmit} isLoading={isPending} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       <section className="bg-card py-24">
        <div className="container mx-auto max-w-4xl text-center">
            <BrainCircuit className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold">AI-Powered Service Area Summary</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                This summary is generated by AI based on the locations from submitted homecare requests. It helps us understand and visualize our service coverage. Submit a request to see it update in real-time!
            </p>
            <Card className="text-left bg-background">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Bot /> Generated Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    {isPending && !summary ? (
                      <div className="space-y-2">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-5/6" />
                      </div>
                    ) : (
                        <p className="text-foreground/90 whitespace-pre-wrap">{summary || 'Loading summary...'}</p>
                    )}
                    {requests.length > 0 && (
                        <div className="mt-4 pt-4 border-t">
                            <h4 className="font-semibold text-sm mb-2">Recent Request Locations ({requests.length}):</h4>
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
