"use client";

import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronDown } from 'lucide-react';

export default function ReisekostenComparison() {
  const [expandedCategories, setExpandedCategories] = useState({
    setup: true,
    funktionen: true,
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
          Alle Reisekosten-Funktionen auf einen Blick
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
                  Funktionsvergleich
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  NetSuite Expense Management
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  Reisekostenverwaltung für NetSuite von Alta Via Applications
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
                      Hinterlegen von Spesensätzen & Kilometerpauschalen für Inland und Ausland
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
                      Hinterlegung von individuellen Fahrtkosten für unterschiedliche Fahrzeugtypen
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
                      Individuelle Sachbezugswerte für jeden Mitarbeiter
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
                      borderTop: '2px solid var(--color-reisekosten-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-reisekosten-primary)' }} />
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
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-reisekosten-secondary)' }}>
                      Automatische Berechnung von Kilometergeld und Spesensätzen
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
                      Berechnung von Sachbezugswerten bei Nutzung von Firmenfahrzeugen
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
                      Gemischte Reisen (Unterscheidung zwischen dienstlichen und privaten Reisezeiten)
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
                      Abwesenheitszeiträume & Unterbrechungen werden beim Spesensatz berücksichtigt
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
                      Verrechnung von Verpflegungsleistungen des Arbeitgebers nach österreichischem Recht
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
                      Automatische Dokumentation in einem behördenkonformen Reisekostenprotokoll
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
                      Automatische Weitergabe von Taggeldern, Kilometergeld und Sachbezügen an die Lohnbuchhaltung
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
