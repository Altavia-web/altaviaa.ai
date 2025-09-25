import React from 'react';
import Button from '@/components/Button';

export default function HomeHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/home/hero-bg.jpg)',
        backgroundColor: 'var(--color-dark-blue)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Lokalisierung Deutschland für NetSuite – Ihr Tool für den Aufstieg
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
          Optimieren Sie NetSuite für den deutschen Markt mit präzisen Tools für Compliance,
          Steuerberechnung und nahtlose DATEV-Integration. Entwickelt von Experten für deutsche Unternehmen.
        </p>
        <Button
          variant="filled"
          color="skyBlue"
          size="lg"
          showArrow={true}
          className="text-lg px-8 py-4"
        >
          Download Produktbroschüre
        </Button>
      </div>
    </section>
  );
}