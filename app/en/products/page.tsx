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

export default function ProductsPageEN() {
  return (
    <div className="min-h-screen">
      <ProductsHeroEN />
      <ProductSliderEN />
      <ProductsTeaser />
      <ProductsTestimonial />
      <Footer />
    </div>
  );
}
