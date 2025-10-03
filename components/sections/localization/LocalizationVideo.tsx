import React from 'react';
import Image from 'next/image';

export default function LocalizationVideo() {
  return (
    <section
      className="py-16 lg:py-20 px-8"
      style={{ background: 'var(--gradient-sky-to-ice)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Product Banner Image */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-4xl">
            <Image
              src="/images/produkte/AVA_LOKALISIERUNG_DE.webp"
              alt="Lokalisierung Deutschland für NetSuite"
              width={900}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* YouTube Video Embed */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/_wGbvwAB1E0"
                title="Lokalisierung Deutschland für NetSuite - Video"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
