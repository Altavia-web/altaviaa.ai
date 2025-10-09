import React from 'react';
import Image from 'next/image';

export default function LocalizationAustriaHeroContentEN() {
  return (
    <section
      className="py-16 lg:py-20 px-8"
      style={{ backgroundColor: 'rgba(80, 149, 203, 0.4)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column - Text Content */}
          <div style={{ color: 'var(--color-dark-blue)' }}>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              Optimize NetSuite for the Austrian Market – Precise, Compliant, Ready to Use
            </h2>

            <p className="text-lg leading-relaxed">
              The Austrian business environment places special requirements on accounting and compliance. NetSuite is the foundation, but only with Austrian Localization does your system become truly UGB and BAO compliant. We add all the features that Austrian companies need for audit-proof and efficient financial management.
            </p>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md border-4 rounded-lg overflow-hidden"
              style={{ borderColor: 'var(--color-sky-blue)' }}
            >
              <Image
                src="/images/produkte/AVA_LOKALISIERUNG_DE.webp"
                alt="Austrian Localization for NetSuite"
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
