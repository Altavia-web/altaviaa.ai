"use client";

import React, { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

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
    return (
      <div className="flex justify-center">
        <span className="text-base" style={{ color: 'var(--color-dark-blue)' }}>
          {value}
        </span>
      </div>
    );
  };

  return (
    <section className="bg-white">
      <div className="py-20 lg:py-24 px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Main Heading */}
          <h2
            className="text-3xl lg:text-4xl font-semibold text-center mb-12 leading-tight"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Wie Lokalisierung Österreich für NetSuite die NetSuite-native Lösung ergänzt
          </h2>

          {/* Comparison Table */}
          <div className="overflow-x-auto shadow-lg rounded-lg">
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

        </div>
      </div>
    </section>
  );
}
