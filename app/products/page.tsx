import React from 'react';
import Footer from '@/components/Footer';
import ProductsHero from '@/components/sections/products/products-hero';
import ProductSlider from '@/components/ProductSlider/ProductSlider';

export default function Products() {
  return (
    <div className="min-h-screen">
      <ProductsHero />
      <ProductSlider />
      <Footer />
    </div>
  );
}
