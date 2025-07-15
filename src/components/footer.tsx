import Link from 'next/link';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Twitter, href: '#' },
];

export default function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3 animate-fade-in opacity-0 [animation-delay:200ms]">
          <div className="space-y-4">
            <Link href="#home" className="flex items-center">
              <span className="text-3xl font-extrabold text-gradient">AS</span>
            </Link>
            <p className="max-w-xs text-base text-gray-600">
              A UI/UX Designer dedicated to creating user-centric digital products.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#about" className="text-base text-gray-600 hover:text-primary">About</Link></li>
                <li><Link href="#portfolio" className="text-base text-gray-600 hover:text-primary">Portfolio</Link></li>
                <li><Link href="#contact" className="text-base text-gray-600 hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Connect
              </h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-base text-gray-600 hover:text-primary">LinkedIn</Link></li>
                <li><Link href="#" className="text-base text-gray-600 hover:text-primary">GitHub</Link></li>
                <li><Link href="#" className="text-base text-gray-600 hover:text-primary">Twitter</Link></li>
              </ul>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Social Media
            </h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className="text-gray-500 hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-base text-gray-500 animate-fade-in opacity-0 [animation-delay:300ms]">
          <p className="flex items-center justify-center">
            © {new Date().getFullYear()} Andi Siswanto. Made with <Heart className="mx-1 h-5 w-5 text-red-500 fill-current" /> in Jakarta.
          </p>
        </div>
      </div>
    </footer>
  );
}
