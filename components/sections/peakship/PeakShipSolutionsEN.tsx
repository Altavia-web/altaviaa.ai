import React from 'react';
import Image from 'next/image';

export default function PeakShipSolutionsEN() {
  const features = [
    {
      title: "Easy carrier setup",
      description: "Set up carrier accounts directly in NetSuite – without external tools."
    },
    {
      title: "Create shipping orders directly",
      description: "Orders are created effortlessly in NetSuite – transfer errors are a thing of the past."
    },
    {
      title: "Automatic labels",
      description: "Shipping labels are automatically generated and can be printed directly in the warehouse."
    },
    {
      title: "Tracking numbers included",
      description: "Shipments automatically receive tracking codes that you can share with your customers immediately."
    },
    {
      title: "Status and customs under control",
      description: "Track shipment status directly in NetSuite and create customs declarations automatically when needed."
    },
    {
      title: "Wide carrier selection",
      description: "DHL, DPD, UPS, GLS, FedEx and more are integrated – additional carriers can be added at any time."
    },
    {
      title: "Seamless in NetSuite",
      description: "Everything runs within NetSuite – fast, reliable, and without system breaks."
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
          className="text-3xl lg:text-4xl font-semibold text-center mb-16 leading-tight mx-auto"
          style={{ color: 'var(--color-dark-blue)', maxWidth: '800px' }}
        >
          Shipping made simple and integrated
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
