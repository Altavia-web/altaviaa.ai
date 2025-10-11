"use client";

import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

export default function DunningComparisonEN() {
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

  const renderMobileCell = (value: string | React.ReactNode) => {
    if (value === 'yes') {
      return <span className="text-green-600 font-semibold">yes</span>;
    }
    if (value === 'no') {
      return <span className="text-red-500 font-semibold">no</span>;
    }
    if (value === 'limited') {
      return <span className="text-gray-600 opacity-70">limited</span>;
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
          Why Dunning for NetSuite by Alta Via Applications Does More Than NetSuite Standard
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
                  Feature Comparison
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  NetSuite Standard
                </th>
                <th className="text-center py-5 px-6 text-white font-semibold text-base lg:text-lg">
                  Dunning for NetSuite by Alta Via Applications
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
                      Ready to go in 60 minutes in some cases (depending on scope)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Support during initial setup
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Automatic creation of document folders, roles & templates
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Individual settings per subsidiary
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      limited
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                </>
              )}

              {/* CATEGORY 2: FUNCTIONS */}
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
                    <span className="font-semibold text-base lg:text-lg">Functions</span>
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
                      Multi-level dunning (up to 3 levels)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Dunning fees & interest
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Automated dunning runs
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      limited
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Central control with filter options
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Localized & multilingual templates (PDF/email)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Direct sending via email (incl. CC/BCC)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      limited
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Error handling (clear messages, invoice reference)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      limited
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Handover to collection agency
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
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
                    <span className="font-semibold text-base lg:text-lg">Maintenance & Updates</span>
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
                      Easy template customization without HTML
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Automatic updates (app-like)
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      no
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      Transparency through logging & document links
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)', color: 'var(--color-dark-blue)', opacity: 0.7 }}>
                      limited
                    </td>
                    <td className="py-4 px-6 text-center border-b" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                      yes
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
                  Ready to go in 60 minutes in some cases (depending on scope)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('no')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Support during initial setup
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('no')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Automatic creation of document folders, roles & templates
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('no')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Individual settings per subsidiary
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('limited')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Functions Category */}
          <div>
            <div
              className="flex items-center gap-2 mb-4 pb-2"
              style={{ borderBottom: '2px solid var(--color-mahnwesen-secondary)' }}
            >
              <CheckCircle2 size={20} style={{ color: 'var(--color-mahnwesen-primary)' }} />
              <h3 className="font-semibold text-lg" style={{ color: 'var(--color-dark-blue)' }}>Functions</h3>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Multi-level dunning (up to 3 levels)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('no')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Dunning fees & interest
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('no')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Automated dunning runs
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('limited')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Central control with filter options
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('no')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Localized & multilingual templates (PDF/email)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('no')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Direct sending via email (incl. CC/BCC)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('limited')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Error handling (clear messages, invoice reference)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('limited')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Handover to collection agency
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('no')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance & Updates Category */}
          <div>
            <div
              className="flex items-center gap-2 mb-4 pb-2"
              style={{ borderBottom: '2px solid var(--color-mahnwesen-secondary)' }}
            >
              <CheckCircle2 size={20} style={{ color: 'var(--color-mahnwesen-primary)' }} />
              <h3 className="font-semibold text-lg" style={{ color: 'var(--color-dark-blue)' }}>Maintenance & Updates</h3>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Easy template customization without HTML
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('no')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Automatic updates (app-like)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('no')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}>
                <div className="font-medium mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  Transparency through logging & document links
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NetSuite Standard</div>
                    <div className="font-medium">{renderMobileCell('limited')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dunning for NetSuite</div>
                    <div className="font-medium">{renderMobileCell('yes')}</div>
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
