import Image from 'next/image';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: 'Pendidikan',
    description: 'Pendidikan Terakhir SMA/SMK Sederajat',
    image: 'https://i.imghippo.com/files/WoL4988dco.png',
    tags: ['SMA/SMK Sederajat'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'education person',
    details: {
      title: "Detail Pendidikan",
      description: "Ini adalah deskripsi detail tentang latar belakang pendidikan saya. Anda dapat mengisinya dengan riwayat sekolah, kursus yang relevan, atau pencapaian akademis lainnya.",
      image: 'https://i.imghippo.com/files/WoL4988dco.png',
      aiHint: 'education school'
    }
  },
  {
    title: 'Pengalaman Kerja',
    description: 'Saya Memiliki Beberapa Pengalaman Kerja Mulai Dari Kepemimpinan,Wirausaha,Web Developer,Kerja Lapangan Dll',
    image: 'https://placehold.co/600x400.png',
    tags: ['Mobile Design', 'Pengawas Desa', 'Pelatih & Pembina Pencak Silat'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'mobile banking',
    details: {
      title: "Detail Pengalaman Kerja",
      description: "Di sini Anda bisa menguraikan pengalaman kerja secara rinci. Jelaskan peran, tanggung jawab, dan pencapaian di setiap posisi, terutama yang berkaitan dengan kepemimpinan, wirausaha, dan teknis.",
      image: 'https://placehold.co/800x600.png',
      aiHint: 'office work'
    }
  },
  {
    title: 'Karya',
    description: 'Saya Memiliki Beberapa Karya Yang Berhasil Saya Bangun Dari Web Developer Dan Desain Grafis',
    image: 'https://placehold.co/600x400.png',
    tags: ['Web Aplikasi', 'Desain Grafis', 'Prestasi Kepemimpinan'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'healthcare telehealth',
    details: {
      title: "Detail Karya",
      description: "Bagian ini untuk memamerkan karya-karya Anda. Tampilkan proyek web, hasil desain grafis, atau bukti pencapaian kepemimpinan. Jelaskan proses dan hasil dari setiap karya.",
      image: 'https://placehold.co/800x600.png',
      aiHint: 'creative design'
    }
  },
  {
    title: 'Target',
    description: 'Jika Saya Di Berikan Kesempatan Untuk Memimpin, Saya ingin Memimpin Dunia Dengan Kejujuran Dan Ketulusan',
    image: 'https://placehold.co/600x400.png',
    tags: ['EdTech', 'SaaS', 'Interaction Design'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'elearning platform',
    details: {
      title: "Detail Target & Visi",
      description: "Jelaskan visi kepemimpinan Anda di sini. Uraikan bagaimana Anda akan menerapkan nilai-nilai seperti kejujuran dan ketulusan dalam memimpin, serta target-target spesifik yang ingin Anda capai.",
      image: 'https://placehold.co/800x600.png',
      aiHint: 'leadership vision'
    }
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
            Berikut adalah beberapa pilar penting dalam perjalanan saya. Masing-masing mewakili tantangan dan pembelajaran yang berharga.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-md sm:max-w-3xl p-0">
                <div className="relative h-56 w-full">
                  <Image
                    src={project.details.image}
                    alt={project.details.title}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint={project.details.aiHint}
                  />
                </div>
                <DialogHeader className="p-6">
                  <DialogTitle className="text-3xl font-bold font-headline">{project.details.title}</DialogTitle>
                  <DialogDescription className="text-lg text-gray-600 pt-4">
                    {project.details.description}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
