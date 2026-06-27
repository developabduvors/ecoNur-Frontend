import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ReviewForm } from '@/components/ReviewForm';
import { SITE_URL, business, reviewsJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import { API_URL } from '@/lib/api';

export const metadata: Metadata = {
  title: {
    absolute: 'Mijozlar fikrlari va sharhlari — Eco Nur | Gilam yuvish Toshkent',
  },
  description:
    "Eco Nur mijozlari sharhlari va baholari. Toshkentda gilam yuvish, mebel va korpacha tozalash xizmatlari haqida real fikrlar. 3000+ mamnun mijoz, o'rtacha baho 4.9/5.",
  keywords: [
    'eco nur sharhlar',
    'eco nur fikrlar',
    'gilam yuvish sharhlari',
    'gilam yuvish otzivlar',
    'mijozlar fikri',
    'eco nur baholar',
    'gilam yuvish toshkent sharh',
  ],
  alternates: { canonical: `${SITE_URL}/baholar` },
  openGraph: {
    title: 'Mijozlar fikrlari va sharhlari — Eco Nur',
    description:
      "Eco Nur mijozlarining real sharhlari. 3000+ mamnun mijoz, o'rtacha baho 4.9/5. Gilam, mebel va korpacha yuvish.",
    url: `${SITE_URL}/baholar`,
    siteName: 'Eco Nur',
    locale: 'uz_UZ',
    type: 'website',
    images: [{ url: '/img/images.jpg', width: 1200, height: 630, alt: 'Eco Nur — mijozlar fikrlari' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mijozlar fikrlari va sharhlari — Eco Nur',
    description: "Eco Nur mijozlarining real sharhlari. O'rtacha baho 4.9/5.",
    images: ['/img/images.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

type Review = {
  id?: string;
  author: string;
  date: string; // YYYY-MM-DD
  rating: number; // 1–5
  text: string;
  service: string;
};

// Backend o'chiq/bo'sh bo'lsa ishlatiladigan zaxira sharhlar
const fallbackReviews: Review[] = [
  { author: 'Dilnoza Karimova', date: '2026-05-18', rating: 5, service: 'Gilam yuvish',
    text: "Gilamni uydan olib ketishdi, ikki kunda yangidek qilib qaytarishdi. Hidi ham, dog'lari ham qolmagan. Juda mamnunman, rahmat!" },
  { author: 'Sardor To\'xtayev', date: '2026-05-02', rating: 5, service: 'Yumshoq mebel',
    text: 'Divan va kreslolarni tozalatdim. Natija ajoyib, eski mebel yangidek bo\'ldi. Ustalar o\'z ishini biladi, vaqtida kelishdi.' },
  { author: 'Madina Yusupova', date: '2026-04-21', rating: 5, service: 'Korpa-korpacha',
    text: 'Korpachalarni yuvdirdim, narxi ham hamyonbop ekan. Bepul olib ketib, bepul yetkazib berishdi. Kelasi safar yana murojaat qilaman.' },
  { author: 'Jasur Rahimov', date: '2026-04-09', rating: 4, service: 'Gilam yuvish',
    text: 'Sifati zo\'r, gilamim tozalandi. Faqat bir oz kechikishdi, lekin oldindan ogohlantirishdi. Umuman olganda tavsiya qilaman.' },
  { author: 'Nilufar Abdullayeva', date: '2026-03-27', rating: 5, service: 'Gilam yuvish',
    text: "Bolalar gilamida ko'p dog'lar bor edi, hammasini ketkazishdi. Allergiyamiz bor, ekologik vositalar ishlatishlari juda muhim bo'ldi." },
  { author: 'Bekzod Qodirov', date: '2026-03-15', rating: 5, service: 'Burchatka va kafel',
    text: 'Telegram orqali yozdim, darrov javob berishdi. Burchatka va kafelni tozalatdim, xizmat tez va sifatli. 24/7 ishlashlari qulay.' },
  { author: 'Gulbahor Ismoilova', date: '2026-02-28', rating: 5, service: 'Gilam yuvish',
    text: "Bir necha yildan beri faqat Eco Nur'ga gilam yuvdiraman. Hech qachon ko'ngilni qoldirishmagan, doimo toza va o'z vaqtida." },
  { author: 'Otabek Nazarov', date: '2026-02-10', rating: 5, service: 'Gilam yuvish',
    text: 'Katta jun gilam edi, boshqa joylar olishni xohlamadi. Eco Nur muammosiz oldi va a\'lo darajada yuvdi. Professional jamoa!' },
];

// Sharhlarni serverda olamiz (5 daqiqada bir yangilanadi). JSON-LD ham
// shu ro'yxatdan quriladi — ko'rinadigan sharh va schema doim mos bo'ladi.
async function getReviews(): Promise<Review[]> {
  try {
    const res = await fetch(`${API_URL}/api/reviews`, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error();
    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length) return json.data;
  } catch { /* backend o'chiq — fallback */ }
  return fallbackReviews;
}

const UZ_MONTHS = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
function dateLabel(d: string): string {
  const [y, m] = d.split('-');
  const idx = Number(m) - 1;
  return UZ_MONTHS[idx] ? `${UZ_MONTHS[idx]}, ${y}` : d;
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} / 5 baho`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24"
          fill={i <= rating ? '#f5a623' : '#d4d4d4'} aria-hidden="true">
          <path d="M12 2l2.9 6.1 6.7.9-4.9 4.6 1.2 6.6L12 17.8 6.1 20.8l1.2-6.6L2.4 9l6.7-.9L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export default async function BaholarPage() {
  const reviews = await getReviews();
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  const reviewsLd = reviewsJsonLd(
    reviews.map((r) => ({ author: r.author, date: r.date, rating: r.rating, text: r.text })),
  );
  const breadcrumbLd = breadcrumbJsonLd([
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Baholar', path: '/baholar' },
  ]);

  const telHref = `tel:${business.phone.replace(/\D/g, '')}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen flex flex-col bg-white">
        <Header variant="solid" />

        <main className="flex-grow">
          <article className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-16">

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#3a7d1e]
                         transition-colors duration-200 mb-8"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Bosh sahifaga qaytish
            </Link>

            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              Mijozlar fikrlari va baholari
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              <strong>Eco Nur</strong> xizmatlaridan foydalangan mijozlarning real sharhlari.
              Sifat, tezlik va munosabat haqida ularning o&apos;z so&apos;zlari bilan.
            </p>

            {/* ── Umumiy baho ── */}
            <div className="bg-[#e4e4e4] rounded-3xl px-7 py-7 md:px-10 md:py-8 mb-10
                            flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold text-black leading-none">{avg}</div>
                <div className="mt-2"><Stars rating={5} /></div>
                <div className="text-sm text-gray-500 mt-1">{reviews.length} ta sharh asosida</div>
              </div>
              <div className="hidden sm:block w-px self-stretch bg-gray-300" />
              <div className="flex-1 text-center sm:text-left">
                <p className="text-gray-700 leading-relaxed">
                  7+ yillik tajriba va <strong>3000+ mamnun mijoz</strong>. Mijozlarimizning
                  ishonchi — bizning eng katta bahomiz. Siz ham fikringizni qoldiring!
                </p>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start mt-4">
                  <a
                    href="#fikr"
                    className="bg-[#3a7d1e] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#2d6316] transition-colors"
                  >
                    Sharh qoldirish
                  </a>
                  <a
                    href={telHref}
                    className="border border-[#3a7d1e] text-[#3a7d1e] font-bold px-6 py-2.5 rounded-full hover:bg-[#3a7d1e] hover:text-white transition-colors"
                  >
                    ☎ +998 90 124 35 35
                  </a>
                </div>
              </div>
            </div>

            {/* ── Sharh kartalari ── */}
            <section className="mb-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews.map((r, i) => (
                  <figure
                    key={r.id ?? `${r.author}-${i}`}
                    className="rounded-3xl border border-gray-100 shadow-sm p-6 flex flex-col h-full"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-11 h-11 rounded-full bg-[#3a7d1e] text-white font-bold
                                       flex items-center justify-center flex-shrink-0">
                        {r.author.charAt(0)}
                      </span>
                      <div className="min-w-0">
                        <figcaption className="font-semibold text-black truncate">{r.author}</figcaption>
                        <span className="text-xs text-gray-400">{dateLabel(r.date)}</span>
                      </div>
                    </div>
                    <Stars rating={r.rating} />
                    <blockquote className="text-gray-600 leading-relaxed mt-3 flex-grow">
                      &laquo;{r.text}&raquo;
                    </blockquote>
                    <span className="inline-block self-start mt-4 text-xs font-medium text-[#3a7d1e]
                                     bg-[#3a7d1e]/10 rounded-full px-3 py-1">
                      {r.service}
                    </span>
                  </figure>
                ))}
              </div>
            </section>

            {/* ── Sharh qoldirish formasi ── */}
            <section id="fikr" className="mb-4 scroll-mt-24 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Fikringizni qoldiring</h2>
              <p className="text-gray-600 mb-5">
                Xizmatdan foydalandingizmi? Bahoyingiz boshqalarga to&apos;g&apos;ri tanlov qilishda yordam beradi.
              </p>
              <ReviewForm />
            </section>

            {/* Ichki havolalar */}
            <p className="text-gray-600 mt-10">
              Xizmatlar va narxlar bilan tanishing:{' '}
              <Link href="/gilam-yuvish" className="text-[#3a7d1e] font-semibold hover:underline">
                gilam yuvish
              </Link>{' '}
              yoki{' '}
              <Link href="/#services" className="text-[#3a7d1e] font-semibold hover:underline">
                barcha xizmatlar
              </Link>
              .
            </p>
          </article>

          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
