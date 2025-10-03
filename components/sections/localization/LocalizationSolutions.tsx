import React from 'react';
import Image from 'next/image';

export default function LocalizationSolutions() {
  const features = [
    {
      title: "ELSTER-Integration",
      description: "Übermitteln Sie Umsatzsteuervoranmeldungen automatisch an die deutschen Steuerbehörden."
    },
    {
      title: "Flexible Steuerdatumsangabe",
      description: "Erfassen Sie Beleg-, Buchungs- und Steuerdatum getrennt für korrekte Periodenzuordnung."
    },
    {
      title: "USt-Korrektur bei Skonto",
      description: "Korrigieren Sie Umsatzsteuerbeträge bei Skonti und schließen Sie damit eine NetSuite-Standardlücke."
    },
    {
      title: "HGB-konforme Berichte",
      description: "Erstellen Sie Bilanzen und GuV nach deutschem Handelsrecht – inklusive relevanter Ansichten."
    },
    {
      title: "GoBD-Konformität",
      description: "Speichern Sie Finanzdaten manipulationssicher und prüfungstauglich gemäß den GoBD-Vorgaben."
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
          className="text-3xl lg:text-4xl font-semibold text-center mb-16 leading-tight mx-auto"
          style={{ color: 'var(--color-dark-blue)', maxWidth: '800px' }}
        >
          Ihr direkter Pfad zur Buchhaltung mit DATEV
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-12 mb-12">
          {features.slice(0, 2).map((feature, index) => (
            <div key={index} className="text-left">
              <h3
                className="text-xl lg:text-2xl font-semibold mb-3"
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

        {/* Second row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {features.slice(2).map((feature, index) => (
            <div key={index} className="text-left">
              <h3
                className="text-xl lg:text-2xl font-semibold mb-3"
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
