import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const FigmaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#2C2C2C"/>
    <path d="M8 18C9.65685 18 11 16.6569 11 15C11 13.3431 9.65685 12 8 12C6.34315 12 5 13.3431 5 15C5 16.6569 6.34315 18 8 18Z" fill="#0ACF83"/>
    <path d="M8 12C9.65685 12 11 10.6569 11 9C11 7.34315 9.65685 6 8 6C6.34315 6 5 7.34315 5 9C5 10.6569 6.34315 12 8 12Z" fill="#A259FF"/>
    <path d="M13 12C14.6569 12 16 10.6569 16 9C16 7.34315 14.6569 6 13 6C11.3431 6 10 7.34315 10 9C10 10.6569 11.3431 12 13 12Z" fill="#F24E1E"/>
    <path d="M13 18C14.6569 18 16 16.6569 16 15C16 13.3431 14.6569 12 13 12C11.3431 12 10 13.3431 10 15C10 16.6569 11.3431 18 13 18Z" fill="#FF7262"/>
    <path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" fill="#1ABCFE"/>
  </svg>
);

export default function About() {
  return (
    <section id="about" className="w-full bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex justify-center items-center">
             <div className="relative w-96 h-96">
                <Image
                    src="https://i.ibb.co/sKq5x9b/e-B3s-Yt-E.png"
                    alt="Foto profil Andi Siswanto"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-full object-cover shadow-lg border-8 border-white"
                    data-ai-hint="person profile"
                />
             </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Me
            </h2>
            <p className="text-lg text-gray-600">
              I'm a designer who loves to create meaningful and beautiful experiences for people. I believe that good design is not just about aesthetics, but about understanding users and solving their problems.
            </p>
            <p className="text-lg text-gray-600">
              With a strong foundation in user research, wireframing, prototyping, and visual design, I bring ideas to life from concept to launch. I thrive in collaborative environments and am always eager to learn and grow.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-primary bg-transparent px-8 py-6 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary/5 hover:scale-105"
              >
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
