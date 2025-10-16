import React from 'react';
import Image from 'next/image';

export default function LocalizationAustriaSolutionsEN() {
  const features = [
    {
      title: "UGB-Compliant Reporting",
      description: "Prepare balance sheets and P&L statements in accordance with Austrian company law – including account sheets and trial balance."
    },
    {
      title: "GoBD & SuiteTax Compliance",
      description: "Financial transactions remain tamper-proof. All functions fully support SuiteTax for a smooth migration."
    },
    {
      title: "Integrated BMD Export",
      description: "Transfer posting data from NetSuite directly into Austria's widely used BMD system – securely and without detours."
    },
    {
      title: "Travel Expense Reporting Under Austrian Law",
      description: "Per diems, mileage allowances, mixed trips – all mapped in NetSuite in full compliance with Austrian tax rules."
    },
    {
      title: "Correct VAT & Cash Discount Handling",
      description: "Our solution automatically creates additional entries for cash discounts and ensures accurate tax calculation."
    },
    {
      title: "Flexible Tax and Posting Dates",
      description: "Book document date, posting date, and tax point date separately – for precise period allocation."
    }
  ];

  return (
    <section className="py-20 lg:py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Icon at top */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/LOCALIZATION/AVA_Solution_Localization.webp"
            alt="Localization Solutions"
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
          Everything You Need for Success in Austria
        </h2>

        {/* Features Grid - 3 columns */}
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
