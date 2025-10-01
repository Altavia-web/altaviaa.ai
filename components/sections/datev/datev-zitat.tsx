import React from 'react';
import Image from 'next/image';

export default function DatevZitat() {
  return (
    <section
      className="relative flex items-center justify-center py-16"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-datev-intro)'
      }}
    >
      {/* Opening Quote Icon - Top Left */}
      <div
        className="absolute"
        style={{
          top: '84.21px',
          left: '675.27px',
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
        {/* Zitat Text - Placeholder */}
        <p
          style={{
            fontFamily: 'Titillium Web',
            fontWeight: 600,
            fontSize: '28px',
            lineHeight: '140%',
            letterSpacing: '0',
            color: '#002E64'
          }}
        >
          [Zitat Text folgt]
        </p>
      </div>
    </section>
  );
}
