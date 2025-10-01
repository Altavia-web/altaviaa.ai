import React from 'react';

export default function DatevZitat() {
  return (
    <section
      className="relative flex items-center justify-center py-16"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-datev-intro)'
      }}
    >
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
            color: '#ffffff'
          }}
        >
          [Zitat Text folgt]
        </p>
      </div>
    </section>
  );
}
