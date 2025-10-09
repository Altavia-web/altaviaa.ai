import React from 'react';
import Footer from '@/components/Footer';
import LocalizationAustriaHeroEN from '@/components/sections/localization-austria/localization-austria-hero-en';
import LocalizationAustriaHeroContentEN from '@/components/sections/localization-austria/LocalizationAustriaHeroContentEN';
import LocalizationAustriaChallengesEN from '@/components/sections/localization-austria/LocalizationAustriaChallengesEN';
import LocalizationAustriaSolutionsEN from '@/components/sections/localization-austria/LocalizationAustriaSolutionsEN';
import LocalizationTeaser from '@/components/sections/localization/LocalizationTeaser';
import LocalizationAustriaTestimonialEN from '@/components/sections/localization-austria/LocalizationAustriaTestimonialEN';
import LocalizationAustriaComparisonEN from '@/components/sections/localization-austria/LocalizationAustriaComparisonEN';
import LocalizationAustriaGrowthEN from '@/components/sections/localization-austria/LocalizationAustriaGrowthEN';

export default function AustrianLocalization() {
  return (
    <div className="min-h-screen">
      <LocalizationAustriaHeroEN />
      <LocalizationAustriaHeroContentEN />
      <LocalizationAustriaChallengesEN />
      <LocalizationAustriaSolutionsEN />
      <LocalizationTeaser />
      <LocalizationAustriaTestimonialEN />
      <LocalizationAustriaComparisonEN />
      <LocalizationAustriaGrowthEN />
      <Footer />
    </div>
  );
}
