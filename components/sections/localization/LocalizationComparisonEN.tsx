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
      { id: 1, feature: 'Support for initial setup', netsuite: 'no', altaVia: 'yes' },
      { id: 2, feature: 'Individual settings and dashboards for each subsidiary', netsuite: 'no', altaVia: 'yes' }
    ]
  },
  {
    name: 'Functions',
    features: [
      { id: 3, feature: 'German Reporting Requirements', netsuite: 'limited', altaVia: 'yes' },
      { id: 4, feature: 'Account Sheet', netsuite: 'limited', altaVia: 'yes' },
      { id: 5, feature: 'VAT Refund', netsuite: 'limited', altaVia: 'yes' },
      { id: 6, feature: 'VAT ID Verification', netsuite: 'limited', altaVia: 'yes' },
      { id: 7, feature: 'General EU Tax', netsuite: 'no', altaVia: 'yes' },
      { id: 8, feature: 'PDF Texts/Tax Texts', netsuite: 'no', altaVia: 'yes' },
      { id: 9, feature: 'Tax Point Date', netsuite: 'no', altaVia: 'yes' },
      { id: 10, feature: 'xRechnung', netsuite: 'no', altaVia: 'yes' },
      { id: 11, feature: 'Immutability of Postings', netsuite: 'limited', altaVia: 'yes' },
      { id: 12, feature: 'Accruals', netsuite: 'no', altaVia: 'yes' },
      { id: 13, feature: 'ELSTER Integration', netsuite: 'limited', altaVia: 'yes' }
    ]
  },
  {
    name: 'Installation / Documentation',
    features: [
      { id: 14, feature: 'Direct Installation via SuiteBundle', netsuite: 'yes', altaVia: 'yes' }
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

  const renderMobileCell = (value: string) => {
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
            How Localization Germany for NetSuite complements the NetSuite-native solution
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

        {/* Mobile Card Layout - Hidden on Desktop */}
        <div className="lg:hidden space-y-6">
          {categories.map((category) => {
            const categoryKey = getCategoryKey(category.name);
            return (
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
                            AVA Localization
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
            );
          })}
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
            Constantly evolving. Always up to date.
          </h3>
          <p className="text-lg lg:text-xl text-white leading-relaxed">
            Version 3.0 brings SuiteTax compatibility, import of transaction files from DATEV to NetSuite, and CSV override directly in NetSuite. This eliminates manual rework and keeps you flexible for special cases.
          </p>
        </div>
      </div>
    </section>
  );
}
