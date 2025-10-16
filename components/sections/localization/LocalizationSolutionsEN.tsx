import React from 'react';
import Image from 'next/image';

export default function LocalizationSolutionsEN() {
  const features = [
    {
      title: "Immutability of postings (GoBD)",
      description: "Financial transactions are tamper-proof and comply with the legal GoBD requirements for proper electronic accounting in Germany."
    },
    {
      title: "HGB-compliant reports",
      description: "Create balance sheets and profit and loss statements in accordance with German standards. Important financial reports such as account sheets and summary and balance lists are included for audits and internal controls."
    },
    {
      title: "Sales tax return via ELSTER integration",
      description: "Submit sales tax returns directly and automatically to the German tax authorities. This saves time, reduces errors, and ensures compliance with regulations."
    },
    {
      title: "xRechnung",
      description: "Effortlessly create the required xRechnung files from your invoices and credit notes at the touch of a button, thereby complying with the legal e-invoicing requirements in Germany."
    },
    {
      title: "VAT recalculation (discount)",
      description: "Ensure the correct reduction of pro-rata VAT for discount deductions through automatic journal entries and remain compliant with German tax law."
    },
    {
      title: "Flexible Tax Date",
      description: "Record the document date, posting date, and tax point date separately. This enables accurate period allocation and compliance with tax regulations."
    },
    {
      title: "VAT ID Check",
      description: "Optimize cross-border transactions within the EU with our VAT ID verification and ensure a smooth verification process for trading partners' VAT IDs."
    },
    {
      title: "EU sales tax",
      description: "Taxes on sales transactions are checked and corrected if necessary. This closes gaps in the NetSuite standard."
    },
    {
      title: "Accruals",
      description: "Simplify the creation of accruals for unapproved invoices and support smooth monthly, quarterly, or annual closings."
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
          Conquer German compliance
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
