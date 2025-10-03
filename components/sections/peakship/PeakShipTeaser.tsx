import React from 'react';
import Image from 'next/image';

export default function PeakShipTeaser() {
  return (
    <section className="w-full">
      <Image
        src="/images/PEAKSHIP/AVA_Teaser_PEAKSHIP_2000x598.webp"
        alt="PeakShip Teaser"
        width={2000}
        height={598}
        className="w-full h-auto"
        priority={false}
      />
    </section>
  );
}
