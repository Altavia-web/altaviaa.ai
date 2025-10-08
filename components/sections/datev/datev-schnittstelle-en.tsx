import React from 'react';
import Image from 'next/image';

export default function DatevSchnittstelleEN() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-datev-intro)'
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
              DATEV eG&apos;s accounting software is the standard for tax advisors and auditors in Germany. With the DATEV-certified SuiteApp &ldquo;Interface DATEV for NetSuite,&rdquo; you can easily transfer all accounting data from your NetSuite ERP system to DATEV for further processing or closing.
            </h3>
          </div>

          {/* Image - Right */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/produkte/AVA_DATEV_DE.webp"
                alt="DATEV Interface"
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
