import React from 'react';
import Image from 'next/image';

export default function LocalizationTestimonialEN() {
  return (
    <section
      className="py-20 lg:py-24 px-8"
      style={{ backgroundColor: 'rgba(80, 149, 203, 0.4)' }}
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Quote Icon */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/zitatBlau.png"
            alt="Quotation marks"
            width={80}
            height={80}
            className="w-16 lg:w-20 h-auto"
          />
        </div>

        {/* Quote Text */}
        <blockquote
          className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed mb-8"
          style={{
            color: 'var(--color-dark-blue)',
            maxWidth: '900px',
            margin: '0 auto 2rem'
          }}
        >
          &ldquo;[English Testimonial Quote - Text to follow]&rdquo;
        </blockquote>

        {/* Author Information */}
        <cite
          className="text-base lg:text-lg font-normal not-italic mb-10 block"
          style={{ color: 'var(--color-dark-blue)', opacity: 0.8 }}
        >
          [Author Name, Title, Company - Text to follow]
        </cite>

        {/* Profile Image Placeholder */}
        <div className="flex justify-center mt-10">
          <div
            className="rounded-full bg-gray-200"
            style={{
              width: '150px',
              height: '150px'
            }}
            aria-label="Profile image placeholder"
          />
        </div>

      </div>
    </section>
  );
}
