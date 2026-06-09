'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Service = {
  id: number;
  title: string;
  priceFrom: number;
  priceTo: number;
  unit: string;
  image: string;
};

const fallbackServices: Service[] = [
  { id: 1, title: 'Gilam yuvish',             priceFrom: 12000, priceTo: 15000,  unit: '1 kv.m', image: '/img/Gilam1.svg' },
  { id: 2, title: 'Yumshoq mebel va stullar', priceFrom: 30000, priceTo: 120000, unit: 'dona',   image: '/img/Rectangle 37.svg' },
  { id: 3, title: 'Korpacha',                 priceFrom: 50000, priceTo: 80000,  unit: 'dona',   image: '/img/Korpacha.svg' },
  { id: 4, title: 'Burchatka',                priceFrom: 15000, priceTo: 30000,  unit: 'dona',   image: '/img/Burchatka.svg' },
];

const fmt = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const FeatureSection = () => {
  const [services, setServices] = useState<Service[]>(fallbackServices);

  useEffect(() => {
    fetch('http://localhost:5000/api/services', { signal: AbortSignal.timeout(3000) })
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(j => { if (j.success && j.data?.length) setServices(j.data); })
      .catch(() => {});
  }, []);

  const scroll = (_dir: 'left' | 'right') => {};

  return (
    <section id="services" className="w-full bg-white py-10 md:py-14">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24">

        {/* Sarlavha */}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-black text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Hizmatlar
        </motion.h2>

        {/* Scroll wrapper */}
        <div className="relative">

          {/* Kartalar — horizontal scroll, snap */}
          <div
            className="hide-scrollbar flex gap-5 overflow-x-auto"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                className="flex-shrink-0 rounded-3xl overflow-hidden bg-white shadow-sm group"
                style={{
                  /* Mobil: 85vw, Desktop: aynan 2 karta sig'sin */
                  width: 'clamp(260px, 85vw, calc(50% - 10px))',
                  scrollSnapAlign: 'start',
                }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {/* Rasm */}
                <div className="relative w-full overflow-hidden" style={{ height: '280px' }}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-400"
                  />
                </div>

                {/* Yashil bar */}
                <div className="bg-[#3a7d1e] px-6 py-4 flex items-center justify-between gap-4">
                  <span className="text-white font-bold text-base md:text-lg leading-tight flex-shrink-0">
                    {s.title}
                  </span>
                  <div className="w-px h-6 bg-white/40 flex-shrink-0" />
                  <span className="text-white/90 text-sm md:text-base whitespace-nowrap">
                    {fmt(s.priceFrom)}~{fmt(s.priceTo)} so&apos;m
                  </span>
                </div>
              </motion.div>
            ))}

            {/* O'ng padding spacer */}
            <div className="flex-shrink-0 w-1" />
          </div>
        </div>

      </div>
    </section>
  );
};
