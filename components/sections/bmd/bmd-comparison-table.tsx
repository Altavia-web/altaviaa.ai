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
      { id: 1, feature: 'Zuordnung von NetSuite-Konten zu BMD', netsuite: 'ja', altaVia: 'ja' },
      { id: 2, feature: 'Zuordnung von Steuerkennzeichen', netsuite: 'ja', altaVia: 'ja (Legacy Tax)' },
      { id: 3, feature: 'Zuordnung von automatischen Konten', netsuite: 'ja', altaVia: 'ja' },
      { id: 4, feature: 'Zuordnung von BMD - Personenkonto', netsuite: 'ja', altaVia: 'ja' },
      { id: 5, feature: 'Zuordnung von Kostenstellen', netsuite: 'ja', altaVia: 'ja' }
    ]
  },
  {
    name: 'Funktionen',
    features: [
      { id: 6, feature: 'Datentransfer: NetSuite->BMD', netsuite: 'ja', altaVia: 'ja' },
      { id: 7, feature: 'Datentransfer: BMD->NetSuite', netsuite: 'ja', altaVia: 'ja' },
      { id: 8, feature: 'Automatische Zuweisung von Personenkontos in NetSuite', netsuite: 'ja', altaVia: 'nein' },
      { id: 9, feature: 'API zwischen den Systemen', netsuite: 'ja', altaVia: 'ja' },
      { id: 10, feature: 'Übertragung von Beleglink und PDF an BMD', netsuite: 'nein', altaVia: 'ja' },
      { id: 11, feature: 'Integration in BMD Unternehmen Online', netsuite: 'nein', altaVia: 'ja' },
      { id: 12, feature: 'Multibook-Unterstützung', netsuite: 'ja', altaVia: 'ja' },
      { id: 13, feature: 'Import historischer Daten', netsuite: 'ja', altaVia: 'ja' },
      { id: 14, feature: 'Überschreiben von CSV-Dateien', netsuite: 'nein', altaVia: 'ja' }
    ]
  },
  {
    name: 'Installation / Dokumentation',
    features: [
      { id: 15, feature: 'Installationszeit', netsuite: '+20 Std.', altaVia: '2 Std.' },
      { id: 16, feature: 'Nur Bundle-Installation', netsuite: 'nein', altaVia: 'ja' },
      { id: 17, feature: 'Nutzung ohne separaten Nutzer-Account/ohne separate Nutzer-Lizenz möglich', netsuite: 'nein', altaVia: 'ja' }
    ]
  }
];

export default function BmdComparisonTable() {
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
    <section className="bg-white">
      <div className="py-16 max-w-6xl mx-auto px-6">
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
          Wie die BMD Schnittstelle 3.0 für NetSuite die NetSuite-native Lösung ergänzt
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
                  NetSuite BMD
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
                  AVA BMD Schnittstelle 3.0 für NetSuite
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

      {/* Version 3.0 Text Section with Gradient Background */}
      <div
        className="w-full py-12 lg:py-16 px-6"
        style={{ background: 'var(--gradient-bmd)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-white leading-tight">
            Stabil verbunden. Flexibel erweiterbar.
          </h3>
          <p className="text-lg lg:text-xl text-white leading-relaxed">
            Die BMD-Schnittstelle passt sich Ihren Anforderungen an und entwickelt sich mit NetSuite weiter. So bleibt der Datentransfer zuverlässig, konform und jederzeit bereit für neue Prozesse – für eine reibungslose Zusammenarbeit zwischen NetSuite und BMD.
          </p>
        </div>
      </div>
    </section>
  );
}
