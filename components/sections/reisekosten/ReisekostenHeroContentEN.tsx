import React from 'react';
import Image from 'next/image';

export default function ReisekostenHeroContentEN() {
  return (
    <section
      className="py-16 lg:py-20 px-8"
      style={{ backgroundColor: 'rgba(123, 207, 201, 0.4)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column - Text Content */}
          <div style={{ color: 'var(--color-dark-blue)' }}>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              Process Travel Expenses – Simply, Quickly, Compliant
            </h2>

            <p className="text-lg leading-relaxed">
              With Travel Expenses for NetSuite from Alta Via Applications, you automate allowances, simplify approvals, and accelerate reimbursements. Whether domestic, international, or multi-currency: the module eliminates manual calculations and spreadsheets – and ensures transparent, audit-proof processes directly in your ERP.
            </p>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md border-4 rounded-lg overflow-hidden"
              style={{ borderColor: 'var(--color-reisekosten-secondary)' }}
            >
              <Image
                src="/images/produkte/AVA_REISEKOSTEN_DE (1).webp"
                alt="Travel Expenses for NetSuite"
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
