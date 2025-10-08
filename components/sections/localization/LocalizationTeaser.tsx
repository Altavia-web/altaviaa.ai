import React from 'react';

export default function LocalizationTeaser() {
  return (
    <section
      className="py-16 lg:py-20 px-6"
      style={{ background: 'var(--gradient-lokalisierung)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-white leading-tight">
          Ständig in Bewegung. Stets up to date.
        </h3>
        <p className="text-lg lg:text-xl text-white leading-relaxed">
          Version 3.0 bringt SuiteTax-Kompatibilität, den Import von Transaktionsdateien aus DATEV nach NetSuite sowie das CSV-Override direkt in NetSuite. Damit entfällt manuelles Nacharbeiten und Sie bleiben flexibel bei Sonderfällen.
        </p>
      </div>
    </section>
  );
}
