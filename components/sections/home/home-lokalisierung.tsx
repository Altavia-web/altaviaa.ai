import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { useTranslations, type Locale } from '@/lib/i18n';

interface HomeLokalisierungProps {
  locale?: Locale;
}

export default function HomeLokalisierung({ locale = 'de' }: HomeLokalisierungProps) {
  const t = useTranslations(locale);
  const imageSrc = locale === 'en'
    ? '/images/EN/WebP/AVA_LOKALISIERUNG_DE_EN.webp'
    : '/images/DE/WebP/AVA_LOKALISIERUNG_DE_DE.webp';

  return (
    <section className="py-16 lg:py-20 px-6" style={{ background: 'var(--gradient-lokalisierung)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Linke Spalte - Bild */}
          <div className="order-2 lg:order-1">
            <Image
              src={imageSrc}
              alt={t.home.localization.altImage}
              width={500}
              height={400}
              className="w-2/3 h-auto rounded-lg shadow-lg mx-auto"
            />
          </div>

          {/* Rechte Spalte - Content */}
          <div className="order-1 lg:order-2 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              {t.home.localization.heading}
            </h2>

            <ul className="space-y-4 mb-8">
              {t.home.localization.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span className="text-lg leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-xl leading-relaxed">
              {t.home.localization.result}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}