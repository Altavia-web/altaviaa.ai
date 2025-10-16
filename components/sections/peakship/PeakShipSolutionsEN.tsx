import React from 'react';
import Image from 'next/image';

export default function PeakShipSolutionsEN() {
  const features = [
    {
      title: "Easy Carrier Setup",
      description: "Create carrier accounts directly in NetSuite – no external tools needed."
    },
    {
      title: "Create Shipments Directly",
      description: "Generate shipping orders effortlessly in NetSuite – transmission errors are a thing of the past."
    },
    {
      title: "Automatic Labels",
      description: "Shipping labels are generated automatically and can be printed directly in the warehouse."
    },
    {
      title: "Tracking Numbers Included",
      description: "Shipments automatically receive tracking codes that you can share with your customers right away."
    },
    {
      title: "Status and Customs Under Control",
      description: "Track shipment status directly in NetSuite and generate customs declarations automatically when needed."
    },
    {
      title: "Wide Carrier Selection",
      description: "DHL, DPD, UPS, GLS, FedEx, and more are integrated – additional carriers can be added at any time."
    },
    {
      title: "Seamlessly in NetSuite",
      description: "Everything runs inside NetSuite – fast, reliable, and without system breaks."
    }
  ];

  return (
    <section className="py-20 lg:py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Icon at top */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/PEAKSHIP/AVA_Solution_PeakShip.png"
            alt="Solutions for PeakShip"
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
          Shipping Made Simple – Fully Integrated
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
