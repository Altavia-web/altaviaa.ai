import React from 'react';
import Footer from '@/components/Footer';
import ProductsHero from '@/components/sections/products/products-hero';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import ProductsTeaser from '@/components/sections/products/products-teaser';
import ProductsTestimonial from '@/components/sections/products/products-testimonial';

export default function Produktuebersicht() {
  return (
    <div className="min-h-screen">
      <ProductsHero />
      <ProductSlider />
      <ProductsTeaser />
      <ProductsTestimonial />
      <Footer />
    </div>
  );
}
