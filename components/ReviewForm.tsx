'use client';

import { useState } from 'react';
import { API_URL } from '@/lib/api';

const SERVICES = [
  'Gilam yuvish',
  'Yumshoq mebel',
  'Korpa-korpacha',
  'Burchatka va kafel',
] as const;

export const ReviewForm = () => {
  const [author, setAuthor]   = useState('');
  const [service, setService] = useState('');
  const [rating, setRating]   = useState(0);
  const [hover, setHover]     = useState(0);
  const [text, setText]       = useState('');
  const [status, setStatus]   = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || rating < 1 || text.trim().length < 5) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, rating, text, service }),
      });
      if (!res.ok) throw new Error();
      setStatus('done');
      // bahоlagani belgilansin — banner qayta chiqmaydi
      try { localStorage.setItem('econur_reviewed', '1'); } catch {}
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="rounded-3xl bg-[#3a7d1e]/10 border border-[#3a7d1e]/20 p-6 text-center">
        <p className="text-2xl mb-2">🌿</p>
        <p className="font-bold text-black">Fikringiz uchun rahmat!</p>
        <p className="text-sm text-gray-600 mt-1">
          Sharhingiz tekshiruvdan o&apos;tgach sahifada chiqadi.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gray-200 p-6 md:p-8 flex flex-col gap-4 bg-white"
    >
      {/* Yulduz tanlash */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Bahoyingiz</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setRating(i)}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(0)}
              aria-label={`${i} yulduz`}
              className="p-0.5"
            >
              <svg width="32" height="32" viewBox="0 0 24 24"
                fill={i <= (hover || rating) ? '#f5a623' : '#d4d4d4'}>
                <path d="M12 2l2.9 6.1 6.7.9-4.9 4.6 1.2 6.6L12 17.8 6.1 20.8l1.2-6.6L2.4 9l6.7-.9L12 2z" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <input
        type="text"
        placeholder="Ismingiz"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        maxLength={60}
        className="w-full bg-gray-50 rounded-2xl px-5 py-3.5 text-sm md:text-base text-black
                   placeholder-gray-400 outline-none border border-transparent
                   focus:border-[#3a7d1e] transition-colors"
      />

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="w-full bg-gray-50 rounded-2xl px-5 py-3.5 text-sm md:text-base text-black
                   outline-none border border-transparent focus:border-[#3a7d1e]
                   transition-colors appearance-none cursor-pointer"
      >
        <option value="">Xizmatni tanlang (ixtiyoriy)</option>
        {SERVICES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <textarea
        placeholder="Xizmat haqida fikringiz..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        minLength={5}
        maxLength={500}
        rows={4}
        className="w-full bg-gray-50 rounded-2xl px-5 py-3.5 text-sm md:text-base text-black
                   placeholder-gray-400 outline-none border border-transparent
                   focus:border-[#3a7d1e] transition-colors resize-none"
      />

      {status === 'error' && (
        <p className="text-sm text-red-500">
          Iltimos, ism, baho (yulduz) va kamida 5 ta belgili izoh kiriting.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="self-start bg-[#3a7d1e] text-white font-bold px-8 py-3 rounded-full
                   hover:bg-[#2d6316] transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Yuborilmoqda...' : 'Sharh yuborish'}
      </button>
    </form>
  );
};
