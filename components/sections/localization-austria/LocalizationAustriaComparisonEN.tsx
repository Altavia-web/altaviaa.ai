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
      { id: 1, feature: 'Initial setup support', netsuite: 'no', altaVia: 'yes' },
      { id: 2, feature: 'Individual settings and dashboards for each subsidiary', netsuite: 'no', altaVia: 'yes' }
    ]
  },
  {
    name: 'Features',
    features: [
      { id: 3, feature: 'Austrian Reporting Requirements', netsuite: 'limited', altaVia: 'yes' },
      { id: 4, feature: 'Chart of Accounts', netsuite: 'limited', altaVia: 'yes' },
      { id: 5, feature: 'VAT Recalculation', netsuite: 'limited', altaVia: 'yes' },
      { id: 6, feature: 'VAT ID Verification', netsuite: 'limited', altaVia: 'yes' },
      { id: 7, feature: 'General EU Tax', netsuite: 'no', altaVia: 'yes' },
      { id: 8, feature: 'PDF Texts/Tax Texts', netsuite: 'no', altaVia: 'yes' },
      { id: 9, feature: 'Tax Point Date', netsuite: 'no', altaVia: 'yes' },
      { id: 10, feature: 'Austrian E-Invoicing', netsuite: 'no', altaVia: 'yes' },
      { id: 11, feature: 'Immutability of Postings', netsuite: 'limited', altaVia: 'yes' },
      { id: 12, feature: 'Accrual Items', netsuite: 'no', altaVia: 'yes' },
      { id: 13, feature: 'FinanzOnline Integration', netsuite: 'limited', altaVia: 'yes' }
    ]
  },
  {
    name: 'Installation / Documentation',
    features: [
      { id: 14, feature: 'Direct Installation via SuiteBundle', netsuite: 'yes', altaVia: 'yes' }
    ]
  }
];

export default function LocalizationAustriaComparisonEN() {
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
    if (categoryName === 'Features') return 'funktionen';
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
            How Austrian Localization for NetSuite Complements the NetSuite-Native Solution
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
                  NetSuite&apos;s Austrian Localization
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  AVA Austrian Localization for NetSuite
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
