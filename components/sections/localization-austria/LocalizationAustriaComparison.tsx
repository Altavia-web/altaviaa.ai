"use client";

import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronDown } from 'lucide-react';

interface FeatureRow {
  id: number;
  feature: string;
  netsuite: string;
  altaVia: string;
}

interface Category {
  name: string;
  features: FeatureRow[];
}

const categories: Category[] = [
  {
    name: 'Setup',
    features: [
      { id: 1, feature: 'Unterstützung bei der Ersteinrichtung', netsuite: 'nein', altaVia: 'ja' },
      { id: 2, feature: 'Individuelle Einstellungen und Dashboards für jede Tochtergesellschaft', netsuite: 'nein', altaVia: 'ja' }
    ]
  },
  {
    name: 'Funktionen',
    features: [
      { id: 3, feature: 'Österreichische Berichtsanforderungen', netsuite: 'begrenzt', altaVia: 'ja' },
      { id: 4, feature: 'Kontenblatt', netsuite: 'begrenzt', altaVia: 'ja' },
      { id: 5, feature: 'Mehrwertsteuerrückerstattung', netsuite: 'begrenzt', altaVia: 'ja' },
      { id: 6, feature: 'Verprobung USt-ID', netsuite: 'begrenzt', altaVia: 'ja' },
      { id: 7, feature: 'Allgemeine EU-Steuer', netsuite: 'nein', altaVia: 'ja' },
      { id: 8, feature: 'PDF Texte/Steuertexte', netsuite: 'nein', altaVia: 'ja' },
      { id: 9, feature: 'Steuerstichtag', netsuite: 'nein', altaVia: 'ja' },
      { id: 10, feature: 'E-Rechnung Österreich', netsuite: 'nein', altaVia: 'ja' },
      { id: 11, feature: 'Unveränderlichkeit von Buchungen', netsuite: 'begrenzt', altaVia: 'ja' },
      { id: 12, feature: 'Rechnungsabgrenzungsposten', netsuite: 'nein', altaVia: 'ja' },
      { id: 13, feature: 'FinanzOnline Integration', netsuite: 'begrenzt', altaVia: 'ja' }
    ]
  },
  {
    name: 'Installation / Dokumentation',
    features: [
      { id: 14, feature: 'Direkte Installation über SuiteBundle', netsuite: 'ja', altaVia: 'ja' }
    ]
  }
];

export default function LocalizationAustriaComparison() {
  const [expandedCategories, setExpandedCategories] = useState({
    setup: true,
    funktionen: true,
    installation: true
  });

  const toggleCategory = (category: keyof typeof expandedCategories) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent, category: keyof typeof expandedCategories) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCategory(category);
    }
  };

  const getCategoryKey = (categoryName: string): keyof typeof expandedCategories => {
    if (categoryName === 'Setup') return 'setup';
    if (categoryName === 'Funktionen') return 'funktionen';
    return 'installation';
  };

  const renderCell = (value: string) => {
    if (value === 'check' || value === 'ja' || value === 'yes') {
      return (
        <div className="flex justify-center">
          <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
        </div>
      );
    }
    if (value === 'x' || value === 'nein' || value === 'no') {
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
    if (value === 'check' || value === 'ja' || value === 'yes') {
      return (
        <div className="flex justify-center">
          <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
        </div>
      );
    }
    if (value === 'x' || value === 'nein' || value === 'no') {
      return (
        <div className="flex justify-center">
          <XCircle className="w-7 h-7" style={{ color: '#ff4100' }} />
        </div>
      );
    }
    return (
      <span style={{ fontFamily: 'Titillium Web', fontWeight: 400, fontSize: '16px', color: 'var(--color-dark-blue)' }}>
        {value}
      </span>
    );
  };

  return (
    <section className="bg-white">
      <div className="py-20 lg:py-24 px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Main Heading */}
          <h2
            className="text-2xl lg:text-4xl font-semibold text-center mb-12 leading-tight"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Wie Lokalisierung Österreich für NetSuite die NetSuite-native Lösung ergänzt
          </h2>

          {/* Desktop Comparison Table - Hidden on Mobile */}
          <div className="hidden lg:block overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse">

            {/* Sticky Header */}
            <thead
              className="sticky top-0 z-10"
              style={{ backgroundColor: 'var(--color-dark-blue)' }}
            >
              <tr>
                <th className="text-left py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  Funktionsvergleich
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  NetSuite&apos;s Österreich Lokalisierung
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  AVA Lokalisierung Österreich für NetSuite
                </th>
              </tr>
            </thead>

            <tbody>
              {categories.map((category) => {
                const categoryKey = getCategoryKey(category.name);
                return (
                  <React.Fragment key={category.name}>
                    {/* Category Header */}
                    <tr>
                      <td colSpan={3} className="p-0">
                        <div
                          role="button"
                          tabIndex={0}
                          aria-expanded={expandedCategories[categoryKey]}
                          onClick={() => toggleCategory(categoryKey)}
                          onKeyDown={(e) => handleKeyDown(e, categoryKey)}
                          className="flex items-center gap-3 py-4 px-6 cursor-pointer transition-colors"
                          style={{
                            backgroundColor: '#f0f0f0',
                            color: 'var(--color-dark-blue)',
                            borderTop: '2px solid var(--color-sky-blue)'
                          }}
                        >
                          <CheckCircle2 size={20} style={{ color: 'var(--color-mid-blue)' }} />
                          <span className="font-semibold text-base lg:text-lg">{category.name}</span>
                          <ChevronDown
                            size={20}
                            className={`ml-auto transition-transform ${expandedCategories[categoryKey] ? 'rotate-180' : ''}`}
                          />
                        </div>
                      </td>
                    </tr>

                    {/* Feature Rows */}
                    {expandedCategories[categoryKey] && category.features.map((feature, index) => (
                      <tr key={feature.id} style={{ backgroundColor: index % 2 === 0 ? '#fafafa' : '#ffffff' }}>
                        <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                          {feature.feature}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {renderCell(feature.netsuite)}
                        </td>
                        <td className="py-4 px-6 text-center">
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
                    <CheckCircle2 size={20} style={{ color: 'var(--color-mid-blue)' }} />
                    <span
                      style={{
                        fontFamily: 'Titillium Web',
                        fontWeight: 600,
                        fontSize: '18px',
                        color: 'var(--color-dark-blue)'
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
                        borderBottom: '3px solid var(--color-sky-blue)'
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
                          color: 'var(--color-dark-blue)',
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
                            NetSuite
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
                            AVA Lokalisierung
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
      </div>
    </section>
  );
}
