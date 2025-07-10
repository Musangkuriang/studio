import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Hand } from 'lucide-react';

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
    <section id="home" className="relative w-full bg-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen pt-24 lg:pt-0">

          {/* Left Column */}
          <div className="lg:w-1/2 lg:pr-10 text-center lg:text-left">
            <p className="text-lg text-gray-600 mb-2">Hello,</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              I Am <span className="text-gradient-john-ray">Jhon Ray</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mt-3">
              UI/UX Designer
            </h2>
            <p className="mt-6 max-w-xl text-lg text-gray-500 mx-auto lg:mx-0">
              Creating beautiful and functional digital experiences that make a difference. Passionate about user-centered design and innovative solutions.
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

          {/* Right Column */}
          <div className="relative lg:w-1/2 mt-12 lg:mt-0 w-full flex items-center justify-center lg:h-screen">
             <div className="absolute right-0 top-0 h-full w-[80%] bg-gradient-to-br from-blue-500 to-purple-600 rounded-bl-full" />
             <div className="relative z-10 w-full max-w-md lg:max-w-none lg:w-auto">
                <Image
                  src="/profile.png"
                  alt="Jhon Ray"
                  width={500}
                  height={500}
                  className="rounded-full border-8 border-white shadow-2xl object-cover w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
                  data-ai-hint="profile picture"
                  priority
                />
             </div>
             <div className="absolute bottom-10 right-10 lg:bottom-16 lg:right-24 z-20 animate-pulse">
                <WavingHandIcon />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
