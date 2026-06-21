'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const items = [
  { img: '/img/oka.webp',              label: "O'z ishini ustasi",    big: true  },
  { img: '/img/yuvotgan.webp',         label: '7+ yillik tajriba',    big: false },
  { img: '/img/Rectangle 37.webp',     label: 'Tezkorlik',            big: false },
  { img: '/img/Rectangle 33 (1).webp', label: 'Hamyonbop',            big: true  },
  { img: '/img/Rectangle 35.webp',     label: '24/7 hizmat',          big: false },
  { img: '/img/Rectangle 36.webp',     label: 'Professional yondashuv', big: false },
];

const Card = ({ img, label, delay }: { img: string; label: string; delay: number }) => (
  <motion.div
    className="relative rounded-2xl overflow-hidden group w-full"
    style={{ aspectRatio: '4/3' }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ scale: 1.03 }}
  >
    <Image src={img} alt={label} fill
      className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-3">
      <span className="text-white font-semibold text-xs md:text-sm drop-shadow">{label}</span>
    </div>
  </motion.div>
);

export const ResultsSection = () => (
  <section id="results" className="w-full bg-white py-10 md:py-14">
    <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24">

      <motion.h2
        className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 md:mb-8 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Nega aynan –{' '}
        <span className="text-[#3a7d1e]">Eco Nur?</span>
      </motion.h2>

      {/* ── MOBIL: 2 ustun, barcha kartalar teng ── */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {items.map((item, i) => (
          <Card key={i} img={item.img} label={item.label} delay={i * 0.07} />
        ))}
      </div>

      {/* ── DESKTOP: katta | 2x2 | katta (bitta manba: items) ── */}
      <div className="hidden md:grid grid-cols-4 gap-4" style={{ gridTemplateRows: 'auto auto' }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={`relative rounded-2xl overflow-hidden group ${item.big ? 'row-span-2' : ''}`}
            style={item.big ? undefined : { aspectRatio: '4/3' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            whileHover={{ scale: item.big ? 1.02 : 1.03 }}
          >
            <Image src={item.img} alt={item.label} fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-3">
              <span className="text-white font-semibold text-sm drop-shadow">{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
