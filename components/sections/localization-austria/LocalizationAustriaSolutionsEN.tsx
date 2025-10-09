import React from 'react';
import Image from 'next/image';

export default function LocalizationAustriaSolutionsEN() {
  const features = [
    {
      title: "Immutability of Postings",
      description: "Financial transactions are tamper-proof and comply with statutory requirements for proper electronic accounting in Austria."
    },
    {
      title: "UGB-Compliant Reports",
      description: "Create balance sheets and profit and loss statements according to Austrian standards. Important financial reports such as chart of accounts and trial balance are included for audits and internal controls."
    },
    {
      title: "VAT Return via FinanzOnline",
      description: "Submit VAT returns directly and automatically to the Austrian tax authorities. This saves time, reduces errors, and ensures compliance."
    },
    {
      title: "Austrian E-Invoicing",
      description: "Effortlessly create the required e-invoice files from your invoices and credit notes at the touch of a button and comply with the legal e-invoicing requirement in Austria."
    },
    {
      title: "VAT Recalculation (Cash Discount)",
      description: "Ensure the correct reduction of proportional VAT for cash discounts through automatic journal entries and remain compliant with Austrian tax law."
    },
    {
      title: "Flexible Tax Date",
      description: "Record document date, posting date, and tax point date separately. This enables accurate period allocation and compliance with tax regulations."
    },
    {
      title: "VAT ID Verification",
      description: "Optimize cross-border transactions within the EU with our VAT ID verification and ensure a smooth verification process for trading partners&apos; VAT IDs."
    },
    {
      title: "EU VAT",
      description: "Taxes on sales transactions are verified and corrected if necessary. This closes gaps in the NetSuite standard."
    },
    {
      title: "Accrual Accounting",
      description: "Simplify the creation of provisions for unapproved invoices and support a smooth monthly, quarterly, or annual closing."
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
          className="text-3xl lg:text-4xl font-semibold text-center mb-16 leading-tight mx-auto"
          style={{ color: 'var(--color-dark-blue)', maxWidth: '800px' }}
        >
          Master Austrian Compliance
        </h2>

        {/* Features Grid - 3 columns */}
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
