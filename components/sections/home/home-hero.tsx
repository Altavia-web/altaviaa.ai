import React from 'react';
import Image from 'next/image';
import { useTranslations, type Locale } from '@/lib/i18n';

interface HomeHeroProps {
  locale?: Locale;
}

export default function HomeHero({ locale = 'de' }: HomeHeroProps) {
  const t = useTranslations(locale);

  return (
    <section className="relative flex items-center justify-center text-white" style={{ minHeight: '72vh' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/Home_hero.webp"
          alt={t.home.hero.altImage}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-bold mb-6 text-center">
          {t.home.hero.title}
        </h1>
        <p className="text-2xl md:text-3xl mb-8 leading-relaxed opacity-90">
          {t.home.hero.subtitle}
        </p>
        <a
          href={locale === 'en' ? '/images/AVA Product Brochure_EN.pdf' : '/images/AVA-Produktbroschuere_DE.pdf'}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center text-lg hover:opacity-90 no-underline"
          style={{backgroundColor: 'var(--color-orange)', color: 'white'}}
        >
          {t.home.hero.cta}
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}