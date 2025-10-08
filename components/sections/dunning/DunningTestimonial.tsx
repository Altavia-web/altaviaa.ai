import React from 'react';
import Image from 'next/image';

export default function DunningTestimonial() {
  return (
    <section
      className="relative flex items-center justify-center py-16"
      style={{
        minHeight: '72vh',
        background: 'rgba(152, 0, 0, 0.4)'
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
          &bdquo;Früher mussten wir jede Mahnung manuell anstoßen und die Schreiben selbst formatieren – das war extrem zeitaufwendig. Mit Mahnwesen für Netsuite läuft alles automatisiert und wir haben jederzeit den Überblick. Für uns ein echter Gewinn an Effizienz.&ldquo;
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
          [Kundenname]
        </p>
      </div>
    </section>
  );
}
