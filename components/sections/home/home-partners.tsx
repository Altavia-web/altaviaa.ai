import React from 'react';

export default function HomePartners() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: 'var(--color-ice-blue)'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center leading-tight">
          Für NetSuite-User und Partner – gemeinsam nach oben
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Für NetSuite-Nutzer</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Erweitern Sie Ihre NetSuite-Installation um die notwendigen deutschen Lokalisierungsfunktionen.
              Unsere Tools integrieren sich nahtlos in Ihre bestehende Umgebung und sorgen für sofortige
              Compliance-Konformität.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                Sofortige deutsche Steuerberechnung
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                Automatisierte DATEV-Integration
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                GoBD-konforme Buchungslogik
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                Kontinuierliche Updates und Support
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Für NetSuite-Partner</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Erweitern Sie Ihr Angebot um professionelle deutsche Lokalisierungslösungen.
              Nutzen Sie unser Partnerprogramm mit umfassenden Vertriebsunterlagen, Testzugängen
              und direktem technischen Support.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                Vollständige Vertriebsunterlagen
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                Demo- und Testzugänge
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                Technischer Support und Schulungen
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                Attraktive Partnerkonditionen
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 shadow-md">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m0 0V6a2 2 0 012-2h6a2 2 0 012 2v2" />
                </svg>
              </div>
            </div>
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "Die Zusammenarbeit mit Alta Via Applications hat uns ermöglicht, unseren Kunden
              eine vollständige deutsche NetSuite-Lokalisierung anzubieten. Die Tools sind robust,
              die Dokumentation umfassend und der Support hervorragend."
            </blockquote>
            <cite className="text-gray-600 font-semibold">
              – Peter von Zimmermann, NetSuite Partner
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}