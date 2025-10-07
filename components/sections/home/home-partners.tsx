import React from 'react';
import Image from 'next/image';
import { useTranslations, type Locale } from '@/lib/i18n';

interface HomePartnersProps {
  locale?: Locale;
}

export default function HomePartners({ locale = 'de' }: HomePartnersProps) {
  const t = useTranslations(locale);

  return (
    <section className="py-16 lg:py-20 px-6" style={{ background: 'var(--gradient-sky-to-ice)' }}>
      <div className="max-w-6xl mx-auto text-center">

        {/* SVG Icon */}
        <div className="mb-8">
          <Image
            src="/images/AVA_Sign_Grad.svg"
            alt={t.home.partners.altImage}
            width={80}
            height={80}
            className="w-20 h-20 lg:w-24 lg:h-24 mx-auto"
          />
        </div>

        {/* Hauptüberschrift */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 leading-tight" style={{ color: '#002e64' }}>
          {t.home.partners.heading}
        </h2>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Linke Spalte - NetSuite-Nutzer */}
          <div className="text-left">
            <h3 className="text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#002e64' }}>
              {t.home.partners.users.title}
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: '#002e64' }}>
              {t.home.partners.users.paragraph}
            </p>
          </div>

          {/* Rechte Spalte - NetSuite-Partner */}
          <div className="text-left">
            <h3 className="text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#002e64' }}>
              {t.home.partners.partners.title}
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: '#002e64' }}>
              {t.home.partners.partners.paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}