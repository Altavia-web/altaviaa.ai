import React from 'react';
import Footer from '@/components/Footer';
import LocalizationAustriaHero from '@/components/sections/localization-austria/localization-austria-hero';
import LocalizationAustriaHeroContent from '@/components/sections/localization-austria/LocalizationAustriaHeroContent';
import LocalizationAustriaChallenges from '@/components/sections/localization-austria/LocalizationAustriaChallenges';
import LocalizationAustriaSolutions from '@/components/sections/localization-austria/LocalizationAustriaSolutions';
import LocalizationTeaser from '@/components/sections/localization/LocalizationTeaser';
import LocalizationAustriaComparison from '@/components/sections/localization-austria/LocalizationAustriaComparison';
import LocalizationAustriaGrowth from '@/components/sections/localization-austria/LocalizationAustriaGrowth';
import ProductSlider from '@/components/ProductSlider/ProductSlider';

export default function LocalizationAustria() {
  return (
    <div className="min-h-screen">
      <LocalizationAustriaHero />
      <LocalizationAustriaHeroContent />
      <LocalizationAustriaChallenges />
      <LocalizationAustriaSolutions />
      <LocalizationTeaser />
      <LocalizationAustriaComparison />
      <LocalizationAustriaGrowth />
      <ProductSlider currentProductSlug="lokalisierung-oesterreich" />
      <Footer />
    </div>
  );
}
