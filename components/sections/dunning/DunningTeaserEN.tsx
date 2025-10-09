import React from 'react';
import Image from 'next/image';

export default function DunningTeaserEN() {
  return (
    <section className="w-full">
      <Image
        src="/images/DUNNING/AVA_Teaser_DUNNING_2000x598.webp"
        alt="Dunning Teaser"
        width={2000}
        height={598}
        className="w-full h-auto"
        priority={false}
      />
    </section>
  );
}
