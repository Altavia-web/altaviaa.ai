import React from 'react';
import Image from 'next/image';

export default function AbwesenheitTeaser() {
  return (
    <section className="w-full">
      <Image
        src="/images/ABWESENHEITSVERWALTUNG/AVA_Teaser_ABWESENHEIT_2000x598.webp"
        alt="Abwesenheitsverwaltung Teaser"
        width={2000}
        height={598}
        className="w-full h-auto"
        priority={false}
      />
    </section>
  );
}
