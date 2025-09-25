import React from 'react';
import Button from '@/components/Button';

export default function HomeDatev() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: 'var(--color-ice-blue)'}}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Alta Via DATEV Export für NetSuite – Der direkte Pfad zur Finanzbuchhaltung
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Unsere DATEV-zertifizierte SuiteApp ermöglicht die nahtlose Übertragung Ihrer
              NetSuite-Buchungen in das DATEV-System. Automatisiert, präzise und vollständig
              konform mit den deutschen Buchungsstandards.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Von der Debitorenbuchhaltung bis zur Anlagenverwaltung – alle relevanten Daten
              werden strukturiert und GoBD-konform an DATEV übertragen. So sparen Sie Zeit
              und minimieren Übertragungsfehler.
            </p>
            <Button
              variant="filled"
              color="midBlue"
              size="lg"
              showArrow={true}
              className="text-lg px-8 py-4"
            >
              Mehr erfahren
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">DATEV Export</h3>
                  <p className="text-sm text-gray-500">Zertifizierte SuiteApp</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm">Automatisierte Buchungsübertragung</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm">GoBD-konforme Datenstruktur</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm">Vollständige Kontenzuordnung</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm">Fehlerprüfung und Validierung</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">DATEV-Zertifiziert</span>
                  <div className="flex items-center text-blue-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold">Verifiziert</span>
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