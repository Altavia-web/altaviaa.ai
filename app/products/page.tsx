import React from 'react';
import Footer from '@/components/Footer';
import ProductsHero from '@/components/sections/products/products-hero';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import ProductsTeaser from '@/components/sections/products/products-teaser';

export default function Products() {
  return (
    <div className="min-h-screen">
      <ProductsHero />

      {/* Slider Section with Heading */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-dark-blue)' }}>
            Wir liefern Lösungen, mit denen Sie die höchsten Gipfel von NetSuite erreichen
          </h2>
          <ProductSlider />
        </div>
      </section>

      <ProductsTeaser />
      <Footer />
    </div>
  );
}
