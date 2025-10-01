import React from 'react';
import Image from 'next/image';

export default function HomeMarketOptimization() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto" style={{width: '80%'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Column */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{color: '#002e64'}}>
              Optimieren Sie NetSuite für den deutschen Markt – präzise, konform, einsatzbereit
            </h2>
            <p className="text-xl leading-relaxed" style={{color: '#000000'}}>
              Immer mehr deutsche Unternehmen und internationale Konzerne mit Niederlassungen in Deutschland
              setzen auf NetSuite als zentrale ERP- und Buchhaltungslösung. Für einen erfolgreichen Einsatz
              ist eine vollständige Anpassung an die lokalen Anforderungen unerlässlich. Mit der{' '}
              <strong>Alta Via Lokalisierung Deutschland</strong> erweitern Sie den NetSuite-Standard um genau
              die Funktionen, die in Deutschland gesetzlich und praktisch erforderlich sind.
            </p>
          </div>

          {/* Illustration - Right Column */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/home/Home_Localization_Map__Grad-1.svg"
                alt="Alta Via Lokalisierung Deutschland Map"
                width={475}
                height={380}
                className="w-[63.5%] h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}