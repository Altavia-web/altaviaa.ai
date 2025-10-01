import React from 'react';
import Image from 'next/image';

export default function ProductsTeaser() {
  return (
    <section className="w-full">
      <div className="relative w-full h-auto">
        <Image
          src="/images/AVA_Teaser_Products_2000x598.webp"
          alt="Products Teaser"
          width={2000}
          height={598}
          className="w-full h-auto"
          quality={90}
        />
      </div>
    </section>
  );
}
