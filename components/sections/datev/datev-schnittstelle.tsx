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
              Die Buchhaltungssoftware der DATEV eG ist in Deutschland der Standard bei Steuerberatern und Wirtschaftsprüfern. Mit der von DATEV zertifizierten SuiteApp &bdquo;Schnittstelle DATEV für NetSuite&ldquo; können Sie auf einfache Weise sämtliche Buchungsdaten aus Ihrem NetSuite-ERP-System zur Weiterverarbeitung bzw. zum Buchungsabschluss nach DATEV überführen.
            </h3>
          </div>

          {/* Image - Right */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/DE/WebP/AVA_DATEV-Schnittstelle_DE.webp"
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
