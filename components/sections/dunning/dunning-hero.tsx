import React from 'react';
import Image from 'next/image';

export default function DunningHero() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-mahnwesen)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto px-6" style={{ width: '80%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div className="text-left">
            <h1 className="mb-6 text-white">
              Mahnwesen für NetSuite
            </h1>
            <h2 className="text-white">
              NetSuite automatisierte Mahnungen für Forderungen
            </h2>
          </div>

          {/* Image - Right */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/dunning/compass.webp"
                alt="Mahnwesen Compass"
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
