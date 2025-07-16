import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const WavingHandIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_1_2)" />
    <path
      d="M23.66 15.392C23.634 15.341 23.593 15.297 23.541 15.263C23.489 15.23 23.43 15.209 23.367 15.203C23.233 15.188 23.103 15.228 22.999 15.314L21.326 16.592C21.284 16.623 21.251 16.663 21.229 16.709C21.206 16.755 21.195 16.805 21.195 16.856V22.067C21.195 22.115 21.205 22.164 21.225 22.209C21.245 22.254 21.274 22.294 21.31 22.327L22.456 23.189C22.564 23.265 22.698 23.301 22.833 23.292C22.969 23.282 23.094 23.226 23.189 23.134L23.498 22.825C23.606 22.717 23.665 22.576 23.665 22.428V15.392H23.66Z"
      fill="#FBB03B"
    />
    <path
      d="M19.998 16.592L18.325 15.314C18.221 15.228 18.091 15.188 17.957 15.203C17.894 15.209 17.835 15.23 17.783 15.263C17.731 15.297 17.69 15.341 17.664 15.392V22.428C17.664 22.576 17.723 22.717 17.831 22.825L18.14 23.134C18.235 23.226 18.36 23.282 18.496 23.292C18.631 23.301 18.765 23.265 18.873 23.189L20.019 22.327C20.055 22.294 20.084 22.254 20.104 22.209C20.124 22.164 20.134 22.115 20.134 22.067V16.856C20.134 16.805 20.122 16.755 20.099 16.709C20.077 16.663 20.044 16.623 20.002 16.592H19.998Z"
      fill="#FBB03B"
    />
    <path
      d="M16.996 15.314L15.323 16.592C15.281 16.623 15.248 16.663 15.226 16.709C15.203 16.755 15.192 16.805 15.192 16.856V22.85C15.192 22.995 15.249 23.133 15.352 23.236C15.455 23.339 15.593 23.396 15.738 23.396C15.808 23.396 15.877 23.382 15.942 23.354L17.107 22.889C17.159 22.866 17.205 22.831 17.241 22.787C17.277 22.743 17.302 22.691 17.314 22.635L17.661 15.392C17.687 15.341 17.646 15.297 17.594 15.263C17.542 15.23 17.483 15.209 17.42 15.203C17.286 15.188 17.156 15.228 17.052 15.314H16.996Z"
      fill="#FBB03B"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_2"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A259FF" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="w-full bg-white overflow-hidden">
      <div>
      <div className="lg:hidden">
        {/* Mobile Layout */}
        <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 pt-24 pb-12 rounded-b-3xl">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
              <div className="relative mx-auto w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
                  <Image
                    src="https://i.ibb.co/sKq5x9b/e-B3s-Yt-E.png"
                    alt="Andi Siswanto"
                    fill
                    sizes="(max-width: 640px) 280px, 320px"
                    className="rounded-full border-8 border-white/50 shadow-2xl object-cover w-full h-full"
                    data-ai-hint="profile picture"
                    priority
                  />
                  <div className="absolute bottom-5 right-5 z-20">
                    <WavingHandIcon />
                  </div>
              </div>
          </div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-10">
           <div className="text-center">
              <p className="text-lg text-gray-600 mb-2">Hello,</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                I Am <span className="text-gradient-john-ray">Andi Siswanto</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mt-3">
                Pemimpin Adaptif Berbasis Pengalaman Lapangan
              </h2>
              <p className="mt-6 max-w-xl text-lg text-gray-500 mx-auto">
                Membangun solusi nyata dari pengalaman lapangan, kepemimpinan berbasis komunitas, dan semangat wirausaha. Saya percaya bahwa produk, tim, dan sistem kerja yang efektif lahir dari ketulusan, inovasi, dan kemauan untuk terus belajar dan tumbuh bersama.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Link href="#contact">
                    Let's talk <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
        </div>
      </div>
      <div className="hidden lg:block container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="flex items-center min-h-screen">
          <div className="w-1/2 pr-10 text-left z-10">
            <p className="text-lg text-gray-600 mb-2">Hello,</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              I Am <span className="text-gradient-john-ray">Andi Siswanto</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mt-3">
              Pemimpin Adaptif Berbasis Pengalaman Lapangan
            </h2>
            <p className="mt-6 max-w-xl text-lg text-gray-500 mx-0">
              Membangun solusi nyata dari pengalaman lapangan, kepemimpinan berbasis komunitas, dan semangat wirausaha. Saya percaya bahwa produk, tim, dan sistem kerja yang efektif lahir dari ketulusan, inovasi, dan kemauan untuk terus belajar dan tumbuh bersama.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link href="#contact">
                  Let's talk <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-1/2 h-screen flex items-center justify-end">
            <div className="absolute inset-y-0 right-0 w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-100 opacity-20" />
                <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-purple-200 to-white opacity-40" />
                <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-gradient-to-bl from-blue-200 to-white opacity-40" />
            </div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-[450px] h-[450px] xl:w-[550px] xl:h-[550px]">
                  <Image
                    src="https://i.ibb.co/sKq5x9b/e-B3s-Yt-E.png"
                    alt="Andi Siswanto"
                    fill
                    sizes="(max-width: 1280px) 450px, 550px"
                    className="rounded-full border-8 md:border-[12px] border-white/50 shadow-2xl object-cover w-full h-full"
                    data-ai-hint="profile picture"
                    priority
                  />
                  <div className="absolute bottom-10 right-10 z-20">
                    <WavingHandIcon />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
