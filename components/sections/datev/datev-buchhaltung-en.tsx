import React from 'react';
import Image from 'next/image';

const features = [
  {
    id: 1,
    title: 'Data transfer between NetSuite and DATEV',
    description: 'Master data (e.g., account labels, debtors/creditors) and booking-relevant transactions can be imported and exported between NetSuite and DATEV – version 3.0 closes the loop.'
  },
  {
    id: 2,
    title: 'SuiteTax compatibility',
    description: 'The SuiteApp supports both Legacy Tax and SuiteTax, meaning that functions are also available to clients with a SuiteTax setup.'
  },
  {
    id: 3,
    title: 'Automatic personal account assignment',
    description: 'Receivables and payables from LuL in NetSuite are posted to the corresponding DATEV personal account.'
  },
  {
    id: 4,
    title: 'Sales tax posting',
    description: 'The NetSuite VAT logic is converted into a gross posting for DATEV.'
  },
  {
    id: 5,
    title: 'Revenue recognition & multibook',
    description: 'The solution supports revenue recognition and parallel valuations.'
  },
  {
    id: 6,
    title: 'Reconciliation per transaction',
    description: 'In NetSuite, you can analyze the corresponding DATEV posting directly for each transaction, which simplifies reconciliation.'
  },
  {
    id: 7,
    title: 'Document transfer',
    description: 'Documents can be transferred directly to DATEV Unternehmen online to display document images in DATEV for transaction and archiving purposes.'
  },
  {
    id: 8,
    title: 'Overwriting CSV files',
    description: 'CSV files are overwritten directly in NetSuite via the custom record user interface.'
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
          className="text-center mb-20"
          style={{
            fontFamily: 'Titillium Web',
            fontWeight: 700,
            fontSize: '55px',
            lineHeight: '110%',
            letterSpacing: '0',
            color: '#002E64'
          }}
        >
          What the DATEV Interface 3.0 does for you
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
