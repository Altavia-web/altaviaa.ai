import React from 'react';

export default function LocalizationAustriaHero() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: '100vh',
        background: 'var(--gradient-lokalisierung)'
      }}
    >
      <div className="text-center px-6">
        <h1
          className="font-bold leading-tight"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            color: 'var(--color-dark-blue)'
          }}
        >
          Lokalisierung Österreich für NetSuite
        </h1>
      </div>
    </section>
  );
}
