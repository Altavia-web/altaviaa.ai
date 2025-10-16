import React from 'react';
import Image from 'next/image';

const features = [
  {
    id: 1,
    title: 'Datenübertragung zwischen NetSuite und DATEV',
    description: 'Stammdaten (z. B. Kontenbeschriftungen, Debitoren/Kreditoren) und buchungsrelevante Transaktionen lassen sich zwischen NetSuite und DATEV importieren und exportieren – Version 3.0 schließt den Loop.'
  },
  {
    id: 2,
    title: 'SuiteTax-Kompatibilität',
    description: 'Die SuiteApp unterstützt sowohl Legacy Tax als auch SuiteTax – Funktionen stehen damit auch bei Mandanten mit SuiteTax-Setup zur Verfügung.'
  },
  {
    id: 3,
    title: 'Automatische Personenkonten-Zuordnung',
    description: 'Forderungen und Verbindlichkeiten aus LuL in NetSuite werden auf entsprechende DATEV-Personenkonto gebucht.'
  },
  {
    id: 4,
    title: 'Umsatzsteuer-Buchung',
    description: 'Die NetSuite-Mehrwertsteuerlogik wird für DATEV in eine Bruttobuchung überführt.'
  },
  {
    id: 5,
    title: 'Erlösrealisierung & Multibook',
    description: 'Die Lösung unterstützt Erlösrealisierungen und parallele Bewertungen.'
  },
  {
    id: 6,
    title: 'Abstimmung je Transaktion',
    description: 'In NetSuite können Sie direkt zu jeder Transaktion die entsprechende DATEV-Buchung analysieren, was die Abstimmung vereinfacht.'
  },
  {
    id: 7,
    title: 'Belegübernahme',
    description: 'Belege können direkt an DATEV Unternehmen online übertragen werden, um Belegbilder in DATEV zu den Vorgängen und zu Archivierungszwecken anzuzeigen.'
  },
  {
    id: 8,
    title: 'Überschreiben von CSV-Dateien',
    description: 'Das Überschreiben von CSV-Dateien wird direkt in NetSuite über die benutzerdefinierte Datensatz-Benutzeroberfläche abgewickelt.'
  }
];

export default function DatevBuchhaltung() {
  return (
    <section className="bg-white py-16">
      {/* Image */}
      <div className="w-full mb-12 flex justify-center">
        <div style={{ height: '170px' }}>
          <Image
            src="/images/DATEV/AVA_Solution_Datev.png"
            alt="DATEV Solution"
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
          className="text-center mb-24"
          style={{
            fontFamily: 'Titillium Web',
            fontWeight: 700,
            fontSize: '55px',
            lineHeight: '110%',
            letterSpacing: '0',
            color: '#002E64'
          }}
        >
          Was die DATEV Schnittstelle 3.0 für Sie leistet
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => (
            <div key={feature.id} className="text-left">
              <h3
                className="mb-8"
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
            src="/images/DATEV/AVA_DATEV_EN.webp"
            alt="DATEV Export"
            width={700}
            height={306}
            className="w-full h-auto md:w-auto md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
