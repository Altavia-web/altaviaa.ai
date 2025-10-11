import React from 'react';
import Image from 'next/image';

export default function DatevHeroEN() {
  return (
    <section
      className="relative flex items-center justify-center pt-[5vh] lg:pt-0"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-datev)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto px-6 w-[95%] lg:w-[80%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div className="text-left">
            <h1 className="mb-6 text-white">
              DATEV Interface 3.0 for NetSuite
            </h1>
            <h2 className="text-white">
              The direct path to accounting with DATEV
            </h2>
          </div>

          {/* Image - Right */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/DATEV/AVA_Compass_DATEV-WHITE.webp"
                alt="DATEV Compass"
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
