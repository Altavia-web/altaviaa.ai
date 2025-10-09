import React from 'react';
import Image from 'next/image';

export default function LocalizationHero() {
  return (
    <section
      className="py-16 lg:py-20 px-8"
      style={{ backgroundColor: 'rgba(80, 149, 203, 0.4)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center mb-12">

          {/* Left Column - Text Content */}
          <div style={{ color: 'var(--color-dark-blue)' }}>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              Optimieren Sie NetSuite für den deutschen Markt – präzise, konform, einsatzbereit
            </h2>

            <h3 className="text-lg leading-relaxed">
              Die deutsche Geschäftswelt stellt besondere Anforderungen an Buchhaltung und Compliance. NetSuite ist die Basis, aber erst mit der Lokalisierung Deutschland wird Ihr System wirklich GoBD- und HGB-konform. Wir ergänzen alle Funktionen, die deutsche Unternehmen für eine prüfungssichere und effiziente Finanzverwaltung benötigen.
            </h3>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md border-4 rounded-lg overflow-hidden"
              style={{ borderColor: 'var(--color-sky-blue)' }}
            >
              <Image
                src="/images/DE/WebP/AVA_LOKALISIERUNG_DE_DE.webp"
                alt="Lokalisierung Deutschland für NetSuite"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>

        {/* YouTube Video Embed */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/_wGbvwAB1E0"
                title="Lokalisierung Deutschland für NetSuite - Video"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
