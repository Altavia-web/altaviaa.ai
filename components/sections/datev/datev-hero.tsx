import React from 'react';

export default function DatevHero() {
  return (
    <section
      className="relative flex items-center justify-center text-white"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-datev)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-bold mb-6 text-center" style={{fontSize: '69px', lineHeight: '110%', letterSpacing: '0'}}>
          DATEV Schnittstelle für NetSuite
        </h1>
        <p className="mb-8 leading-relaxed opacity-90" style={{fontSize: '1.224rem', lineHeight: '1.75'}}>
          Nahtlose Integration zwischen NetSuite und DATEV<br />für effiziente Buchhaltungsprozesse.
        </p>
      </div>
    </section>
  );
}
