import { Card } from '@/components/ui/card';
import { Clock, Users, House, FileText, ShieldCheck, Ambulance } from 'lucide-react';

export function WhyBGMSection({ dictionary }: { dictionary: any }) {
  const t = dictionary;
  const whyBGMItems = [
    {
      icon: Clock,
      title: t.open24Hours,
      description: t.open24HoursDesc,
    },
    {
      icon: Users,
      title: t.licensedStaff,
      description: t.licensedStaffDesc,
    },
    {
      icon: FileText,
      title: t.englishReport,
      description: t.englishReportDesc,
    },
    {
      icon: ShieldCheck,
      title: t.insurance,
      description: t.insuranceDesc,
    },
    {
      icon: House,
      title: t.homeVisit,
      description: t.homeVisitDesc,
    },
    {
      icon: Ambulance,
      title: t.ambulance,
      description: t.ambulanceDesc,
    },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">{t.subtitle}</p>
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
  );
}
