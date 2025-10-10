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
      { id: 1, feature: 'Zuordnung von NetSuite-Konten zu DATEV', netsuite: 'ja', altaVia: 'ja' },
      { id: 2, feature: 'Zuordnung von Steuerkennzeichen', netsuite: 'ja', altaVia: 'ja (Legacy Tax)' },
      { id: 3, feature: 'Zuordnung von automatischen Konten', netsuite: 'ja', altaVia: 'ja' },
      { id: 4, feature: 'Zuordnung von DATEV - Personenkonto', netsuite: 'ja', altaVia: 'ja' },
      { id: 5, feature: 'Zuordnung von Kostenstellen', netsuite: 'ja', altaVia: 'ja' }
    ]
  },
  {
    name: 'Funktionen',
    features: [
      { id: 6, feature: 'Datentransfer: NetSuite->DATEV', netsuite: 'ja', altaVia: 'ja' },
      { id: 7, feature: 'Datentransfer: DATEV->NetSuite', netsuite: 'ja', altaVia: 'ja' },
      { id: 8, feature: 'Automatische Zuweisung von Personenkontos in NetSuite', netsuite: 'ja', altaVia: 'nein' },
      { id: 9, feature: 'API zwischen den Systemen', netsuite: 'ja', altaVia: 'ja' },
      { id: 10, feature: 'Übertragung von Beleglink und PDF an DATEV', netsuite: 'nein', altaVia: 'ja' },
      { id: 11, feature: 'Integration in DATEV Unternehmen Online', netsuite: 'nein', altaVia: 'ja' },
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

  const renderMobileCell = (value: string) => {
    if (value === 'ja') {
      return <CheckCircle2 className="w-6 h-6" style={{ color: '#00b577' }} />;
    }
    if (value === 'nein') {
      return <XCircle className="w-6 h-6" style={{ color: '#ff4100' }} />;
    }
    return (
      <span style={{ fontFamily: 'Titillium Web', fontWeight: 400, fontSize: '16px', color: '#000000' }}>
        {value}
      </span>
    );
  };

  return (
    <section className="bg-white">
      <div className="py-16 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-center mb-8 text-2xl lg:text-4xl"
          style={{
            fontFamily: 'Titillium Web',
            fontWeight: 700,
            lineHeight: '110%',
            letterSpacing: '0',
            color: '#002e64'
          }}
        >
          Wie die DATEV Schnittstelle 3.0 für NetSuite die NetSuite-native Lösung ergänzt
        </h2>

        {/* Desktop Table - Hidden on Mobile */}
        <div className="hidden lg:block overflow-x-auto">
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
                  NetSuite DATEV
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
                  AVA DATEV Schnittstelle 3.0 für NetSuite
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

        {/* Mobile Card Layout - Hidden on Desktop */}
        <div className="lg:hidden space-y-6">
          {categories.map((category) => (
            <div key={category.name}>
              {/* Category Header */}
              <div
                className="py-3 px-4 mb-3"
                style={{
                  backgroundColor: '#f3f4f6',
                  borderRadius: '0.5rem'
                }}
              >
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#009b87' }} />
                  <span
                    style={{
                      fontFamily: 'Titillium Web',
                      fontWeight: 600,
                      fontSize: '18px',
                      color: '#002e64'
                    }}
                  >
                    {category.name}
                  </span>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="space-y-3">
                {category.features.map((feature) => (
                  <div
                    key={feature.id}
                    className="p-4"
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      borderBottom: '3px solid #78dc3c'
                    }}
                  >
                    {/* Feature Name */}
                    <div
                      className="mb-3 pb-3"
                      style={{
                        fontFamily: 'Titillium Web',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '140%',
                        color: '#002e64',
                        borderBottom: '1px solid #e5e7eb'
                      }}
                    >
                      {feature.feature}
                    </div>

                    {/* Comparison Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* NetSuite Column */}
                      <div>
                        <div
                          className="mb-2 text-xs"
                          style={{
                            fontFamily: 'Titillium Web',
                            fontWeight: 600,
                            color: '#6b7280',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          NetSuite DATEV
                        </div>
                        <div className="flex items-center justify-center p-2">
                          {renderMobileCell(feature.netsuite)}
                        </div>
                      </div>

                      {/* AVA Column */}
                      <div>
                        <div
                          className="mb-2 text-xs"
                          style={{
                            fontFamily: 'Titillium Web',
                            fontWeight: 600,
                            color: '#6b7280',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          AVA DATEV 3.0
                        </div>
                        <div className="flex items-center justify-center p-2">
                          {renderMobileCell(feature.altaVia)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Version 3.0 Text Section with Gradient Background */}
      <div
        className="w-full py-12 lg:py-16 px-6"
        style={{ background: 'var(--gradient-datev)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-white leading-tight">
            Ständig in Bewegung. Stets up to date.
          </h3>
          <p className="text-lg lg:text-xl text-white leading-relaxed">
            Version 3.0 bringt SuiteTax-Kompatibilität, den Import von Transaktionsdateien aus DATEV nach NetSuite sowie das CSV-Override direkt in NetSuite. Damit entfällt manuelles Nacharbeiten und Sie bleiben flexibel bei Sonderfällen.
          </p>
        </div>
      </div>
    </section>
  );
}
