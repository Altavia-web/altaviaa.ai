import React from 'react';
import Image from 'next/image';

export default function ReisekostenSolutionsEN() {
  const features = [
    {
      title: "Automatic Allowances",
      description: "Meal and accommodation allowances are automatically calculated according to German law – correct, up-to-date, and without manual work."
    },
    {
      title: "Easy Trip Recording",
      description: "Enter start, destination, times, and kilometers – the module creates the appropriate travel items and automatically considers overnight stays."
    },
    {
      title: "Multi-Currency & Receipts",
      description: "Record expenses in different currencies and attach receipts directly – transparent and audit-proof."
    },
    {
      title: "Custom Approval Workflows",
      description: "Reports run through the integrated workflow – fast approvals, clear responsibilities, full control."
    },
    {
      title: "Annually Updated Rates",
      description: "Allowances are updated annually by Alta Via – you stay compliant without any effort."
    },
    {
      title: "Seamless NetSuite Integration",
      description: "All processes run in NetSuite – no external tools, no system breaks."
    }
  ];

  return (
    <section className="py-20 lg:py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Icon at top */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/REISEKOSTEN/AVA_Solution_Reisekosten.webp"
            alt="Travel Expenses Solutions"
            width={120}
            height={120}
            className="w-20 lg:w-[120px] h-auto"
          />
        </div>

        {/* Main heading */}
        <h2
          className="text-3xl lg:text-4xl font-semibold text-center mb-16 leading-tight mx-auto"
          style={{ color: 'var(--color-dark-blue)', maxWidth: '800px' }}
        >
          Travel Expenses Simply Managed
        </h2>

        {/* Features Grid - All features in responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              <h3
                className="text-xl lg:text-2xl font-semibold mb-3"
                style={{ color: 'var(--color-dark-blue)' }}
              >
                {feature.title}
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--color-dark-blue)', opacity: 0.85 }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
