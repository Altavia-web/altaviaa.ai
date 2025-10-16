"use client";

import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronDown } from 'lucide-react';

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

  return (
    <section className="py-20 lg:py-24 px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <h2
          className="text-2xl lg:text-4xl font-semibold text-center mb-12 leading-tight"
          style={{ color: 'var(--color-dark-blue)' }}
        >
          Feature Comparison: Shipping with Peak Ship
        </h2>

        {/* Comparison Table - Desktop Only */}
        <div className="hidden lg:block overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse">

            {/* Sticky Header */}
            <thead
              className="sticky top-0 z-10"
              style={{ backgroundColor: 'var(--color-peakship-primary)' }}
            >
              <tr>
                <th className="text-left py-5 px-6 font-semibold text-base lg:text-lg" style={{ color: '#002e64' }}>
                  Feature comparison
                </th>
                <th className="text-center py-5 px-6 font-semibold text-base lg:text-lg" style={{ color: '#002e64' }}>
                  NetSuite Standard
                </th>
                <th className="text-center py-5 px-6 font-semibold text-base lg:text-lg" style={{ color: '#002e64' }}>
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
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('no')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('yes')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Standalone bundle, easy installation
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('no')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('yes')}
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
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('limited')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('yes')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Automatic creation & printing of shipping labels (PDF & Zebra format)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('no')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('yes')}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Automated tracking numbers and status
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('no')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('yes')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Automatic creation of customs declarations (for international shipments)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('no')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('yes')}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Support for multiple accounts per carrier & multiple packages per delivery
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('no')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('yes')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Wide selection of integrated carriers (DHL, DPD, UPS, GLS, FedEx …)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('no')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('yes')}
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
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('limited')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('yes')}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      Extension with additional carriers upon customer request
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('no')}
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                      {renderCell('yes')}
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
              style={{ borderBottom: '2px solid var(--color-peakship-secondary)' }}
            >
              <CheckCircle2 size={20} style={{ color: 'var(--color-peakship-primary)' }} />
              <h3 className="font-semibold text-lg" style={{ color: 'var(--color-dark-blue)' }}>Setup</h3>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Setting up carrier accounts directly in NetSuite
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium flex justify-center">
                      <XCircle className="w-7 h-7" style={{ color: '#ff4100' }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">PeakShip for NetSuite</div>
                    <div className="font-medium flex justify-center">
                      <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Standalone bundle, easy installation
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium flex justify-center">
                      <XCircle className="w-7 h-7" style={{ color: '#ff4100' }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">PeakShip for NetSuite</div>
                    <div className="font-medium flex justify-center">
                      <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Category */}
          <div>
            <div
              className="flex items-center gap-2 mb-4 pb-2"
              style={{ borderBottom: '2px solid var(--color-peakship-secondary)' }}
            >
              <CheckCircle2 size={20} style={{ color: 'var(--color-peakship-primary)' }} />
              <h3 className="font-semibold text-lg" style={{ color: 'var(--color-dark-blue)' }}>Features</h3>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Create shipping orders directly in NetSuite
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">
                      <span style={{ fontFamily: 'Titillium Web', fontWeight: 400, fontSize: '16px', color: '#000000' }}>limited</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">PeakShip for NetSuite</div>
                    <div className="font-medium flex justify-center">
                      <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Automatic creation & printing of shipping labels (PDF & Zebra format)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium flex justify-center">
                      <XCircle className="w-7 h-7" style={{ color: '#ff4100' }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">PeakShip for NetSuite</div>
                    <div className="font-medium flex justify-center">
                      <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Automated tracking numbers and status
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium flex justify-center">
                      <XCircle className="w-7 h-7" style={{ color: '#ff4100' }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">PeakShip for NetSuite</div>
                    <div className="font-medium flex justify-center">
                      <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Automatic creation of customs declarations (for international shipments)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium flex justify-center">
                      <XCircle className="w-7 h-7" style={{ color: '#ff4100' }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">PeakShip for NetSuite</div>
                    <div className="font-medium flex justify-center">
                      <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Support for multiple accounts per carrier & multiple packages per delivery
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium flex justify-center">
                      <XCircle className="w-7 h-7" style={{ color: '#ff4100' }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">PeakShip for NetSuite</div>
                    <div className="font-medium flex justify-center">
                      <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Wide selection of integrated carriers (DHL, DPD, UPS, GLS, FedEx …)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium flex justify-center">
                      <XCircle className="w-7 h-7" style={{ color: '#ff4100' }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">PeakShip for NetSuite</div>
                    <div className="font-medium flex justify-center">
                      <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance & Updates Category */}
          <div>
            <div
              className="flex items-center gap-2 mb-4 pb-2"
              style={{ borderBottom: '2px solid var(--color-peakship-secondary)' }}
            >
              <CheckCircle2 size={20} style={{ color: 'var(--color-peakship-primary)' }} />
              <h3 className="font-semibold text-lg" style={{ color: 'var(--color-dark-blue)' }}>Maintenance & Updates</h3>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Regular updates (NetSuite releases + new carriers)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">
                      <span style={{ fontFamily: 'Titillium Web', fontWeight: 400, fontSize: '16px', color: '#000000' }}>limited</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">PeakShip for NetSuite</div>
                    <div className="font-medium flex justify-center">
                      <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-peakship-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Extension with additional carriers upon customer request
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium flex justify-center">
                      <XCircle className="w-7 h-7" style={{ color: '#ff4100' }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">PeakShip for NetSuite</div>
                    <div className="font-medium flex justify-center">
                      <CheckCircle2 className="w-7 h-7" style={{ color: '#00b577' }} />
                    </div>
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
