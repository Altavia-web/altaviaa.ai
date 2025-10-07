import React from 'react';
import Image from 'next/image';
import { useTranslations, type Locale } from '@/lib/i18n';

interface HomeTestimonialProps {
  locale?: Locale;
}

export default function HomeTestimonial({ locale = 'de' }: HomeTestimonialProps) {
  const t = useTranslations(locale);

  return (
    <section className="py-16 lg:py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">

        {/* Quote Icon */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/AVA_Quote_Grad.svg"
            alt={t.home.testimonial.altQuote}
            width={80}
            height={80}
            className="w-20 h-20 lg:w-28 lg:h-28"
          />
        </div>

        {/* Zitat-Text */}
        <blockquote className="text-2xl lg:text-3xl font-medium mb-8 leading-relaxed" style={{ color: '#002e64' }}>
          &ldquo;{t.home.testimonial.quote}&rdquo;
        </blockquote>

        {/* Attribution/Name */}
        <p className="text-lg lg:text-xl font-semibold mb-12" style={{ color: '#002e64' }}>
          {t.home.testimonial.author}
        </p>

        {/* Profilbild */}
        <div className="flex justify-center">
          <Image
            src="/images/zimmermann.webp"
            alt={t.home.testimonial.altImage}
            width={192}
            height={192}
            className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}