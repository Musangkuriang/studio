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
    image: 'https://i.imghippo.com/files/iruC6868MxM.png',
    tags: ['SMA/SMK Sederajat'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'education person',
    details: {
      title: "Detail Pendidikan",
      description: "Ini adalah deskripsi detail tentang latar belakang pendidikan saya. Anda dapat mengisinya dengan riwayat sekolah, kursus yang relevan, atau pencapaian akademis lainnya.",
      image: 'https://i.imghippo.com/files/iruC6868MxM.png',
      aiHint: 'education school'
    }
  },
  {
    title: 'Pengalaman Kerja',
    description: 'Saya Memiliki Beberapa Pengalaman Kerja Mulai Dari Kepemimpinan,Wirausaha,Web Developer,Kerja Lapangan Dll',
    image: 'https://i.imghippo.com/files/xAuO9561XwE.png',
    tags: ['Mobile Design', 'Pengawas Desa', 'Pelatih & Pembina Pencak Silat'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'mobile banking',
    details: {
      title: "Detail Pengalaman Kerja",
      description: `🧰 Pengalaman Kerja

1. Teknik Engineer – CV. Bojonegoro Teknik Utama
📍 Bojonegoro | 2016
Menangani perawatan dan perbaikan mesin industri. Bekerja di lingkungan teknis dengan tanggung jawab operasional harian. Perusahaan tutup setelah beberapa bulan bekerja.

2. Tenaga Bantuan Las – CV (pekerja event)
📍 Bojonegoro | 2016 (selama masa transisi)
Bekerja membantu pengelasan di proyek-proyek tertentu. Mendapat pengalaman langsung dalam bidang fabrikasi dan kerja lapangan.

3. Pedagang Pentol Keliling (Usaha Mandiri)
📍 Bojonegoro | 2017 – 2020
Mendirikan dan mengelola usaha pentol keliling dari nol dengan modal minim. Membangun relasi pelanggan, mengelola keuangan harian, dan menjaga kualitas produk.

4. Founder & Owner – Bakso Cocot E Tonggo (Frozen Food Brand)
📍 Bojonegoro | 2020
Merancang dan mengembangkan produk pentol beku (frozen food). Menangani sendiri seluruh proses: produksi, pengemasan, branding, pemasaran, dan distribusi. Berhenti karena alasan kesehatan dan evaluasi bisnis jangka panjang.

5. Desainer & Operator – Toko Printing dan Desain
📍 Bojonegoro | 2021 – Sekarang (paralel dengan aktivitas lain)
Membuat desain promosi, undangan, branding produk, dan media visual lainnya. Mengelola kebutuhan digital printing dan pengarsipan digital.

6. Wirausaha Kecil – Snack, Parfum, Deterjen (Usaha Mandiri)
📍 Bojonegoro | 2021 – Sekarang
Merancang kemasan, strategi branding, dan distribusi. Menjalankan seluruh operasional sendiri: dari riset pasar hingga penjualan.

7. Pengawas Desa – Bawaslu Kabupaten Tuban
📍 Tuban | 2023 – Sekarang
Mengawasi pelaksanaan tahapan Pemilu di tingkat desa. Berkoordinasi dengan pihak-pihak terkait dan memastikan jalannya proses demokrasi sesuai aturan.

8. Pelatih & Pembina Pencak Silat – Organisasi Keolahragaan
📍 Kecamatan Parengan | 2017 – Sekarang
Membina generasi muda dalam pencak silat. Murid berhasil meraih prestasi hingga level provinsi (PORPROV IX 2025 di Batu). Aktif dalam kegiatan sosial dan pembinaan karakter.`,
      image: 'https://i.imghippo.com/files/xAuO9561XwE.png',
      aiHint: 'office work'
    }
  },
  {
    title: 'Karya',
    description: 'Saya Memiliki Beberapa Karya Yang Berhasil Saya Bangun Dari Web Developer Dan Desain Grafis',
    image: 'https://i.imghippo.com/files/hyoC1966OOY.png',
    tags: ['Web Aplikasi', 'Desain Grafis', 'Prestasi Kepemimpinan'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'creative design',
    details: {
      title: "Detail Karya",
      description: "Bagian ini untuk memamerkan karya-karya Anda. Tampilkan proyek web, hasil desain grafis, atau bukti pencapaian kepemimpinan. Jelaskan proses dan hasil dari setiap karya.",
      image: 'https://i.imghippo.com/files/hyoC1966OOY.png',
      aiHint: 'creative design'
    }
  },
  {
    title: 'Target',
    description: 'Jika Saya Di Berikan Kesempatan Untuk Memimpin, Saya ingin Memimpin Dunia Dengan Kejujuran Dan Ketulusan',
    image: 'https://i.imghippo.com/files/AAC6024kg.png',
    tags: ['Visi', 'Kepemimpinan', 'Global'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'leadership world',
    details: {
      title: "Detail Target & Visi",
      description: "Jelaskan visi kepemimpinan Anda di sini. Uraikan bagaimana Anda akan menerapkan nilai-nilai seperti kejujuran dan ketulusan dalam memimpin, serta target-target spesifik yang ingin Anda capai.",
      image: 'https://i.imghippo.com/files/AAC6024kg.png',
      aiHint: 'leadership vision'
    }
  },
];

const renderExperienceDetails = (description: string) => {
    const lines = description.split('\n').filter(line => line.trim() !== '');
    const title = lines.shift(); 
  
    const experiences = [];
    let currentExperience: { title: string; location: string; points: string[] } | null = null;
  
    for (const line of lines) {
      if (/^\d+\./.test(line)) { 
        if (currentExperience) experiences.push(currentExperience);
        currentExperience = { title: line.replace(/^\d+\.\s*/, ''), location: '', points: [] };
      } else if (line.startsWith('📍')) {
        if (currentExperience) currentExperience.location = line.replace('📍', '').trim();
      } else {
        if (currentExperience) currentExperience.points.push(line);
      }
    }
    if (currentExperience) experiences.push(currentExperience);
  
    return (
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">{title}</h4>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="p-4 rounded-lg border border-gray-200 bg-gray-50/50">
              <h5 className="font-bold text-gray-900 text-lg">{exp.title}</h5>
              <p className="text-sm text-gray-500 mb-2">{exp.location}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

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
              <DialogContent className="max-w-md sm:max-w-3xl p-0 flex flex-col max-h-[90vh]">
                <div className="relative h-56 w-full flex-shrink-0">
                  <Image
                    src={project.details.image}
                    alt={project.details.title}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint={project.details.aiHint}
                  />
                </div>
                <div className="overflow-y-auto">
                  <DialogHeader className="p-6 text-left">
                    <DialogTitle className="text-3xl font-bold font-headline">{project.details.title}</DialogTitle>
                    <DialogDescription asChild>
                      <div className="text-lg text-gray-600 pt-4">
                        {project.title === 'Pengalaman Kerja' 
                            ? renderExperienceDetails(project.details.description) 
                            : <div className="whitespace-pre-line">{project.details.description}</div>
                        }
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
