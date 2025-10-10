import React from 'react';
import Footer from '@/components/Footer';
import PeakShipHeroEN from '@/components/sections/peak-ship/peak-ship-hero-en';
import PeakShipHeroContentEN from '@/components/sections/peakship/PeakShipHeroContentEN';
import PeakShipChallengesEN from '@/components/sections/peakship/PeakShipChallengesEN';
import PeakShipSolutionsEN from '@/components/sections/peakship/PeakShipSolutionsEN';
import PeakShipTeaserEN from '@/components/sections/peakship/PeakShipTeaserEN';
import PeakShipComparisonEN from '@/components/sections/peakship/PeakShipComparisonEN';
import PeakShipGrowthEN from '@/components/sections/peakship/PeakShipGrowthEN';
import ProductSliderEN from '@/components/ProductSlider/ProductSliderEN';

export default function PeakShipPageEN() {
  return (
    <div className="min-h-screen">
      <PeakShipHeroEN />
      <PeakShipHeroContentEN />
      <PeakShipChallengesEN />
      <PeakShipSolutionsEN />
      <PeakShipTeaserEN />
      <PeakShipComparisonEN />
      <PeakShipGrowthEN />
      <ProductSliderEN currentProductSlug="peak-ship" />
      <Footer />
    </div>
  );
}
