"use client";

import React, { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

export default function PeakShipComparison() {
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
          PeakShip für NetSuite im Vergleich
        </h2>

        {/* Comparison Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse">

            {/* Sticky Header */}
            <thead
              className="sticky top-0 z-10"
              style={{ backgroundColor: 'var(--color-peakship-primary)' }}
            >
              <tr>
                <th className="text-left py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  Funktionsvergleich
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  NetSuite Standard
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  PeakShip für NetSuite von Alta Via Applications
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
                      borderTop: '2px solid var(--color-peakship-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-peakship-primary)' }} />
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
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Einrichtung von Carrier-Konten direkt in NetSuite
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      nein
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      ja
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Eigenständiges Bundle, einfache Installation
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      nein
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      ja
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
                      borderTop: '2px solid var(--color-peakship-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-peakship-primary)' }} />
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
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Versandaufträge direkt in NetSuite erstellen
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      begrenzt
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      ja
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Automatische Erstellung & Druck von Versandetiketten (PDF & Zebra-Format)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      nein
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      ja
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Automatisierte Tracking-Nummern und -Status
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      nein
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      ja
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Automatische Erstellung von Zollerklärungen (bei internationalen Sendungen)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      nein
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      ja
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Unterstützung mehrerer Konten pro Carrier & mehrere Pakete pro Lieferung
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      nein
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      ja
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Breite Auswahl an integrierten Carriern (DHL, DPD, UPS, GLS, FedEx …)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      nein
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      ja
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
                      borderTop: '2px solid var(--color-peakship-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-peakship-primary)' }} />
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
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Regelmäßige Updates (NetSuite-Releases + neue Carrier)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      begrenzt
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      ja
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Erweiterung um zusätzliche Carrier auf Kundenwunsch
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      nein
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      ja
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
