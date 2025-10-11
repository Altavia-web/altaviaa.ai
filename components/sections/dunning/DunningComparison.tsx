"use client";

import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, XCircle } from 'lucide-react';

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

  const renderMobileCell = (value: string | React.ReactNode) => {
    if (typeof value === 'string') {
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
      return <span style={{ fontFamily: 'Titillium Web', fontWeight: 400, fontSize: '16px', color: '#000000' }}>{value}</span>;
    }
    if (React.isValidElement(value)) {
      return value;
    }
    return value;
  };

  return (
    <section className="py-20 lg:py-24 px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <h2
          className="text-2xl lg:text-4xl font-semibold text-center mb-12 leading-tight"
          style={{ color: 'var(--color-dark-blue)' }}
        >
          Warum Mahnwesen für Netsuite von Alta Via Applications mehr kann als das NetSuite Standard
        </h2>

        {/* Comparison Table - Desktop Only */}
        <div className="hidden lg:block overflow-x-auto shadow-lg rounded-lg">
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
                      {renderCell('nein')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Unterstützung bei der Ersteinrichtung
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('nein')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Automatische Erstellung von Dokument-Ordnern, Rollen & Templates
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('nein')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Individuelle Einstellungen pro Subsidiary
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('begrenzt')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
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
                      {renderCell('nein')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Mahngebühren & Zinsen
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('nein')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Automatisierte Mahnläufe
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('begrenzt')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Zentrale Steuerung mit Filteroptionen
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('nein')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Lokalisierte & mehrsprachige Templates (PDF/E-Mail)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('nein')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Direkter Versand per E-Mail (inkl. CC/BCC)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('begrenzt')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Fehlerhandling (klare Meldungen, Rechnungsbezug)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('begrenzt')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Übergabe an Inkasso-Unternehmen
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('nein')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
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
                      {renderCell('nein')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Automatische Updates (App-ähnlich)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('nein')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Transparenz durch Logging & Dokumentverknüpfungen
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('begrenzt')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      {renderCell('ja')}
                    </td>
                  </tr>
                </>
              )}

            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="lg:hidden space-y-6">

          {/* Setup Category */}
          <div>
            <div
              className="flex items-center gap-2 mb-4 pb-2"
              style={{ borderBottom: '2px solid var(--color-mahnwesen-secondary)' }}
            >
              <CheckCircle2 size={20} style={{ color: 'var(--color-mahnwesen-primary)' }} />
              <h3 className="font-semibold text-lg" style={{ color: 'var(--color-dark-blue)' }}>Setup</h3>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Teilweise schon in 60 Minuten startklar (je nach Umfang)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('nein')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Unterstützung bei der Ersteinrichtung
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('nein')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Automatische Erstellung von Dokument-Ordnern, Rollen & Templates
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('nein')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Individuelle Einstellungen pro Subsidiary
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('begrenzt')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell(<CheckCircle2 size={24} className="inline-block" style={{ color: '#22c55e' }} />)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Funktionen Category */}
          <div>
            <div
              className="flex items-center gap-2 mb-4 pb-2"
              style={{ borderBottom: '2px solid var(--color-mahnwesen-secondary)' }}
            >
              <CheckCircle2 size={20} style={{ color: 'var(--color-mahnwesen-primary)' }} />
              <h3 className="font-semibold text-lg" style={{ color: 'var(--color-dark-blue)' }}>Funktionen</h3>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Mehrstufiges Mahnwesen (bis 3 Stufen)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('nein')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Mahngebühren & Zinsen
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('nein')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Automatisierte Mahnläufe
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('begrenzt')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Zentrale Steuerung mit Filteroptionen
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('nein')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Lokalisierte & mehrsprachige Templates (PDF/E-Mail)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('nein')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Direkter Versand per E-Mail (inkl. CC/BCC)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('begrenzt')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Fehlerhandling (klare Meldungen, Rechnungsbezug)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('begrenzt')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Übergabe an Inkasso-Unternehmen
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('nein')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wartung & Updates Category */}
          <div>
            <div
              className="flex items-center gap-2 mb-4 pb-2"
              style={{ borderBottom: '2px solid var(--color-mahnwesen-secondary)' }}
            >
              <CheckCircle2 size={20} style={{ color: 'var(--color-mahnwesen-primary)' }} />
              <h3 className="font-semibold text-lg" style={{ color: 'var(--color-dark-blue)' }}>Wartung & Updates</h3>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Einfache Anpassung von Templates ohne HTML
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('nein')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Automatische Updates (App-ähnlich)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('nein')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Transparenz durch Logging & Dokumentverknüpfungen
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('begrenzt')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Mahnwesen für NetSuite</div>
                    <div className="font-medium">{renderMobileCell('ja')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
