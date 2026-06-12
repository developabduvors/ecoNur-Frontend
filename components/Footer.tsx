'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const TELEGRAM_URL = 'https://t.me/gilamyuvish_econur';

const TelegramIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
  </svg>
);

export const Footer = () => (
  <motion.footer
    className="w-full bg-gray-100 border-t border-gray-200"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 py-10 md:py-14">

      {/* Mobil: vertikal stack | Desktop: gorizontal */}
      <div className="flex flex-col items-center text-center gap-6 md:flex-row md:items-center md:justify-between md:text-left">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <span className="text-base font-black text-[#3a7d1e] tracking-widest uppercase">
              ECO NUR
            </span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Toshkentda gilam yuvish va professional tozalash xizmatlari.
          </p>

          {/* Telegram guruh */}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Eco Nur Telegram guruhi"
            className="inline-flex items-center justify-center md:justify-start gap-2 mt-1
                       text-sm font-medium text-gray-600 hover:text-[#229ED9] transition-colors group"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm
                             text-[#229ED9] group-hover:bg-[#229ED9] group-hover:text-white transition-colors">
              <TelegramIcon className="w-5 h-5" />
            </span>
            Telegram guruhimiz
          </a>
        </div>

        {/* Nav */}
        <nav className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-2 md:gap-8">
          {[
            { label: 'Biz haqimizda', href: '#about' },
            { label: 'Gilam yuvish', href: '/gilam-yuvish' },
            { label: 'Xizmatlar',    href: '#services' },
            { label: 'Baholar',      href: '/baholar' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-500 hover:text-[#3a7d1e] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; 2026 Eco Nur.
        </p>

      </div>
    </div>
  </motion.footer>
);
