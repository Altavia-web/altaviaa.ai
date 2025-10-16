'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle, Check, ChevronDown } from 'lucide-react';

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
      { id: 1, feature: 'Mapping of NetSuite accounts to DATEV', netsuite: 'yes', altaVia: 'yes' },
      { id: 2, feature: 'Mapping of tax codes', netsuite: 'yes', altaVia: 'yes (Legacy Tax)' },
      { id: 3, feature: 'Mapping of automatic accounts', netsuite: 'yes', altaVia: 'yes' },
      { id: 4, feature: 'Mapping of DATEV - personal account', netsuite: 'yes', altaVia: 'yes' },
      { id: 5, feature: 'Mapping of cost centers', netsuite: 'yes', altaVia: 'yes' }
    ]
  },
  {
    name: 'Functions',
    features: [
      { id: 6, feature: 'Data transfer: NetSuite->DATEV', netsuite: 'yes', altaVia: 'yes' },
      { id: 7, feature: 'Data transfer: DATEV->NetSuite', netsuite: 'yes', altaVia: 'yes' },
      { id: 8, feature: 'Automatic assignment of personal accounts in NetSuite', netsuite: 'yes', altaVia: 'no' },
      { id: 9, feature: 'API between systems', netsuite: 'yes', altaVia: 'yes' },
      { id: 10, feature: 'Transfer of document link and PDF to DATEV', netsuite: 'no', altaVia: 'yes' },
      { id: 11, feature: 'Integration in DATEV Unternehmen Online', netsuite: 'no', altaVia: 'yes' },
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

export default function DatevComparisonTableEN() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set([categories[0]?.name || '']));

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  const renderCell = (value: string) => {
    if (value === 'check' || value === 'yes') {
      return (
        <div className="flex justify-center">
          <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
        </div>
      );
    }
    if (value === 'x' || value === 'no') {
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
    if (value === 'yes') {
      return <CheckCircle2 className="w-6 h-6" style={{ color: '#00b577' }} />;
    }
    if (value === 'no') {
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
          How the DATEV Interface 3.0 for NetSuite complements the NetSuite-native solution
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
                  AVA DATEV Interface 3.0 for NetSuite
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {categories.map((category) => {
                const isOpen = openCategories.has(category.name);
                return (
                  <React.Fragment key={category.name}>
                    {/* Category Row - Clickable */}
                    <tr
                      style={{ backgroundColor: '#f3f4f6', cursor: 'pointer' }}
                      onClick={() => toggleCategory(category.name)}
                    >
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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Check className="w-5 h-5" style={{ color: '#009b87' }} />
                            {category.name}
                          </div>
                          <ChevronDown
                            className="w-5 h-5 transition-transform duration-200"
                            style={{
                              color: '#002e64',
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}
                          />
                        </div>
                      </td>
                    </tr>

                    {/* Feature Rows - Collapsible */}
                    {isOpen && category.features.map((feature) => (
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
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout - Hidden on Desktop */}
        <div className="lg:hidden space-y-6">
          {categories.map((category) => {
            const isOpen = openCategories.has(category.name);
            return (
              <div key={category.name}>
                {/* Category Header - Clickable */}
                <div
                  className="py-3 px-4 mb-3 cursor-pointer"
                  style={{
                    backgroundColor: '#f3f4f6',
                    borderRadius: '0.5rem'
                  }}
                  onClick={() => toggleCategory(category.name)}
                >
                  <div className="flex items-center justify-between">
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
                    <ChevronDown
                      className="w-5 h-5 transition-transform duration-200"
                      style={{
                        color: '#002e64',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </div>

                {/* Feature Cards - Collapsible */}
                {isOpen && (
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
              )}
            </div>
          );
          })}
        </div>
      </div>

      {/* Version 3.0 Text Section with Gradient Background */}
      <div
        className="w-full py-12 lg:py-16 px-6"
        style={{ background: 'var(--gradient-datev)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-white leading-tight">
            Constantly evolving. Always up to date.
          </h3>
          <p className="text-lg lg:text-xl text-white leading-relaxed">
            Version 3.0 brings SuiteTax compatibility, the import of transaction files from DATEV to NetSuite, and CSV override directly in NetSuite. This eliminates manual rework and keeps you flexible for special cases.
          </p>
        </div>
      </div>
    </section>
  );
}
