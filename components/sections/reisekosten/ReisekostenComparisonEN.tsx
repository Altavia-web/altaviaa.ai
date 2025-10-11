"use client";

import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronDown } from 'lucide-react';

export default function ReisekostenComparisonEN() {
  const [expandedCategories, setExpandedCategories] = useState({
    setup: true,
    features: true,
    reporting: true
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
          All Travel Expense Features at a Glance
        </h2>

        {/* Comparison Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse">

            {/* Sticky Header */}
            <thead
              className="sticky top-0 z-10"
              style={{ backgroundColor: 'var(--color-reisekosten-primary)' }}
            >
              <tr>
                <th className="text-left py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  Feature Comparison
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  NetSuite Expense Management
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  Travel Expense Management for NetSuite by Alta Via Applications
                </th>
              </tr>
            </thead>

            <tbody>

              {/* CATEGORY 1: SETUP */}
              <tr>
                <td colSpan={3} className="p-0">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedCategories.setup}
                    onClick={() => toggleCategory('setup')}
                    onKeyDown={(e) => handleKeyDown(e, 'setup')}
                    className="flex items-center gap-3 py-4 px-6 cursor-pointer transition-colors"
                    style={{
                      backgroundColor: '#f0f0f0',
                      color: 'var(--color-dark-blue)',
                      borderTop: '2px solid var(--color-reisekosten-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-reisekosten-primary)' }} />
                    <span className="font-semibold text-base lg:text-lg">Setup</span>
                    <ChevronDown
                      size={20}
                      className="ml-auto transition-transform duration-300"
                      style={{
                        transform: expandedCategories.setup ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </td>
              </tr>
              {expandedCategories.setup && (
                <>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      Setting per diem rates & mileage allowances for domestic and international travel
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      Setting individual travel costs for different vehicle types
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      Individual benefit-in-kind values for each employee
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                </>
              )}

              {/* CATEGORY 2: FEATURES */}
              <tr>
                <td colSpan={3} className="p-0">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedCategories.features}
                    onClick={() => toggleCategory('features')}
                    onKeyDown={(e) => handleKeyDown(e, 'features')}
                    className="flex items-center gap-3 py-4 px-6 cursor-pointer transition-colors hover:bg-gray-200"
                    style={{
                      backgroundColor: '#f0f0f0',
                      color: 'var(--color-dark-blue)',
                      borderTop: '2px solid var(--color-reisekosten-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-reisekosten-primary)' }} />
                    <span className="font-semibold text-base lg:text-lg">Features</span>
                    <ChevronDown
                      size={20}
                      className="ml-auto transition-transform duration-300"
                      style={{
                        transform: expandedCategories.features ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </td>
              </tr>
              {expandedCategories.features && (
                <>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      Automatic calculation of mileage and per diem rates
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      Calculation of benefit-in-kind values when using company vehicles
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      Mixed trips (distinction between business and private travel time)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      Absence periods & interruptions are taken into account for per diem rates
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      Offsetting employer-provided meals according to Austrian law
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                </>
              )}

              {/* CATEGORY 3: REPORTING & COMPLIANCE */}
              <tr>
                <td colSpan={3} className="p-0">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedCategories.reporting}
                    onClick={() => toggleCategory('reporting')}
                    onKeyDown={(e) => handleKeyDown(e, 'reporting')}
                    className="flex items-center gap-3 py-4 px-6 cursor-pointer transition-colors hover:bg-gray-200"
                    style={{
                      backgroundColor: '#f0f0f0',
                      color: 'var(--color-dark-blue)',
                      borderTop: '2px solid var(--color-reisekosten-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-reisekosten-primary)' }} />
                    <span className="font-semibold text-base lg:text-lg">Reporting & Compliance</span>
                    <ChevronDown
                      size={20}
                      className="ml-auto transition-transform duration-300"
                      style={{
                        transform: expandedCategories.reporting ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </td>
              </tr>
              {expandedCategories.reporting && (
                <>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      Automatic documentation in a tax authority-compliant travel expense log
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      Automatic transfer of per diems, mileage, and benefit-in-kind values to payroll
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                </>
              )}

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
