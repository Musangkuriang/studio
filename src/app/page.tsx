import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full relative">
        <Header />
        <Hero />
      </div>
      <div className="w-full">
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
