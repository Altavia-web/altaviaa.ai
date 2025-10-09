import React from 'react';
import Footer from '@/components/Footer';
import LocalizationGermanyHero from '@/components/sections/localization-germany/localization-germany-hero';
import LocalizationHero from '@/components/sections/localization/LocalizationHero';
import LocalizationChallenges from '@/components/sections/localization/LocalizationChallenges';
import LocalizationSolutions from '@/components/sections/localization/LocalizationSolutions';
import LocalizationTeaser from '@/components/sections/localization/LocalizationTeaser';
import LocalizationTestimonial from '@/components/sections/localization/LocalizationTestimonial';
import LocalizationComparison from '@/components/sections/localization/LocalizationComparison';
import ProductSlider from '@/components/ProductSlider/ProductSlider';

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
      <ProductSlider currentProductSlug="localization-germany" />
      <Footer />
    </div>
  );
}
