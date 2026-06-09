import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { SITE_URL, business, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Gilam yuvish Toshkent — Eco Nur | Professional gilam tozalash',
  description:
    'Toshkentda gilam yuvish xizmati. Eco Nur — professional gilam tozalash, 12 000 so\'mdan. Bepul olib ketish va yetkazish. 7+ yillik tajriba, 24/7 qo\'ng\'iroq: +998 95 197 35 35.',
  keywords: [
    'gilam yuvish',
    'gilam yuvish toshkent',
    'gilam tozalash',
    'gilam yuvish narxi',
    'professional gilam yuvish',
    'eco nur',
    'gilam yuvish xizmati',
  ],
  alternates: { canonical: `${SITE_URL}/gilam-yuvish` },
  openGraph: {
    title: 'Gilam yuvish Toshkent — Eco Nur',
    description: 'Professional gilam yuvish xizmati. 12 000 so\'mdan, bepul yetkazish.',
    url: `${SITE_URL}/gilam-yuvish`,
    siteName: 'Eco Nur',
    locale: 'uz_UZ',
    type: 'website',
  },
};

const jsonLd = serviceJsonLd(
  'Gilam yuvish Toshkent',
  'Toshkentda professional gilam yuvish va tozalash xizmati. Har qanday o\'lchamdagi gilamlar, zamonaviy uskunalar, ekologik tozalovchi vositalar.',
  '/gilam-yuvish',
);

export default function GilamYuvishPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <article className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              Gilam yuvish Toshkent — Eco Nur
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              <strong>Eco Nur</strong> — Toshkentda professional{' '}
              <strong>gilam yuvish</strong> va tozalash xizmati. 7 yildan ortiq
              tajriba, 3000+ mamnun mijoz. Gilamlaringizni uyingizdan olib ketamiz,
              professional tozalaymiz va qaytarib yetkazamiz.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <section>
                <h2 className="text-2xl font-bold text-black mb-3">
                  Gilam yuvish narxi
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Narxi <strong>{business.priceFrom.toLocaleString('uz-UZ')} — {business.priceTo.toLocaleString('uz-UZ')} so&apos;m</strong>{' '}
                  ({business.priceUnit} uchun). Aniq narx gilam turiga va o&apos;lchamiga
                  bog&apos;liq. Bepul maslahat uchun qo&apos;ng&apos;iroq qiling.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-black mb-3">
                  Nega Eco Nur?
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>7+ yillik professional tajriba</li>
                  <li>Zamonaviy yuvish uskunalari</li>
                  <li>Ekologik toza vositalar</li>
                  <li>Bepul olib ketish va yetkazish</li>
                  <li>24/7 xizmat — har qanday vaqtda</li>
                </ul>
              </section>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-3">
                Qanday gilamlarni yuvamiz?
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                Wool (jun), sintetik, ipak, viskoza va boshqa barcha turdagi gilamlarni
                professional darajada tozalaymiz. Doira, to&apos;rtburchak, o&apos;lchamli
                va devor gilamlari. Chuqur tozalash texnologiyasi chang, dog&apos; va
                allergenlarni to&apos;liq olib tashlaydi.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-3">
                Gilam yuvish jarayoni
              </h2>
              <ol className="text-gray-600 space-y-2 list-decimal list-inside max-w-3xl">
                <li>Buyurtma bering — telefon yoki sayt orqali</li>
                <li>Gilamni bepul olib ketamiz</li>
                <li>Professional tozalash va quritish</li>
                <li>Tayyor gilamni manzilingizga yetkazamiz</li>
              </ol>
            </section>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${business.phone.replace(/\D/g, '')}`}
                className="bg-[#3a7d1e] text-white font-bold px-8 py-3 rounded-full hover:bg-[#2d6316] transition-colors"
              >
                Qo&apos;ng&apos;iroq qiling
              </a>
              <Link
                href="/#services"
                className="border border-[#3a7d1e] text-[#3a7d1e] font-bold px-8 py-3 rounded-full hover:bg-[#3a7d1e] hover:text-white transition-colors"
              >
                Barcha xizmatlar
              </Link>
            </div>
          </article>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
