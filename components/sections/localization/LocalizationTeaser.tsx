import React from 'react';
import Image from 'next/image';

export default function LocalizationTeaser() {
  return (
    <section className="w-full">
      <Image
        src="/images/LOCALIZATION/AVA_Teaser_LOCALIZATION_2000x598.webp"
        alt="Lokalisierung Deutschland Teaser"
        width={2000}
        height={598}
        className="w-full h-auto"
        priority={false}
      />
    </section>
  );
}
