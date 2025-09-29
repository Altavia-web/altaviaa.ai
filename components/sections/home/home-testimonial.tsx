import React from 'react';

export default function HomeTestimonial() {
  return (
    <section className="py-16 lg:py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">

        {/* Quote Icon */}
        <div className="mb-8">
          <img
            src="/images/AVA_Quote_Grad.svg"
            alt="Zitat"
            className="w-20 h-20 lg:w-28 lg:h-28 mx-auto"
          />
        </div>

        {/* Zitat-Text */}
        <blockquote className="text-2xl lg:text-3xl font-medium mb-8 leading-relaxed" style={{ color: '#002e64' }}>
          &ldquo;Wir stehen nicht im Wettbewerb mit Partnern – im Gegenteil: Wir ergänzen Ihr Angebot
          mit sofort einsatzbereiten, praxiserprobten NetSuite-Erweiterungen.&rdquo;
        </blockquote>

        {/* Attribution/Name */}
        <p className="text-lg lg:text-xl font-semibold mb-12" style={{ color: '#002e64' }}>
          Peter von Zimmermann, Geschäftsführer Alta Via Applications GmbH
        </p>

        {/* Profilbild */}
        <div className="flex justify-center">
          <img
            src="/images/zimmermann.webp"
            alt="Peter von Zimmermann, Geschäftsführer Alta Via Applications GmbH"
            className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}