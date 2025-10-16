import React from 'react';
import Image from 'next/image';

export default function DunningSolutions() {
  const features = [
    {
      title: "Schnellstart in 60 Minuten möglich",
      description: "Nach der Installation wählen Sie nur Filiale und Bankdaten – schon ist das Mahnwesen einsatzbereit. Je nach Umfang kann das System schon in 60 Minuten startklar sein."
    },
    {
      title: "Individuelle Mahnprozesse",
      description: "Beliebig viele Mahnstufen, pro Filiale konfigurierbar – flexibel an Ihre Anforderungen angepasst."
    },
    {
      title: "Finanzielle Präzision",
      description: "Mahngebühren und Verzugszinsen werden automatisch berechnet und verbucht."
    },
    {
      title: "Standardisierte Vorlagen",
      description: "Jede Mahnstufe nutzt vordefinierte Templates – für konsistente und professionelle Schreiben."
    },
    {
      title: "Zentrale Steuerung und Überblick",
      description: "Alle aktuellen und vergangenen Mahnläufe im Blick – von offenen Posten bis zu abgeschlossenen Vorgängen, ergänzt durch flexible Auswertungen und Reporting."
    },
    {
      title: "Automatisierte Kommunikation",
      description: "Mahnungen werden auf Wunsch automatisch per E-Mail verschickt – mit angehängten Rechnungen und Benachrichtigung relevanter Teams."
    },
    {
      title: "Nahtlose NetSuite-Integration",
      description: "Der gesamte Prozess läuft innerhalb von NetSuite – ohne externe Tools oder manuelle Zwischenschritte."
    }
  ];

  return (
    <section className="py-20 lg:py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Icon at top */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/DUNNING/AVA_Solution_Dunning.webp"
            alt="Lösungen für Mahnwesen"
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
          Mahnungen automatisiert und im Griff
        </h2>

        {/* Features Grid */}
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
