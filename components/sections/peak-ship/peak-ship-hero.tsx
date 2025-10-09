import React from 'react';
import Image from 'next/image';

export default function PeakShipHero() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-peakship)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto px-6" style={{ width: '80%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div className="text-left">
            <h1 className="mb-6 text-white">
              PeakShip für NetSuite
            </h1>
            <h2 className="text-white mb-4">
              Effizient versenden – direkt aus Ihrem ERP
            </h2>
            <h3 className="text-white text-xl lg:text-2xl font-normal">
              Mit PeakShip für NetSuite machen Sie Ihre Versandprozesse so einfach wie nie: Etiketten, Tracking, Zollunterlagen – alles läuft direkt aus Ihrem ERP. Kein Hin- und Herkopieren, kein Risiko von Übertragungsfehlern, sondern ein nahtloser Ablauf vom Auftrag bis zur Auslieferung.
            </h3>
          </div>

          {/* Image - Right */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/PEAKSHIP/AVA_Rope_PeakShip.webp"
                alt="PeakShip Rope"
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
