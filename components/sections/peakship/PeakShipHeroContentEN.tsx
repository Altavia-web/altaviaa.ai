import React from 'react';
import Image from 'next/image';

export default function PeakShipHeroContentEN() {
  return (
    <section
      className="py-16 lg:py-20 px-8"
      style={{ backgroundColor: 'var(--color-peakship-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column - Text Content */}
          <div style={{ color: 'var(--color-dark-blue)' }}>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              Ship Efficiently – Directly from Your ERP
            </h2>

            <p className="text-lg leading-relaxed">
              With Peak Ship for NetSuite, shipping has never been easier: labels, tracking, customs documents – everything runs directly from your ERP. No copy-pasting between systems, no risk of transfer errors – just a seamless flow from order to delivery.
            </p>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md border-4 rounded-lg overflow-hidden"
              style={{ borderColor: 'var(--color-peakship-primary)' }}
            >
              <Image
                src="/images/produkte/AVA_PEAK SHIP_DE (1).webp"
                alt="PeakShip for NetSuite"
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
