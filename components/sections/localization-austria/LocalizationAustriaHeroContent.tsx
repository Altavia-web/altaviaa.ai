import React from 'react';
import Image from 'next/image';

export default function LocalizationAustriaHeroContent() {
  return (
    <section
      className="py-16 lg:py-20 px-8"
      style={{ backgroundColor: 'rgba(80, 149, 203, 0.4)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column - Text Content */}
          <div style={{ color: 'var(--color-dark-blue)' }}>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              Nahtlose Integration von UGB über BMD bis Reisekostenabrechnung
            </h3>

            <p className="text-lg leading-relaxed">
              Um in Österreich rechtssicher mit NetSuite zu arbeiten, braucht es mehr als den Standard. Unsere Lokalisierung Österreich schließt die Lücken und bietet eine nahtlose Integration von UGB-Berichten, BMD-Export und Reisekostenabrechnung. So sind Sie optimal für den österreichischen Markt gerüstet – vom ersten Tag an.
            </p>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-[105%] max-w-[105%] lg:w-[70%] lg:max-w-[70%] border-4 rounded-lg overflow-hidden mb-6 lg:mb-0 mt-[10%]"
              style={{ borderColor: 'var(--color-sky-blue)' }}
            >
              <Image
                src="/images/DE/WebP/AVA_LOKALISIERUNG_AT_DE.webp"
                alt="Lokalisierung Österreich für NetSuite"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
