import React from 'react';
import Image from 'next/image';

export default function DatevSchnittstelle() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-datev-intro)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto px-6" style={{ width: '80%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div className="text-left">
            <h3
              className="mb-6"
              style={{
                fontFamily: 'Titillium Web',
                fontWeight: 700,
                fontSize: '44px',
                lineHeight: '110%',
                letterSpacing: '0',
                color: '#002E64'
              }}
            >
              [H3 Text folgt - kann mehrzeilig sein]
            </h3>
            <p style={{
              fontFamily: 'Titillium Web',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '140%',
              letterSpacing: '0',
              color: '#000000'
            }}>
              Wenn Ihr Unternehmen als deutsche Tochtergesellschaft umfangreiche Finanzberichtspflichten in Deutschland hat und DATEV Unternehmen online für die Buchhaltung nutzt, ist DATEV Export für NetSuite die richtige Wahl.
            </p>
          </div>

          {/* Image - Right */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/produkte/AVA_DATEV_DE.webp"
                alt="DATEV Schnittstelle"
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
