import React from 'react';
import Image from 'next/image';

export default function BmdSchnittstelle() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-bmd-intro)'
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
              Sicherer Export Ihrer Buchungsdaten aus NetSuite nach BMD
            </h3>
            <p
              style={{
                fontFamily: 'Titillium Web',
                fontSize: '18px',
                lineHeight: '140%',
                color: '#002E64'
              }}
            >
              Unternehmen in Österreich, die das Cloud-ERP NetSuite nutzen, bewegen sich oft zwischen zwei Welten: Finanzdaten liegen in NetSuite, während der Steuerberater mit BMD arbeitet. Damit beide Seiten nahtlos zusammenfinden, sorgt die BMD Schnittstelle für NetSuite von Alta Via Applications für einen sicheren Export von Buchungsdaten aus NetSuite - damit sie problemlos in BMD importiert werden können. Buchungsdaten werden als CSV-Datei bereitgestellt und manuell in BMD eingespielt – effizient, rechtssicher und ohne doppelte Datenerfassung.
            </p>
          </div>

          {/* Image - Right */}
          <div className="flex justify-end">
            <div className="relative w-[105%] max-w-[105%] lg:w-[70%] lg:max-w-[70%] mb-6 lg:mb-0 mt-[10%]">
              <Image
                src="/images/DE/WebP/AVA_BMD_DE.webp"
                alt="BMD Schnittstelle"
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
