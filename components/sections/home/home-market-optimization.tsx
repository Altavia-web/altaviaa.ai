import React from 'react';
import Image from 'next/image';
import { useTranslations, type Locale } from '@/lib/i18n';

interface HomeMarketOptimizationProps {
  locale?: Locale;
}

export default function HomeMarketOptimization({ locale = 'de' }: HomeMarketOptimizationProps) {
  const t = useTranslations(locale);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto" style={{width: '80%'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Column */}
          <div>
            <h2 className="font-bold mb-6 leading-tight" style={{color: '#002e64', fontSize: 'clamp(2.625rem, 5vw, 3.15rem)'}}>
              {t.home.marketOptimization.heading}
            </h2>
            <p className="text-xl leading-relaxed" style={{color: '#000000'}}>
              {t.home.marketOptimization.paragraph}
            </p>
          </div>

          {/* Illustration - Right Column */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/home/Home_Localization_Map__Grad-1.svg"
                alt={t.home.marketOptimization.altImage}
                width={475}
                height={380}
                className="w-[63.5%] h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}