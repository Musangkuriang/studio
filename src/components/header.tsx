'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center">
          <span className="text-3xl font-extrabold text-gradient">AS</span>
        </Link>
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="text-lg font-medium text-gray-600 transition-colors hover:text-primary">{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-white">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="#home" onClick={() => setIsOpen(false)}>
                    <span className="text-2xl font-extrabold text-gradient">AS</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="mt-8 flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                      <span className="text-xl font-medium text-gray-700 hover:text-primary">{link.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
