import React from 'react';
import Image from 'next/image';

export default function DunningHero() {
  return (
    <section
      className="py-16 lg:py-20 px-8"
      style={{ backgroundColor: 'rgba(152, 0, 0, 0.4)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column - Text Content */}
          <div style={{ color: 'var(--color-dark-blue)' }}>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              Zeit ist Geld: Mit Mahnwesen für NetSuite von Alta Via Applications automatisieren Sie Ihr Forderungsmanagement und verhindern Zahlungsausfälle. Mit Version 4.0 ist der Einstieg so einfach wie nie: In nur 60 Minuten ist das Mahnwesen startklar – ohne komplexe Einrichtung. Sie wählen die Filiale, hinterlegen die Bankdaten, und schon laufen Mahnungen automatisiert, transparent und zuverlässig direkt aus Ihrem ERP-System. So sparen Sie wertvolle Zeit, entlasten Ihr Team und sichern dauerhaft Ihre Liquidität.
            </h3>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md border-4 rounded-lg overflow-hidden"
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
