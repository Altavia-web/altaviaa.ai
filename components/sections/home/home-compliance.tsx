import React from 'react';

export default function HomeCompliance() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">
          Bleiben Sie stets compliant und dem nächsten Schritt voraus
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Gesetzliche Anforderungen ändern sich ständig – von neuen Steuerrichtlinien
              bis zu aktualisierten Compliance-Vorschriften. Unsere Tools werden kontinuierlich
              weiterentwickelt, um diese Änderungen proaktiv zu berücksichtigen.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Durch die enge Zusammenarbeit mit unseren Kunden und der kontinuierlichen
              Marktbeobachtung stellen wir sicher, dass Sie immer auf dem neuesten Stand
              bleiben – ohne zusätzlichen Aufwand für Ihr Team.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              So können Sie sich auf Ihr Kerngeschäft konzentrieren, während wir dafür sorgen,
              dass Ihre NetSuite-Installation stets den aktuellen deutschen Standards entspricht.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Kontinuierliche Updates</h3>
              </div>
              <p className="text-gray-700">
                Automatische Anpassung an neue gesetzliche Anforderungen und Steueränderungen.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Kundenfeedback</h3>
              </div>
              <p className="text-gray-700">
                Direkte Zusammenarbeit mit Anwendern für praxisnahe Verbesserungen.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Proaktive Compliance</h3>
              </div>
              <p className="text-gray-700">
                Vorbereitung auf künftige Änderungen, bevor sie in Kraft treten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}