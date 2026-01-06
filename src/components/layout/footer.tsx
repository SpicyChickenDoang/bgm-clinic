import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4 md:col-span-2">
            <Logo />
            <p className="max-w-md text-muted-foreground">
              Your trusted partner for primary care and 24/7 homecare services in Bali.
            </p>
            <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5"/></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="h-5 w-5"/></a>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5"/></a>
                </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/homecare" className="text-muted-foreground hover:text-primary">Homecare Request</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>contact@balimedcare.com</li>
              <li>+62 123 456 7890</li>
              <li>Kuta, Bali, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} BaliMedCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
