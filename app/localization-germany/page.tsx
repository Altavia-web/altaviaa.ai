import React from 'react';
import Footer from '@/components/Footer';
import LocalizationGermanyHero from '@/components/sections/localization-germany/localization-germany-hero';
import LocalizationHero from '@/components/sections/localization/LocalizationHero';
import LocalizationChallenges from '@/components/sections/localization/LocalizationChallenges';
import LocalizationSolutions from '@/components/sections/localization/LocalizationSolutions';
import LocalizationTeaser from '@/components/sections/localization/LocalizationTeaser';
import LocalizationTestimonial from '@/components/sections/localization/LocalizationTestimonial';
import LocalizationComparison from '@/components/sections/localization/LocalizationComparison';
import ProductsWeitereLosungen from '@/components/sections/products/products-weitere-loesungen';

export default function LocalizationGermany() {
  return (
    <div className="min-h-screen">
      <LocalizationGermanyHero />
      <LocalizationHero />
      <LocalizationChallenges />
      <LocalizationSolutions />
      <LocalizationTeaser />
      <LocalizationTestimonial />
      <LocalizationComparison />
      <ProductsWeitereLosungen />
      <Footer />
    </div>
  );
}
