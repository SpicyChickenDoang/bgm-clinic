import { Stethoscope, Beaker, Droplets, House, FileText } from 'lucide-react';

export function MedicalServicesSection({ dictionary }: { dictionary: any }) {
    const t = dictionary;
    const medicalServicesItems = [
        { icon: Stethoscope, label: t.outpatient },
        { icon: Beaker, label: t.lab },
        { icon: Droplets, label: t.infusion },
        { icon: House, label: t.homecare },
        { icon: FileText, label: t.mcu },
    ];

    return (
        <section className="bg-card py-16 md:py-24">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {medicalServicesItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-5 text-primary">
                        <item.icon className="w-10 h-10" />
                    </div>
                    <p className="font-semibold text-center">{item.label}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
