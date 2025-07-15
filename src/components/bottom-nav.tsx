'use client';

import Link from 'next/link';
import { Home, User, LayoutGrid, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '#home', icon: Home, label: 'Home' },
  { href: '#portfolio', icon: LayoutGrid, label: 'Portfolio' },
  { href: '#about', icon: User, label: 'About', isCenter: true },
  { href: '#contact', icon: Mail, label: 'Contact' },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'portfolio', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  
  const renderNavItems = (items: typeof navItems) => {
    return items.map((item) => {
      const isActive = activeSection === item.href.substring(1);
      if (item.isCenter) return null;

      return (
        <Link href={item.href} key={item.label} className="flex-1">
          <div className="flex flex-col items-center justify-center gap-1 transition-colors duration-300">
            <item.icon
              className={cn(
                'h-6 w-6',
                isActive ? 'text-primary' : 'text-gray-400'
              )}
            />
            <span
              className={cn(
                'text-xs font-medium',
                isActive ? 'text-primary' : 'text-gray-500'
              )}
            >
              {item.label}
            </span>
          </div>
        </Link>
      );
    });
  };

  const centerItem = navItems.find(item => item.isCenter);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="relative mx-auto max-w-sm h-24 flex justify-center">
        <div className="absolute bottom-4 flex items-center justify-around h-16 w-[calc(100%-2rem)] bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
          <div className="flex w-full h-full">
            {renderNavItems(navItems.slice(0, 2))}
            <div className="flex-1"></div>
            {renderNavItems(navItems.slice(2))}
          </div>
        </div>
        {centerItem && (
          <Link href={centerItem.href} className="absolute top-0">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg -translate-y-1/2 transition-transform duration-300 hover:scale-110">
              <centerItem.icon className="h-8 w-8 text-white" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
