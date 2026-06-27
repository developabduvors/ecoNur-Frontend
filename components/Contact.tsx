'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_URL } from '@/lib/api';

const SERVICES = [
  'Gilam yuvish',
  'Korpa va korpacha yuvish',
  'Yumshoq mebel yuvish',
  'Burschatka va kafel yuvish',
] as const;

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const PHONE_PREFIX = '+998';

function formatPhoneInput(value: string): string {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('998')) digits = digits.slice(3);
  return `${PHONE_PREFIX}${digits.slice(0, 9)}`;
}

export const Contact = () => {
  const [name, setName]       = useState('');
  const [phone, setPhone]     = useState(PHONE_PREFIX);
  const [service, setService] = useState('');
  const [toast, setToast]     = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.replace(/[^a-zA-Z\u0410-\u044F\u0401\u0451\s'-]/g, ''));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneInput(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    if (!name.trim() || digits.length !== 12 || !service) return;

    try {
      await fetch(`${API_URL}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, service }),
      });
    } catch { /* backend o'chiq bo'lsa ham ok */ }

    // 24 soatdan keyin "Bizni baholang" banneri chiqishi uchun zakaz vaqtini saqlaymiz
    try {
      localStorage.setItem('econur_order_at', Date.now().toString());
      localStorage.removeItem('econur_reviewed');
    } catch {}

    setToast(true);
    setTimeout(() => setToast(false), 4000);
    setName('');
    setPhone(PHONE_PREFIX);
    setService('');
  };

  return (
    <>
      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="fixed top-6 right-6 z-[999] flex items-center gap-3
                       bg-[#3a7d1e] text-white px-5 py-4 rounded-2xl shadow-2xl
                       max-w-xs md:max-w-sm"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <CheckIcon />
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Ariza qabul qilindi!</span>
              <span className="text-white/80 text-xs mt-0.5">Tez orada siz bilan bog&apos;lanamiz</span>
            </div>
            <button
              onClick={() => setToast(false)}
              className="ml-2 text-white/60 hover:text-white transition-colors flex-shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
              {['+998 (90) 124-35-35'].map((num) => (
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
                onChange={handleNameChange}
                required
                autoComplete="name"
                className="w-full bg-white rounded-2xl px-5 py-3.5 text-sm md:text-base
                           text-black placeholder-gray-400 outline-none border border-transparent
                           focus:border-[#3a7d1e] transition-colors duration-200"
              />
              <input
                type="tel"
                inputMode="numeric"
                placeholder="+998 90 123 45 67"
                value={phone}
                onChange={handlePhoneChange}
                onFocus={() => { if (!phone) setPhone(PHONE_PREFIX); }}
                required
                minLength={13}
                maxLength={13}
                autoComplete="tel"
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
                  Yuborish
                </button>
              </div>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
    </>
  );
};
