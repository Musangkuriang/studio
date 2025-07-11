import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Pendidikan',
    description: 'A comprehensive dashboard for managing products, orders, and customers for an e-commerce platform.',
    image: 'https://i.ibb.co/sKq5x9b/e-B3s-Yt-E.png',
    tags: ['UI/UX', 'React', 'Data Visualization'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'dashboard analytics'
  },
  {
    title: 'Pengalaman Kerja',
    description: 'Saya Memiliki Beberapa Pengalaman Kerja Mulai Dari Kepemimpinan,Wirausaha,Web Developer,Kerja Lapangan Dll',
    image: 'https://i.ibb.co/sKq5x9b/e-B3s-Yt-E.png',
    tags: ['Mobile Design', 'Pengawas Desa', 'Pelatih & Pembina Pencak Silat'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'mobile banking'
  },
  {
    title: 'Karya',
    description: 'Saya Memiliki Beberapa Karya Yang Berhasil Saya Bangun Dari Web Developer Dan Desain Grafis',
    image: 'https://i.ibb.co/sKq5x9b/e-B3s-Yt-E.png',
    tags: ['Web Aplikasi', 'Desain Grafis', 'Prestasi Kepemimpinan'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'healthcare telehealth'
  },
  {
    title: 'Target',
    description: 'An online platform for students and teachers to manage courses, assignments, and collaborative learning.',
    image: 'https://i.ibb.co/sKq5x9b/e-B3s-Yt-E.png',
    tags: ['EdTech', 'SaaS', 'Interaction Design'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'elearning platform'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Portofolio Saya
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Here are some of the projects I'm proud of. Each one was a unique challenge and a great learning experience.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.aiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-headline text-2xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-base text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-purple-200 bg-purple-50/50 text-purple-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Link href={project.liveUrl} target="_blank">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-md backdrop-blur-sm transition-colors hover:bg-white hover:text-primary">
                      <ExternalLink className="h-5 w-5" />
                    </span>
                  </Link>
                  <Link href={project.githubUrl} target="_blank">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-md backdrop-blur-sm transition-colors hover:bg-white hover:text-primary">
                      <Github className="h-5 w-5" />
                    </span>
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
