import React from 'react';
import Image from 'next/image';

export default function BmdTeaser() {
  return (
    <section className="relative w-full">
      <Image
        src="/images/BMD/AVA_Teaser_BMD_2000x598.webp"
        alt="BMD Teaser"
        width={2000}
        height={598}
        className="w-full h-auto"
      />
    </section>
  );
}
