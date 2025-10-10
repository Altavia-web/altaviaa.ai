import React from 'react';
import Image from 'next/image';

const features = [
  {
    id: 1,
    title: 'CSV-Export von Buchungsdaten',
    description: 'Stammdaten und Buchungsstapel werden aus NetSuite als CSV-Datei exportiert und können anschließend in BMD importiert werden.'
  },
  {
    id: 2,
    title: 'Personenkonten automatisch buchen',
    description: 'Forderungen und Verbindlichkeiten aus NetSuite werden den passenden BMD-Personenkonten zugeordnet.'
  },
  {
    id: 3,
    title: 'Umsatzsteuer korrekt übertragen',
    description: 'Die NetSuite-Logik für MwSt. wird automatisch in eine BMD-konforme Bruttobuchung umgewandelt.'
  },
  {
    id: 4,
    title: 'Erlösrealisierung & Multibook',
    description: 'Unterstützt parallele Bewertungen und Erlösrealisierungen.'
  },
  {
    id: 5,
    title: 'Einfache Abstimmung',
    description: 'Direkte Analyse jeder Transaktion in NetSuite inklusive passender BMD-Buchung.'
  }
];

export default function BmdBuchhaltung() {
  return (
    <section className="bg-white py-16">
      {/* Image */}
      <div className="w-full mb-12 flex justify-center">
        <div style={{ height: '170px' }}>
          <Image
            src="/images/BMD/AVA_Solution_Bmd.png"
            alt="BMD Solution"
            width={1200}
            height={525}
            style={{ height: '170px', width: 'auto' }}
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
          Buchhaltungsdaten sicher und effizient übertragen
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
        <div className="w-full px-6 md:px-0 md:w-auto" style={{ maxHeight: '400px' }}>
          <Image
            src="/images/BMD/AVA_BMD_EN.webp"
            alt="BMD Export"
            width={700}
            height={306}
            className="w-full h-auto md:w-auto md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
