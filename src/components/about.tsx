import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function About() {
  return (
    <section id="about" className="w-full bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative flex justify-center items-center">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-200 via-blue-200 to-white rounded-full opacity-30 blur-xl"></div>
             <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                <Image
                    src="https://i.imghippo.com/files/coY4314uA.jpeg"
                    alt="Foto profil Andi Siswanto"
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 384px"
                    className="rounded-full object-cover shadow-2xl border-8 border-white"
                    data-ai-hint="person working"
                />
             </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Tentang Saya
            </h2>
            <p className="text-lg text-gray-600">
              Saya adalah pribadi yang tulus,adaptif, pekerja keras, dan selalu haus belajar. Memiliki pengalaman lintas bidang mulai dari teknik mesin, kewirausahaan, desain grafis, hingga kepemimpinan organisasi. Terbiasa memulai sesuatu dari nol dan membangunnya dengan ketekunan, kreativitas, dan semangat kolaboratif. Saya percaya bahwa keberhasilan dicapai bukan hanya lewat kerja keras, tapi juga lewat kejujuran, konsistensi, dan kemauan untuk terus berkembang.
            </p>
            <p className="text-lg text-gray-600">
              Dengan pengalaman di bidang teknik, wirausaha, desain visual, dan kepemimpinan tim, saya terbiasa mengubah ide menjadi solusi nyata yang berdampak. Saya berkembang dalam lingkungan kerja yang kolaboratif dan dinamis, serta selalu antusias untuk terus belajar, tumbuh, dan memberi kontribusi yang berarti.
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
