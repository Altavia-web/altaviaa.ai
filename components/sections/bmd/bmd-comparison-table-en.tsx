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
      { id: 1, feature: 'Mapping of NetSuite accounts to BMD', netsuite: 'yes', altaVia: 'yes' },
      { id: 2, feature: 'Mapping of tax codes', netsuite: 'yes', altaVia: 'yes (Legacy Tax)' },
      { id: 3, feature: 'Mapping of automatic accounts', netsuite: 'yes', altaVia: 'yes' },
      { id: 4, feature: 'Mapping of BMD - personal account', netsuite: 'yes', altaVia: 'yes' },
      { id: 5, feature: 'Mapping of cost centers', netsuite: 'yes', altaVia: 'yes' }
    ]
  },
  {
    name: 'Functions',
    features: [
      { id: 6, feature: 'Data transfer: NetSuite->BMD', netsuite: 'yes', altaVia: 'yes' },
      { id: 7, feature: 'Data transfer: BMD->NetSuite', netsuite: 'yes', altaVia: 'yes' },
      { id: 8, feature: 'Automatic assignment of personal accounts in NetSuite', netsuite: 'yes', altaVia: 'no' },
      { id: 9, feature: 'API between systems', netsuite: 'yes', altaVia: 'yes' },
      { id: 10, feature: 'Transfer of document link and PDF to BMD', netsuite: 'no', altaVia: 'yes' },
      { id: 11, feature: 'Integration in BMD Unternehmen Online', netsuite: 'no', altaVia: 'yes' },
      { id: 12, feature: 'Multibook support', netsuite: 'yes', altaVia: 'yes' },
      { id: 13, feature: 'Import of historical data', netsuite: 'yes', altaVia: 'yes' },
      { id: 14, feature: 'Overwriting CSV files', netsuite: 'no', altaVia: 'yes' }
    ]
  },
  {
    name: 'Installation / Documentation',
    features: [
      { id: 15, feature: 'Installation time', netsuite: '+20 hrs.', altaVia: '2 hrs.' },
      { id: 16, feature: 'Bundle-only installation', netsuite: 'no', altaVia: 'yes' },
      { id: 17, feature: 'Usage without separate user account/without separate user license possible', netsuite: 'no', altaVia: 'yes' }
    ]
  }
];

export default function BmdComparisonTableEN() {
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
          How the BMD Interface 3.0 for NetSuite complements the NetSuite-native solution
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            {/* Header */}
            <thead>
              <tr style={{ backgroundColor: 'var(--bmd-color-1)' }}>
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
                  Feature comparison
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
                  AVA BMD Interface 3.0 for NetSuite
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
                        <Check className="w-5 h-5" style={{ color: 'var(--bmd-color-1)' }} />
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
                        borderBottom: '2px solid var(--bmd-color-2)'
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
            Stable Connection. Flexible by Design.
          </h3>
          <p className="text-lg lg:text-xl text-white leading-relaxed">
            The BMD interface adapts to your requirements and evolves with NetSuite. This ensures reliable, compliant data transfer and keeps systems always ready for new processes, facilitating seamless collaboration between NetSuite and BMD.
          </p>
        </div>
      </div>
    </section>
  );
}
