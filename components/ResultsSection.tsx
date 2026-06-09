'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const items = [
  { img: '/img/oka.svg',              label: "O'z ishini ustasi",    big: true  },
  { img: '/img/yuvotgan.svg',         label: '7+ yillik tajriba',    big: false },
  { img: '/img/Rectangle 35.svg',     label: 'Tezkorlik',            big: false },
  { img: '/img/Rectangle 33 (1).svg', label: 'Hamyonbop',            big: true  },
  { img: '/img/Rectangle 36.svg',     label: '24/7 hizmat',          big: false },
  { img: '/img/Rectangle 37.svg',     label: 'Professional yondashuv', big: false },
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

      {/* ── DESKTOP: katta | 2x2 | katta ── */}
      <div className="hidden md:grid grid-cols-4 gap-4" style={{ gridTemplateRows: 'auto auto' }}>

        {/* 1: katta chap, 2 qator */}
        <motion.div
          className="relative rounded-2xl overflow-hidden row-span-2 group"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image src="/img/oka.svg" alt="O'z ishini ustasi" fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-3">
            <span className="text-white font-semibold text-sm drop-shadow">O&apos;z ishini ustasi</span>
          </div>
        </motion.div>

        {/* 2: 7+ yillik tajriba */}
        <motion.div className="relative rounded-2xl overflow-hidden group" style={{ aspectRatio: '4/3' }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }} whileHover={{ scale: 1.03 }}>
          <Image src="/img/yuvotgan.svg" alt="7+ yillik tajriba" fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-3">
            <span className="text-white font-semibold text-sm drop-shadow">7+ yillik tajriba</span>
          </div>
        </motion.div>

        {/* 3: Tezkorlik */}
        <motion.div className="relative rounded-2xl overflow-hidden group" style={{ aspectRatio: '4/3' }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.16 }} whileHover={{ scale: 1.03 }}>
          <Image src="/img/Rectangle 37.svg" alt="Tezkorlik" fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-3">
            <span className="text-white font-semibold text-sm drop-shadow">Tezkorlik</span>
          </div>
        </motion.div>

        {/* 4: katta o'ng, 2 qator */}
        <motion.div
          className="relative rounded-2xl overflow-hidden row-span-2 group"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image src="/img/Rectangle 33 (1).svg" alt="Hamyonbop" fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-3">
            <span className="text-white font-semibold text-sm drop-shadow">Hamyonbop</span>
          </div>
        </motion.div>

        {/* 5: 24/7 hizmat */}
        <motion.div className="relative rounded-2xl overflow-hidden group" style={{ aspectRatio: '4/3' }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.24 }} whileHover={{ scale: 1.03 }}>
          <Image src="/img/Rectangle 35.svg" alt="24/7 hizmat" fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-3">
            <span className="text-white font-semibold text-sm drop-shadow">24/7 hizmat</span>
          </div>
        </motion.div>

        {/* 6: Professional yondashuv */}
        <motion.div className="relative rounded-2xl overflow-hidden group" style={{ aspectRatio: '4/3' }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.32 }} whileHover={{ scale: 1.03 }}>
          <Image src="/img/Rectangle 36.svg" alt="Professional yondashuv" fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-3">
            <span className="text-white font-semibold text-sm drop-shadow">Professional yondashuv</span>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);
