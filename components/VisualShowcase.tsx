import Image from 'next/image';

export const VisualShowcase = () => (
  <section className="px-5 pb-14 flex flex-col items-center max-w-lg mx-auto w-full">
    {/* Phone mockup wrapper */}
    <div className="relative w-full flex justify-center">
      {/* Glow effect behind phone */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-20 bg-[#4ade80]"
        aria-hidden="true"
      />

      {/* Phone frame */}
      <div className="relative w-[280px] rounded-[36px] border-[6px] border-[#1f1f1f] overflow-hidden shadow-2xl shadow-black/60 bg-[#111111]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0a0a0a] rounded-b-2xl z-10" />

        {/* Screen content — glam image */}
        <div className="w-full aspect-[9/19.5] relative">
          <Image
            src="/img/glam.webp"
            alt="Eco Nur gilam yuvish ilovasi — onlayn buyurtma"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2 pt-1 bg-[#111111]">
          <div className="w-24 h-1 rounded-full bg-[#2f2f2f]" />
        </div>
      </div>
    </div>

    {/* Caption under phone */}
    <p className="mt-6 text-sm text-gray-500 text-center">
      Ilovamiz orqali barcha xizmatlarni qulay boshqaring
    </p>
  </section>
);
