import Image from 'next/image';

export const AboutSection = () => (
  <section id="about-us" className="w-full bg-white py-10 md:py-16">
    <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24">

      <div className="w-full bg-[#e8e8e8] rounded-3xl overflow-hidden
                      flex flex-col md:flex-row md:items-stretch">

        {/* Chap: matn */}
        <div className="flex flex-col justify-center gap-5 flex-1
                        px-6 py-8 md:px-12 md:py-14 lg:px-16 lg:py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
            Biz haqimizda
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            <span className="text-[#3a7d1e] font-semibold underline underline-offset-4">
              Eco Nur
            </span>
            {' '}— Toshkentda gilam yuvish, mebel tozalash va professional klining
            xizmatlari. 7+ yillik tajriba, 3000+ mamnun mijoz.
          </p>
        </div>

        {/* O'ng / pastki: rasm */}
        <div className="relative flex-shrink-0
                        w-full h-[300px]
                        md:w-[320px] md:h-auto
                        lg:w-[400px]">
          <Image
            src="/img/Rectangle 30.svg"
            alt="Eco Nur Carpet Cleaning"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

      </div>
    </div>
  </section>
);
