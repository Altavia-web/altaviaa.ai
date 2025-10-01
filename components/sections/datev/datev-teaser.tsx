import React from 'react';
import Image from 'next/image';

export default function DatevTeaser() {
  return (
    <section className="relative w-full">
      <Image
        src="/images/DATEV/AVA_Teaser_DATEV_2000x598.webp"
        alt="DATEV Teaser"
        width={2000}
        height={598}
        className="w-full h-auto"
      />
    </section>
  );
}
