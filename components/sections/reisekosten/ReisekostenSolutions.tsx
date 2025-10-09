import React from 'react';
import Image from 'next/image';

export default function ReisekostenSolutions() {
  const features = [
    {
      title: "Automatische Pauschalen",
      description: "Verpflegungs- und Übernachtungspauschalen werden nach deutschem Recht automatisch berechnet – korrekt, aktuell und ohne Handarbeit."
    },
    {
      title: "Reisen einfach erfassen",
      description: "Start, Ziel, Zeiten und Kilometer eingeben – das Modul erstellt die passenden Reiseposten und berücksichtigt Übernachtungen automatisch."
    },
    {
      title: "Multi-Currency & Belege",
      description: "Erfassen Sie Ausgaben in verschiedenen Währungen und hängen Sie Belege direkt an – transparent und revisionssicher."
    },
    {
      title: "Individuelle Genehmigungs-Workflows",
      description: "Berichte laufen durch den integrierten Workflow – schnelle Freigaben, klare Verantwortlichkeiten, volle Kontrolle."
    },
    {
      title: "Jährlich aktualisierte Sätze",
      description: "Die Pauschalen werden jährlich von Alta Via aktualisiert – Sie bleiben compliant, ohne eigenen Aufwand."
    },
    {
      title: "Nahtlose NetSuite-Integration",
      description: "Alle Prozesse laufen in NetSuite – keine externen Tools, keine Systembrüche."
    }
  ];

  return (
    <section className="py-20 lg:py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Icon at top */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/REISEKOSTEN/AVA_Solution_Reisekosten.webp"
            alt="Lösungen für Reisekosten"
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
          Reisekosten einfach gemanagt
        </h2>

        {/* Features Grid - All features in responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {features.map((feature, index) => (
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
