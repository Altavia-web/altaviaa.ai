import React from 'react';
import Image from 'next/image';

export default function DatevHero() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-datev)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto px-6" style={{ width: '80%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div className="text-left">
            <h1
              className="mb-6"
              style={{
                fontFamily: 'Titillium Web',
                fontWeight: 700,
                fontSize: '69px',
                lineHeight: '110%',
                letterSpacing: '0',
                color: '#ffffff'
              }}
            >
              Schnittstelle DATEV
            </h1>
            <h2
              style={{
                fontFamily: 'Titillium Web',
                fontWeight: 700,
                fontSize: '55px',
                lineHeight: '110%',
                letterSpacing: '0',
                color: '#ffffff'
              }}
            >
              NetSuite und DATEV: Ein Dreamteam deutscher Buchhaltung dank Schnittstelle DATEV.
            </h2>
          </div>

          {/* Image - Right */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/DATEV/AVA_Compass_DATEV-WHITE.webp"
                alt="DATEV Compass"
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
