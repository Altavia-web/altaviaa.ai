import React from 'react';
import Image from 'next/image';

export default function LocalizationAustriaSolutions() {
  const features = [
    {
      title: "UGB-konforme Berichte",
      description: "Erstellen Sie Bilanzen und GuV nach österreichischem Unternehmensgesetzbuch – inklusive Kontenblatt und Summen- und Saldenliste."
    },
    {
      title: "GoBD & SuiteTax Compliance",
      description: "Finanztransaktionen bleiben manipulationssicher. Alle Funktionen unterstützen SuiteTax für eine reibungslose Migration."
    },
    {
      title: "Nahtlose Anbindung an BMD",
      description: "Stellen Sie sicher, dass Ihre Finanzdaten aus NetSuite korrekt im BMD-System ankommen – verlässlich und ohne Umwege."
    },
    {
      title: "Reisekostenabrechnung nach österreichischem Recht",
      description: "Tagesgelder, Kilometergelder, gemischte Reisen – alles steuerkonform in NetSuite abbilden."
    },
    {
      title: "Umsatzsteuerkorrektur bei Skonti",
      description: "Unsere Lösung erstellt automatisch zusätzliche Buchungen für Skonti und gewährleistet korrekte Steuerberechnung."
    },
    {
      title: "Flexibles Steuer- und Buchungsdatum",
      description: "Buchen Sie Dokumentdatum, Buchungsdatum und Steuerpunktdatum getrennt – für exakte Periodenzuordnung."
    }
  ];

  return (
    <section className="py-20 lg:py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Icon at top */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/LOCALIZATION/AVA_Solution_Localization.webp"
            alt="Lösungen für Lokalisierung"
            width={120}
            height={120}
            className="w-20 lg:w-[120px] h-auto"
          />
        </div>

        {/* Main heading */}
        <h2
          className="text-3xl lg:text-4xl font-semibold text-center mb-8 leading-tight mx-auto"
          style={{ color: 'var(--color-dark-blue)', maxWidth: '800px' }}
        >
          Alles für Ihren Erfolg in Österreich
        </h2>

        {/* Features Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              <h3
                className="text-xl lg:text-2xl font-semibold mb-6"
                style={{ color: 'var(--color-dark-blue)' }}
              >
                {feature.title}
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--color-dark-blue)', opacity: 0.85 }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
