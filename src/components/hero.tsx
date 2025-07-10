import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-purple-100 to-blue-100 blur-2xl filter" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-purple-100 to-transparent blur-2xl filter" />
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8 animate-[fade-in_1s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
            <Image
              src="https://placehold.co/128x128.png"
              alt="Andi Siswanto"
              width={128}
              height={128}
              className="rounded-full border-4 border-white shadow-lg"
              data-ai-hint="profile picture"
            />
            <span className="absolute bottom-0 right-0 rounded-full bg-white p-2 text-3xl shadow-md">
              👋
            </span>
          </div>

          <p className="mb-4 text-xl text-gray-600 animate-[fade-in_1s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards] md:text-2xl font-medium">Hello, I'm</p>

          <h1 className="font-headline text-5xl font-extrabold tracking-tight text-gradient sm:text-6xl md:text-7xl lg:text-8xl animate-[fade-in_1s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
            Andi Siswanto
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl md:text-4xl animate-[fade-in_1s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]">
            A Passionate UI/UX Designer
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-500 animate-[fade-in_1s_ease-out_1s] opacity-0 [animation-fill-mode:forwards]">
            Crafting intuitive, engaging, and beautiful digital experiences that solve real-world problems and delight users.
          </p>
          <div className="mt-10 animate-[fade-in_1s_ease-out_1.2s] opacity-0 [animation-fill-mode:forwards]">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] px-10 py-7 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href="#portfolio">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
