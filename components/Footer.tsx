'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Footer = () => (
  <motion.footer
    className="w-full bg-white border-t border-gray-100"
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
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Toshkentda gilam yuvish va professional tozalash xizmatlari.
          </p>
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
        <p className="text-sm text-gray-400">
          &copy; 2026 Eco Nur.
        </p>

      </div>
    </div>
  </motion.footer>
);
