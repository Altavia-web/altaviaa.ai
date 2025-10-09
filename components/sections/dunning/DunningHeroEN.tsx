import React from 'react';
import Image from 'next/image';

export default function DunningHeroEN() {
  return (
    <section
      className="py-16 lg:py-20 px-8"
      style={{ backgroundColor: 'rgba(152, 0, 0, 0.4)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column - Text Content */}
          <div style={{ color: 'var(--color-dark-blue)' }}>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              Time is money: with Dunning for NetSuite by Alta Via Applications, you automate receivables management and reduce the risk of payment defaults. With version 4.0, getting started is easier than ever: in just 60 minutes, your dunning process is ready to go – no complex setup required. Simply select the subsidiary, enter the bank details, and reminders will run automatically, transparently, and reliably – directly from your ERP system. Save valuable time, relieve your team, and secure long-term liquidity.
            </h3>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md border-4 rounded-lg overflow-hidden"
              style={{ borderColor: 'var(--color-mahnwesen-secondary)' }}
            >
              <Image
                src="/images/EN/WebP/AVA_MAHNWESEN_EN.webp"
                alt="Dunning for NetSuite"
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
