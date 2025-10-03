import React from 'react';
import Footer from '@/components/Footer';
import LocalizationGermanyHero from '@/components/sections/localization-germany/localization-germany-hero';
import LocalizationHero from '@/components/sections/localization/LocalizationHero';

export default function LocalizationGermany() {
  return (
    <div className="min-h-screen">
      <LocalizationGermanyHero />
      <LocalizationHero />
      <Footer />
    </div>
  );
}
