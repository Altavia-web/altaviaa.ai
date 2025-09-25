import React from 'react';

export default function HomeCompany() {
  return (
    <section className="py-16 px-6" style={{ background: 'var(--gradient-mid-to-sky)' }}>
      <div className="mx-auto text-center" style={{width: '80%'}}>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight" style={{color: '#1e40af'}}>
          Alta Via Applications: Produktentwicklung mit Weitblick
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed" style={{color: '#1e40af'}}>
            Die <strong>Alta Via Applications GmbH</strong> ist aus der Beratungserfahrung der Alta Via Consulting
            hervorgegangen – als eigenständige Produktgesellschaft mit klarem Fokus auf NetSuite-Erweiterungen.
            Was wir entwickeln, entsteht direkt aus dem Gelände unserer Kunden – konkret, anwenderfreundlich
            und mit Blick auf die gesamte Route.
          </p>

          <p className="text-lg leading-relaxed" style={{color: '#1e40af'}}>
            Wir konzentrieren uns auf das, was Sie für den nächsten Schritt brauchen: robuste Tools,
            präzise Ausrichtung und kontinuierliche Weiterentwicklung.
          </p>
        </div>
      </div>
    </section>
  );
}