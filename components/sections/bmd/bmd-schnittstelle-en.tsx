import React from 'react';
import Image from 'next/image';

export default function BmdSchnittstelleEN() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-bmd-intro)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto px-6" style={{ width: '80%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div className="text-left">
            <h3
              className="mb-6"
              style={{
                fontFamily: 'Titillium Web',
                fontWeight: 700,
                fontSize: '44px',
                lineHeight: '110%',
                letterSpacing: '0',
                color: '#002E64'
              }}
            >
              Secure Export of Your Accounting Data from NetSuite to BMD
            </h3>
            <p
              style={{
                fontFamily: 'Titillium Web',
                fontSize: '18px',
                lineHeight: '140%',
                color: '#002E64'
              }}
            >
              Companies in Austria that use the cloud ERP NetSuite often find themselves working across two worlds: financial data is managed in NetSuite, while tax advisors rely on BMD. To bring both sides together seamlessly, the BMD Interface for NetSuite by Alta Via Applications enables a secure export of accounting data from NetSuite, which can then be imported into BMD. Data is provided as a CSV file that can be downloaded from NetSuite and uploaded into BMD – efficient, compliant, and without double data entry.
            </p>
          </div>

          {/* Image - Right */}
          <div className="flex justify-end">
            <div className="relative w-[105%] max-w-[105%] lg:w-[70%] lg:max-w-[70%] mb-6 lg:mb-0">
              <Image
                src="/images/EN/WebP/AVA_BMD_EN.webp"
                alt="BMD Interface"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
