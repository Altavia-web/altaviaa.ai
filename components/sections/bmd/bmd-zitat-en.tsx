import React from 'react';
import Image from 'next/image';

export default function BmdZitatEN() {
  return (
    <section
      className="relative flex items-center justify-center py-16"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-bmd-intro)'
      }}
    >
      {/* Opening Quote Icon - Centered */}
      <div
        className="absolute left-1/2"
        style={{
          top: '84.21px',
          transform: 'translateX(-50%)',
          width: '89.46px',
          height: '77.87px',
          opacity: 1
        }}
      >
        <Image
          src="/images/zitatBlau.png"
          alt="Quote"
          width={90}
          height={78}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-6 text-center" style={{ width: '80%' }}>
        {/* Quote Text */}
        <p
          className="mb-8"
          style={{
            fontFamily: 'Titillium Web',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '140%',
            letterSpacing: '0',
            color: '#002E64',
            textAlign: 'center'
          }}
        >
          The SuiteApp &bdquo;BMD Interface for NetSuite&ldquo; from Alta Via Application was indispensable for us, as it enabled the export of EXTF batch posting files from NetSuite, which was crucial for our BMD processes. The Alta Via Application team also provided exceptional support during our critical SKR chart of accounts migration, ensuring a smooth and efficient transition.
        </p>
        {/* Author */}
        <p
          style={{
            fontFamily: 'Titillium Web',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '140%',
            letterSpacing: '0',
            color: '#002E64',
            textAlign: 'center'
          }}
        >
          Steven Ratz, Managing Director, Dietz Group
        </p>
      </div>
    </section>
  );
}
