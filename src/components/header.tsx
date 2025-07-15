'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300", 
        isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-600">
            <span className="text-xl font-bold text-white">AS</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                <span className="text-base font-medium text-gray-700 transition-colors hover:text-primary">{link.label}</span>
                </Link>
            ))}
            </nav>
            <Button
                asChild
                className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link href="#contact">
                  Let's talk <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-white">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                    <Link href="#home" onClick={() => setIsOpen(false)}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-600">
                            <span className="text-xl font-bold text-white">AS</span>
                        </div>
                    </Link>
                </div>
                <nav className="mt-8 flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                      <span className="text-xl font-medium text-gray-700 hover:text-primary">{link.label}</span>
                    </Link>
                  ))}
                </nav>
                 <div className="mt-8">
                    <Button
                        asChild
                        size="lg"
                        className="w-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-4 text-lg font-semibold text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        <Link href="#contact">
                            Let's talk
                        </Link>
                    </Button>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}