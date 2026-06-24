'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// variant: 'overlay' = qorong'i hero ustida (oq matn, absolute) |
//          'solid'   = oq fonli inner sahifa (yashil matn, sticky bar)
export const Header = ({ variant = 'overlay' }: { variant?: 'overlay' | 'solid' }) => {
  const [open, setOpen] = useState(false);
  const solid = variant === 'solid';

  const links = [
    { label: 'Biz haqimizda', href: '/#about-us' },
    { label: 'Hizmatlar', href: '/#services' },
    { label: 'Baholar', href: '/baholar' },
  ];

  return (
    <>
      {/* ── DESKTOP HEADER ── */}
      <header
        className={
          solid
            ? 'sticky top-0 z-50 hidden md:block bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
            : 'absolute top-0 left-0 right-0 z-50 hidden md:block'
        }
      >
        <div
          className={`max-w-screen-xl mx-auto px-8 flex items-center justify-between gap-4 ${
            solid ? 'py-4' : 'pt-6'
          }`}
        >

          {/* Logo — chap */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/img/Eco Nur.svg" alt="Eco Nur" width={36} height={36} priority />
            <span
              className={`text-sm font-black tracking-widest uppercase ${
                solid ? 'text-[#3a7d1e]' : 'text-white drop-shadow'
              }`}
            >
              ECO NUR
            </span>
          </Link>

          {/* Nav — overlay'da oq pill, solid'da tekis */}
          <nav
            className={
              solid
                ? ''
                : 'bg-white/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-lg'
            }
          >
            <ul className="flex items-center gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="px-5 py-2 text-sm font-semibold text-gray-700 rounded-full
                               hover:bg-gray-100 transition-colors duration-200 block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bog'lanish — yashil tugma */}
          <a
            href="tel:+998901243535"
            className="flex-shrink-0 bg-[#3a7d1e] text-white font-bold text-sm
                       px-6 py-2.5 rounded-full hover:bg-[#2d6316] transition-colors duration-200 shadow-lg"
          >
            Bog&apos;lanish
          </a>
        </div>
      </header>

      {/* ── MOBILE HEADER ── */}
      <header className="sticky top-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="px-5 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/img/Eco Nur.svg" alt="Eco Nur" width={30} height={30} priority />
            <span className="text-sm font-black text-[#3a7d1e] tracking-widest uppercase">ECO NUR</span>
          </div>
          <button
            className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Menyu"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2L16 16M16 2L2 16" stroke="#333" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M1 1H17M1 7H17M1 13H17" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex flex-col transition-all duration-300
                    ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ top: '57px' }}
      >
        <div className={`bg-white flex flex-col transition-transform duration-300
                         ${open ? 'translate-y-0' : '-translate-y-4'}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-6 py-5 text-lg font-medium text-gray-700
                         border-b border-gray-100 hover:text-[#3a7d1e] transition-colors duration-200">
              {l.label}
            </Link>
          ))}
          <a href="tel:+998901243535"
            className="mx-4 my-4 flex items-center justify-center gap-3
                       bg-[#3a7d1e] text-white font-bold text-base rounded-2xl py-4">
            📞 +998 (90) 124-35-35
          </a>
        </div>
        <div className="flex-1 bg-black/40" onClick={() => setOpen(false)} />
      </div>
    </>
  );
};
