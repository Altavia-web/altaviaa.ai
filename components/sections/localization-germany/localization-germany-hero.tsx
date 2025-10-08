import React from 'react';
import Image from 'next/image';

export default function LocalizationGermanyHero() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-lokalisierung)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto px-6" style={{ width: '80%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div className="text-left">
            <h1 className="mb-6 text-white">
              Lokalisierung Deutschland für NetSuite
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4 text-white font-semibold">
              Optimieren Sie NetSuite für den deutschen Markt – präzise, konform, einsatzbereit
            </h2>
            <h3 className="text-lg md:text-xl text-white opacity-90 leading-relaxed">
              Die deutsche Geschäftswelt stellt besondere Anforderungen an Buchhaltung und Compliance. NetSuite ist die Basis, aber erst mit der Lokalisierung Deutschland wird Ihr System wirklich GoBD- und HGB-konform. Wir ergänzen alle Funktionen, die deutsche Unternehmen für eine prüfungssichere und effiziente Finanzverwaltung benötigen.
            </h3>
          </div>

          {/* Image - Right */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/LOCALIZATION/AVA_Map_Localization_WHITE.webp"
                alt="Lokalisierung Deutschland Compass"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
