'use client';

import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-white">

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative w-full px-5 pt-5 pb-8">

        {/* Subtract.svg — relative, to'liq kenglikda, o'z ichida gilam rasmi bor */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1220 / 772' }}>
          <Image
            src="/img/Subtract.svg"
            alt="Eco Nur hero"
            fill
            className="object-fill animate-zoom-in"
            priority
          />

          {/* Header — Subtract ning kesilgan (notch) qismiga joylashadi
              notch: x=297..915, y=0..79, markazda */}
          <div
            className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between"
            style={{ height: '79px', paddingLeft: '2.5%', paddingRight: '2.5%' }}
          >
            {/* Chap: Logo */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <Image src="/img/Eco Nur.svg" alt="Eco Nur" width={42} height={42} priority />
              <span className="text-base font-black text-white tracking-widest uppercase drop-shadow">
                ECO NUR
              </span>
            </div>

            {/* O'rta: Nav — notch ichiga (297px..915px, ~49% kengligi) */}
            <nav className="flex-1 flex justify-center">
              <ul className="flex items-center gap-1">
                {[
                  { label: 'Biz haqimizda', href: '#about' },
                  { label: 'Xizmatlar',     href: '#services' },
                  { label: 'Baholar',       href: '/baholar' },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="px-5 py-2.5 text-base font-semibold text-gray-700 rounded-full
                                 hover:bg-gray-100 transition-colors duration-200 block"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* O'ng: Bog'lanish */}
            <a
              href="tel:+998951973535"
              className="flex-shrink-0 bg-[#3a7d1e] text-white font-bold text-base
                         px-7 py-3 rounded-full hover:bg-[#2d6316] transition-colors duration-200 shadow-lg"
            >
              Bog&apos;lanish
            </a>
          </div>

          {/* Markaziy sarlavha */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-8 pt-20">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white text-center
                           leading-tight drop-shadow-2xl max-w-3xl">
              Gilam yuvish va<br />professional tozalash
            </h1>
          </div>

          {/* Pastki stat pill */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-xl px-4">
            <div className="bg-black/75 backdrop-blur-md rounded-2xl px-6 py-4
                            flex items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="flex flex-col pr-6 border-r border-white/20">
                  <span className="text-white font-bold text-base leading-tight">7+ yillik</span>
                  <span className="text-white/55 text-sm">Tajriba</span>
                </div>
                <div className="flex flex-col px-6 border-r border-white/20">
                  <span className="text-white font-bold text-base leading-tight">~3000</span>
                  <span className="text-white/55 text-sm">Mamnun mijozlar</span>
                </div>
                <div className="flex flex-col pl-6">
                  <span className="text-white font-bold text-base leading-tight">24/7</span>
                  <span className="text-white/55 text-sm">Hizmat</span>
                </div>
              </div>
              <a
                href="#services"
                className="bg-[#3a7d1e] text-white font-bold text-base px-8 py-3
                           rounded-full hover:bg-[#2d6316] transition-colors duration-200 flex-shrink-0"
              >
                Tozalash
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBIL ── */}
      <div className="md:hidden relative w-full overflow-hidden" style={{ minHeight: 'calc(100vh - 57px)' }}>
        <div className="absolute inset-0">
          <Image
            src="/img/Subtract.svg"
            alt="background"
            fill
            className="object-cover object-center animate-zoom-in"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div
          className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 py-10"
          style={{ minHeight: 'calc(100vh - 57px)' }}
        >
          <div className="w-full max-w-xs flex flex-col items-center gap-5">
            <h1 className="text-[2rem] font-extrabold leading-[1.2] text-white drop-shadow-lg">
              Gilam yuvish<br />Toshkentda
            </h1>
            <p className="text-sm text-white/70 leading-relaxed">
              Eco Nur — professional gilam yuvish va tozalash xizmatlari. 7+ yillik tajriba.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <a href="#about"
                className="w-full text-center bg-white text-black font-bold text-sm
                           rounded-2xl py-3.5 hover:bg-gray-100 transition-colors duration-200 shadow-md">
                Bog&apos;lanish
              </a>
              <a href="#services"
                className="w-full text-center bg-[#3a7d1e] text-white font-bold text-sm
                           rounded-2xl py-3.5 hover:bg-[#2d6316] transition-colors duration-200 shadow-lg">
                Tozalash
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-4 right-4">
            <div className="bg-black/70 backdrop-blur-md rounded-2xl px-5 py-3
                            flex items-center justify-between">
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm">7+</span>
                <span className="text-white/50 text-[10px]">Yillik tajriba</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm">~3000</span>
                <span className="text-white/50 text-[10px]">Mamnun mijozlar</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm">24/7</span>
                <span className="text-white/50 text-[10px]">Hizmat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
