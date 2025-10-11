import React from 'react';
import Image from 'next/image';

export default function ReisekostenHero() {
  return (
    <section
      className="pt-[5vh] lg:pt-0 pb-16 lg:pb-20 px-8"
      style={{ backgroundColor: 'rgba(123, 207, 201, 0.4)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column - Text Content */}
          <div style={{ color: 'var(--color-dark-blue)' }}>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              Von Pauschalen bis Erstattung – alles in einem Modul
            </h3>

            <p className="text-lg leading-relaxed">
              Mit Reisekosten für NetSuite von Alta Via Applications automatisieren Sie Pauschalen, vereinfachen Genehmigungen und beschleunigen Erstattungen. Ob Inland, Ausland oder mehrere Währungen: Das Modul macht Schluss mit manuellen Berechnungen und Tabellen – und sorgt für transparente, prüfungssichere Prozesse direkt in Ihrem ERP.
            </p>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md border-4 rounded-lg overflow-hidden"
              style={{ borderColor: 'var(--color-reisekosten-secondary)' }}
            >
              <Image
                src="/images/DE/WebP/AVA_REISEKOSTEN_DE.webp"
                alt="Reisekosten für NetSuite"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
