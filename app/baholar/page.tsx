import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Baholar — Eco Nur',
  description: 'Eco Nur xizmatlari narxlari',
};

export default function BaholarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="md:hidden">
        <Header />
      </div>
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4 text-center">
          Baholar
        </h1>
        <p className="text-gray-400 text-base md:text-lg text-center">
          Bu sahifa tez orada to&apos;ldiriladi...
        </p>
      </main>
      <Footer />
    </div>
  );
}
