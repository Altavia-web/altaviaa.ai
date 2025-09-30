import React from 'react';
import Image from 'next/image';

export default function HomePartners() {
  return (
    <section className="py-16 lg:py-20 px-6" style={{ background: 'var(--gradient-sky-to-ice)' }}>
      <div className="max-w-6xl mx-auto text-center">

        {/* SVG Icon */}
        <div className="mb-8">
          <Image
            src="/images/AVA_Sign_Grad.svg"
            alt="Wegweiser Icon"
            width={80}
            height={80}
            className="w-20 h-20 lg:w-24 lg:h-24 mx-auto"
          />
        </div>

        {/* Hauptüberschrift */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 leading-tight" style={{ color: '#002e64' }}>
          Für NetSuite-User und Partner – gemeinsam nach oben
        </h2>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Linke Spalte - NetSuite-Nutzer */}
          <div className="text-left">
            <h3 className="text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#002e64' }}>
              Für NetSuite-Nutzer:
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: '#002e64' }}>
              Kürzere Release-Zyklen, praxisnahe Funktionalität und eine klare Produktstrategie
              machen unsere Lösungen zum zuverlässigen Wegbegleiter – ob Lokalisierung, DATEV Export
              oder spezialisierte Tools wie Mahnwesen, Reisekosten und Versandabwicklung.
            </p>
          </div>

          {/* Rechte Spalte - NetSuite-Partner */}
          <div className="text-left">
            <h3 className="text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#002e64' }}>
              Für NetSuite-Partner:
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: '#002e64' }}>
              Als reiner Produktanbieter verzichtet Alta Via Applications auf Beratung und
              Implementierung – und ergänzt Ihre Lösung, ohne mit Ihnen zu konkurrieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}