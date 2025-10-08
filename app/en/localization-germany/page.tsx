import React from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import LocalizationGermanyHeroEN from '@/components/sections/localization-germany/localization-germany-hero-en';
import LocalizationHeroEN from '@/components/sections/localization/LocalizationHeroEN';
import LocalizationChallengesEN from '@/components/sections/localization/LocalizationChallengesEN';
import LocalizationSolutionsEN from '@/components/sections/localization/LocalizationSolutionsEN';
import LocalizationTeaserEN from '@/components/sections/localization/LocalizationTeaserEN';
import LocalizationTestimonialEN from '@/components/sections/localization/LocalizationTestimonialEN';
import LocalizationComparisonEN from '@/components/sections/localization/LocalizationComparisonEN';

export const metadata: Metadata = {
  title: 'Localization Germany - Alta Via Applications',
  description: 'NetSuite optimized for the German market with GoBD and HGB compliance',
};

export default function LocalizationGermanyPageEN() {
  return (
    <div className="min-h-screen">
      <LocalizationGermanyHeroEN />
      <LocalizationHeroEN />
      <LocalizationChallengesEN />
      <LocalizationSolutionsEN />
      <LocalizationTeaserEN />
      <LocalizationTestimonialEN />
      <LocalizationComparisonEN />
      <Footer />
    </div>
  );
}
