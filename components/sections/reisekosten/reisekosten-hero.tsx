import React from 'react';
import Image from 'next/image';

export default function ReisekostenHero() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-reisekosten)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto px-6" style={{ width: '80%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div className="text-left">
            <h1 className="mb-6 text-white">
              Reisekosten für NetSuite
            </h1>
            <h2 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: '1.3' }}>
              Reisekosten abrechnen – einfach, schnell, compliant
            </h2>
          </div>

          {/* Image - Right */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/REISEKOSTEN/AVA_Backpack_Reisekosten.webp"
                alt="Reisekosten Backpack"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
