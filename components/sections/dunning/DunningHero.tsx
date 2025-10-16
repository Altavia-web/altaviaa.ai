import React from 'react';
import Image from 'next/image';

export default function DunningHero() {
  return (
    <section
      className="pt-[5vh] lg:pt-0 pb-16 lg:pb-20 px-8"
      style={{ backgroundColor: 'rgba(152, 0, 0, 0.4)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column - Text Content */}
          <div style={{ color: 'var(--color-dark-blue)' }}>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              Effizient mahnen, Liquidität sichern – direkt aus NetSuite
            </h3>

            <p className="text-lg leading-relaxed">
              Zeit ist Geld: Mit Mahnwesen für NetSuite von Alta Via Applications automatisieren Sie Ihr Forderungsmanagement und verhindern Zahlungsausfälle. Mit Version 4.0 ist der Einstieg so einfach wie nie: In nur 60 Minuten ist das Mahnwesen startklar – ohne komplexe Einrichtung. Sie wählen die Filiale, hinterlegen die Bankdaten, und schon laufen Mahnungen automatisiert, transparent und zuverlässig direkt aus Ihrem ERP-System. So sparen Sie wertvolle Zeit, entlasten Ihr Team und sichern dauerhaft Ihre Liquidität.
            </p>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-[105%] max-w-[105%] lg:w-[70%] lg:max-w-[70%] border-4 rounded-lg overflow-hidden mb-6 lg:mb-0"
              style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}
            >
              <Image
                src="/images/DE/WebP/AVA_MAHNWESEN_DE.webp"
                alt="Mahnwesen für NetSuite"
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
