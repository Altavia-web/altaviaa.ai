"use client";

import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronDown } from 'lucide-react';

export default function DunningComparison() {
  const [expandedCategories, setExpandedCategories] = useState({
    setup: true,
    funktionen: false,
    wartung: false
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
                  Mahnwesen für NetSuite von Alta Via Applications
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
                      borderTop: '2px solid var(--color-mahnwesen-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-mahnwesen-primary)' }} />
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
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Teilweise schon in 60 Minuten startklar (je nach Umfang)
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
                      Unterstützung bei der Ersteinrichtung
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Automatische Erstellung von Dokument-Ordnern, Rollen & Templates
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
                      Individuelle Einstellungen pro Subsidiary
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      begrenzt
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
                      Mehrstufiges Mahnwesen (bis 3 Stufen)
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
                      Mahngebühren & Zinsen
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Automatisierte Mahnläufe
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
                      Zentrale Steuerung mit Filteroptionen
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Lokalisierte & mehrsprachige Templates (PDF/E-Mail)
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
                      Direkter Versand per E-Mail (inkl. CC/BCC)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      begrenzt
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Fehlerhandling (klare Meldungen, Rechnungsbezug)
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
                      Übergabe an Inkasso-Unternehmen
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

              {/* CATEGORY 3: WARTUNG & UPDATES */}
              <tr>
                <td colSpan={3} className="p-0">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedCategories.wartung}
                    onClick={() => toggleCategory('wartung')}
                    onKeyDown={(e) => handleKeyDown(e, 'wartung')}
                    className="flex items-center gap-3 py-4 px-6 cursor-pointer transition-colors hover:bg-gray-200"
                    style={{
                      backgroundColor: '#f0f0f0',
                      color: 'var(--color-dark-blue)',
                      borderTop: '2px solid var(--color-mahnwesen-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-mahnwesen-primary)' }} />
                    <span className="font-semibold text-base lg:text-lg">Wartung & Updates</span>
                    <ChevronDown
                      size={20}
                      className="ml-auto transition-transform duration-300"
                      style={{
                        transform: expandedCategories.wartung ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </td>
              </tr>
              {expandedCategories.wartung && (
                <>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Einfache Anpassung von Templates ohne HTML
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
                      Automatische Updates (App-ähnlich)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <XCircle size={28} className="inline-block" style={{ color: '#ef4444' }} />
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      <CheckCircle2 size={28} className="inline-block" style={{ color: '#22c55e' }} />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Transparenz durch Logging & Dokumentverknüpfungen
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      begrenzt
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
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
