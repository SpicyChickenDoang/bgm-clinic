import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const instagramImages = PlaceHolderImages.filter(p => p.id.startsWith('instagram-'));

export function InstagramFeedSection({ dictionary }: { dictionary: any }) {
    const t = dictionary;
    return (
        <section className="py-20">
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
    );
}
