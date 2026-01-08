export function AboutUsSection({ dictionary }: { dictionary: any }) {
    const t = dictionary;
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                {t.description}
                </p>
            </div>
            </div>
        </section>
    );
}
