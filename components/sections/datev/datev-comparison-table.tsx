import React from 'react';
import { CheckCircle2, XCircle, Check } from 'lucide-react';

interface FeatureRow {
  id: number;
  feature: string;
  netsuite: 'check' | 'x' | string;
  altaVia: 'check' | 'x' | string;
}

interface Category {
  name: string;
  features: FeatureRow[];
}

const categories: Category[] = [
  {
    name: 'Mapping',
    features: [
      { id: 1, feature: 'Zuordnung von NetSuite-Konten zu DATEV', netsuite: 'check', altaVia: 'check' },
      { id: 2, feature: 'Zuordnung von Steuerkennzeichen', netsuite: 'check', altaVia: 'check' },
      { id: 3, feature: 'Zuordnung von automatischen Konten', netsuite: 'check', altaVia: 'check' },
      { id: 4, feature: 'Zuordnung von DATEV - Personenkonto', netsuite: 'check', altaVia: 'check' },
      { id: 5, feature: 'Zuordnung von Kostenstellen', netsuite: 'check', altaVia: 'check' }
    ]
  },
  {
    name: 'Funktionen',
    features: [
      { id: 6, feature: 'Datentransfer: NetSuite->Datev', netsuite: 'check', altaVia: 'check' },
      { id: 7, feature: 'Datentransfer: Datev->NetSuite', netsuite: 'check', altaVia: 'x' },
      { id: 8, feature: 'Automatische Zuweisung von Personenkontos in NetSuite', netsuite: 'check', altaVia: 'x' },
      { id: 9, feature: 'API zwischen den Systemen', netsuite: 'check', altaVia: 'check' },
      { id: 10, feature: 'Übertragung von Beleglink und PDF an Datev', netsuite: 'x', altaVia: 'check' },
      { id: 11, feature: 'Integration in DATEV Unternehmen Online', netsuite: 'x', altaVia: 'check' },
      { id: 12, feature: 'Multibook-Unterstützung', netsuite: 'check', altaVia: 'check' },
      { id: 13, feature: 'Import historischer Daten', netsuite: 'check', altaVia: 'check' }
    ]
  },
  {
    name: 'Installation',
    features: [
      { id: 14, feature: 'Installationszeit', netsuite: '+20 Std.', altaVia: '2 Std.' },
      { id: 15, feature: 'Nutzung ohne separaten Nutzer-Account/ohne separate Nutzer-Lizenz möglich', netsuite: 'x', altaVia: 'check' }
    ]
  }
];

export default function DatevComparisonTable() {
  const renderCell = (value: string) => {
    if (value === 'check') {
      return (
        <div className="flex justify-center">
          <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
        </div>
      );
    }
    if (value === 'x') {
      return (
        <div className="flex justify-center">
          <XCircle className="w-7 h-7" style={{ color: '#ff4100' }} />
        </div>
      );
    }
    return (
      <div className="flex justify-center">
        <span style={{ fontFamily: 'Titillium Web', fontWeight: 400, fontSize: '18px', color: '#000000' }}>
          {value}
        </span>
      </div>
    );
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-center mb-8"
          style={{
            fontFamily: 'Titillium Web',
            fontWeight: 700,
            fontSize: '44px',
            lineHeight: '110%',
            letterSpacing: '0',
            color: '#002e64'
          }}
        >
          Von NetSuite zu DATEV – Wie wir die Brücke schlagen
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            {/* Header */}
            <thead>
              <tr style={{ backgroundColor: '#009b87' }}>
                <th
                  className="py-4 px-4 text-left"
                  style={{
                    width: '40%',
                    fontFamily: 'Titillium Web',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: '#ffffff'
                  }}
                >
                  Funktionsvergleich
                </th>
                <th
                  className="py-4 px-4 text-center"
                  style={{
                    width: '30%',
                    fontFamily: 'Titillium Web',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: '#ffffff'
                  }}
                >
                  NetSuite DATEV Connector
                </th>
                <th
                  className="py-4 px-4 text-center"
                  style={{
                    width: '30%',
                    fontFamily: 'Titillium Web',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: '#ffffff'
                  }}
                >
                  Alta Via DATEV Export für NetSuite
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {categories.map((category) => (
                <React.Fragment key={category.name}>
                  {/* Category Row */}
                  <tr style={{ backgroundColor: '#f3f4f6' }}>
                    <td
                      colSpan={3}
                      className="py-3 px-4"
                      style={{
                        fontFamily: 'Titillium Web',
                        fontWeight: 600,
                        fontSize: '18px',
                        color: '#002e64'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5" style={{ color: '#009b87' }} />
                        {category.name}
                      </div>
                    </td>
                  </tr>

                  {/* Feature Rows */}
                  {category.features.map((feature) => (
                    <tr
                      key={feature.id}
                      style={{
                        backgroundColor: '#ffffff',
                        borderBottom: '2px solid #78dc3c'
                      }}
                    >
                      <td
                        className="py-4 px-4"
                        style={{
                          fontFamily: 'Titillium Web',
                          fontWeight: 400,
                          fontSize: '18px',
                          lineHeight: '140%',
                          color: '#1e293b'
                        }}
                      >
                        {feature.feature}
                      </td>
                      <td className="py-4 px-4">
                        {renderCell(feature.netsuite)}
                      </td>
                      <td className="py-4 px-4">
                        {renderCell(feature.altaVia)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
