import React from 'react';
import Image from 'next/image';

export default function LocalizationSolutionsEN() {
  const features = [
    {
      title: "[Feature Title 1 - Text to follow]",
      description: "[Feature Description 1 - Text to follow]"
    },
    {
      title: "[Feature Title 2 - Text to follow]",
      description: "[Feature Description 2 - Text to follow]"
    },
    {
      title: "[Feature Title 3 - Text to follow]",
      description: "[Feature Description 3 - Text to follow]"
    },
    {
      title: "[Feature Title 4 - Text to follow]",
      description: "[Feature Description 4 - Text to follow]"
    },
    {
      title: "[Feature Title 5 - Text to follow]",
      description: "[Feature Description 5 - Text to follow]"
    },
    {
      title: "[Feature Title 6 - Text to follow]",
      description: "[Feature Description 6 - Text to follow]"
    },
    {
      title: "[Feature Title 7 - Text to follow]",
      description: "[Feature Description 7 - Text to follow]"
    },
    {
      title: "[Feature Title 8 - Text to follow]",
      description: "[Feature Description 8 - Text to follow]"
    },
    {
      title: "[Feature Title 9 - Text to follow]",
      description: "[Feature Description 9 - Text to follow]"
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
          [English Solutions Heading - Text to follow]
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
