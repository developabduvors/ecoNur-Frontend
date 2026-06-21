import { faqJsonLd } from '@/lib/seo';

// Kalit so'zli savol-javoblar — Google natijada "rich snippet" qilib ko'rsatadi (CTR ↑).
// Matnlarda "gilam yuvish", "Toshkent", narx kabi qidiruv so'zlari bor.
export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'Toshkentda gilam yuvish narxi qancha?',
    a: 'Eco Nur’da gilam yuvish 1 kv.m uchun 12 000 so‘mdan boshlanadi. Aniq narx gilam turi va holatiga qarab belgilanadi — buyurtma berishdan oldin bepul baholaymiz.',
  },
  {
    q: 'Gilamni o‘zingiz olib ketasizmi?',
    a: 'Ha, Toshkent bo‘ylab gilamingizni uyingizdan bepul olib ketamiz va toza, quruq holda o‘zimiz yetkazib beramiz. Olib ketish va yetkazish butunlay tekin.',
  },
  {
    q: 'Gilam yuvish qancha vaqt oladi?',
    a: 'Odatda gilam yuvish va to‘liq quritish 1-2 kun ichida tayyor bo‘ladi. Shoshilinch buyurtmalar ham qabul qilinadi — 24/7 ishlaymiz.',
  },
  {
    q: 'Yuvilgandan keyin gilamda hid yoki namlik qoladimi?',
    a: 'Yo‘q. Professional quritish uskunalari yordamida gilam to‘liq quritiladi — namlik ham, yoqimsiz hid ham qolmaydi. Gilam toza va yangidek qaytadi.',
  },
  {
    q: 'Qanday gilam va buyumlarni yuvasiz?',
    a: 'Jun, ipak, sintetik gilamlar, palos, korpa-korpacha, yumshoq mebel (divan, stul), burchatka va kafel — barchasini professional tozalaymiz.',
  },
  {
    q: 'Buyurtmani qanday berish mumkin?',
    a: 'Telefon orqali +998 90 124 35 35 raqamiga qo‘ng‘iroq qiling yoki saytdagi “Ariza topshiring” formasini to‘ldiring. 24/7 javob beramiz.',
  },
];

export const FaqSection = () => {
  return (
    <section id="faq" className="w-full bg-white py-10 md:py-14">
      {/* FAQ rich-snippet — Google qidiruvda savol-javobni ko'rsatadi */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_ITEMS)) }}
      />

      <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black text-center mb-8 md:mb-10">
          Ko‘p so‘raladigan savollar
        </h2>

        <div className="flex flex-col gap-3 md:gap-4 max-w-3xl mx-auto">
          {FAQ_ITEMS.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-[#e4e4e4] rounded-2xl px-6 py-4 md:px-8 md:py-5
                         transition-colors duration-200 open:bg-[#dcdcdc]"
            >
              <summary
                className="flex items-center justify-between cursor-pointer list-none
                           font-bold text-base md:text-lg text-black"
              >
                {q}
                <span className="ml-4 flex-shrink-0 text-[#3a7d1e] text-2xl leading-none
                                 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
