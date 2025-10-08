"use client";

import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronDown } from 'lucide-react';

export default function DunningComparison() {
  const [expandedCategories, setExpandedCategories] = useState({
    mapping: true,
    funktionen: false,
    installation: false
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

  return (
    <section className="py-20 lg:py-24 px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <h2
          className="text-3xl lg:text-4xl font-semibold text-center mb-12 leading-tight"
          style={{ color: 'var(--color-dark-blue)' }}
        >
          Warum Mahnwesen für Netsuite von Alta Via Applications mehr kann als das NetSuite Standard
        </h2>

        {/* Comparison Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse">

            {/* Sticky Header */}
            <thead
              className="sticky top-0 z-10"
              style={{ backgroundColor: 'var(--color-mahnwesen-primary)' }}
            >
              <tr>
                <th className="text-left py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  Funktionsvergleich
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  NetSuite Standard
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  Alta Via Mahnwesen
                </th>
              </tr>
            </thead>

            <tbody>

              {/* CATEGORY 1: MAPPING */}
              <tr>
                <td colSpan={3} className="p-0">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedCategories.mapping}
                    onClick={() => toggleCategory('mapping')}
                    onKeyDown={(e) => handleKeyDown(e, 'mapping')}
                    className="flex items-center gap-3 py-4 px-6 cursor-pointer transition-colors"
                    style={{
                      backgroundColor: '#f0f0f0',
                      color: 'var(--color-dark-blue)',
                      borderTop: '2px solid var(--color-mahnwesen-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-mahnwesen-primary)' }} />
                    <span className="font-semibold text-base lg:text-lg">Lorem ipsum</span>
                    <ChevronDown
                      size={20}
                      className="ml-auto transition-transform duration-300"
                      style={{
                        transform: expandedCategories.mapping ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </td>
              </tr>
              {expandedCategories.mapping && (
                <>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Lorem ipsum dolor sit amet
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Consectetur adipiscing elit
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                </>
              )}

              {/* CATEGORY 2: FUNKTIONEN */}
              <tr>
                <td colSpan={3} className="p-0">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedCategories.funktionen}
                    onClick={() => toggleCategory('funktionen')}
                    onKeyDown={(e) => handleKeyDown(e, 'funktionen')}
                    className="flex items-center gap-3 py-4 px-6 cursor-pointer transition-colors hover:bg-gray-200"
                    style={{
                      backgroundColor: '#f0f0f0',
                      color: 'var(--color-dark-blue)',
                      borderTop: '2px solid var(--color-mahnwesen-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-mahnwesen-primary)' }} />
                    <span className="font-semibold text-base lg:text-lg">Funktionen</span>
                    <ChevronDown
                      size={20}
                      className="ml-auto transition-transform duration-300"
                      style={{
                        transform: expandedCategories.funktionen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </td>
              </tr>
              {expandedCategories.funktionen && (
                <>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Sed do eiusmod tempor
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      begrenzt
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Incididunt ut labore
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                </>
              )}

              {/* CATEGORY 3: INSTALLATION */}
              <tr>
                <td colSpan={3} className="p-0">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedCategories.installation}
                    onClick={() => toggleCategory('installation')}
                    onKeyDown={(e) => handleKeyDown(e, 'installation')}
                    className="flex items-center gap-3 py-4 px-6 cursor-pointer transition-colors hover:bg-gray-200"
                    style={{
                      backgroundColor: '#f0f0f0',
                      color: 'var(--color-dark-blue)',
                      borderTop: '2px solid var(--color-mahnwesen-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-mahnwesen-primary)' }} />
                    <span className="font-semibold text-base lg:text-lg">Installation</span>
                    <ChevronDown
                      size={20}
                      className="ml-auto transition-transform duration-300"
                      style={{
                        transform: expandedCategories.installation ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </td>
              </tr>
              {expandedCategories.installation && (
                <tr className="bg-white">
                  <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                    Direkte Installation über SuiteBundle
                  </td>
                  <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                    <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                  </td>
                  <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                    <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
