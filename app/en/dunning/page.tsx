import React from 'react';
import Footer from '@/components/Footer';
import DunningHeroEN from '@/components/sections/dunning/dunning-hero-en';
import DunningHeroContentEN from '@/components/sections/dunning/DunningHeroEN';
import DunningChallengesEN from '@/components/sections/dunning/DunningChallengesEN';
import DunningSolutionsEN from '@/components/sections/dunning/DunningSolutionsEN';
import DunningTeaserEN from '@/components/sections/dunning/DunningTeaserEN';
import DunningTestimonialEN from '@/components/sections/dunning/DunningTestimonialEN';
import DunningComparisonEN from '@/components/sections/dunning/DunningComparisonEN';
import DunningGrowthEN from '@/components/sections/dunning/DunningGrowthEN';

export default function DunningPageEN() {
  return (
    <div className="min-h-screen">
      <DunningHeroEN />
      <DunningHeroContentEN />
      <DunningChallengesEN />
      <DunningSolutionsEN />
      <DunningTeaserEN />
      <DunningTestimonialEN />
      <DunningComparisonEN />
      <DunningGrowthEN />
      <Footer />
    </div>
  );
}
