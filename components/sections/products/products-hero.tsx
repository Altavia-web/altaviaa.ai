import React from 'react';
import Image from 'next/image';

export default function ProductsHero() {
  return (
    <section className="relative flex items-center justify-center text-white" style={{ minHeight: '72vh' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/AVA_Header_Products_2000x875.webp"
          alt="Products Header Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-bold mb-6 text-center">
          Perfekt ausgerüstet.<br />Bis ins Detail.
        </h1>
        <p className="mb-8 leading-relaxed opacity-90" style={{fontSize: '1.224rem', lineHeight: '1.75'}}>
          Mit den von Alta Via entwickelten Apps für NetSuite<br />kommen Sie noch effektiver voran.
        </p>
      </div>
    </section>
  );
}
