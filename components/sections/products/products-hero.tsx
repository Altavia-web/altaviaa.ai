import React from 'react';
import Image from 'next/image';

export default function ProductsHero() {
  return (
    <section className="relative flex items-center justify-center text-white" style={{ minHeight: '72vh' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/AVA_Header_Products_2000x875.webp"
          alt="Products Header Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-bold mb-6 text-center">
          Perfekt ausgerüstet. Bis ins letzte Detail.
        </h1>
        <h2 className="mb-8 leading-relaxed opacity-90 text-2xl md:text-3xl font-semibold">
          Die Apps von Alta Via Applications machen NetSuite zum zentralen Werkzeug für Ihre Geschäftsprozesse.
        </h2>
        <p className="mb-8 leading-relaxed opacity-90 text-lg md:text-xl">
          Unsere Lokalisierung für Deutschland und Österreich sowie unsere Schnittstelle für DATEV und BMD oder auch unsere Suite-App "Reisekosten für NetSuite" – alle Lösungen sind schnell einsatzbereit, nahtlos integriert und auf den deutschsprachigen Markt abgestimmt. So sparen Sie Zeit, reduzieren manuellen Aufwand und holen mehr aus Ihrem ERP-System heraus.
        </p>
      </div>
    </section>
  );
}
