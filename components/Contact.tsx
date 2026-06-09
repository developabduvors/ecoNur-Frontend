'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { API_URL } from '@/lib/api';

const SERVICES = [
  'Gilam yuvish',
  'Korpa va korpacha yuvish',
  'Yumshoq mebel yuvish',
  'Burschatka va kafel yuvish',
] as const;

function showNotification(title: string, body: string) {
  if (typeof window === 'undefined' || !('Notification' in window)) return;

  if (Notification.permission === 'granted') {
    new Notification(title, { body, icon: '/img/Eco Nur.svg' });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((perm) => {
      if (perm === 'granted') {
        new Notification(title, { body, icon: '/img/Eco Nur.svg' });
      }
    });
  }
}

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
  </svg>
);

export const Contact = () => {
  const [name, setName]       = useState('');
  const [phone, setPhone]     = useState('');
  const [service, setService] = useState('');
  const [sent, setSent]       = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !service) return;

    try {
      const res = await fetch(`${API_URL}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, service }),
      });

      if (res.ok) {
        showNotification(
          'Eco Nur',
          'Xabaringiz qabul qilindi! Tez orada bog\'lanamiz.',
        );
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setName('');
        setPhone('');
        setService('');
      }
    } catch {
      // Tarmoq xatosi
    }
  };

  return (
    <section id="about" className="w-full bg-white py-10 md:py-14">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24">

        {/* Sarlavha */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-black text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Kontaktlar
        </motion.h2>

        {/* Karta */}
        <motion.div
          className="w-full bg-[#e4e4e4] rounded-3xl px-8 md:px-12 py-8 md:py-10
                     flex flex-col md:flex-row gap-8 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >

          {/* Chap: telefon */}
          <div className="flex flex-col gap-4 flex-1">
            <p className="font-bold text-base md:text-lg text-black">
              Biz bilan bog&apos;laning
            </p>

            <div className="flex flex-col gap-3">
              {['+998 (95) 197-35-35', '+998 (90) 124-35-35'].map((num) => (
                <a
                  key={num}
                  href={`tel:${num.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-full bg-[#3a7d1e] flex items-center justify-center
                                   flex-shrink-0 group-hover:bg-[#2d6316] transition-colors duration-200">
                    <PhoneIcon />
                  </span>
                  <span className="text-black font-semibold text-base md:text-lg
                                   group-hover:text-[#3a7d1e] transition-colors duration-200 whitespace-nowrap">
                    {num}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 self-stretch" />

          {/* O'ng: forma */}
          <div className="flex flex-col gap-4 flex-1">
            <p className="font-bold text-base md:text-lg text-black">
              Ariza topshiring
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Ismingiz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white rounded-2xl px-5 py-3.5 text-sm md:text-base
                           text-black placeholder-gray-400 outline-none border border-transparent
                           focus:border-[#3a7d1e] transition-colors duration-200"
              />
              <input
                type="tel"
                placeholder="Telefon raqamingiz"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white rounded-2xl px-5 py-3.5 text-sm md:text-base
                           text-black placeholder-gray-400 outline-none border border-transparent
                           focus:border-[#3a7d1e] transition-colors duration-200"
              />
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="w-full bg-white rounded-2xl px-5 py-3.5 text-sm md:text-base
                           text-black outline-none border border-transparent
                           focus:border-[#3a7d1e] transition-colors duration-200
                           appearance-none cursor-pointer
                           bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%23999%22%20d%3D%22M1%201l5%205%205-5%22%2F%3E%3C%2Fsvg%3E')]
                           bg-no-repeat bg-[right_1.25rem_center]"
              >
                <option value="" disabled>
                  Xizmatni tanlang
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <div className="flex justify-end mt-1">
                <button
                  type="submit"
                  className="bg-white text-[#3a7d1e] font-bold text-sm md:text-base
                             px-8 py-3 rounded-full border border-gray-200
                             hover:bg-[#3a7d1e] hover:text-white hover:border-[#3a7d1e]
                             transition-colors duration-200 shadow-sm"
                >
                  {sent ? 'Yuborildi ✓' : 'Yuborish'}
                </button>
              </div>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
