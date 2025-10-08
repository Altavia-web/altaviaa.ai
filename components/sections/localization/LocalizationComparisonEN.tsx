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
      { id: 1, feature: '[Feature 1 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' },
      { id: 2, feature: '[Feature 2 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' }
    ]
  },
  {
    name: 'Functions',
    features: [
      { id: 3, feature: '[Feature 3 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' },
      { id: 4, feature: '[Feature 4 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' },
      { id: 5, feature: '[Feature 5 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' },
      { id: 6, feature: '[Feature 6 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' },
      { id: 7, feature: '[Feature 7 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' },
      { id: 8, feature: '[Feature 8 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' },
      { id: 9, feature: '[Feature 9 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' },
      { id: 10, feature: '[Feature 10 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' },
      { id: 11, feature: '[Feature 11 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' },
      { id: 12, feature: '[Feature 12 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' },
      { id: 13, feature: '[Feature 13 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' }
    ]
  },
  {
    name: 'Installation / Documentation',
    features: [
      { id: 14, feature: '[Feature 14 - Text to follow]', netsuite: '[Text to follow]', altaVia: '[Text to follow]' }
    ]
  }
];

export default function LocalizationComparisonEN() {
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
    if (categoryName === 'Functions') return 'funktionen';
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
            [English Comparison Table Heading - Text to follow]
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
                  Feature Comparison
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  NetSuite&apos;s Germany Localization
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  AVA Localization Germany for NetSuite
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

      {/* Final Text Section with Gradient Background */}
      <div
        className="w-full py-16 lg:py-20 px-6"
        style={{ background: 'var(--gradient-lokalisierung)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-white leading-tight">
            [English Version Update Heading - Text to follow]
          </h3>
          <p className="text-lg lg:text-xl text-white leading-relaxed">
            [English Version Update Text - Text to follow]
          </p>
        </div>
      </div>
    </section>
  );
}
