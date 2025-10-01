import React from 'react';
import Image from 'next/image';

export default function HomeHero() {
  return (
    <section className="relative flex items-center justify-center text-white" style={{ minHeight: '72vh' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/Home_hero.webp"
          alt="NetSuite Lokalisierung Deutschland Hero Background"
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
        <h1 className="font-bold mb-6 leading-tight" style={{fontSize: 'clamp(3.78rem, 7.76vw, 8.15rem)'}}>
          Lokalisierung Deutschland für NetSuite – Ihr Tool für den Aufstieg
        </h1>
        <p className="text-2xl md:text-3xl mb-8 leading-relaxed opacity-90">
          Hier steht ein kurzer Einleitungstext von 1-2 Sätzen, unter diesen wird dann noch ein Button eingefügt.
          Klickt man diesen an, kann man die Produktbroschüre downloaden.
        </p>
        <button
          className="text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center text-lg hover:opacity-90"
          style={{backgroundColor: 'var(--color-orange)'}}
        >
          Download Produktbroschüre
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}