import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Baholar — Gilam, divan, korpacha yuvish narxlari | Eco Nur',
  description: 'Eco Nur xizmatlari narxlari: gilam yuvish 1 kv.m — 12 000 so\'m, divan tozalash, korpacha yuvish, burchatka tozalash.',
};

export default function BaholarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header — mobil va desktop uchun */}
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-20">
        {/* Orqaga qaytish */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#3a7d1e]
                     transition-colors duration-200 mb-10 self-start max-w-screen-xl w-full
                     mx-auto md:px-16 lg:px-24"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Bosh sahifaga qaytish
        </Link>

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
