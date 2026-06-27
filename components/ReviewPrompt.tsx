'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const DAY = 24 * 60 * 60 * 1000;
const ORDER_KEY = 'econur_order_at'; // zakaz vaqti (Contact formada yoziladi)
const DONE_KEY = 'econur_reviewed';  // bahоlagan/yopgan

export const ReviewPrompt = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const orderAt = Number(localStorage.getItem(ORDER_KEY) || 0);
      const done = localStorage.getItem(DONE_KEY) === '1';
      // zakaz bor + 24 soat o'tgan + hali bahоlamagan
      if (orderAt && !done && Date.now() - orderAt >= DAY) setShow(true);
    } catch {
      /* localStorage yo'q bo'lsa — jim qol */
    }
  }, []);

  const close = (markDone: boolean) => {
    try {
      if (markDone) localStorage.setItem(DONE_KEY, '1');
      else localStorage.setItem(ORDER_KEY, Date.now().toString()); // "keyinroq" → yana 24 soatdan keyin
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:max-w-sm z-[998]
                    bg-white border border-gray-200 shadow-2xl rounded-2xl p-5 text-left">
      <button
        onClick={() => close(false)}
        aria-label="Yopish"
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <p className="font-bold text-black pr-6">Xizmatdan mamnunmisiz? 🌿</p>
      <p className="text-sm text-gray-500 mt-1">Bir daqiqa vaqt ajratib, bizni baholang.</p>
      <div className="flex items-center gap-2 mt-4">
        <Link
          href="/baholar#fikr"
          onClick={() => close(true)}
          className="flex-1 text-center bg-[#3a7d1e] text-white font-bold text-sm px-4 py-2.5
                     rounded-full hover:bg-[#2d6316] transition-colors"
        >
          Baholash
        </Link>
        <button
          onClick={() => close(false)}
          className="px-4 py-2.5 text-sm text-gray-500 hover:text-gray-700"
        >
          Keyinroq
        </button>
      </div>
    </div>
  );
};
