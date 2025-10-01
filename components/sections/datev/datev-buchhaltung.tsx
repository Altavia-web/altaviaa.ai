import React from 'react';
import Image from 'next/image';

const features = [
  {
    id: 1,
    title: 'Belegübernahme',
    description: 'Erfassen Sie Belege direkt in NetSuite und übertragen Sie diese nahtlos in DATEV. Alle relevanten Informationen werden automatisch synchronisiert.'
  },
  {
    id: 2,
    title: 'Datenübertragung',
    description: 'Automatisierte Übertragung von Buchungsdaten aus NetSuite in DATEV Unternehmen online. Kein manueller Export mehr nötig.'
  },
  {
    id: 3,
    title: 'Personenkonten',
    description: 'Kunden- und Lieferantendaten werden automatisch abgeglichen und in den entsprechenden Personenkonten in DATEV abgebildet.'
  },
  {
    id: 4,
    title: 'Umsatzsteuer-Buchung',
    description: 'Korrekte Zuordnung und Buchung aller umsatzsteuerrelevanten Vorgänge gemäß deutschen Steuervorschriften.'
  },
  {
    id: 5,
    title: 'Abstimmung je Transaktion',
    description: 'Jede einzelne Transaktion ist nachvollziehbar und kann zwischen NetSuite und DATEV abgestimmt werden.'
  },
  {
    id: 6,
    title: 'Erlösrealisierung & Multibook',
    description: 'Unterstützung für unterschiedliche Rechnungslegungsstandards und parallele Buchführung in NetSuite und DATEV.'
  }
];

export default function DatevBuchhaltung() {
  return (
    <section className="bg-white py-16">
      {/* Image */}
      <div className="w-full mb-12 flex justify-center">
        <div style={{ width: '60%' }}>
          <Image
            src="/images/DATEV/AVA_Solution_Datev.png"
            alt="DATEV Solution"
            width={1200}
            height={525}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'Titillium Web',
            fontWeight: 700,
            fontSize: '55px',
            lineHeight: '110%',
            letterSpacing: '0',
            color: '#002E64'
          }}
        >
          Ihr direkter Pfad zur Buchhaltung mit DATEV
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => (
            <div key={feature.id} className="text-left">
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'Titillium Web',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '130%',
                  letterSpacing: '0',
                  color: '#002E64'
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Titillium Web',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '140%',
                  letterSpacing: '0',
                  color: '#1e293b'
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Image */}
      <div className="w-full mt-12 flex justify-center">
        <div style={{ width: '35%' }}>
          <Image
            src="/images/DATEV/AVA_DATEV_EN.webp"
            alt="DATEV Export"
            width={700}
            height={306}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
