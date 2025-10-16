import React from 'react';
import Image from 'next/image';

export default function PeakShipHeroContent() {
  return (
    <section
      className="py-16 lg:py-20 px-8"
      style={{ backgroundColor: 'var(--color-peakship-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column - Text Content */}
          <div style={{ color: 'var(--color-dark-blue)' }}>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              Alles für Ihren Versand direkt in NetSuite integriert
            </h3>

            <p className="text-lg leading-relaxed">
              Mit PeakShip für NetSuite machen Sie Ihre Versandprozesse so einfach wie nie: Etiketten, Tracking, Zollunterlagen – alles läuft direkt aus Ihrem ERP. Kein Hin- und Herkopieren, kein Risiko von Übertragungsfehlern, sondern ein nahtloser Ablauf vom Auftrag bis zur Auslieferung.
            </p>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-[105%] max-w-[105%] lg:w-[70%] lg:max-w-[70%] border-4 rounded-lg overflow-hidden mb-6 lg:mb-0"
              style={{ borderColor: 'var(--color-peakship-primary)' }}
            >
              <Image
                src="/images/DE/WebP/AVA_PEAK SHIP_DE.webp"
                alt="PeakShip für NetSuite"
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
