import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function HomeLokalisierung() {
  return (
    <section className="py-16 lg:py-20 px-6" style={{ background: 'var(--gradient-lokalisierung)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Linke Spalte - Bild */}
          <div className="order-2 lg:order-1">
            <Image
              src="/images/produkte/AVA_LOKALISIERUNG_DE.webp"
              alt="Lokalisierung Deutschland für NetSuite"
              width={500}
              height={400}
              className="w-3/5 h-auto rounded-lg shadow-lg mx-auto"
            />
          </div>

          {/* Rechte Spalte - Content */}
          <div className="order-1 lg:order-2 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              Lokalisierung Deutschland – Ausgestattet mit dem richtigen Equipment für Ihr ERP-Gelände
            </h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-lg leading-relaxed">
                  Umsatzsteuer-ID-Prüfung für EU-Geschäfte
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-lg leading-relaxed">
                  Skontoberechnung mit korrekter Steueranpassung
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-lg leading-relaxed">
                  Sichere Umsatzsteuerübermittlung über die ELSTER-Schnittstelle
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-lg leading-relaxed">
                  GoBD-konforme Buchungslogik
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-lg leading-relaxed">
                  xRechnung-Erstellung für die neue E-Rechnungspflicht
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-lg leading-relaxed">
                  Automatisierte DATEV-Exportschnittstelle
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-lg leading-relaxed">
                  SuiteTax-kompatible Funktionen
                </span>
              </li>
            </ul>

            <p className="text-xl leading-relaxed">
              Das Ergebnis: mehr Compliance, weniger manueller Aufwand, klare Prozesse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}