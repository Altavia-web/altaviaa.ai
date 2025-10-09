import React from 'react';
import Footer from '@/components/Footer';
import PeakShipHero from '@/components/sections/peak-ship/peak-ship-hero';
import PeakShipHeroContent from '@/components/sections/peakship/PeakShipHeroContent';
import PeakShipChallenges from '@/components/sections/peakship/PeakShipChallenges';
import PeakShipSolutions from '@/components/sections/peakship/PeakShipSolutions';
import PeakShipTeaser from '@/components/sections/peakship/PeakShipTeaser';
import PeakShipComparison from '@/components/sections/peakship/PeakShipComparison';
import PeakShipGrowth from '@/components/sections/peakship/PeakShipGrowth';
import ProductSlider from '@/components/ProductSlider/ProductSlider';

export default function PeakShip() {
  return (
    <div className="min-h-screen">
      <PeakShipHero />
      <PeakShipHeroContent />
      <PeakShipChallenges />
      <PeakShipSolutions />
      <PeakShipTeaser />
      <PeakShipComparison />
      <PeakShipGrowth />
      <ProductSlider currentProductSlug="peak-ship" />
      <Footer />
    </div>
  );
}
