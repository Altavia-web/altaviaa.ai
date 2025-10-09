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
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              Optimieren Sie NetSuite für den österreichischen Markt – präzise, konform, einsatzbereit
            </h2>

            <p className="text-lg leading-relaxed">
              Die österreichische Geschäftswelt stellt besondere Anforderungen an Buchhaltung und Compliance. NetSuite ist die Basis, aber erst mit der Lokalisierung Österreich wird Ihr System wirklich UGB- und BAO-konform. Wir ergänzen alle Funktionen, die österreichische Unternehmen für eine prüfungssichere und effiziente Finanzverwaltung benötigen.
            </p>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md border-4 rounded-lg overflow-hidden"
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
