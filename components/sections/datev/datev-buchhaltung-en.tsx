import React from 'react';
import Image from 'next/image';

const features = [
  {
    id: 1,
    title: '[English Feature 1 Title - Text to follow]',
    description: '[English Feature 1 Description - Text to follow]'
  },
  {
    id: 2,
    title: '[English Feature 2 Title - Text to follow]',
    description: '[English Feature 2 Description - Text to follow]'
  },
  {
    id: 3,
    title: '[English Feature 3 Title - Text to follow]',
    description: '[English Feature 3 Description - Text to follow]'
  },
  {
    id: 4,
    title: '[English Feature 4 Title - Text to follow]',
    description: '[English Feature 4 Description - Text to follow]'
  },
  {
    id: 5,
    title: '[English Feature 5 Title - Text to follow]',
    description: '[English Feature 5 Description - Text to follow]'
  },
  {
    id: 6,
    title: '[English Feature 6 Title - Text to follow]',
    description: '[English Feature 6 Description - Text to follow]'
  },
  {
    id: 7,
    title: '[English Feature 7 Title - Text to follow]',
    description: '[English Feature 7 Description - Text to follow]'
  },
  {
    id: 8,
    title: '[English Feature 8 Title - Text to follow]',
    description: '[English Feature 8 Description - Text to follow]'
  }
];

export default function DatevBuchhaltungEN() {
  return (
    <section className="bg-white py-16">
      {/* Image */}
      <div className="w-full mb-12 flex justify-center">
        <div style={{ height: '170px' }}>
          <Image
            src="/images/DATEV/AVA_Solution_Datev.png"
            alt="DATEV Solution"
            width={1200}
            height={525}
            style={{ height: '170px', width: 'auto' }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'Titillium Web',
            fontWeight: 700,
            fontSize: '55px',
            lineHeight: '110%',
            letterSpacing: '0',
            color: '#002E64'
          }}
        >
          [English H2 - Text to follow]
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => (
            <div key={feature.id} className="text-left">
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'Titillium Web',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '130%',
                  letterSpacing: '0',
                  color: '#002E64'
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Titillium Web',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '140%',
                  letterSpacing: '0',
                  color: '#1e293b'
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Image */}
      <div className="w-full mt-12 flex justify-center">
        <div className="w-full px-6 md:px-0 md:w-auto" style={{ maxHeight: '400px' }}>
          <Image
            src="/images/DATEV/AVA_DATEV_EN.webp"
            alt="DATEV Export"
            width={700}
            height={306}
            className="w-full h-auto md:w-auto md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
