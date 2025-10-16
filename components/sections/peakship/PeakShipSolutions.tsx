import React from 'react';
import Image from 'next/image';

export default function PeakShipSolutions() {
  const features = [
    {
      title: "Einfache Carrier-Einrichtung",
      description: "Legen Sie Speditionskonten direkt in NetSuite an – ohne externe Tools."
    },
    {
      title: "Versandaufträge direkt erstellen",
      description: "Aufträge entstehen mühelos in NetSuite – Übertragungsfehler gehören der Vergangenheit an."
    },
    {
      title: "Automatische Etiketten",
      description: "Versandetiketten werden automatisch generiert und können direkt im Lager gedruckt werden."
    },
    {
      title: "Tracking-Nummern inklusive",
      description: "Sendungen erhalten automatisch Tracking-Codes, die Sie Ihren Kunden sofort mitteilen können."
    },
    {
      title: "Status und Zoll im Griff",
      description: "Verfolgen Sie den Sendungsstatus direkt in NetSuite und erstellen Sie Zollerklärungen bei Bedarf automatisch."
    },
    {
      title: "Breite Carrier-Auswahl",
      description: "DHL, DPD, UPS, GLS, FedEx und weitere sind integriert – zusätzliche Carrier lassen sich jederzeit ergänzen."
    },
    {
      title: "Nahtlos in NetSuite",
      description: "Alles läuft innerhalb von NetSuite – schnell, zuverlässig und ohne Systembrüche."
    }
  ];

  return (
    <section className="py-20 lg:py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Icon at top */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/PEAKSHIP/AVA_Solution_PeakShip.png"
            alt="Lösungen für PeakShip"
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
          Versand einfach und integriert
        </h2>

        {/* Features Grid - All features in responsive grid */}
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
