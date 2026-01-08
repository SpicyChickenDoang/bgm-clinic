import { CheckCircle2 } from 'lucide-react';

export function InsuranceSection({ dictionary }: { dictionary: any }) {
    const t = dictionary;
    const insuranceItems = [
        t.item1,
        t.item2,
        t.item3,
        t.item4,
      ];

    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                {t.subtitle}
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {insuranceItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>
    );
}
