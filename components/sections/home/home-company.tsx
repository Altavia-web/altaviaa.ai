import React from 'react';

export default function HomeCompany() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: 'var(--color-ice-blue)'}}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center leading-tight">
          Alta Via Applications: Produktentwicklung mit Weitblick
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Alta Via Applications entstand aus der langjährigen Erfahrung von Alta Via Consulting
              im Bereich NetSuite-Implementierungen für deutsche Unternehmen. Als spezialisierte
              Beratung erkannten wir immer wieder die gleichen Herausforderungen bei der Lokalisierung.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Statt für jeden Kunden individuelle Lösungen zu entwickeln, entschieden wir uns,
              unsere Expertise in robuste, standardisierte Tools zu gießen. Diese Produkte
              basieren auf jahrelanger praktischer Erfahrung und den spezifischen Anforderungen
              deutscher Unternehmen.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fokus auf robuste Tools
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Unsere Produkte entstehen nicht im Labor, sondern aus der täglichen Praxis
                heraus. Jede Funktion wurde in realen Projekten getestet und optimiert,
                bevor sie Teil unserer Standardlösungen wurde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}