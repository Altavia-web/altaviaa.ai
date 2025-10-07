import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslations, type Locale } from '@/lib/i18n';

interface HomeDatevProps {
  locale?: Locale;
}

export default function HomeDatev({ locale = 'de' }: HomeDatevProps) {
  const t = useTranslations(locale);
  const datevLink = locale === 'en' ? '/en/datev-interface' : '/schnittstelle-datev';

  return (
    <section className="py-16 lg:py-20 px-6" style={{ background: 'var(--gradient-datev)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Linke Spalte - Content */}
          <div className="order-2 lg:order-1 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              {t.home.datev.heading}
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              {t.home.datev.paragraph}
            </p>

            <Link href={datevLink}>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:bg-gray-100 transition-colors shadow-lg">
                {t.home.datev.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* Rechte Spalte - Bild */}
          <div className="order-1 lg:order-2">
            <Image
              src="/images/produkte/AVA_DATEV_DE.webp"
              alt={t.home.datev.altImage}
              width={500}
              height={400}
              className="w-2/3 h-auto rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}