import React from 'react';
import Image from 'next/image';

export default function LocalizationHeroEN() {
  return (
    <section
      className="py-16 lg:py-20 px-8"
      style={{ backgroundColor: 'rgba(80, 149, 203, 0.4)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center mb-12">

          {/* Left Column - Text Content */}
          <div style={{ color: 'var(--color-dark-blue)' }}>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              From GoBD to HGB – Fully Integrated into Your NetSuite System
            </h3>

            <p className="text-lg leading-relaxed">
              The German business world places special demands on accounting and compliance. NetSuite is the foundation, but only with localization for Germany will your system truly be GoBD and HGB compliant. We add all the features German companies need for audit-proof and efficient financial management.
            </p>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-[105%] max-w-[105%] lg:w-[70%] lg:max-w-[70%] border-4 rounded-lg overflow-hidden mb-6 lg:mb-0 mt-[10%]"
              style={{ borderColor: 'var(--color-sky-blue)' }}
            >
              <Image
                src="/images/EN/WebP/AVA_LOKALISIERUNG_DE_EN.webp"
                alt="Localization Germany for NetSuite"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>

        {/* YouTube Video Embed */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/_wGbvwAB1E0"
                title="Localization Germany for NetSuite - Video"
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
