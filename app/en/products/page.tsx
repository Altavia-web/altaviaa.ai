import React from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ProductsHeroEN from '@/components/sections/products/products-hero-en';
import ProductSliderEN from '@/components/ProductSlider/ProductSliderEN';
import ProductsTeaser from '@/components/sections/products/products-teaser';
import ProductsTestimonial from '@/components/sections/products/products-testimonial';

export const metadata: Metadata = {
  title: 'Products - Alta Via Applications',
  description: 'Discover our NetSuite extensions for the German market',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ProductsPageEN() {
  return (
    <div className="min-h-screen">
      <ProductsHeroEN />

      {/* Slider Section with Heading */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8" style={{ color: 'var(--color-dark-blue)' }}>
            We Deliver Solutions for You to Reach NetSuite&apos;s Highest Peaks
          </h2>
          <p className="text-lg lg:text-xl text-center mb-12" style={{ color: 'var(--color-dark-blue)' }}>
            Discover our applications and make your NetSuite system fit for the DACH market:
          </p>
          <ProductSliderEN />
        </div>
      </section>

      <ProductsTeaser />
      <ProductsTestimonial />
      <Footer />
    </div>
  );
}
