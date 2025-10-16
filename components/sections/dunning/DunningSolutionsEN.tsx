import React from 'react';
import Image from 'next/image';

export default function DunningSolutionsEN() {
  const features = [
    {
      title: "Quick Start in 60 Minutes",
      description: "After installation, simply select subsidiary and bank details – and the dunning process is ready to use."
    },
    {
      title: "Customized Dunning Processes",
      description: "Define as many dunning levels as needed, configurable per subsidiary – fully tailored to your requirements."
    },
    {
      title: "Financial Precision",
      description: "Dunning fees and late-payment interest are automatically calculated and posted."
    },
    {
      title: "Standardized Templates",
      description: "Each dunning level uses predefined templates for consistent and professional communication."
    },
    {
      title: "Central Control and Reporting",
      description: "Keep track of all current and past dunning runs – from open items to completed cases, complemented by flexible evaluations and reporting."
    },
    {
      title: "Automated Communication",
      description: "Reminders can be sent automatically via email, including attached invoices and notifications to relevant teams."
    },
    {
      title: "Seamless NetSuite Integration",
      description: "The entire process runs inside NetSuite – with no external tools or manual steps."
    }
  ];

  return (
    <section className="py-20 lg:py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Icon at top */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/DUNNING/AVA_Solution_Dunning.webp"
            alt="Dunning Solutions"
            width={120}
            height={120}
            className="w-20 lg:w-[120px] h-auto"
          />
        </div>

        {/* Main heading */}
        <h2
          className="text-3xl lg:text-4xl font-semibold text-center mb-20 leading-tight mx-auto"
          style={{ color: 'var(--color-dark-blue)', maxWidth: '800px' }}
        >
          Automated Dunning, Always Under Control
        </h2>

        {/* Features Grid */}
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
