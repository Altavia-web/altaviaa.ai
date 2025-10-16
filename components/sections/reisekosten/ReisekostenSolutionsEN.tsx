import React from 'react';
import Image from 'next/image';

export default function ReisekostenSolutionsEN() {
  const features = [
    {
      title: "Automatic Allowances",
      description: "Meal and lodging allowances are automatically calculated according to German law – correct, current, and without manual effort."
    },
    {
      title: "Intuitive Trip Entry",
      description: "Enter start, destination, times, and distances – the module generates the appropriate travel items and automatically accounts for overnight stays."
    },
    {
      title: "Multi-Currency & Receipts",
      description: "Record expenses in various currencies and attach receipts directly – transparent and audit-proof."
    },
    {
      title: "Flexible Approval Workflows",
      description: "Reports move through your integrated workflow – quick approvals, clear responsibilities, full traceability."
    },
    {
      title: "Annual Rate Updates",
      description: "Allowances are updated annually by Alta Via – you stay compliant without lifting a finger."
    },
    {
      title: "Full NetSuite Integration",
      description: "Everything runs inside NetSuite – no external tools, no breaks in your system."
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
          className="text-3xl lg:text-4xl font-semibold text-center mb-8 leading-tight mx-auto"
          style={{ color: 'var(--color-dark-blue)', maxWidth: '800px' }}
        >
          Travel Expenses Made Easy
        </h2>

        {/* Features Grid - All features in responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              <h3
                className="text-xl lg:text-2xl font-semibold mb-6"
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
