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
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              h3 steht hier und kann auch mehrzeilig sein, das kommt auf den Content an – Platz ist da.
            </h3>

            <p className="text-lg leading-relaxed">
              Auch der erfahrenste Bergsteiger braucht die richtige Ausrüstung für anspruchsvolles Gelände.
              Wenn Ihr Finanzteam bei der Nutzung von NetSuite für Ihre deutschen Tochtergesellschaften auf
              folgende Herausforderungen stößt, ist unsere Lokalisierung Deutschland genau die Ausrüstung,
              die Sie brauchen.
            </p>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md border-4 rounded-lg overflow-hidden"
              style={{ borderColor: 'var(--color-sky-blue)' }}
            >
              <Image
                src="/images/produkte/AVA_LOKALISIERUNG_DE.webp"
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
