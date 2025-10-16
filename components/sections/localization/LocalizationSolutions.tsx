import React from 'react';
import Image from 'next/image';

export default function LocalizationSolutions() {
  const features = [
    {
      title: "Unveränderlichkeit von Buchungen (GoBD)",
      description: "Finanztransaktionen sind manipulationssicher und erfüllen die gesetzlichen GoBD-Vorgaben für ordnungsgemäße elektronische Buchführung in Deutschland."
    },
    {
      title: "HGB-konforme Berichte",
      description: "Erstellen Sie Bilanzen und Gewinn- und Verlustrechnungen nach deutschem Standard. Wichtige Finanzberichte wie Kontenblatt und Summen- und Saldenliste sind für Prüfungen und interne Kontrollen enthalten."
    },
    {
      title: "Umsatzsteuererklärung über ELSTER-Integration",
      description: "Übermitteln Sie Umsatzsteuererklärungen direkt und automatisch an die deutschen Steuerbehörden. Das spart Zeit, reduziert Fehler und sichert die Einhaltung der Vorschriften."
    },
    {
      title: "xRechnung",
      description: "Erstellen Sie mühelos die benötigten xRechnungs-Dateien aus Ihren Rechnungen und Gutschriften per Knopfdruck und erfüllen Sie so die gesetzliche E-Rechnungspflicht in Deutschland."
    },
    {
      title: "Mehrwertsteuerrückrechnung (Skonto)",
      description: "Sichern Sie die korrekte Reduktion der anteiligen Mehrwertsteuer bei Skontoabzügen durch automatische Journalbuchungen und bleiben Sie konform mit dem deutschen Steuerrecht."
    },
    {
      title: "Flexibles Besteuerungsdatum",
      description: "Erfassen Sie Belegdatum, Buchungsdatum und Steuerpunktdatum getrennt. Dies ermöglicht genaue Periodenzuordnung und die Einhaltung von Steuervorschriften."
    },
    {
      title: "Umsatzsteuer-ID-Prüfung",
      description: "Optimieren Sie grenzüberschreitende Transaktionen innerhalb der EU mit unserer VAT-ID-Prüfung und gewährleisten Sie einen reibungslosen Verifizierungsprozess für die Umsatzsteuer-IDs der Handelspartner."
    },
    {
      title: "EU-Umsatzsteuer",
      description: "Steuern auf Verkaufstransaktionen werden überprüft und falls notwendig korrigiert. Damit schließen wir Lücken im NetSuite Standard."
    },
    {
      title: "Rechnungsabgrenzung",
      description: "Vereinfachen Sie die Erstellung von Rückstellungen für nicht genehmigte Rechnungen und unterstützen Sie einen reibungslosen Monats-, Quartals- oder Jahresabschluss."
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
          className="text-3xl lg:text-4xl font-semibold text-center mb-24 leading-tight mx-auto"
          style={{ color: 'var(--color-dark-blue)', maxWidth: '800px' }}
        >
          Erobern Sie die deutsche Compliance
        </h2>

        {/* Features Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              <h3
                className="text-xl lg:text-2xl font-semibold mb-8"
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
