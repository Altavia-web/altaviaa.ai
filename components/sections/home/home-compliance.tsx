import React from 'react';
import { useTranslations, type Locale } from '@/lib/i18n';

interface HomeComplianceProps {
  locale?: Locale;
}

export default function HomeCompliance({ locale = 'de' }: HomeComplianceProps) {
  const t = useTranslations(locale);

  return (
    <section className="py-16 lg:py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight" style={{ color: '#002e64' }}>
          {t.home.compliance.heading}
        </h2>

        <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#002e64' }}>
          {t.home.compliance.paragraph}
        </p>
      </div>
    </section>
  );
}