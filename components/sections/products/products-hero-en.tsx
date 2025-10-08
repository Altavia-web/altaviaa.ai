import React from 'react';
import Image from 'next/image';

export default function ProductsHeroEN() {
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
          Perfectly Equipped. Down to the Last Detail.
        </h1>
        <h2 className="mb-8 leading-relaxed opacity-90 text-2xl md:text-3xl font-semibold">
          Alta Via Applications&apos; Apps Make NetSuite the Central Tool for Your Business Processes.
        </h2>
        <p className="mb-8 leading-relaxed opacity-90 text-lg md:text-xl">
          Our localization for Germany and Austria, our interface for DATEV and BMD, and our Suite-app &quot;Travel Expenses for NetSuite&quot; – all solutions are quick to implement, seamlessly integrated, and tailored to the German-speaking market. This saves you time, reduces manual effort, and maximizes the value of your ERP system.
        </p>
      </div>
    </section>
  );
}
