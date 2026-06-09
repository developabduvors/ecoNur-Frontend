import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FeatureSection } from '@/components/FeatureSection';
import { ResultsSection } from '@/components/ResultsSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header faqat mobil — desktop header HeroSection ichida */}
      <div className="md:hidden">
        <Header />
      </div>
      <main className="flex-grow flex flex-col">
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <ResultsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
