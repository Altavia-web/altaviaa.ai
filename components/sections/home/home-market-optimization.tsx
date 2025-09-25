import React from 'react';

export default function HomeMarketOptimization() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: 'var(--color-ice-blue)'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Optimieren Sie NetSuite für den deutschen Markt – präzise, konform, einsatzbereit
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Deutsche Unternehmen stehen vor einzigartigen regulatorischen Herausforderungen. NetSuite bietet eine
              solide Grundlage, aber die deutsche Lokalisierung erfordert spezialisierte Tools für Compliance,
              Steuerberechnung und behördliche Meldungen.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unsere Lösung schließt diese Lücke mit präzisen, GoBD-konformen Funktionen, die speziell für die
              Anforderungen des deutschen Marktes entwickelt wurden.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 max-w-sm">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-700">GoBD Konform</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-700">ELSTER Integration</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-700">DATEV Export</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-700">xRechnung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}