"use client";

import React, { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

export default function PeakShipComparisonEN() {
  const [expandedCategories, setExpandedCategories] = useState({
    setup: true,
    features: false,
    maintenance: false
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
          Feature Comparison: Shipping with Peak Ship
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
                  Feature comparison
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  NetSuite Standard
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  PeakShip for NetSuite by Alta Via Applications
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
                      Setting up carrier accounts directly in NetSuite
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Standalone bundle, easy installation
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      yes
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
                      borderTop: '2px solid var(--color-peakship-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-peakship-primary)' }} />
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
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Create shipping orders directly in NetSuite
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      limited
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Automatic creation & printing of shipping labels (PDF & Zebra format)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Automated tracking numbers and status
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Automatic creation of customs declarations (for international shipments)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Support for multiple accounts per carrier & multiple packages per delivery
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Wide selection of integrated carriers (DHL, DPD, UPS, GLS, FedEx …)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      yes
                    </td>
                  </tr>
                </>
              )}

              {/* CATEGORY 3: MAINTENANCE & UPDATES */}
              <tr>
                <td colSpan={3} className="p-0">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedCategories.maintenance}
                    onClick={() => toggleCategory('maintenance')}
                    onKeyDown={(e) => handleKeyDown(e, 'maintenance')}
                    className="flex items-center gap-3 py-4 px-6 cursor-pointer transition-colors hover:bg-gray-200"
                    style={{
                      backgroundColor: '#f0f0f0',
                      color: 'var(--color-dark-blue)',
                      borderTop: '2px solid var(--color-peakship-secondary)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-peakship-primary)' }} />
                    <span className="font-semibold text-base lg:text-lg">Maintenance & Updates</span>
                    <ChevronDown
                      size={20}
                      className="ml-auto transition-transform duration-300"
                      style={{
                        transform: expandedCategories.maintenance ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </td>
              </tr>
              {expandedCategories.maintenance && (
                <>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Regular updates (NetSuite releases + new carriers)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      limited
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Extension with additional carriers upon customer request
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)', color: 'var(--color-dark-blue)', fontWeight: 400 }}>
                      yes
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
