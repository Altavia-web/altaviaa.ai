"use client";

import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronDown } from 'lucide-react';

export default function LocalizationComparison() {
  const [expandedCategories, setExpandedCategories] = useState({
    setup: true,
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
          Wie Lokalisierung Deutschland für NetSuite die NetSuite-native Lösung ergänzt
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
                  NetSuite&apos;s Deutschland Lokalisierung
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  AVA Lokalisierung Deutschland für NetSuite
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
                      borderTop: '2px solid var(--color-sky-blue)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-mid-blue)' }} />
                    <span className="font-semibold text-base lg:text-lg">Setup</span>
                    <ChevronDown
                      size={20}
                      className={`ml-auto transition-transform ${expandedCategories.setup ? 'rotate-180' : ''}`}
                    />
                  </div>
                </td>
              </tr>

              {expandedCategories.setup && (
                <>
                  <tr style={{ backgroundColor: '#fafafa' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      Unterstützung bei der Ersteinrichtung
                    </td>
                    <td className="py-4 px-6 text-center">
                      <XCircle size={24} className="inline-block text-red-500" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#ffffff' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      Individuelle Einstellungen und Dashboards für jede Tochtergesellschaft
                    </td>
                    <td className="py-4 px-6 text-center">
                      <XCircle size={24} className="inline-block text-red-500" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
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
                    className="flex items-center gap-3 py-4 px-6 cursor-pointer transition-colors"
                    style={{
                      backgroundColor: '#f0f0f0',
                      color: 'var(--color-dark-blue)',
                      borderTop: '2px solid var(--color-sky-blue)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-mid-blue)' }} />
                    <span className="font-semibold text-base lg:text-lg">Funktionen</span>
                    <ChevronDown
                      size={20}
                      className={`ml-auto transition-transform ${expandedCategories.funktionen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </td>
              </tr>

              {expandedCategories.funktionen && (
                <>
                  <tr style={{ backgroundColor: '#fafafa' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      German Reporting Requirements/Deutsche Berichtsanforderungen
                    </td>
                    <td className="py-4 px-6 text-center text-sm" style={{ color: 'var(--color-dark-blue)' }}>
                      begrenzt
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#ffffff' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      Kontenblatt
                    </td>
                    <td className="py-4 px-6 text-center text-sm" style={{ color: 'var(--color-dark-blue)' }}>
                      begrenzt
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#fafafa' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      Mehrwertsteuerrückerstattung
                    </td>
                    <td className="py-4 px-6 text-center text-sm" style={{ color: 'var(--color-dark-blue)' }}>
                      begrenzt
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#ffffff' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      Verprobung USt-ID
                    </td>
                    <td className="py-4 px-6 text-center text-sm" style={{ color: 'var(--color-dark-blue)' }}>
                      begrenzt
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#fafafa' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      Allgemeine EU-Steuer
                    </td>
                    <td className="py-4 px-6 text-center">
                      <XCircle size={24} className="inline-block text-red-500" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#ffffff' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      PDF Texte/Steuertexte
                    </td>
                    <td className="py-4 px-6 text-center">
                      <XCircle size={24} className="inline-block text-red-500" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#fafafa' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      Steuerstichtag
                    </td>
                    <td className="py-4 px-6 text-center">
                      <XCircle size={24} className="inline-block text-red-500" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#ffffff' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      xRechnung
                    </td>
                    <td className="py-4 px-6 text-center">
                      <XCircle size={24} className="inline-block text-red-500" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#fafafa' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      Unveränderlichkeit von Buchungen
                    </td>
                    <td className="py-4 px-6 text-center text-sm" style={{ color: 'var(--color-dark-blue)' }}>
                      begrenzt
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#ffffff' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      Rechnungsabgrenzungsposten
                    </td>
                    <td className="py-4 px-6 text-center">
                      <XCircle size={24} className="inline-block text-red-500" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#fafafa' }}>
                    <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                      Elster Integration
                    </td>
                    <td className="py-4 px-6 text-center text-sm" style={{ color: 'var(--color-dark-blue)' }}>
                      begrenzt
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                    </td>
                  </tr>
                </>
              )}

              {/* CATEGORY 3: INSTALLATION / DOKUMENTATION */}
              <tr>
                <td colSpan={3} className="p-0">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedCategories.installation}
                    onClick={() => toggleCategory('installation')}
                    onKeyDown={(e) => handleKeyDown(e, 'installation')}
                    className="flex items-center gap-3 py-4 px-6 cursor-pointer transition-colors"
                    style={{
                      backgroundColor: '#f0f0f0',
                      color: 'var(--color-dark-blue)',
                      borderTop: '2px solid var(--color-sky-blue)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-mid-blue)' }} />
                    <span className="font-semibold text-base lg:text-lg">Installation / Dokumentation</span>
                    <ChevronDown
                      size={20}
                      className={`ml-auto transition-transform ${expandedCategories.installation ? 'rotate-180' : ''}`}
                    />
                  </div>
                </td>
              </tr>

              {expandedCategories.installation && (
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <td className="py-4 px-6 text-base" style={{ color: 'var(--color-dark-blue)' }}>
                    Direkte Installation über SuiteBundle
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle2 size={24} className="inline-block" style={{ color: 'var(--color-mid-blue)' }} />
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Final Text Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight" style={{ color: 'var(--color-dark-blue)' }}>
            Ständig in Bewegung. Stets up to date.
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--color-dark-blue)', opacity: 0.85 }}>
            Mit der zunehmenden Präsenz von NetSuite auch in Deutschland und den kontinuierlichen Investitionen von Oracle entwickelt sich auch die NetSuite-Standard-Lokalisierung immer weiter. Doch die tägliche Zusammenarbeit mit unseren Kunden und die schnelle Reaktion auf gesetzliche Änderungen stellen sicher, dass unsere Lokalisierung nicht nur stets aktuell, sondern auch relevant und praxiserprobt für Unternehmen in Deutschland bleibt.
          </p>
        </div>

      </div>
    </section>
  );
}
