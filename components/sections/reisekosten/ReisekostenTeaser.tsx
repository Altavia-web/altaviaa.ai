import React from 'react';
import Image from 'next/image';

export default function ReisekostenTeaser() {
  return (
    <section className="w-full">
      <Image
        src="/images/REISEKOSTEN/AVA_Teaser_REISEKOSTEN_2000x598.webp"
        alt="Reisekosten Teaser"
        width={2000}
        height={598}
        className="w-full h-auto"
        priority={false}
      />
    </section>
  );
}
